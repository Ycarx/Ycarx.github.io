VAR intro_bureau_seen=0
=== intro_bureau ===
{intro_bureau_seen==0: L'architecture onirique se poursuit dans ce qui se trouve être un bureau bâti à même la pierre. Une grande pièce, bien trop grande. La personne qui l'occupe doit forcément être quelqu'un de très important. Le vent à cette hauteur souffle avec force et fait battre les bannières à tête de tigre écaillé contre la roche d'arches qui s'ouvrent sur les entrailles d'une cité resplendissante de couleur pâles.<br>Au milieu de la pièce, un autre homme en armure, mais celle-ci est bien plus cérémoniale. Ce quelqu'un d'important est sans aucun doute juste devant vous. Sans heaume, il vous dévisage avec le même air sec et méprisant des deux autres. Lui semble plus vil. On dirait que lui <i>vous en veut à vous</i>.}
* "Quelqu'un veut bien me dire ce que je fais ici?"[]\
->intro_bureau.langage
* "Qui êtes vous?"[] 
->intro_bureau.langage
* "Où sommes-nous?"[] 
->intro_bureau.langage
* {intro_bureau<2} [Tenter de fuir par la porte d'où vous êtes entré]Vous tentez de vous jeter dehors à la surprise des gardes. ->intro_bureau.fuite
* [Attendre] Vous décidez d'attendre sagement que quelque chose se produise. L'homme vous regarde fixement et vous crache des mots avec un dédain palpable que vous n'arrivez malheureusement pas à comprendre.
~intro_bureau_seen=1
->intro_bureau
= fuite
Tout se passe soudainement très vite. {intro_bureau02:Il|Le plus proche de vous } tente alors de vous attraper par les cheveux pour vous maîtriser.
*[Plonger entre ses jambes]Vous plongez entre les jambes du garde pour échapper à sa prise.
<>{not intro_bureau02: Le deuxième derrière vous assène un grand coup à l'aide du manche d'une hallebarde qui était accrochée au mur. Celui que vous venez d'esquiver vous attrape par le col | Il se retourne alors rapidement pour vous saisir }et vous balance sur le carrelage de mosaïque marbrée de la pièce
->intro_bureau.fuite_echec
*[Repousser son bras]Vous essayez de repousser son bras mais il est trop fort et vous vous retrouvez balayé, et aterrisez sur le carrelage mosaïque de marbre coloré de la pièce.
->intro_bureau.fuite_echec
*[Esquiver en arrière]Vous esquivez habilement la prise de votre adversaire, le contournez habilement et <>
{intro_bureau02:vous jetez au travers de la porte. Vous échappez de justesse à l'homme qui la gardait et courez tout droit, sans savoir quoi faire, ni où aller.->intro_bureau.fuite_suite| faites face au deuxième geôlier. Il vous faut réfléchir vite, l'adversaire que vous venez d'esquiver se retourne.->intro_bureau.fuite_round2}
*[Vous rendre]Vous faites un pas en arrière et levez les bras en signe d'abandon immédiat. Ils ne s'amusent pas de vos efforts à rendre les choses plus compliquées qu'elles ne le sont. Le garde en face de vous vous assène un méchant coup dans le ventre, et vous retombez à votre place, au centre de la pièce.
~intro_bureau_seen=1
{intro_bureau02:->intro_bureau03|->intro_bureau}

= fuite_echec
Le chef des deux vous attrape violemment et vous soulève d'une main. Il semble terriblement plus fort que les deux autres. Vous ne vous comprenez pas, mais le langage est inutile. Vous êtes fatigué, perdu, abattu. Vous savez bien que vous n'êtes pas en point de vous enfuir, et vous avez empiré votre situation.
*"Mais qu'est-ce que vous me voulez?"
*"Mais qu'est-ce que je fais là?"
*[Vous débattre.] "Laissez-moi!"
- Aucune réponse. Il vous laisse tomber comme un sac et vous vous écroulez, épuisé.->intro_bureau03
= langage
L'écho de votre voix {fuite_echec:fébrile} tape contre les parois rocheuses du bureau de l'homme qui vous fait face. Votre nouvel interlocuteur plisse les yeux en vous écoutant, dans l'incompréhension. Il {fuite_echec:vous lâche pour vous laisser tomber sur le sol, et} s'adresse au garde derrière vous avec un ton qui vous semble de toute évidence signifier qu'il ne comprend rien non plus à ce que vous dites. Ils échangent alors quelques mots, et l'autre garde s'éclipse promptement de la pièce. ->intro_bureau02
= fuite_round2
*[Foncer tout droit]Vous vous heurtez à l'armure comme dans un mur, et retombez sur vos fesses, complètement étourdi. C'était une idée discutable. Le garde derrière vous vous porte un violent coup au crâne. Vous vous sentez partir. La lumière s'éteint.->intro_infirmerie
*[Attendre qu'il vous porte une attaque]Trop long. Votre bref instant d'hésitation suffit pour que l'homme derrière vous vous porte un violent coup au crâne. Vous vous sentez partir. La lumière s'éteint.->intro_infirmerie
*[Plonger entre ses jambes]Vous plongez entre les jambes du garde pour échapper à sa prise et vous relevez en titubant. Vous vous jetez au travers de la porte. Vous échappez de justesse à l'homme qui gardait la porte et courez tout droit, sans savoir quoi faire, ni où aller.->intro_bureau.fuite_suite
=fuite_suite
* [Enjamber les arches et sauter dans le vide] Vous vous approchez dangereusement des arches. Pas de cours d'eau en contrebas. Pas d'accroche. Un gouffre qui vous tuera à coup sûr.
    * * [Enjamber les arches et sauter dans le vide] Vous enjambez la barrière de pierre et vous tenez encore au pilier qui forme l'arche au-dessus de votre tête. Vous êtes pris de vertige. Vous entendez les gardes qui se rapprochent et s'arrêtent net à quelques pas de vous, attendant avec précaution votre prochaine décision.
        * * *[Reprendre vos esprits et remonter prudemment dans le couloir]
        -> reprendre_esprits_arches
        * * *[Sauter]"Qu'est-ce que je suis en train de faire...?"
        {intro_bureau.langage:Vous voyez le garde qui était parti du bureau revenir du passage à droite, après les fresques. Il tient dans ses mains un lourd disque de pierre avec un trou au milieu. Des runes sont gravées tout le long de sa surface. Il fait un pas de recul, et vous devinez ce qu'il se demande. "Qu'est-ce qu'il est en train de faire?"}
            * * * *[Sauter]Voyons, Magellus. Ne faites pas ça.
                * * * * *[Sauter]Comment va-t-elle s'en sortir sans vous?
                    * * * * * *Qui?
                    ~ suicide_arches=true
                    Cette pensée intrusive vous fait avaler une grande bouffée de panique. Qui? Qui doit s'en sortir? Vous perdez l'équilibre. Un garde profite de votre état de stupeur pour vous attraper par le col et vous ramener  brutalement dans le couloir. Vous fermez les yeux. Vous vous sentez glisser sur le sol. Vous vous faites traîner. Qui? C'est la seule pensée qui vous anime. Vous perdez connaissance. ->intro_infirmerie
                    * * * * * *[Sauter]
                    ~ background = "IMAGES/intro/jumped_off.png"
                    Vous ignorez cette réflexion et vous élancez dans le vide, et très vite, la stupeur des gardes fait place au vent. Un vent fort, qui vous enveloppe entièrement. Le seul son que vous entendez désormais. La lumière du soleil s'allie avec le courant pour vous caresser d'air chaud. Vous fermez les yeux. Vous n'avez plus de question à vous poser. Tout est fini.
                    ->END
            * * * *[Reprendre vos esprits et remonter prudemment dans le couloir]
        -> reprendre_esprits_arches
    * * [Reprendre vos esprit et vous éloigner des arches]
        -> reprendre_esprits_arches
* [Courir tout droit et reprendre les escaliers en direction du cachot]
* [Emprunter le chemin à droite, après les fresques]
- Vous courez le long des fresques avec la ferme intention de vous échapper de cet endroit. <>
Soudain, vous tombez nez-à-nez avec {intro_bureau.langage:le garde qui était parti alors qu'il sort du chemin de droite. Il tient dans ses mains un lourd disque de pierre avec un trou au milieu. Des runes sont gravées tout le long de sa surface.|un énième clone en armure flamboyante, qui remontait du cachot.} Il fait un pas de recul, et vous devinez ce qu'il se demande. "Qu'est-ce qu'il se passe?"<br>Vous vous sentez déstabilisé.<br>Ce bref instant d'hésitation suffit pour que les gardes derrière vous vous rattrapent. L'un d'eux vous frappe alors violemment au crâne. Vous vous sentez partir. La lumière s'éteint.->intro_infirmerie

===intro_bureau02
* "Où est-ce qu'il est parti?"[] Vous demandez aussitôt.
Vos paroles restent évidemment sans réponse. ->intro_bureau03
* [Attendre]->intro_bureau03
* {not intro_bureau.fuite} [Attendre un peu puis tenter de fuir par la porte d'où vous êtes entré]Vous tentez de vous jeter dehors à la surprise du seul garde restant. -> intro_bureau.fuite
=== reprendre_esprits_arches
Vous reprenez vos esprits et remontez prudemment dans le couloir. Les gardes sont regroupés autour de vous. Ils vous menaceraient bien avec leurs armes, mais vous êtes inoffensif à leurs yeux. Ils s'écartent pour laisser passer leur chef, qui dévisse alors son lourd gantelet de métal pour libérer sa main nue, cerclée d'un magnifique bracelet sobre d'une nuance métallique iridescente. Il lève sa main lentement et la regarde, vous invitant à faire de même. 
             * * * *["Discutons en adultes, voulez-vous? J'ai changé d'avis."]
             * * * *[Fixer sa main]
                    - Il fait alors une légère grimace méprisante et vous envoie une puissante mandale qui vous envoie directement au pays des rêves. ->intro_infirmerie
=== intro_bureau03
<br>Un instant passe alors durant lequel personne ne s'exprime. Après un moment, vous entendez des pas derrière vous qui se pressent. Le garde qui était parti est de retour. Face à leur chef, vous le voyez acquiescer subtilement, et sentez l'homme derrière vous soulever quelque chose de lourd au-dessus de votre tête.{intro_bureau.fuite_echec: Après votre misérable tentative de fuite, vous| Vous} vous attendez au pire.
    * [Lever la tête]Vous levez la tête et voyez l'homme qui tient une large couronne de pierre au-dessus de vous, l'abaissant lentement sur vous. Il la lâche alors pour libérer ses doigts et votre tête s'enfonce dans votre cou sous le poids écrasant de l'objet.
    * [Ne pas sourciller]Soudain, vous sentez votre tête s'enfoncer dans votre cou sous le poids écrasant d'une sorte de couronne qu'il vous pose sur la tête. 
    - Vous sentez une vive douleur parcourir vos tempes dans une caresse glacée jusqu'au centre de votre front, où elle se dissipe calmement.
    ->intro_bureau04
    
    
//----------------------------------
//--------ARC 01----SOUVENIR--------
//----------------------------------
=== intro_infirmerie
<br><br>
*...
<br><br>
    * *...
    <br><br>
        * * *[...]"Quand va-t-il se réveiller?<br>- Je l'ignore, monsieur.<br>- Dépêchez-vous de me le remettre sur pieds.<br>- Oui, monsieur."
        * * * *[...]
        <br><br>
        * * * * * "Où-suis-je?"[]
        "Oh. Vous êtes reveillé!"<br>Vous ouvrez doucement les yeux. Une jeune femme est à votre chevet. Elle est vêtue d'une longue robe rouge, un long tablier blanc reposant par-dessus. Elle vous observe avec de grands yeux malicieux cachés derrière de grosses lunettes rondes, et encadrés par un visage fin sur lequelle de grosses boucles rousses rebondissent.
- ->intro_infirmerie02
=== intro_infirmerie02
VAR infirmerie_vue =1
* (soeurs)[Regarder autour de vous]Vous regardez autour de vous. Une grande salle de pierre blanche ressemblant une abbaye, peuplée de lits et d'inconnus qui dorment ou gémissent de douleur. D'autres femmes, toutes vêtues du même apparât, naviguent parmis les blessés pour administrer des soins à l'aide de potions et de pierres colorées, qui luisent en réponse aux psaumes qu'elles murmurent. {eulaee:Eulaée|La jeune femme} sourit en vous voyant observer l'endroit.<br>"Nous sommes les Soeurs de Carimdel. Nous soignons les malades, ici. Tel est notre voeu."
~ infirmerie_vue+=1
-> intro_infirmerie02

* (reve) "C'était quoi, un rêve?"[]<br>"Un rêve? Oh, j'ai bien peur que non, monsieur. {suicide_arches:Vous nous avez fait très peur, vous savez. D'abord vous tombez du ciel, et ensuite vous menacez de vous tuer... Personne n'y a rien compris.|Le monde vous a vu tomber du ciel.} C'est incroyable que vous soyez toujours vivant. 
~ infirmerie_vue+=1
-> intro_infirmerie02
* (frichelangue)"Comment se fait-il que je vous comprenne?"[]<br>"La Pierre de Frichelangue. C'est un vieil artefact qui n'a pas servi depuis très longtemps. Il faut aller chercher vraiment très loin pour trouver des gens qui ne parlent pas le Ségur."
~ infirmerie_vue+=1
->intro_infirmerie02
* (eulaee) {intro_infirmerie>=1} "Qui êtes-vous?"[]<br>"Je m'appelle Eulaée. On m'a chargée de bander vos blessures. Ça risque de prendre encore un peu de temps pour vous soigner, les apothicaires refusent qu'on vous donne de l'onguent. Et vous, c'est quoi votre nom?"
    * * (nom)["Magellus Kant."] Vous baissez les yeux machinalement pour regarder votre insigne, mais vous êtes alité, torse nu, et couvert de bandage.<br>"Magellus Kant", lui dites-vous simplement.<br>"C'est un joli nom. Il vous va très bien: inconnu et mystérieux."
    * * "Je l'ai oublié."[]<br>La jeune femme marque une pose à ces paroles. Elle a l'air soucieuse, et se mord la lèvre.<br>"Vous devez essayer de vous souvenir de quelque chose, je vous en prie. Si vous n'avez rien à lui dire, il vous tuera."
        * * *(direnom) "Magellus. Je m'appelle Magellus. Je vous ai menti."[]
        * * *"Qui me tuera?"[]<br>"Dor Mangruv. Vous l'avez rencontré, là haut."
            * * * *(direnom2)"J'ai menti. Je m'appelle Magellus Kant."[]<br>Eulaée plisse les yeux en soupirant.<br>"C'est un joli nom. Il vous va très bien: inconnu et mystérieux."
    - -
    ~ infirmerie_vue+=1
    ->intro_infirmerie02
            
* {frichelangue} "{infirmerie_vue>3:Je n'ai rien compris à ce que vous aviez dit, à propos de...|Je ne comprends rien à ce que vous dites. }Frichelangue? Ségur?"[]<br>"Vous savez, les rumeurs à votre sujet sont déjà nombreuses dans la ville", vous répond-elle. "Tout le monde veut savoir d'où vient le Perceciel."
    * *"Le... quoi?"[]
    * *"Je suis complètement perdu."[]
    - - <><br>"Je suis désolée, je suis en train vous inonder d'informations. Cela doit être difficile. Le Perceciel, c'est vous. Vous avez littéralement fendu les cieux, avant de, et bien... vous... écraser?"
        * * * (motif) "Poursuivez, s'il-vous-plaît."[]<br>"Poursuivre? Ma foi, je ne sais pas... J'ai entendu dire que vous aviez aterri sur un convoi d'émissaires très important à la porte de Vervallée. Presque tous les astradari sont morts, vous les avez aplatis!" Elle glousse avec retenue.{soeurs: Ce qui vous étonne, au regard de sa profession.}<br>"Mais ça risque fortement d'empirer la situation, avec Astradara. Ils croient que c'est une attaque venant de chez nous. Et les parangons, eux... Ils pensent que vous êtes astradari, mais que leur attaque a merdé."<br>Elle regarde dans le vide et tire une moue perplexe.<br>"Moi, je crois que vous êtes bien plus que ça."
        ~ infirmerie_vue+=1
        ->intro_infirmerie02
* {reve and infirmerie_vue > 4 and motif} "Attendez, je suis tombé du ciel? Qu'est-ce que vous racontez?"[]<br>"Vous ne vous souvenez vraiment de rien, alors?" Elle semble déçue.<br>"Pas même la moindre chose?"
    * *"Je me souviens[..."]->donne_souvenir
    * *"Je n'ai pas envie de vous en dire plus."[]->refus
    * *"Rien du tout, j'en suis navré."[]
    * *"Tout est vraiment flou..."[]
    - - "Je vois." Dit-elle, pensive. "Peut-être... Peut-être que je pourrais vous donner quelque chose qui vous aide à vous souvenir. Vous seriez d'accord?"
        * * *"C'est d'accord."[]->accepte
        * * *"Non, je refuse."[]->refus
* {motif} "Comment ça, je suis 'plus que ça?'"[]<br>"Oui. Vous êtes tombé du ciel, enfin! C'est Selvaràn qui vous envoie. J'en suis sûre. Pourquoi? Je l'ignore, mais pour une bonne raison, c'est certain. Arriver là-bas, à ce moment là, ça ne peut pas être une coïncidence."
~ infirmerie_vue+=1
->intro_infirmerie02
* {motif} "Qui sont les parangons?"[]<br>"Les parangons sont la classe martiale de Dor. Une élite militaire armée d'artefacts et membres d'une caste sévère. Ils ont une autorité presque suprême en Esquipio. Dor Mangruv, vous avez eu... 'la chance' de le rencontrer. C'est lui qui est à leur tête."
~ infirmerie_vue+=1
->intro_infirmerie02
=donne_souvenir
*{intro_wakeup.abalon_info_remember.livre} <i>(souvenir d'un livre)</i>...de mon codex. Un ouvrage qui contient, je crois, tout ce que j'ai appris étant plus jeune.->intro_infirmerie02.livre_effort
* {intro_wakeup.abalon_info_remember.effort} <i>(souvenir d'un effort)</i>...de mon entraînement. J'étais un soldat, je crois.->intro_infirmerie02.livre_effort
* {intro_wakeup.abalon_info_remember.conversation}  <i>(souvenir d'une conversation)</i>...d'une conversation avec quelqu'un. J'étais un navigateur, je crois. J'allais quelque part. -->intro_infirmerie02.conversation
=accepte
"Loué soit Carimdel!" soupire-t-elle, soulagée.->creuser_souvenir
=refus
<br>"Monsieur{nom or direnom or direnom2: Magellus}, aidez-moi à vous aider, s'il-vous plaît. Non, en fait, aidez-moi, tout simplement. Ils attendent de moi que je leur serve des informations à votre sujet. Croyez-moi, les parangons ne tiennent pas la culture de l'échec en affection."
* "D'accord. Je me souviens..."->donne_souvenir
* "Je suis navré, c'est non."->refus2
=refus2
<br>Eulaée ne cache pas une soudaine et grande déception. Elle semble blessée. Votre refus de vous ouvrir démontre d'une grande prudence, mais il la met dans une position délicate de laquelle elle ne peut pas se soustraire.
"Je... Je suis désolée, monsieur{nom or direnom or direnom2: Magellus}, ils ne me laissent pas le choix", dit-elle, d'un ton sincèrement triste. ->creuser_souvenir
=livre_effort
<br>"Si vous êtes arrivé ici avec des objets, c'est sans nul doute qu'ils sont en possession d'Astradara, maintenant. ->gather
=conversation
<br>"Un navigateur, très certainement. ce que vous avez laissé derrière vous, les parangons l'ont décrit comme... un petit navire fait de métal. ->gather
=gather
C'est une information précieuse. Respirez fortement, nous allons essayer de creuser un peu plus loin dans votre histoire..."->creuser_souvenir
=creuser_souvenir
<br>Elle sort alors une gemme noire, parfaitement polie et sphérique de son tablier, et la lâche au-dessus de votre visage. La pierre ne tombe pas, elle flotte. Une sensation étrange de paix et de calme vous investit.
* "Qu'est-ce que vous faites{refus2:!}?"[]<br>"Silence." Eulaée se concentre,{not refus: et son air jovial se voit remplacé } d'un sérieux tout à coup inquiétant.
* [Vous laisser faire]
* {refus2}[Vous débattre] Vos mains sont attachées fermement. Eulaée a perdu tout air empathique, et un léger mépris se dévoile sur son visage.
- Subitement, votre tête vous fait atrocement mal. Ça vous prend d'un coup sec, insinueux. Vous sentez comme des doigts glacés qui se glissent dans votre crâne, qui attrape votre cerveau. Vous avez l'impression que vos yeux s'enfoncent dans leurs orbites.
Il vous est impossible de parler, impossible de crier. Le temps de vous en rendre compte, vos sens s'évanouissent l'un après l'autre. Vous ne voyez plus rien, puis n'entendez plus rien, puis ne sentez plus rien. Le vide absolu. Vous vous sentez chuter brusquement dans le vide.->flashback01
=== flashback01
<br><br>Vous entendez la voix d'Eulaée à nouveau. Elle a perdu toute sympathie. Sèchement, elle vous ordonne:<br>"Ouvre-toi."->a
=a
*["Mes épaules..."]Vos épaules vous font mal. Les sangles vous liment les trapèzes. Vous vous cramponnez à votre siège.->a
*["Ma tête..."]Vous avez complètement perdu le sens de l'orientation. Où est le haut? Votre casque vous serre l'arrière de la tête. Les secousses vous ballotent.->a
*["J'ai chaud..."]Les flammes vous entourent. La coque est brûlante. Vous êtes piégé dans un four ailé.->a
*->a1->b
=a1
<br>"Qu'est-ce que..." ->->
=b
+{b<3}["Mes mains..."]Vos mains sont{| encore| toujours} vissées sur le système de contrôle.
    * *Appuyer sur le bouton d'éjection[] ne fait rien. Vous vous acharnez dessus, sans succès.->b
    * *Redresser les manettes de toutes vos forces[] les explose. Vous êtes condamné. ->b
    * *[Ouvrir manuellement le toit du vaisseau] Le vent s'engouffre dans la capsule et arrache le toit du vaisseau en un instant.->b
* ->b1->c
=b1
<br>"C'est impossible..." ->->
=c 
Vous transpercez les nuages. L'impact est proche. Les commandes ne répondent plus.
*{suicide_arches} ["Je dois la protéger..."] Vous vous retournez. Elle est tétanisée. Ses yeux sont écarquillés. Le vent coupe ses larmes aussitôt nées pour les glisser dans ses doux cheveux. Elle serre un morceau de tissu si fort entre ses mains qu'elles sont bleues.
    * *[Maia va mourir.]Maia doit vivre.
        * * *[Maia va mourir.]Tout mais pas elle.
            * * * *[Maia va mourir.]Où est-elle maintenant? ->maia
*[Fermer les yeux] Vous fermez les yeux. Vous n'imaginiez pas finir comme ça. ->d
=d 
TODO
=maia
TODO


//---------------------------------------
//--------ARC 01----DIPLOMATIE-----------
//---------------------------------------
=== intro_bureau04 ===
"Si cette breloque n'est pas capable de lui délier la langue, il ne sera pas même bon pour le cachot", déclare leur chef, en croisant les bras.
* "Je vous comprends!"[] Vous vous exclamez, les yeux écarquillés.
"Magnifique. Nous allons enfin avoir des réponses", vous renvoie-t-il, magnanime.<br>
* "Quoi que ce soit, on dirait bien que ça a fonctionné."[] Vous lui lancez, en tentant de garder votre sang-froid.
"Intéressant... Nous allons enfin avoir des réponses", vous renvoie-t-il, magnanime. <br>
* (langage) "Vous parlez enfin mon langage?"[]
Il balaie l'air d'un revers de main méprisant. 
"Tu parles la notre, sombre crétin. Et maintenant, je veux des réponses. Qui es-tu?"
* (frichelangue) "Qu'est-ce que j'ai sur la tête?"[]
"La pierre de Frichelangue," dit-il. "Mais tous aujourd'hui parlent le ségur, et les piètres complaintes qui sortent de ta bouche ne sont pas de l'argot. Alors je veux des réponses. Qui es-tu?"
- <> {not frichelangue and not langage: "Qui es-tu?" il ajoute.}
->intro_bureau04.name_asked

=name_asked
* "{irony: Désolé. Je suis }Magellus Kant."
~ helpful +=2
~ karma_Mangruv+=1
-> intro_bureau04.name_given
* [Lui pointer la petite insigne en métal qui repose sur votre poitrine]
~ helpful +=1
Il s'approche légèrement de vous, tend le cou et plisse les yeux, scrutant les lettres sur votre insigne.
"Je n'ai jamais vu pareil langage." dit-il, résolu. Il lève sur vous un regard empli de jugement. Il attend.
    * * "Apellez-moi Magellus."[]<br>"Tu as un nom, Magellus?" demande-t-il.
        * * * "Kant."
        * * * "Magellus Kant."
        - - - ->intro_bureau04.name_given
    * * "Je suis Magellus Kant."
    ~helpful+=1
    - - -> intro_bureau04.name_given
* (irony) "Ça ne vous regarde pas."[] lui dites-vous avec hostilité.
~ serious+=1
~ hostile+=1
~ karma_Mangruv-=1
"Je ne partage pas l'affection de mes soldats pour l'indulgence", siffle-t-il entre ses dents en vous regardant, l'air menaçant et le menton relevé. "Ni pour la demie mesure."
->name_asked
* {not irony} "Magellus Kant. Qui le demande?"
~ ironic+=1
-> intro_bureau04.name_given_ironic

= name_given
{not name_given_ironic:Il se redresse et commence à marcher lentement dans la pièce."Un langage inconnu, un nom jamais entendu et accoutrement qui m'est étranger. Dis-moi, Kant.} Tu as pulverisé bien plus des leurs que mes parangons. Pourquoi?"
-> name_given_suite

=name_given_ironic
Il prend un pas de recul. Son expression trahit une surprise incrédule. Il cligne des yeux quelques fois avant de froncer les sourcils et verrouiller un regard haineux.
"Qui {intro_bureau04.name_given_suite.mangruv_inconnu:suis-je|te demande}?" s'indigne-t-il. "QUI?!"<br>Les gardes derrière se tendent. Cet épisode ne leur est pas inconnu.<br>"Je suis Dor Mangruv, général des armées Dor, consul du dernier empereur d'Esquipio Tyr Maligar et père des parangons."<br> Il s'approche, menaçant. "J'imagine que ça te dit quelque chose?{not name_given_suite: Et maintenant, Kant, tu vas répondre à ma question.}->name_given

=name_given_suite
* "Je n'ai aucune idée de ce dont vous parlez."[]
TODO
* "Je n'ai plus aucun souvenir datant d'avant mon réveil dans votre cachot.["] Quoi qu'il me soit arrivé, ça m'a rendu amnésique," lui confiez-vous.
TODO
* "Vous devez faire erreur. Je ne me rappelle pas avoir pulverisé qui que ce soit."[]
TODO
* (mangruv_inconnu){not intro_bureau04.name_given_ironic} "Mais qui êtes vous?"[]
TODO
* "{name_given_suite<2:Vos <i>quoi</i>?|Qu'est-ce vous avez dit que j'avais pulverisé?}"[]
TODO
*->intro_bureau05
=== intro_bureau05
TODO
