var storyContent = {"inkVersion":21,"root":[["\n","\n","\n","\n","\n","ev",{"VAR?":"playerInventory"},{"VAR?":"testItems.testItem"},"+",{"VAR=":"playerInventory","re":true},"/ev","\n","\n","\n",{"->":"intro_wakeup"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"rolld20":[{"temp=":"critfailure"},{"temp=":"failure"},{"temp=":"critsuccess"},{"temp=":"success"},{"temp=":"treshold"},{"temp=":"modifier"},"ev",1,20,"rnd","/ev",{"temp=":"die_roll"},"\n","ev",{"VAR?":"die_roll"},{"VAR?":"modifier"},10,"-",2,"/","+","/ev",{"temp=":"result"},"^[Seuil attendu: ","ev",{"VAR?":"treshold"},"out","/ev","^]","\n","^[Votre jet: ","ev",{"VAR?":"result"},"out","/ev","^]","\n",["ev",{"VAR?":"result"},20,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->t->":"critsuccesstext"},{"->":"critsuccess","var":true},{"->":".^.^.^.41"},null]}],["ev",{"VAR?":"result"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->t->":"critfailuretext"},{"->":"critfailure","var":true},{"->":".^.^.^.41"},null]}],["ev",{"VAR?":"result"},{"VAR?":"treshold"},">=","/ev",{"->":".^.b","c":true},{"b":["\n",{"->t->":"successtext"},{"->":"success","var":true},{"->":".^.^.^.41"},null]}],[{"->":".^.b"},{"b":["\n",{"->t->":"failuretext"},{"->":"failure","var":true},{"->":".^.^.^.41"},null]}],"nop","\n",{"#f":1}],"successtext":["^(Succès.) ","<>","^ ","ev","void","/ev","->->","\n",{"#f":1}],"failuretext":["^(Échec.) ","<>","^ ","ev","void","/ev","->->","\n",{"#f":1}],"critsuccesstext":["^(Succès Critique!) ","<>","^ ","ev","void","/ev","->->","\n",{"#f":1}],"critfailuretext":["^(Échec Critique!) ","<>","^ ","ev","void","/ev","->->","\n",{"#f":1}],"intro_wakeup":[["^Vous ouvrez les yeux avec difficulté et sentez le goût de la poussière envahir votre bouche. Vous êtes épuisé, mais ne vous souvenez pas de ce qui vous est arrivé. Vos mains sont liées par de lourds bracelets de fer. Votre corps est endolori. Le son du métal frappé vous étourdit à peine éveillé. L'odeur de la sueur et de la crasse envahit votre nez. Que faites vous ici ?","\n","ev","str","^Regarder autour de vous","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Crier à l'aide","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ","<>","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ Vous êtes pris d'une toux qui vous musèle, et vous fait cracher une gerbe de terre.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Vous frottez vos yeux péniblement pour chasser le sable de vos paupières et découvrez que vous êtes dans une prison. Peut-être davantage un cachot.","\n","^Les sons métalliques s'affinent. Quelqu'un semble taper sur une enclume dans une pièce adjacente. Les murs qui vous entourent sont faits d'une pierre blanche et poreuse qui pourrait avoir commencé à s'effriter il y a des siècles de cela. La chaleur vous semble insupportable. Le brasier qui crépite près de votre cellule vous étouffe.","\n","^Vous vous sentez à des année-lumières de votre chez-vous.","\n",{"->":".^.^.^.abalon"},{"#f":5}]}],{"abalon":[["ev","str","^\"Mon chez-moi ?\"","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Essayer de vous souvenir d'où vous venez","/str",{"CNT?":".^.^.^.abalon_info"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^Vous inspecter","/str","/ev",{"*":".^.c-2","flg":20},["ev",{"^->":"intro_wakeup.abalon.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.^.wakeup_note_fail"},"/ev",{"*":".^.^.c-3","flg":19},{"s":["^Kant ? ",{"->":"$r","var":true},null]}],["ev",{"^->":"intro_wakeup.abalon.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":".^.^.^.^.wakeup_note_success"},"/ev",{"*":".^.^.c-4","flg":19},{"s":["^Magellus Kant... ",{"->":"$r","var":true},null]}],{"*":".^.c-5","flg":24},{"c-0":["^ ",{"->":".^.^.^.^.abalon_info"},"\n",{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.abalon_info_remember"},"\n",{"#f":5}],"c-2":["^ ",{"->":".^.^.^.^.s_inspecter"},"\n",{"#f":5}],"c-3":["ev",{"^->":"intro_wakeup.abalon.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.name_is_kant"},"\n",{"#f":5}],"c-4":["ev",{"^->":"intro_wakeup.abalon.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],{"->":".^.^.^.^.name_is_kant"},"\n",{"#f":5}],"c-5":["\n",{"->":"cachot_out"},{"#f":5}]}],{"#f":1}],"abalon_info":["^Votre chez-vous ? Cette pensée vous a pris de court. À vrai dire, vous n'avez plus qu'une vague idée de ce que c'était. ",{"->":".^.^.abalon"},"\n",{"#f":1}],"abalon_info_remember":[["^Vous tentez de creuser votre mémoire. Quelques bribes vous parviennent...","\n","ev","str","^Un effort...","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Un livre...","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Une conversation...","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","ev",{"VAR?":"strength"},1,"+",{"VAR=":"strength","re":true},"/ev","^Vous vous souvenez de la difficulté que vous éprouviez à vous mouvoir lorsque vous étiez enfant. Avec le temps, et de l'entraînement, cette lourdeur avait fini par disparaître. Vous réalisez soudain que vous ne ressentez pas la même chose, ici. Ce souvenir vous rend... plus léger, plus fort. ",{"->":".^.^.^.^.abalon"},"\n",{"#f":5}],"c-1":["\n","ev",{"VAR?":"intelligence"},1,"+",{"VAR=":"intelligence","re":true},"/ev","^Vous vous souvenez tourner les pages de votre codex étant enfant. Vous aviez appris à détester cet énorme bouquin dans lequel vous notiez l'étendue de ce que vous appreniez. Et pourtant, en le lisant dans votre tête avec une voix d'adulte, vous êtes certain qu'il ne vous a jamais quitté. Ce souvenir vous rend... plus perspicace, plus alerte. ",{"->":".^.^.^.^.abalon"},"\n",{"#f":5}],"c-2":["^ ","\n","ev",{"VAR?":"charisma"},1,"+",{"VAR=":"charisma","re":true},"/ev","^Vous vous souvenez d'une conversation. Les visages sont flous et les voix vagues, mais quelques mots intacts vous parviennent:","\n","^- \"Combien de temps seras-tu parti ?","\n","^- D'ici jusqu'à la Mer, quatre cycles. Quatre autres le temps de résoudre cette histoire. Quatre pour le retour.","\n","^- Douze, alors.","\n","^- Douze.","\n","^- Tu as intérêt à revenir. Fais attention à toi.","\n","^- C'est promis.\"","\n","^Vous êtes pris d'une certaine mélancolie. Vous serrez les dents. Vous voudriez vous rappeler davantage, mais dans votre état actuel, cela est impossible. Ce souvenir vous rend... déterminé, sûr de vous.","\n",{"->":".^.^.^.^.abalon"},{"#f":5}]}],{"#f":1}],"s_inspecter":[["^Vous vous inspectez, et essayez de battre la terre qui recouvre votre tenue. Un uniforme. Vous saisissez le petit morceau de métal gravé qui arbore votre poitrine, et tentez de le lire à l'envers avec maladresse.","\n","^\"Ma...Magel... Magellus.\" chuchotez-vous difficilement. Magellus. À la lecture de votre nom, il vous apparaît tout à coup d'une évidence telle que vous êtes certain de ne pas l'avoir oublié. Votre uniforme est sale, mais d'une souplesse surprenante. Élastique et confortable, le tissu alvéolé d'un bleu marin sombre est parcouru de coutures d'un rouge vif. Sa confection est d'une perfection qui le rend impressionnant malgré la poussière.","\n","^Pataud, vous tentez de fouiller dans vos poches malgré les fers qui vous handicappent. Alors que vous sortez les mains de votre poche gauche, qui semblait d'abord vide, une petite note en papier glisse de vos doigts.","\n","ev","str","^[Dexterité] Tenter d'attraper la note avant qu'elle ne touche le sol.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^Vous tentez d'attraper la note en vol. ","ev",{"VAR?":"dexterity"},5,{"^->":"intro_wakeup.wakeup_note_success"},{"^->":"intro_wakeup.wakeup_note_success"},{"^->":"intro_wakeup.wakeup_note_fail"},{"^->":"intro_wakeup.wakeup_note_ec"},"/ev",{"->":"rolld20"},"\n",{"#f":5}]}],{"#f":1}],"wakeup_note_success":["ev",{"VAR?":"playerInventory"},{"VAR?":"pilotNote"},"+",{"VAR=":"playerInventory","re":true},"/ev","^Vous attrapez le morceau de papier habilement et le dépliez pour lire ce qu'il contient.","\n","^\"Magellus Kant. Abalon Armada no.37\"","\n","ev","str","^Magellus Kant","/str","/ev",{"VAR=":"character_name","re":true},{"->":".^.^.abalon"},{"#f":3}],"wakeup_note_fail":["ev",{"VAR?":"playerInventory"},{"VAR?":"pilotNote"},"+",{"VAR=":"playerInventory","re":true},"/ev","^La note vous échappe et tombe dans une flaque d'eau provenant d'une fuite à votre gauche. Vous le ramassez et tentez de le déplier pour lire ce qu'il contient. Malheureusement, l'eau croupie l'a rendu presque illisible. Cependant, vous pouvez tout de même discerner quelques lettres:","\n","^\"...-lus Kant-...\" ",{"->":".^.^.abalon"},"\n",{"#f":3}],"wakeup_note_ec":["^Vous vous précipitez pour attraper la note. Dans un grand geste maladroit, le morceau de papier vous échappe et virevolte hors de votre cellule pour terminer son trajet dans le brasier au pied du mur à votre droite. Vous le regardez se consumer rapidement dans les flammes. Son contenu demeure secret. ",{"->":".^.^.abalon"},"\n",{"#f":3}],"name_is_kant":["ev",true,"/ev",{"VAR=":"know_name","re":true},"^Vous le reconnaissez immédiatement","ev",{"CNT?":".^.^.wakeup_note_fail"},"/ev",[{"->":".^.b","c":true},{"b":["^ malgré l'état du papier",{"->":".^.^.^.9"},null]}],"nop","^. C'est votre nom. Vous êtes Magellus Kant. Vous savez qui vous êtes... À peu près. ",{"->":".^.^.abalon"},"\n",{"#f":1}],"#f":1}],"cachot_out":["^Alors que vous croyiez tenir un lambeau de votre passé fermement, vos souvenirs se délitent soudain dans l'air chaud de votre prison et vous reprenez lentement vos esprits. Quelque chose se tient devant vous.","\n","^Vous relevez la tête et faites face à un homme en armure plus grand d'une tête et d'une carrure terriblement imposante. Son visage fermé encadré par son heaume est sévère. Il vous prononce quelques mots avec mépris dans une langue qui vous est totalement étrangère, puis ouvre la porte de votre cellule. Ses mains épaisses sont tout à fait disproportionnées aux barreaux. Vous êtes certain qu'il pourrait les arracher à votre cellule d'un coup sec. Il n'a cependant pas l'air hostile, et fait un pas en arrière comme pour vous inviter à sortir.","\n",{"->":"intro_cachot_01"},{"#f":1}],"intro_cachot_01":[[["ev",{"^->":"intro_cachot_01.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Lui demander des explications",{"->":"$r","var":true},null]}],"ev","str","^Le suivre","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Ne rien faire","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^[Dexterité] Tenter de fuir","/str",{"CNT?":"cachot_combat"},"!",{"VAR?":"intro_parangon_patience"},2,"<","&&","/ev",{"*":".^.c-3","flg":21},"ev","str","^[Force] Frapper le garde de toutes vos forces","/str",{"CNT?":"cachot_fuite"},"!",{"VAR?":"intro_parangon_patience"},2,"<","&&","/ev",{"*":".^.c-4","flg":21},{"c-0":["ev",{"^->":"intro_cachot_01.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^ ne vous avance à rien. Un léger froncement de sourcil perplexe le trahit cependant. Il est évident qu'il ne comprend pas un mot de ce que vous lui dites, et ses yeux se plissent dans une forme de doute mélangé de mépris.","\n","ev",{"VAR?":"intro_parangon_patience"},1,"+",{"VAR=":"intro_parangon_patience","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",{"->":"intro_cachot_02"},{"#f":5}],"c-2":["^ Vous ne faites rien et vous tenez face à lui sans bouger, dans une forme de défi. Au vu de votre état déplorable","ev",{"CNT?":"cachot_fuite"},{"CNT?":"cachot_combat"},"||","/ev",[{"->":".^.b","c":true},{"b":["^ et de la raclée qu'il vous vient de vous coller",{"->":".^.^.^.7"},null]}],"nop","^, l'homme vous adresse un soupir complaisant. Il semble perdre patience et vous comprenez bien qu'il ne vous laissera pas ici. C'est par courtoisie qu'il ne vous a pas encore traîné jusque là où l'on vous a demandé.","\n","ev",{"VAR?":"intro_parangon_patience"},1,"+",{"VAR=":"intro_parangon_patience","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-3":["^ Vous vous élancez...",{"->":"cachot_fuite"},"\n",{"#f":5}],"c-4":["^ Vous assénez un coup de pied au garde... ",{"->":"cachot_combat"},"\n",{"#f":5}]}],{"#f":1}],"cachot_fuite":["ev",{"VAR?":"dexterity"},24,{"^->":"cachot_fuite.success_01"},{"^->":"cachot_fuite.success_01"},{"^->":"cachot_fuite.failure_01"},{"^->":"cachot_fuite.failure_01"},"/ev",{"->":"rolld20"},{"success_01":[{"->":".^.^.failure_01"},{"#f":3}],"failure_01":["^...et tentez de vous glisser rapidement sur le côté en misant sur l'apparence balourde du colosse qui vous surplombe. Sans surprise, il vous attrape par le col sans le moindre effort. Vous vous sentez bétail entre les mains du boucher.","\n",{"->":"cachot_tentative_fuite_ratee"},{"#f":3}],"#f":1}],"cachot_combat":["ev",{"VAR?":"strength"},24,{"^->":"cachot_combat.success_01"},{"^->":"cachot_combat.success_01"},{"^->":"cachot_combat.failure_01"},{"^->":"cachot_combat.failure_01"},"/ev",{"->":"rolld20"},{"success_01":[{"->":".^.^.failure_01"},{"#f":3}],"failure_01":["^... Et vous vous fracassez le pied contre sa plaque d'une solidité insurmontable. Cet homme est une forteresse indestructible, et il vous regarde avec dépit et supériorité. Il saisit votre cheville avec force.","\n",{"->":"cachot_tentative_fuite_ratee"},{"#f":3}],"#f":1}],"cachot_tentative_fuite_ratee":["^Votre adversaire vous balance contre le mur de pierre avec violence et vous retombez lourdement dans la poussière de votre cellule. Vous étiez déjà en souffrance, vous voilà à bout de forces. En vous relevant, vous voyez qu'il n'a pas mal pris cette ridicule tentative d'évasion. Sa posture vous invite toujours à sortir et, cette fois, dans les clous qu'il vous enjoint à suivre docilement. ",{"->":"intro_cachot_01"},"\n",{"#f":1}],"intro_cachot_02":[["ev",{"VAR?":"intro_parangon_patience"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^Vous suivez promptement le garde sans faire d'histoire.",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"VAR?":"intro_parangon_patience"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^Vous vous décidez à suivre le garde sans vous attirer davantage d'ennui.",{"->":".^.^.^.14"},null]}],"nop","\n","ev",{"VAR?":"intro_parangon_patience"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["^Vous vous décidez finalement à suivre le garde.",{"->":".^.^.^.22"},null]}],"nop","\n","<>","^ En sortant de votre cellule, vous tombez nez-à-nez avec une copie exacte de l'homme qui vient de vous faire sortir. Leurs armures sont complexes, et leur plastron présente un visage de lion argenté écaillé de ce que vous appelleriez un or iridescent, quelque chose que vous n'aviez encore jamais vu. Autour de vous, un cachot aux allures de forge, dans lequel les distants soupirs de créatures retenues se mélangent aux coups cinglants du marteau sur l'enclume. Il fait sombre. Le rougeoyant des torches et des braises qui crépitent embaument la pièce autant de faibles couleurs chaudes que d'une odeur de feu. Vous n'avez encore aucune idée de ce qui vous est arrivé, mais une chose est sûre. Vous observez ces lieux pour la toute première fois.","\n","ev","str","^Continuer","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^   ","\n","ev","str","^IMAGES/intro/corridor.png","/str","/ev",{"VAR=":"background","re":true},"^Vous arrivez au bout d'un escalier en colimaçon après une pénible et longue ascension. À peine arrivé au sommet, vous reprenez votre souffle en posant vos mains sur vos genoux, arqué, fatigué. ","<>","\n","ev",{"VAR?":"intro_parangon_patience"},2,">=","/ev",[{"->":".^.b","c":true},{"b":["^Mais le garde que vous avez ennuyé tout à l'heure n'a plus de patience à vous accorder. Il",{"->":".^.^.^.17"},null]}],"nop","\n","ev",{"VAR?":"intro_parangon_patience"},2,"<","/ev",[{"->":".^.b","c":true},{"b":["^Le garde qui vous précède",{"->":".^.^.^.25"},null]}],"nop","\n","<>","^ vous bouscule d'un coup de pied modéré pour vous faire signe d'avancer, en vous prononçant une nouvelle fois des mots qui vous sont tout à fait inconnus.","\n",["ev","str","^Avancer","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Accompagné de votre escorte, vous atteignez un large couloir de pierre. Des fleurs et des lierres sauvages vivent en harmonie avec cette architecture élégante, quoique fort primitive pour vous. Sur votre gauche, des fresques épiques d'un style mosaïque ancien, mais délicatement conservées. À votre droite, des arches de pierre encadrées par des bannières flottant au vent donnent sur le paysage onirique d'une gigantesque cité blanche. Vous vous arrêtez brièvement.","\n",{"->":".^.^.^.^.^.observe"},{"#f":5}]}],{"#f":5}]}],{"observe":[["ev","str","^Continuer de suivre les gardes","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Avancer et observer ",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^la première fresque",{"->":".^.^.23"},null],"s1":["pop","^la seconde fresque",{"->":".^.^.23"},null],"s2":["pop","^la dernière fresque",{"->":".^.^.23"},null],"#f":5}],"/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Vous approcher des arches pour regarder la cité","/str","/ev",{"*":".^.c-2","flg":20},{"*":".^.c-3","flg":24},{"c-0":["\n","^Vous marchez le long du couloir, encadré par vos intéressants compagnons. Les fresques et le paysage inconnu attirent votre attention, mais vous préférez éviter les ennuis","ev",{"VAR?":"intro_parangon_patience"},4,"<=","/ev",[{"->":".^.b","c":true},{"b":["^,  car vous voyez bien l'impatience se dessiner dans la démarche du colosse qui ferme la marche",{"->":".^.^.^.8"},null]}],"nop","^. ",{"->":".^.^.^.^.continue"},"\n",{"#f":5}],"c-1":["\n","ev",{"VAR?":"intro_parangon_patience"},1,"+",{"VAR=":"intro_parangon_patience","re":true},"/ev",["ev",{"VAR?":"intro_parangon_patience"},5,"<","/ev",{"->":".^.b","c":true},{"b":["\n",["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","\n","^Vous vous penchez sur la première fresque. Elle est ornée de signes indéchiffrables, ressemblant à des runes. Probablement le langage dans lequel on parle ici. Au centre de la fresque, une figure féminine très sobrement vêtue et flottant dans le ciel, dispersant les rayons d'un soleil rouge. Directement en dessous d'elle sont représentés deux figures simplifiées, plus petites. L'une d'entre elle baigne dans la lumière, tandis que l'autre dans les ténèbres. ",{"->":".^.^.^.^.^.^.^"},"\n",{"->":".^.^.29"},null],"s1":["pop","\n","^Vous vous approchez de la deuxième fresque. Ici, on peut y voir la figure féminine prendre la place de l'astre qu'elle couvrait dans la première image, et dispenser sa lumière sur une foule colorée. En dessous, on peut voir la femme dans une position recroquevillée, en train de dormir au centre d'un tronc d'arbre, dont l'image de la foule qui la surplombe constitue le feuillage de manière intriquée. ",{"->":".^.^.^.^.^.^.^"},"\n",{"->":".^.^.29"},null],"s2":["pop","\n","^Vous posez enfin les yeux sur la dernière fresque de l'allée. On peut y voir une figure très détaillée, vêtue de l'exacte même armure que portent vos geôliers, enfoncer une épée dans le corps d'une créature voilée de ténèbres que vous avez vue dans la première histoire. La lumière jaillit de la plaie, tandis que la figure féminine flotte au-dessus de l'épéiste, ses mains délicatement posées sur ses épaules. Elle arbore un sourire apaisé.","\n","^Le garde qui fermait la marche vous intone une remarque dans son langage, voyant que vous vous interessez à -vraisemblablement- son histoire.","\n",{"->":"intro_cachot_02.continue"},{"->":".^.^.29"},null],"s3":["pop",{"->":".^.^.29"},null],"#f":5}],"\n",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n",{"->":".^.^.^.^.^.^.no_patience"},{"->":".^.^.^.9"},null]}],"nop","\n",{"#f":5}],"c-2":["\n","ev","str","^IMAGES/intro/corridor_view.png","/str","/ev",{"VAR=":"background","re":true},{"->":".^.^.^.^.arches"},{"#f":5}],"c-3":[{"->":".^.^.^.^.continue"},"\n",{"#f":5}]}],{"#f":1}],"arches":[["^Vous vous écartez de votre escorte pour vous approcher des arches.","\n","^Vous croyez rêver. De là où vous vous tenez, vous pouvez voir des bâtiments comme vous n’en avez jamais vus. Une végétation luxuriante court sur les façades des bâtiments de pierre claire, enrichies de mosaïques et ornées d’accents dorés. Des arches majestueuses, des ponts suspendus et des colonnades s’étendent à perte de vue, reliant des tours imposantes taillées à même les parois rocheuses escarpées sur lesquelles repose l’entière structure de la cité. Les tuiles des toits et les parures des bannières sont d’un turquoise éclatant qui se marie parfaitement avec le ton sablé des édifices.","\n","^Le soleil, à son zénith, lance des faisceaux de lumière qui se reflètent sur les vitraux et les détails métalliques des bâtiments, illuminant la cité d’une lueur presque irréelle. La roche naturelle qui encadre ces bâtiments, elle, brille d'un reflet iridescent légèrement rosé.","\n","^Soudain, la réalisation vous percute. Pourquoi rien de tout ce que vous ne voyez ne vous est familier? Vous étiez jusqu'alors saisi par la surprise, mais tout cela vous accable d'un seul coup.","\n","^\"Où suis-je?\"","\n","^Vous entendez le garde derrière vous vous adresser les mêmes mots que tout à l'heure. Il est temps de poursuivre.","\n","ev","str","^Le suivre","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ne rien faire","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^Vous vous écartez des arches et reprenez votre marche. ",{"->":".^.^.^.^.continue"},"\n",{"#f":5}],"c-1":["^Vous ne bougez pas, et admirez encore quelques instants le paysage qui se dresse devant vous. ",{"->":".^.^.^.^.no_patience"},"\n",{"#f":5}]}],{"#f":1}],"no_patience":["^Malheureusement, vous avez déjà épuisé la patience du garde qui vous attrape par le col et vous projette vers l'avant. Il vous crie cette fois un ordre que vous interprétez sans mal comme une invitation courtoise à poursuivre la marche, avant que les choses ne dégénèrent. ",{"->":".^.^.continue"},"\n",{"#f":1}],"continue":["^Vous finissez par atteindre une grande porte à l'autre bout du couloir, gardée par deux autres copies conformes des hommes en armure. L'un d'eux ouvre la porte. Vous êtes invité à entrer.","\n",{"->":"intro_cachot_03"},{"#f":1}],"#f":1}],"intro_cachot_03":[["ev","str","^Entrer","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ne rien faire","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Vous entrez dans la pièce. ",{"->":"intro_bureau"},"\n",{"#f":5}],"c-1":["\n","ev",{"VAR?":"intro_parangon_patience"},1,"+",{"VAR=":"intro_parangon_patience","re":true},"/ev","^Le garde qui vous avait jusqu'alors accompagné vous ","<>","\n",["ev",{"VAR?":"intro_parangon_patience"},5,"<","/ev",{"->":".^.b","c":true},{"b":["\n","^pousse sèchement dans la pièce.","\n",{"->":".^.^.^.12"},null]}],[{"->":".^.b"},{"b":["\n","^bouscule avec force d'un coup de pied dans le dos. Vous êtes projeté dans la pièce.","\n",{"->":".^.^.^.12"},null]}],"nop","\n",{"->":"intro_bureau"},{"#f":5}]}],{"#f":1}],"intro_bureau":[[["ev",{"^->":"intro_bureau.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Qu'est-ce que je fais ici?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"intro_bureau.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"test!!!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"intro_bureau.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Tirer avec un pistoler laser",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"intro_bureau.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#f":5}],"c-1":["ev",{"^->":"intro_bureau.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"#f":5}],"c-2":["ev",{"^->":"intro_bureau.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#f":5}]}],{"#f":1}],"global decl":["ev","str","^IMAGES/intro/cachot.png","/str",{"VAR=":"background"},{"list":{},"origins":["testItems"]},{"VAR=":"testItems"},{"list":{},"origins":["cachot_intro"]},{"VAR=":"cachot_intro"},{"list":{},"origins":["playerInventory"]},{"VAR=":"playerInventory"},"str","^???","/str",{"VAR=":"character_name"},"str","^???","/str",{"VAR=":"character_class"},1,{"VAR=":"character_level"},10,{"VAR=":"constitution"},10,{"VAR=":"strength"},10,{"VAR=":"dexterity"},10,{"VAR=":"charisma"},10,{"VAR=":"intelligence"},false,{"VAR=":"know_name"},false,{"VAR=":"exist_know_aleina"},false,{"VAR=":"exist_know_ruth"},false,{"VAR=":"fresque_culte_parangon"},0,{"VAR=":"intro_parangon_patience"},"/ev","end",null],"#f":1}],"listDefs":{"testItems":{"testItem":1},"cachot_intro":{"pilotNote":1},"playerInventory":{"empty":1}}};