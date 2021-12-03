# Zodiax

BACKGROUND AND OVERVIEW
Zodiax is a turn-based strategy game centered on the 12 zodiac signs. The player is able to take turns and fight an AI controlled zodiac opponent. Each zodiac character has its own unique set of attributes including skills, magic, and default actions. These actions will be displayed in a command panel which players can interact with. Their choices will determine whether their strategy benefits them in the upcoming turn.
			1. A dead character can be revived by an alive character
			2. Once all characters of any side dies, the game ends and the winner is declared
      
      *A player is suggested to select zodiac of each element (fire, air, water, earth) for a more flexible and advantageous strategies.
      
      -link to live version
      

TECHNOLOGIES
		-Javascript for the interactivity logic
		-Canvas API to render the character animations and command panel
		-Webpack to bundle JavaScript files for usage in browser
		-npm for project dependencies management


FUNCTIONALITY AND MVPS
-In Zodiac Wars, users will be able to (with images/gifs)
	-select a party of four characters where each zodiac will have varying characteristics such as skills, magic, maximum health, etc.
	-interact with a set of commands that determines the character's actions by clicking or using keyboard	
	-battle against other AI controlled zodiac characters
	
-Additional Features
	-Game rules and background story
	-Production README
  
  
WIREFRAME
-nav links to github repo, linkedin, angellist, and about modal
-game controls picking party members, 
-command panel actions
-restart, pause, quit game
-mute/unmute music button


IMPLEMENTATION TIMELINE
-Friday Afternoon and Weekend - create skeleton character (for user and AI opponent) with basic action capabilities, implement hp and mp increase or decrease based on action/s, create the turn base timer allowing current user to switch from user to AI, define other characters/opponents and their specific attributes
-Monday - add landing page, introduction, and game over sections, animations finalized, randomized opponent generator for each level
-Tuesday - finalize design, add music for each level, about me links
-Wednesday - debugging and testing (clean up of code), editing of readme with code snippets and images/gifs - if there's time -> bonus features
-Thursday - debugging and testing

Bonus Features
  -(OPTIONAL - future feature) select difficulty and access secret boss
  -(OPTIONAL - future feature) navigate character in an open world containing access points to specific locations
  -(OPTIONAL - future feature) gain experience points and money after each battle that will allow them to modify character's attributes inside a customizations menu (pops up after each battle)
  -(OPTIONAL - future feature) customization menu can also be where a user can buy items/weapons/armor to enhance attributes or simply equip a different weapon/armor (items slots will be limited during actual battle so a user must choose wisely)
  -(OPTIONAL - future feature) engage in a dialogue with non-playable characters