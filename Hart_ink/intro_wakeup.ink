// L'histoire commence
=== intro_wakeup ===
Vous ouvrez les yeux avec difficulté et sentez le goût de la poussière envahir votre bouche. Vous êtes épuisé, mais ne vous souvenez pas de ce qui vous est arrivé. Vos mains sont liées par de lourds bracelets de fer. Votre corps est endolori. Le son du métal frappé vous étourdit à peine éveillé. L'odeur de la sueur et de la crasse envahit votre nez. Que faites vous ici ?
//DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- 
//DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- 
    * [DEBUG] ->debug
//DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- 
//DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- DEBUG --- REMOVE --- 
    * [Regarder autour de vous] <>
    * [Crier à l'aide] Vous êtes pris d'une toux qui vous musèle, et vous fait cracher une gerbe de terre.
    - Vous frottez vos yeux péniblement pour chasser le sable de vos paupières et découvrez que vous êtes dans une prison. Peut-être davantage un cachot. 
    Les sons métalliques s'affinent. Quelqu'un semble taper sur une enclume dans une pièce adjacente. Les murs qui vous entourent sont faits d'une pierre blanche et poreuse qui pourrait avoir commencé à s'effriter il y a des siècles de cela. La chaleur vous semble insupportable. Le brasier qui crépite près de votre cellule vous étouffe.
    Vous vous sentez à des année-lumières de votre chez-vous.
    ->intro_wakeup.abalon
    = abalon
    * ["Mon chez-moi ?"] -> intro_wakeup.abalon_info
    * {abalon_info} [Essayer de vous souvenir d'où vous venez] -> intro_wakeup.abalon_info_remember
    * [Vous inspecter] -> intro_wakeup.s_inspecter
    * {wakeup_note_fail and not abalon_info_remember}Kant ? -> intro_wakeup.name_is_kant
    * {wakeup_note_fail and abalon_info_remember}[Vous repencher sur le papier] Kant...->intro_wakeup.name_is_kant
    * {wakeup_note_success} Magellus Kant... -> intro_wakeup.name_is_kant
    * ->
    -> cachot_out
    = abalon_info
    Votre chez-vous ? Cette pensée vous a pris de court. À vrai dire, vous n'avez plus qu'une vague idée de ce que c'était.   -> intro_wakeup.abalon
    = abalon_info_remember
    Vous tentez de creuser votre mémoire. Quelques bribes vous parviennent...
    * (effort)[Un effort...]
    ~ strength += 1
    Vous vous souvenez de la difficulté que vous éprouviez à vous mouvoir lorsque vous étiez enfant. Avec le temps, et de l'entraînement, cette lourdeur avait fini par disparaître. Vous réalisez soudain que vous ne ressentez pas la même chose, ici. Ce souvenir vous rend... plus léger, plus fort. ->abalon
    * (livre)[Un livre...]
    ~ intelligence += 1
    Vous vous souvenez tourner les pages de votre codex étant enfant. Vous aviez appris à détester cet énorme bouquin dans lequel vous notiez l'étendue de ce que vous appreniez. Et pourtant, en le lisant dans votre tête avec une voix d'adulte, vous êtes certain qu'il ne vous a jamais quitté. Ce souvenir vous rend... plus perspicace, plus alerte.->abalon
    * (conversation)[Une conversation...] 
    ~ charisma += 1
    Vous vous souvenez d'une conversation. Les visages sont flous et les voix vagues, mais quelques mots intacts vous parviennent:
    \- "Combien de temps seras-tu parti ?
    \- D'ici jusqu'à la Mer, quatre cycles. Quatre autres le temps de résoudre cette histoire. Quatre pour le retour.
    \- Douze, alors.
    \- Douze.
    \- Tu as intérêt à revenir. Fais attention à toi.
    \- C'est promis."
    Vous êtes pris d'une certaine mélancolie. Vous serrez les dents. Vous voudriez vous rappeler davantage, mais dans votre état actuel, cela est impossible. Ce souvenir vous rend... déterminé, sûr de vous.
    ->abalon
    = s_inspecter
    Vous vous inspectez, et essayez de battre la terre qui recouvre votre tenue. Un uniforme. Vous saisissez le petit morceau de métal gravé qui arbore votre poitrine, et tentez de le lire à l'envers avec maladresse.
    "Ma...Magel... Magellus." chuchotez-vous difficilement. Magellus. À la lecture de votre nom, il vous apparaît tout à coup d'une évidence telle que vous êtes certain de ne pas l'avoir oublié. Votre uniforme est sale, mais d'une souplesse surprenante. Élastique et confortable, le tissu alvéolé d'un bleu marin sombre est parcouru de coutures d'un rouge vif. Sa confection est d'une perfection qui le rend impressionnant malgré la poussière.
    Pataud, vous tentez de fouiller dans vos poches malgré les fers qui vous handicappent. Alors que vous sortez les mains de votre poche gauche, qui semblait d'abord vide, une petite note en papier glisse de vos doigts.
    * [Tenter d'attraper la note avant qu'elle ne touche le sol.]->wakeup_note_success
    * [La regarder tomber au sol]->wakeup_note_fail
    = wakeup_note_success
    ~ playerInventory += pilotNote
    Vous attrapez le morceau de papier habilement et le dépliez pour lire ce qu'il contient. 
    "Magellus Kant. Abalon Armada no.37"
    -> intro_wakeup.abalon
    = wakeup_note_fail
    ~ playerInventory += pilotNote
    La note flotte et tombe dans une flaque d'eau boueuse provenant d'une fuite à votre gauche. Vous le ramassez et tentez de le déplier pour lire ce qu'il contient. Malheureusement, l'eau croupie l'a rendu presque illisible. Cependant, vous pouvez tout de même discerner quelques lettres:
    "...-lus Kant-..."->intro_wakeup.abalon
    = name_is_kant
    ~ character_name="Magellus Kant"
    Vous le reconnaissez immédiatement{intro_wakeup.wakeup_note_fail: malgré l'état du papier}. C'est votre nom. Vous êtes Magellus Kant. Vous savez qui vous êtes... À peu près. -> intro_wakeup.abalon
    
    
    === cachot_out
    Alors que vous croyiez tenir un lambeau de votre passé fermement, vos souvenirs se délitent soudain dans l'air chaud de votre prison et vous reprenez lentement vos esprits. Quelque chose se tient devant vous.
    Vous relevez la tête et faites face à un homme en armure plus grand d'une tête et d'une carrure terriblement imposante. Son visage fermé encadré par son heaume est sévère. Il vous prononce quelques mots avec mépris dans une langue qui vous est totalement étrangère, puis ouvre la porte de votre cellule. Ses mains épaisses sont tout à fait disproportionnées aux barreaux. Vous êtes certain qu'il pourrait les arracher à votre cellule d'un coup sec. Il n'a cependant pas l'air hostile, et fait un pas en arrière comme pour vous inviter à sortir.
    -> intro_cachot_01