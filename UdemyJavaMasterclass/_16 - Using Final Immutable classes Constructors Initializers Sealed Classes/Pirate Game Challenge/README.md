## Pirate Game Challenge

This game will be a Pirate Game, and should extend the Game class we created previously.
It should have a Pirate class, which implements the Player interface.
Your game will have different levels, and each level will have a list of towns, which can be Strings for now.

Use an enum for the Weapon options.
Weapon should have two fields.
 - Hit points will get deducted from a player hit by this weapon.
 - Level will be the minimum level needed, to be able to use the weapon.
Use an enum constructor to set this up.
I also want you to think about how you could use instance or static initializers, as you build these types.

This diagram shows a model of the main entities, for my own Pirate game.
I'm going to create Weapon, as an enum, as suggested.
The Pirate class will implement the Player interface, from the last video.
Finally, I'll create a PirateGame class, that extends Game.


