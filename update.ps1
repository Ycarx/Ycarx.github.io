# Rebuilds manifest.js from img/portfolio, img/animations, img/vfx, img/ui and bakes in
# src/aboutme.md, src/works.json and src/media.json so the About, Works and per-thumbnail
# title/description/order all work when index.html is opened directly.
#
# src/media.json holds one ordered array per category — [{file, title, description}, ...] —
# the same shape as works.json's array of links. Array order IS display order, editable by
# drag-and-drop in editor.html for every tab. This script reconciles that array against the
# files actually on disk each time it runs: existing entries keep their order, files removed
# from img/ are dropped, and new files are appended alphabetically at the end — so plain
# "drop a file in img/portfolio and run update.cmd" keeps working with no editor step needed.
#
# Run this after adding, removing or renaming files, or editing aboutme.md / works.json /
# media.json (right-click > Run with PowerShell). editor.html's save button runs this
# automatically via serve.js.

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$categories = "portfolio", "animations", "vfx", "ui"
$extensions = "*.png", "*.gif", "*.mp4", "*.mov", "*.jpg", "*.jpeg"

function JsonStr($s) { (($s + "") | ConvertTo-Json -Compress) }

# Set-Content -Encoding utf8 writes a BOM, which JS tolerates as leading
# whitespace but Node's/browsers' JSON.parse does not — media.json is read
# with JSON.parse by serve.js, so it must come out BOM-less.
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
function Write-Utf8NoBom($path, $content) {
    [System.IO.File]::WriteAllText($path, $content, $utf8NoBom)
}

# ---- reconcile media.json (ordered per category) against disk ----
$mediaMetaPath = Join-Path $root "src\media.json"
$existingMeta = $null
if (Test-Path $mediaMetaPath) {
    $raw = Get-Content $mediaMetaPath -Raw -Encoding utf8
    if (-not [string]::IsNullOrWhiteSpace($raw)) {
        try { $existingMeta = $raw | ConvertFrom-Json } catch { $existingMeta = $null }
    }
}

$mediaCatBlocks = foreach ($cat in $categories) {
    $dir = Join-Path $root "img\$cat"
    $diskFiles = @()
    if (Test-Path $dir) {
        $diskFiles = (Get-ChildItem (Join-Path $dir "*") -File -Include $extensions | Sort-Object Name).Name
    }

    $existingList = @()
    if ($existingMeta -and ($existingMeta.PSObject.Properties.Name -contains $cat)) {
        $raw = $existingMeta.$cat
        # migrate the old {filename: {title, description}} shape into the new ordered array
        if ($raw -is [System.Management.Automation.PSCustomObject]) {
            $existingList = foreach ($name in ($raw.PSObject.Properties.Name | Sort-Object)) {
                [pscustomobject]@{ file = $name; title = $raw.$name.title; description = $raw.$name.description }
            }
        } else {
            $existingList = @($raw)
        }
    }

    $kept = @{}
    $itemLines = New-Object System.Collections.Generic.List[string]
    foreach ($entry in $existingList) {
        if ($entry.file -and ($diskFiles -contains $entry.file) -and -not $kept.ContainsKey($entry.file)) {
            $itemLines.Add(('    {{ "file": {0}, "title": {1}, "description": {2} }}' -f `
                (JsonStr $entry.file), (JsonStr $entry.title), (JsonStr $entry.description)))
            $kept[$entry.file] = $true
        }
    }
    foreach ($f in $diskFiles) {
        if (-not $kept.ContainsKey($f)) {
            $itemLines.Add(('    {{ "file": {0}, "title": "", "description": "" }}' -f (JsonStr $f)))
        }
    }
    '  "{0}": [{1}{2}{1}  ]' -f $cat, "`n", ($itemLines -join ",`n")
}
$mediaMetaJs = "{`n" + ($mediaCatBlocks -join ",`n") + "`n}`n"
Write-Utf8NoBom $mediaMetaPath $mediaMetaJs

$aboutPath = Join-Path $root "src\aboutme.md"
$about = if (Test-Path $aboutPath) { Get-Content $aboutPath -Raw -Encoding utf8 } else { "" }
if ($null -eq $about) { $about = "" }
# ($about + "") strips the ETS metadata Get-Content attaches, so this serializes as a plain string
$aboutJs = ConvertTo-Json -InputObject ($about + "") -Compress

$worksPath = Join-Path $root "src\works.json"
$worksJs = if (Test-Path $worksPath) { (Get-Content $worksPath -Raw -Encoding utf8) + "" } else { "[]" }
if ([string]::IsNullOrWhiteSpace($worksJs)) { $worksJs = "[]" }

$js = "window.ABOUT = $aboutJs;`n" +
      "window.WORKS = $worksJs;`n" +
      "window.MEDIA_META = $mediaMetaJs;`n"

# write to a temp file then rename into place: the rename is atomic, so a
# concurrent run (e.g. two editor.html saves in a row) can never leave
# manifest.js with interleaved/partial content from both writers
$manifestPath = Join-Path $root "manifest.js"
$tempPath = Join-Path $root ("manifest.js.tmp-" + [guid]::NewGuid().ToString("N"))
Write-Utf8NoBom $tempPath $js
try {
    Move-Item -Path $tempPath -Destination $manifestPath -Force
} catch {
    # e.g. destination locked by a running server process — clean up the
    # temp file instead of leaving it behind, then surface the real error
    Remove-Item -Path $tempPath -ErrorAction SilentlyContinue
    throw
}
Write-Host "manifest.js updated:"
foreach ($cat in $categories) {
    $dir = Join-Path $root "img\$cat"
    $count = if (Test-Path $dir) { (Get-ChildItem (Join-Path $dir "*") -File -Include $extensions).Count } else { 0 }
    Write-Host ("  {0}: {1} file(s)" -f $cat, $count)
}
