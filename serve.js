// Minimal static server for local preview + the thumbnail editor: node serve.js  ->  http://localhost:4173
// Bound to 127.0.0.1 only (see listen() below): the /api/* write routes let editor.html
// save src/media.json and src/works.json to disk, so this must never be reachable from
// anywhere but this machine. It is dev-only tooling — the live site is the static output
// baked by update.ps1 and never talks to this server.
const http = require("http");
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");

const root = __dirname;
const port = process.env.PORT || 4173;
const types = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".gif": "image/gif", ".mp4": "video/mp4", ".mov": "video/quicktime",
  ".md": "text/markdown", ".svg": "image/svg+xml", ".ico": "image/x-icon",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".json": "application/json"
};
const categories = ["portfolio", "animations", "vfx", "ui"];
const extensions = /\.(png|gif|mp4|mov|jpg|jpeg)$/i;

// only these two files can be written by the editor — never an arbitrary path
const writableFiles = {
  media: path.join(root, "src", "media.json"),
  works: path.join(root, "src", "works.json")
};

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(body);
}

function readJsonBody(req, cb) {
  let data = "";
  let tooBig = false;
  req.on("data", chunk => {
    data += chunk;
    if (data.length > 2_000_000) { tooBig = true; req.destroy(); }
  });
  req.on("end", () => {
    if (tooBig) return cb(new Error("payload too large"));
    try { cb(null, JSON.parse(data)); }
    catch (e) { cb(e); }
  });
}

function rebuildManifest(cb) {
  execFile("powershell.exe", [
    "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", path.join(root, "update.ps1")
  ], { cwd: root }, cb);
}

function listMedia() {
  const out = {};
  for (const cat of categories) {
    const dir = path.join(root, "img", cat);
    out[cat] = fs.existsSync(dir)
      ? fs.readdirSync(dir).filter(f => extensions.test(f)).sort()
      : [];
  }
  return out;
}

function handleApi(req, res, pathname) {
  if (pathname === "/api/list" && req.method === "GET") {
    return sendJson(res, 200, listMedia());
  }
  if (pathname === "/api/media" && req.method === "GET") {
    // reconcile against disk first (picks up files added/removed outside
    // the editor) so what's returned always matches img/* right now
    rebuildManifest(() => {
      fs.readFile(writableFiles.media, "utf8", (err, data) => {
        sendJson(res, 200, err ? {} : JSON.parse(data || "{}"));
      });
    });
    return;
  }
  if (pathname === "/api/works" && req.method === "GET") {
    fs.readFile(writableFiles.works, "utf8", (err, data) => {
      sendJson(res, 200, err ? [] : JSON.parse(data || "[]"));
    });
    return;
  }
  const target = pathname === "/api/media" ? "media" : pathname === "/api/works" ? "works" : null;
  if (target && req.method === "POST") {
    readJsonBody(req, (err, body) => {
      if (err) return sendJson(res, 400, { error: "invalid JSON" });
      fs.writeFile(writableFiles[target], JSON.stringify(body, null, 2), "utf8", err => {
        if (err) return sendJson(res, 500, { error: String(err) });
        rebuildManifest(err => {
          if (err) return sendJson(res, 200, { ok: true, baked: false, error: String(err) });
          sendJson(res, 200, { ok: true, baked: true });
        });
      });
    });
    return;
  }
  sendJson(res, 404, { error: "not found" });
}

http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (pathname.startsWith("/api/")) return handleApi(req, res, pathname);
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); return res.end(); }

  let file = path.normalize(path.join(root, pathname));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  fs.stat(file, (err, stat) => {
    if (err) { res.writeHead(404); return res.end(); }
    const contentType = types[path.extname(file).toLowerCase()] || "application/octet-stream";
    const range = req.headers.range;
    /* honor Range requests (needed for video preload="metadata"/seeking to
       only pull a small chunk instead of the whole file, like a real host) */
    if (range) {
      const match = /bytes=(\d*)-(\d*)/.exec(range);
      const start = match[1] ? parseInt(match[1], 10) : 0;
      const end = match[2] ? parseInt(match[2], 10) : stat.size - 1;
      if (isNaN(start) || isNaN(end) || start > end || end >= stat.size) {
        res.writeHead(416, { "Content-Range": `bytes */${stat.size}` });
        return res.end();
      }
      res.writeHead(206, {
        "Content-Type": contentType,
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Content-Length": end - start + 1,
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store"
      });
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stat.size,
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-store"
    });
    fs.createReadStream(file).pipe(res);
  });
}).listen(port, "127.0.0.1", () => console.log(`Serving on http://localhost:${port} (loopback only)`));
