// import CharacterEdit from "./characterEdit";
// const Character = require("./character");

const gemini = {
    "Zodiac": "Gemini",
    "HP": 100,
    "MP": 50,
    "Magic": "Nether Storm",
    "MagicDamage": 50,
    "Vulnerability": "Pisces",
    "Element": "Air"
    }


class Battle {
    constructor() {
        //pseudo code that iterates over the attributes of the zodiac

        this.player = new CharacterEdit(gemini)
        console.log(this.player)
        // this.enemy = new Character(scorpio, eAttack, eMagick, eHeal, eHp, eZodiacTag)
        
        this.arena = Battle.makeArena
    }

    


    createArena() {
        //pseudo code that creates the battle arena
        //displays parties
    }

    inject() {
        //inject the dom created to some container
    }


    gameOver() {
        //checks to see that player/enemy is dead
    }
}   

// export default Battle;
module.exports = Battle;