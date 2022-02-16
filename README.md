# Zodiax

## BACKGROUND AND OVERVIEW
Zodiax is a turn-based strategy game centered on the 12 zodiac signs. The player is able to take turns and fight an AI controlled zodiac opponent. Each zodiac character has its own unique set of attributes including skills, magic, and default actions. These actions will be displayed in a command panel which players can interact with. Their choices will determine whether their strategy benefits them in the upcoming match (12 matches in total). Once any player's HP reaches 0, the match ends and the game either progresses or halts.

**Check out the game by clicking this link!**   
[Link to live version](https://mackzumarraga.github.io/Zodiax/)
      

## TECHNOLOGIES
- Javascript
- Canvas API
- Webpack
- npm


## Main Features  

### Select Player and Introduction Modal  
- instructions on the mechanics of the game  
- users are able to select a zodiac from an introduction modal as their character before a match begins  

![image](https://user-images.githubusercontent.com/86270564/154357804-c80a55c5-a8c5-4354-af1e-38fd59fa2e5c.png)


### Command Panel and Animation  
- interact with a command panel that displays character status and available actions	
- battle against other AI controlled zodiac characters (implemented randomized opponent generator)
- selected action capabilities (attack, magic, heal) display changes in player's HP and MP
- Canvas API renders characters and action animations  

![image](https://user-images.githubusercontent.com/86270564/154359447-95f2abc0-7161-4065-a530-58dee71b6ac2.png)
![image](https://user-images.githubusercontent.com/86270564/154359871-ed3748a5-c69c-4273-8cb7-1e7a9562c102.png)  
	
### Additional Features
- music added during game play, match won, and match lost (including mute/unmute music button)
- restart game  

### Bonus Features
- select multiple players
- navigate character in an open world containing access points to specific locations
- gain experience points and money after each battle that will allow them to modify character's attributes inside a customizations menu (pops up after each battle)
- implement player abilities/status customization menu 
- add non-playable characters
