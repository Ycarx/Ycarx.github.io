(function(storyContent) {

    // Créer l'histoire Ink à partir du contenu en utilisant inkjs
    var story = new inkjs.Story(storyContent);

    var savePoint = "";
    var choiceHistory = []; // Variable pour stocker l'historique des choix

    let savedTheme;
    let globalTagTheme;

    // Tags globaux - ceux en haut du fichier Ink
    var globalTags = story.globalTags;
    if( globalTags ) {
        for(var i=0; i<story.globalTags.length; i++) {
            var globalTag = globalTags[i];
            var splitTag = splitPropertyTag(globalTag);

            // THEME: dark
            if( splitTag && splitTag.property == "theme" ) {
                globalTagTheme = splitTag.val;
            }

            // author: Votre Nom
            else if( splitTag && splitTag.property == "author" ) {
                var byline = document.querySelector('.byline');
                byline.innerHTML = "par "+splitTag.val;
            }
        }
    }

    var storyContainer = document.querySelector('#story');
    var outerScrollContainer = document.querySelector('.outerContainer');

    // Configuration des fonctionnalités de la page
    setupTheme(globalTagTheme);

    // Charger le point de sauvegarde s'il existe
    var hasSave = loadSavePoint();
    setupButtons(hasSave);

    // Définir le point de sauvegarde initial
    savePoint = story.state.toJson();

    // Démarrer l'histoire !
    continueStory(true);

    // Fonction principale de traitement de l'histoire
    function continueStory(firstTime, suppressOutput, suppressChoices) {
        suppressOutput = suppressOutput || false;
        suppressChoices = suppressChoices || false;

        var paragraphIndex = 0;
        var delay = 0.0;

        // Ajouter un séparateur lorsque l'histoire continue (pas la première fois)
        if (!firstTime && !suppressOutput) {

            // Supprimer l'ancien séparateur
            var existingSeparator = document.querySelector('.story-separator');
            if (existingSeparator) {
                existingSeparator.remove();
            }
            var separatorElement = document.createElement('hr'); // Créer une ligne horizontale
            separatorElement.classList.add("story-separator"); // Optionnel : ajouter une classe pour le style personnalisé
            storyContainer.appendChild(separatorElement);
        }

        // Ne pas défiler au-delà du nouveau contenu
        var previousBottomEdge = firstTime ? 0 : contentBottomEdgeY();

        // Générer le texte de l'histoire - boucle à travers le contenu disponible
        while (story.canContinue) {

            // Obtenir Ink pour générer le paragraphe suivant
            var paragraphText = story.Continue();
            var tags = story.currentTags;

            // Traiter le contenu uniquement si suppressOutput est faux
            if (!suppressOutput) {
                // Tous les tags spéciaux inclus avec cette ligne
                var customClasses = [];
                for (var i = 0; i < tags.length; i++) {
                    var tag = tags[i];

                    // Détecter les tags de la forme "X: Y"
                    var splitTag = splitPropertyTag(tag);
                    if (splitTag) {
                        splitTag.property = splitTag.property.toUpperCase();

                        // AUDIO: src
                        if (splitTag.property == "AUDIO") {
                            if ('audio' in this) {
                                this.audio.pause();
                                this.audio.removeAttribute('src');
                                this.audio.load();
                            }
                            this.audio = new Audio(splitTag.val);
                            this.audio.play();
                        }

                        // AUDIOLOOP: src
                        else if (splitTag.property == "AUDIOLOOP") {
                            if ('audioLoop' in this) {
                                this.audioLoop.pause();
                                this.audioLoop.removeAttribute('src');
                                this.audioLoop.load();
                            }
                            this.audioLoop = new Audio(splitTag.val);
                            this.audioLoop.play();
                            this.audioLoop.loop = true;
                        }

                        // IMAGE: src
                        else if (splitTag.property == "IMAGE") {
                            var imageElement = document.createElement('img');
                            imageElement.src = splitTag.val;
                            storyContainer.appendChild(imageElement);

                            imageElement.onload = () => {
                                console.log(`scrolling to ${previousBottomEdge}`);
                                scrollDown(previousBottomEdge);
                            }

                            showAfter(delay, imageElement);
                            delay += 200.0;
                        }

                        // LINK: url
                        else if (splitTag.property == "LINK") {
                            window.location.href = splitTag.val;
                        }

                        // LINKOPEN: url
                        else if (splitTag.property == "LINKOPEN") {
                            window.open(splitTag.val);
                        }

                        // BACKGROUND: src
                        else if (splitTag.property == "BACKGROUND") {
                            outerScrollContainer.style.backgroundImage = 'url(' + splitTag.val + ')';
                        }

                        // CLASS: className
                        else if (splitTag.property == "CLASS") {
                            customClasses.push(splitTag.val);
                        }
                    }

                    // Gérer les tags sans propriété
                    else if (tag == "CLEAR" || tag == "RESTART") {
                        removeAll("p");
                        removeAll("img");

                        // Commenter cette ligne si vous voulez laisser l'en-tête visible lors du nettoyage
                        setVisible(".header", false);

                        if (tag == "RESTART") {
                            restart();
                            return;
                        }
                    }
                }

                // Vérifier si paragraphText est vide
                if (paragraphText.trim().length == 0) {
                    continue; // Ignorer les paragraphes vides
                }

                // Créer un élément de paragraphe (initialement masqué)
                var paragraphElement = document.createElement('p');
                paragraphElement.innerHTML = paragraphText;
                storyContainer.appendChild(paragraphElement);

                // Ajouter toutes les classes personnalisées dérivées des tags Ink
                for (var i = 0; i < customClasses.length; i++)
                    paragraphElement.classList.add(customClasses[i]);

                // Faire apparaître le paragraphe après un court délai
                showAfter(delay, paragraphElement);
                delay += 200.0;
            }
        }

        // Créer des choix HTML à partir des choix Ink, uniquement si suppressOutput et suppressChoices sont faux
        if (!suppressOutput && !suppressChoices) {
            story.currentChoices.forEach(function (choice) {

                // Créer un paragraphe avec un élément d'ancre
                var choiceTags = choice.tags;
                var customClasses = [];
                var isClickable = true;
                for (var i = 0; i < choiceTags.length; i++) {
                    var choiceTag = choiceTags[i];
                    var splitTag = splitPropertyTag(choiceTag);
                    if (splitTag) {
                        splitTag.property = splitTag.property.toUpperCase();

                        if (splitTag.property == "CLASS") {
                            customClasses.push(splitTag.val);
                        }
                    }

                    if (choiceTag.toUpperCase() == "UNCLICKABLE") {
                        isClickable = false;
                    }
                }

                var choiceParagraphElement = document.createElement('p');
                choiceParagraphElement.classList.add("choice");

                for (var i = 0; i < customClasses.length; i++)
                    choiceParagraphElement.classList.add(customClasses[i]);

                if (isClickable) {
                    choiceParagraphElement.innerHTML = `<a href='#'>${choice.text}</a>`;
                } else {
                    choiceParagraphElement.innerHTML = `<span class='unclickable'>${choice.text}</span>`;
                }
                storyContainer.appendChild(choiceParagraphElement);
                // Mettre à jour le style des choix
                updateChoiceStyles();
                // Faire apparaître le choix après un court délai
                showAfter(delay, choiceParagraphElement);
                delay += 200.0;

                // Clic sur le choix
                if (isClickable) {
                    var choiceAnchorEl = choiceParagraphElement.querySelectorAll("a")[0];
                    choiceAnchorEl.addEventListener("click", function (event) {

                        // Ne pas suivre le lien <a>
                        event.preventDefault();

                        // Étendre la hauteur pour s'adapter
                        storyContainer.style.height = contentBottomEdgeY() + "px";

                        // Supprimer tous les choix existants
                        removeAll(".choice");

                        // Enregistrer l'index du choix
                        console.log("Choix : " + choice.index);
                        choiceHistory.push(choice.index);

                        // Indiquer à l'histoire où aller ensuite
                        story.ChooseChoiceIndex(choice.index);

                        // Mettre à jour le point de sauvegarde
                        savePoint = story.state.toJson();

                        // Continuer l'histoire
                        continueStory();

                    });
                }
            });
        }

        // Mettre à jour d'autres éléments comme le fond et la fiche de personnage
        if (!suppressOutput && !suppressChoices) {
            const currentBackground = story.variablesState["background"];
            updateBackground(currentBackground);
            updateCharacterSheet();
        }

        // Réinitialiser la hauteur de storyContainer pour lui permettre de se redimensionner
        storyContainer.style.height = "";
        if (!firstTime && !suppressOutput)
            scrollDown(previousBottomEdge);
    }

    // Fonction pour redémarrer l'histoire
    function restart() {
        story.ResetState();
        choiceHistory = []; // Réinitialiser l'historique des choix

        setVisible(".header", true);

        // Définir le point de sauvegarde ici
        savePoint = story.state.toJson();

        continueStory(true);

        outerScrollContainer.scrollTo(0, 0);
    }

    // Fonction pour charger le point de sauvegarde
    function loadSavePoint() {
        try {
            let savedState = window.localStorage.getItem('save-state');
            let savedChoiceHistory = JSON.parse(window.localStorage.getItem('choice-history'));
            if (savedState && savedChoiceHistory) {
                // Ne pas charger l'état maintenant, nous allons rejouer les choix
                // Au lieu de cela, définir hasSave à true
                return true;
            }
        } catch (e) {
            console.debug("Impossible de charger l'état sauvegardé");
        }
        return false;
    }

    // Fonction pour configurer les boutons
    function setupButtons(hasSave) {

        // Bouton pour cacher/afficher l'histoire
        let toggleStoryEl = document.getElementById("toggle-story");
        if (toggleStoryEl) {
            toggleStoryEl.addEventListener("click", function(event) {
                document.body.classList.toggle("hide-story");
                // Mettre à jour le texte du bouton
                if (document.body.classList.contains('hide-story')) {
                    toggleStoryEl.textContent = 'afficher l\'histoire';
                } else {
                    toggleStoryEl.textContent = 'cacher l\'histoire';
                }

                // Sauvegarder l'état de l'affichage de l'histoire
                try {
                    window.localStorage.setItem('hide-story', document.body.classList.contains('hide-story') ? 'true' : 'false');
                } catch (e) {
                    console.warn("Impossible de sauvegarder l'état hide-story");
                }
            });

            // Charger l'état initial
            setupStoryVisibility();

            // Initialiser le texte du bouton en fonction de l'état initial
            if (document.body.classList.contains('hide-story')) {
                toggleStoryEl.textContent = 'afficher l\'histoire';
            } else {
                toggleStoryEl.textContent = 'cacher l\'histoire';
            }
        }

        let rewindEl = document.getElementById("rewind");
        if (rewindEl) rewindEl.addEventListener("click", function(event) {
            removeAll("p");
            removeAll("img");
            setVisible(".header", false);
            restart();
        });

        let saveEl = document.getElementById("save");
        if (saveEl) saveEl.addEventListener("click", function(event) {
            try {
                window.localStorage.setItem('save-state', savePoint);
                window.localStorage.setItem('choice-history', JSON.stringify(choiceHistory));
                console.log("history: [", choiceHistory + "]");    
                document.getElementById("reload").removeAttribute("disabled");
                window.localStorage.setItem('theme', document.body.classList.contains("dark") ? "dark" : "");
            } catch (e) {
                console.warn("Impossible de sauvegarder l'état");
            }

        });

        let reloadEl = document.getElementById("reload");
        if (!hasSave) {
            reloadEl.setAttribute("disabled", "disabled");
        }
        reloadEl.addEventListener("click", function(event) {
            if (reloadEl.getAttribute("disabled"))
                return;

            removeAll("p");
            removeAll("img");

            try {
                // Réinitialiser l'histoire
                story.ResetState();
                console.log("clearing history");
                choiceHistory = [];

                // Charger l'historique des choix sauvegardé
                let savedChoiceHistory = JSON.parse(window.localStorage.getItem('choice-history'));
                console.log("savedChoiceHistory", savedChoiceHistory);
                if (savedChoiceHistory) {
                    // Rejouer les choix pour régénérer le contenu
                    replayChoices(savedChoiceHistory);
                }

            } catch (e) {
                console.debug("Impossible de charger l'état sauvegardé");
            }

            // Mettre à jour le point de sauvegarde
            savePoint = story.state.toJson();

            // Défilement vers le haut
            outerScrollContainer.scrollTo(0, 0);
        });

        let themeSwitchEl = document.getElementById("theme-switch");
        if (themeSwitchEl) themeSwitchEl.addEventListener("click", function(event) {
            document.body.classList.add("switched");
            document.body.classList.toggle("dark");
        });
    }

    // Fonction pour rejouer les choix
    function replayChoices(savedChoiceHistory) {
        // Parcourir les choix sauvegardés
        for (let i = 0; i < savedChoiceHistory.length; i++) {
            let choiceIndex = savedChoiceHistory[i];

            // Traiter et afficher le contenu jusqu'au prochain choix, sans afficher les choix
            while (story.canContinue) {
                continueStory(false, false, true); // suppressChoices = true
            }

            // Obtenir les choix disponibles (ils ne seront pas affichés)
            let currentChoices = story.currentChoices;

            // Trouver le choix avec l'index sauvegardé
            let choice = currentChoices.find(c => c.index === choiceIndex);

            if (choice) {
                // Enregistrer l'index du choix
                choiceHistory.push(choice.index);

                // Choisir le choix
                console.log("Rejouer le choix : " + choice.index);
                story.ChooseChoiceIndex(choice.index);

            } else {
                console.warn("Impossible de trouver le choix correspondant lors de la relecture pour l'index : " + choiceIndex);
                break;
            }
        }

        // Après avoir rejoué tous les choix, traiter et afficher le contenu restant, cette fois en affichant les choix
        continueStory(false);

        // Mettre à jour le point de sauvegarde
        savePoint = story.state.toJson();
    }

    // Fonction pour détecter si l'utilisateur accepte les animations
    function isAnimationEnabled() {
        return window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    }

    // Fonction pour faire apparaître un élément après un délai spécifié
    function showAfter(delay, el) {
        if( isAnimationEnabled() ) {
            el.classList.add("hide");
            setTimeout(function() { el.classList.remove("hide") }, delay);
        } else {
            // Si l'utilisateur ne veut pas d'animations, afficher immédiatement
            el.classList.remove("hide");
        }
    }

    // Fonction pour faire défiler la page vers le bas
    function scrollDown(previousBottomEdge) {
        // Si l'utilisateur ne veut pas d'animations, le laisser défiler manuellement
        if ( !isAnimationEnabled() ) {
            return;
        }

        // Aligner le haut de l'écran avec le bas de l'endroit où le contenu précédent s'est terminé
        var target = previousBottomEdge;

        // Ne peut pas aller plus loin que le bas de la page
        var limit = outerScrollContainer.scrollHeight - outerScrollContainer.clientHeight;
        if( target > limit ) target = limit;

        var start = outerScrollContainer.scrollTop;

        var dist = target - start;
        var duration = 300 + 300*dist/100;
        var startTime = null;
        function step(time) {
            if( startTime == null ) startTime = time;
            var t = (time-startTime) / duration;
            var lerp = 3*t*t - 2*t*t*t; // ease in/out
            outerScrollContainer.scrollTo(0, (1.0-lerp)*start + lerp*target);
            if( t < 1 ) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    // Fonction pour obtenir le bord inférieur du contenu
    function contentBottomEdgeY() {
        var bottomElement = storyContainer.lastElementChild;
        return bottomElement ? bottomElement.offsetTop + bottomElement.offsetHeight : 0;
    }

    // Fonction pour supprimer tous les éléments correspondant à un sélecteur
    function removeAll(selector)
    {
        var allElements = storyContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            el.parentNode.removeChild(el);
        }
    }

    // Fonction pour définir la visibilité des éléments correspondant à un sélecteur
    function setVisible(selector, visible)
    {
        var allElements = storyContainer.querySelectorAll(selector);
        for(var i=0; i<allElements.length; i++) {
            var el = allElements[i];
            if( !visible )
                el.classList.add("invisible");
            else
                el.classList.remove("invisible");
        }
    }

    // Helper pour analyser les tags de la forme "PROPERTY: value"
    function splitPropertyTag(tag) {
        var propertySplitIdx = tag.indexOf(":");
        if( propertySplitIdx != -1 ) {
            var property = tag.substr(0, propertySplitIdx).trim();
            var val = tag.substr(propertySplitIdx + 1).trim();
            return {
                property: property,
                val: val
            };
        }

        return null;
    }

    // Fonction pour détecter et configurer le thème
    function setupTheme(globalTagTheme) {

        // Charger le thème depuis la mémoire du navigateur
        var savedTheme;
        try {
            savedTheme = window.localStorage.getItem('theme');
        } catch (e) {
            console.debug("Impossible de charger le thème sauvegardé");
        }

        // Vérifier si le système d'exploitation/le navigateur est configuré pour le mode sombre
        var browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme === "dark"
            || (savedTheme == undefined && globalTagTheme === "dark")
            || (savedTheme == undefined && globalTagTheme == undefined && browserDark))
            document.body.classList.add("dark");
    }

    // Fonction pour configurer la visibilité de l'histoire
    function setupStoryVisibility() {
        try {
            let hideStory = window.localStorage.getItem('hide-story');
            if (hideStory === 'true') {
                document.body.classList.add('hide-story');
            }
        } catch (e) {
            console.debug("Impossible de charger l'état hide-story");
        }
    }

    // Fonction pour mettre à jour les styles des choix
    function updateChoiceStyles() {
        var choiceElements = document.querySelectorAll('.choice a, .choice span');

        choiceElements.forEach(function(choice) {
            var textContent = choice.textContent.trim();

            // Vérifier si le texte commence et se termine par des guillemets
            if (textContent.startsWith('"') && textContent.endsWith('"')) {
                choice.classList.add('no-italic'); // Ajouter une classe pour enlever l'italique
            }
        });
    }

    // Fonction pour mettre à jour le fond
    function updateBackground(backgroundImage) {
        if (backgroundImage) {
            outerScrollContainer.style.backgroundImage = `url('${backgroundImage}')`;
        }
    }

    // Fonction pour mettre à jour la fiche de personnage
    function updateCharacterSheet() {
        // Récupérer les variables Ink
        var characterName = story.variablesState["character_name"];
        var characterClass = story.variablesState["character_class"];
        var characterLevel = story.variablesState["character_level"];
        var strength = story.variablesState["strength"];
        var dexterity = story.variablesState["dexterity"];
        var constitution = story.variablesState["constitution"];
        var intelligence = story.variablesState["intelligence"];
        var charisma = story.variablesState["charisma"];

        // Mettre à jour les éléments HTML
        document.getElementById("char-name").textContent = characterName || "";
        document.getElementById("char-class").textContent = characterClass || "";
        document.getElementById("char-level").textContent = characterLevel || "";
        document.getElementById("char-strength").textContent = strength || "";
        document.getElementById("char-dexterity").textContent = dexterity || "";
        document.getElementById("char-constitution").textContent = constitution || "";
        document.getElementById("char-intelligence").textContent = intelligence || "";
        document.getElementById("char-charisma").textContent = charisma || "";

        var playerInventoryList = document.getElementById("inventory-list");

        if (playerInventoryList) {
            playerInventoryList.innerHTML = "";

            var playerInventory = story.variablesState["playerInventory"];

            if (playerInventory && playerInventory.entries) {
                for (var [key, value] of playerInventory.entries()) {
                    var li = document.createElement("li");

                    // Utiliser les objets définis dans objets.js
                    var objectKey = JSON.parse(key).itemName;
                    if (objetsDetails[objectKey]) {
                        // Créer un conteneur pour le tooltip
                        var tooltipContainer = document.createElement("div");
                        tooltipContainer.classList.add("tooltip-container");

                        // Nom de l'objet
                        tooltipContainer.textContent = objetsDetails[objectKey].name;

                        // Ajouter le texte du tooltip
                        var tooltipText = document.createElement("span");
                        tooltipText.classList.add("tooltip-text");
                        tooltipText.textContent = objetsDetails[objectKey].description;

                        // Ajouter le tooltip au conteneur
                        tooltipContainer.appendChild(tooltipText);
                        li.appendChild(tooltipContainer);
                    } else {
                        li.textContent = objectKey; // Si l'objet n'est pas défini, afficher son nom brut
                    }

                    playerInventoryList.appendChild(li);
                }
            }
        }
    }

})(storyContent);
