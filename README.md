# Zodiax

## BACKGROUND AND OVERVIEW
Zodiax is a turn-based strategy game centered on the 12 zodiac signs. The player is able to take turns and fight an AI controlled zodiac opponent. Each zodiac character has its own unique set of attributes including skills, magic, and default actions. These actions will be displayed in a command panel which players can interact with. Their choices will determine whether their strategy benefits them in the upcoming turn. Once all characters of any party dies, the game ends and the winner is declared.
      
[Link to live version](https://mackzumarraga.github.io/Zodiax/)
      

## TECHNOLOGIES
- Javascript
- Canvas API
- Webpack
- npm


## FUNCTIONALITY AND MVPS
##### In Zodiac Wars, users will be able to (with images/gifs)
- select a party of four characters where each zodiac will have varying characteristics
- interact with a command panel that displays charater states and accepts player's actions	
- battle against other AI controlled zodiac characters
	
#### Additional Features
- Game rule
- Production README
  
  
## WIREFRAME
![screenshot](https://user-images.githubusercontent.com/86270564/144552361-50f9aba1-faa7-43bd-ae0d-d39bf7389266.PNG)

	-nav links to github repo, linkedin, angellist
	-game controls picking party members, 
	-command panel actions
	-restart, pause, quit game
	-mute/unmute music button


## IMPLEMENTATION TIMELINE
- Friday Afternoon and Weekend: **CHARACTER AND BATTLE SYSTEM**
 	- create skeleton character (for user and AI opponent) using Canvas
		- define characters/opponents and their specific attributes and capabilities
	- create command panel sections using Canvas
		- display character state
		- display timer gauge
		- display action options
	- create arena as background using Canvas
	- create menu for selecting party members
		- implement randomized opponent generator
		
- Monday: **COMMAND PANEL FEATURES**
	- implement action capabilities (attack, magic, heal)
		- display changes in hp and mp (increase or decrease based on action/s)

- Tuesday: **GAME SETUP**
	- create the turn base timer forcing player's queued actions to execute and switch from user to AI
		- implement AI response
	- add landing page
		- create introduction, game over, about me links section

- Wednesday: **DESIGN**
	- enhance character, command panel, and arena design
	- add music
	- edit readme with code snippets and images/gifs 
	- if there's time -> bonus features


### Bonus Features
- select difficulty and access secret boss
- navigate character in an open world containing access points to specific locations
- gain experience points and money after each battle that will allow them to modify character's attributes inside a customizations menu (pops up after each battle)
- create customization menu where a user can buy items/weapons/armor to enhance attributes or simply equip a different weapon/armor (items slots will be limited during actual battle so a user must choose wisely)
- engage in a dialogue with non-playable characters
