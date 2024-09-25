=== intro_cachot_01
* Lui demander des explications[] ne vous avance à rien. Un léger froncement de sourcil perplexe le trahit cependant. Il est évident qu'il ne comprend pas un mot de ce que vous lui dites, et ses yeux se plissent dans une forme de doute mélangé de mépris.
~ intro_parangon_patience+=1
->intro_cachot_01
* [Le suivre]
->intro_cachot_02
* [Ne rien faire] Vous ne faites rien et vous tenez face à lui sans bouger, dans une forme de défi. Au vu de votre état déplorable{cachot_fuite or cachot_combat: et de la raclée qu'il vous vient de vous coller}, l'homme vous adresse un soupir complaisant. Il semble perdre patience et vous comprenez bien qu'il ne vous laissera pas ici. C'est par courtoisie qu'il ne vous a pas encore traîné jusque là où l'on vous a demandé.
~ intro_parangon_patience+=1
->intro_cachot_01
* {not cachot_combat and intro_parangon_patience<2} [Tenter de fuir] Vous vous élancez...-> cachot_fuite
* {not cachot_fuite and intro_parangon_patience<2} [Frapper le garde de toutes vos forces] Vous assénez un coup de pied au garde... -> cachot_combat

=== cachot_fuite
...et tentez de vous glisser rapidement sur le côté en misant sur l'apparence balourde du colosse qui vous surplombe. Sans surprise, il vous attrape par le col sans le moindre effort. Vous vous sentez bétail entre les mains d'un boucher.
->cachot_tentative_fuite_ratee
=== cachot_combat
... Et vous vous fracassez le pied contre sa plaque d'une solidité insurmontable. Cet homme est une forteresse indestructible, et il vous regarde avec dépit et supériorité. Il saisit votre cheville avec force.
->cachot_tentative_fuite_ratee
=== cachot_tentative_fuite_ratee
Votre adversaire vous balance contre le mur de pierre avec violence et vous retombez lourdement dans la poussière de votre cellule. Vous étiez déjà en souffrance, vous voilà à bout de forces. En vous relevant, vous voyez qu'il n'a pas mal pris cette ridicule tentative d'évasion. Sa posture vous invite toujours à sortir et, cette fois, dans les clous qu'il vous enjoint à suivre docilement.->intro_cachot_01

=== intro_cachot_02
{intro_parangon_patience==0:Vous suivez promptement le garde sans faire d'histoire.}
{intro_parangon_patience==1:Vous vous décidez à suivre le garde sans vous attirer davantage d'ennui.}
{intro_parangon_patience>=2:Vous vous décidez finalement à suivre le garde.}
<> En sortant de votre cellule, vous tombez nez-à-nez avec une copie exacte de l'homme qui vient de vous faire sortir. Leurs armures sont complexes, et leur plastron présente un visage de lion argenté écaillé de ce que vous appelleriez un or iridescent, quelque chose que vous n'aviez encore jamais vu. Autour de vous, un cachot aux allures de forge, dans lequel les distants soupirs de créatures retenues se mélangent aux coups cinglants du marteau sur l'enclume. Il fait sombre. Le rougeoyant des torches et des braises qui crépitent embaument la pièce autant de faibles couleurs chaudes que d'une odeur de feu. Vous n'avez encore aucune idée de ce qui vous est arrivé, mais une chose est sûre. Vous observez ces lieux pour la toute première fois.
* [Continuer]   
Vous arrivez au bout d'un escalier en colimaçon après une pénible et longue ascension. À peine arrivé au sommet, vous reprenez votre souffle en posant vos mains sur vos genoux, arqué, fatigué. <> //Check la patience du garde 
{intro_parangon_patience>=2:Mais le garde que vous avez ennuyé tout à l'heure n'a plus de patience à vous accorder. Il}
{intro_parangon_patience<2:Le garde qui vous précède}
<> vous bouscule d'un coup de pied modéré pour vous faire signe d'avancer, en vous prononçant une nouvelle fois des mots qui vous sont tout à fait inconnus.   
* * [Avancer]
~ background = "IMAGES/intro/corridor.png"
Accompagné de votre escorte, vous atteignez un large couloir de pierre. Des fleurs et des lierres sauvages vivent en harmonie avec cette architecture élégante, quoique fort primitive pour vous. Sur votre gauche, des fresques épiques d'un style mosaïque ancien, mais délicatement conservées. À votre droite, des arches de pierre encadrées par des bannières flottant au vent donnent sur le paysage onirique d'une gigantesque cité blanche. Vous vous arrêtez brièvement. 
->intro_cachot_02.observe
= observe
* * * [Continuer de suivre les gardes]
Vous marchez le long du couloir, encadré par vos intéressants compagnons. Les fresques et le paysage inconnu attirent votre attention, mais vous préférez éviter les ennuis{intro_parangon_patience<=4:,  car vous voyez bien l'impatience se dessiner dans la démarche du colosse qui ferme la marche}.->intro_cachot_02.continue
+ + + [Avancer et observer {la première fresque|la seconde fresque|la dernière fresque}]
    ~ intro_parangon_patience+=1
    {
    - intro_parangon_patience < 5:
    {once:
    -Vous vous penchez sur la première fresque. Elle est ornée de signes indéchiffrables, ressemblant à des runes. Probablement le langage dans lequel on parle ici. Au centre de la fresque, une figure féminine très sobrement vêtue et flottant dans le ciel, dispersant les rayons d'un soleil rouge. Directement en dessous d'elle sont représentés deux figures simplifiées, plus petites. L'une d'entre elle baigne dans la lumière, tandis que l'autre dans les ténèbres.  ->observe
    -Vous vous approchez de la deuxième fresque. Ici, on peut y voir la figure féminine prendre la place de l'astre qu'elle couvrait dans la première image, et dispenser sa lumière sur une foule colorée. En dessous, on peut voir la femme dans une position recroquevillée, en train de dormir au centre d'un tronc d'arbre, dont l'image de la foule qui la surplombe constitue le feuillage de manière intriquée. ->observe
    -Vous posez enfin les yeux sur la dernière fresque de l'allée. On peut y voir une figure très détaillée, vêtue de l'exacte même armure que portent vos geôliers, enfoncer une épée dans le corps d'une créature voilée de ténèbres que vous avez vue dans la première histoire. La lumière jaillit de la plaie, tandis que la figure féminine flotte au-dessus de l'épéiste, ses mains délicatement posées sur ses épaules. Elle arbore un sourire apaisé.
    Le garde qui fermait la marche vous intone une remarque dans son langage, voyant que vous vous interessez à -vraisemblablement- son histoire. 
    ->intro_cachot_02.continue
    }
    - else: ->no_patience
    }
* * * [Vous approcher des arches pour regarder la cité]
~ background = "IMAGES/intro/corridor_view.png"
->arches
* * * -> intro_cachot_02.continue
= arches
Vous vous écartez de votre escorte pour vous approcher des arches.

Vous croyez rêver. De là où vous vous tenez, vous pouvez voir des bâtiments comme vous n’en avez jamais vus. Une végétation luxuriante court sur les façades des bâtiments de pierre claire, enrichies de mosaïques et ornées d’accents dorés. Des arches majestueuses, des ponts suspendus et des colonnades s’étendent à perte de vue, reliant des tours imposantes taillées à même les parois rocheuses escarpées sur lesquelles repose l’entière structure de la cité. Les tuiles des toits et les parures des bannières sont d’un turquoise éclatant qui se marie parfaitement avec le ton sablé des édifices.
Le soleil, à son zénith, lance des faisceaux de lumière qui se reflètent sur les vitraux et les détails métalliques des bâtiments, illuminant la cité d’une lueur presque irréelle. La roche naturelle qui encadre ces bâtiments, elle, brille d'un reflet iridescent légèrement rosé. 
Soudain, la réalisation vous percute. Pourquoi rien de tout ce que vous ne voyez ne vous est familier? Vous étiez jusqu'alors saisi par la surprise, mais tout cela vous accable d'un seul coup. 
"Où suis-je?"
Vous entendez le garde derrière vous vous adresser les mêmes mots que tout à l'heure. Il est temps de poursuivre.
* [Le suivre]Vous vous écartez des arches et reprenez votre marche. ->intro_cachot_02.continue
* [Ne rien faire]Vous ne bougez pas, et admirez encore quelques instants le paysage qui se dresse devant vous. -> intro_cachot_02.no_patience
= no_patience
Malheureusement, vous avez déjà épuisé la patience du garde qui vous attrape par le col et vous projette vers l'avant. Il vous crie cette fois un ordre que vous interprétez sans mal comme une invitation peu courtoise à poursuivre la marche, avant que les choses ne dégénèrent.->intro_cachot_02.continue
=continue
Vous finissez par atteindre une grande porte à l'autre bout du couloir, gardée par deux autres copies conformes des hommes en armure. L'un d'eux ouvre la porte. Vous êtes invité à entrer.
->intro_cachot_03
=== intro_cachot_03
* [Entrer]
Vous entrez dans la pièce.->intro_bureau
* [Ne rien faire]
~ intro_parangon_patience+=1
Le garde qui vous avait jusqu'alors accompagné vous <>
{
- intro_parangon_patience<5:
pousse sèchement dans la pièce.
- else:
bouscule avec force d'un coup de pied dans le dos. Vous êtes projeté dans la pièce.
}
->intro_bureau


