## Adventure Game Challenge

In this challenge, you'll be creating a text based game, using a HashMap.
This game will be loosely based on the original Colossal Cave Adventure, which was one of the first adventure games, that came out years and years ago.

This slide shows a conceptual map of the game I want you to build.
The game starts, with the user standing in a road, in the center of the map.
North would take the user to the Forest, South would take the user to the Valley, East would be the well house, and West would be the Hill.

You'll want to use two HashMaps in this challenge, one for the board locations, and one for the next places data.
This slide shows one way to structure your data.

Use a HashMap for the game board locations, keyed on a short descriptor, road or stream, for example, or some other key of your choice.
Your Location class should have a location description, and could also have a field, a HashMap, to store next places to go from there.

Use the console to describe to the player what their current location is, (starting at the road), and show them what options they have to go from here.
Prompt the player to enter the direction they want to go next.
Continue to play until the user quits, Q for quit for example.

A bonus part of the challenge is to allow customizations to the board locations, as well as the next place directions.

Lake is already in my map, but I want to customize it, first by describing it, naming it Lake Tim, and then adding two additional destinations from there, a cave to the north, and an ocean to the east.
The cave and ocean will be additional board locations.
Right now, from the lake, I can only go west to the forest, or south to the well house.