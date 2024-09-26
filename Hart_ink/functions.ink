=== rolld20(modifier, treshold, -> success, -> critsuccess, -> failure, -> critfailure ) ===
~ temp die_roll = RANDOM(1, 20)
~ temp result = die_roll + (modifier-10)/2

// Flavour text for the roll.
\[Seuil attendu: {treshold}\]
\[Votre jet: {result}\]

{
    - result == 20:
    -> critsuccesstext -> critsuccess
    - result == 1:
    -> critfailuretext -> critfailure
    - result >= treshold:
    -> successtext -> success
    - else:
    -> failuretext -> failure
}
=== successtext
(Succès.) <> ->->
=== failuretext
(Échec.) <> ->->
=== critsuccesstext
(Succès Critique!) <> ->->
=== critfailuretext
(Échec Critique!) <> ->->

=== function came_from(-> x)
    ~ return TURNS_SINCE(x) == 0