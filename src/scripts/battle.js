import Character from "./character";
import Particle from "../canvas/particle";

let zodiacs = require('./zodiacs').zodiacs


class Battle {
    constructor(character, ctx) {
        this.ctx = ctx
        this.battleState = 0;
        this.gameState = 0;
        this.anim = true;

        if (this.gameState === 0) {
            const modal = document.querySelector(".modal")
            modal.addEventListener("click", () =>{
                modal.style = "display: none"
                this.gameState += 1
            })
        }

        this.character = character

        let player = zodiacs[character]
        let generated = zodiacs[Math.floor(Math.random() * 12)]
        // console.log("hello this is battle")


        this.player = new Character(player)
        this.opponent = new Character(generated)
        // this.player.hp = 100
        // this.opponent.hp = 100
        this.ZodiacHPTag = null;
        this.ZodiacMPTag = null;
        this.OpponentHPTag = null;

        // console.log(this.player)
        // console.log(this.opponent)
        // console.log(`player is ${this.player.name}`)
        // console.log(`opponent is ${this.opponent.name}`)
        // console.log(`the hp of ${this.player.name} is ${this.player.hp}`)
        // console.log(`the hp of ${this.opponent.name} is ${this.player.hp}`)
        
        this.delay = this.delay.bind(this);
        this.gameWon = this.gameWon.bind(this);
        this.gameOver = this.gameOver.bind(this);
        
        this.init()
    }
    
    init() {
        const attack = document.querySelector(".attack")
        const magick = document.querySelector(".magic")  
        const heal = document.querySelector(".heal")

        attack.addEventListener("click", this.aiResponseAttack)
        magick.addEventListener("click", this.aiResponseMagick)
        heal.addEventListener("click", this.aiResponseHeal)

        const zodiacName = document.querySelector(".zodiac")
        zodiacName.innerHTML = this.player.name
        this.ZodiacHPTag = document.querySelector(".hp-gauge-bar")
        this.ZodiacHPTag.innerHTML = this.player.hp
        this.ZodiacMPTag = document.querySelector(".mp-gauge-bar")
        this.ZodiacMPTag.innerHTML = this.player.mp

        const opponentName = document.querySelector(".enemy_zodiac")
        opponentName.innerHTML = this.opponent.name
        this.OpponentHPTag = document.querySelector(".enemy_hp")
        this.OpponentHPTag.innerHTML = this.opponent.hp
    }

    
    delay(millis) {
        return new Promise((resolve, reject) => {
            if (millis < 0) {
                reject(new Error("millis less than 0"));
            } else {
                setTimeout(resolve, millis);
            }
        });
    }


    resetBattle = (zodiacId = this.character) => {
        this.character = zodiacId
        this.player = new Character(zodiacs[this.character])
        // this.player = new Character(zodiacs[this.character])
        this.opponent = new Character(zodiacs[Math.floor(Math.random() * 12)])
        

        /*start battle rendering*/
        let container = document.querySelector(".command-panel")
        let enemyContainer = document.querySelector(".enemy")
        container.style = "display: block"
        enemyContainer.style = "display: block"

        let command = document.querySelector(".command")
        command.style = "display: flex"

        let selector = document.querySelector(".modal")
        selector.style = "display: none"
        let won = document.querySelector(".won")
        let lost = document.querySelector(".lost")

        let playerHP = document.querySelector(".hp-gauge-bar")
        let enemyHP = document.querySelector(".enemy_hp")
        let playerName = document.querySelector(".zodiac")
        let enemyName = document.querySelector(".enemy_zodiac")
        playerHP.style = "display: flex"
        enemyHP.style = "display: flex"
        playerName.style = "display: flex"
        enemyName.style = "display: flex"

        /*start battle rendering - ending */

        this.init();
    }

    aiResponseAttack = () => {
        // this.opponent.attacked();
        // debugger

        // //animation
        // this.battleState = 1;
        
        // // const attackAnimation = new Particle(window.innerWidth * 0.10, window.innerHeight * 0.15, 200, '#98FB98', this.ctx)
        // // attackAnimation.draw();
        // // attackAnimation.update();
        // debugger
        // //timeout
        // setTimeout(() => {

        //     //start of orig
        //     this.OpponentHPTag.innerHTML = this.opponent.hp
        //     // let waiting = document.createElement("div");
        //     // waiting.innerHTML = " Waiting..."
        //     // const zodiactag = document.querySelector(".zodiac")
        //     // zodiactag.append(waiting)
        //     // setTimeout(() => {
        //     this.battleState = 0
        //     console.log("pause before retaliation")
        //     setTimeout(() => {

        //         if (this.opponent.hp < 30) {
        //             this.player.magicked();
        //             // this.battleState = 3;
        //             // this.ZodiacHPTag.innerHTML = this.player.hp
        //             // this.battleState = 0;
        //             // waiting.style = "display: none"

        //             //temporary
        //             setTimeout(() => {
        //                 this.battleState = 3;
        //                 this.ZodiacHPTag.innerHTML = this.player.hp
        //                 this.battleState = 0;
        //             }, 5000)
        //         } else {
        //             this.player.attacked();
        //             this.battleState = 2;
        //             // this.ZodiacHPTag.innerHTML = this.player.hp
        //             // this.battleState = 2;
        //             // waiting.style = "display: none"

        //             //temporary
        //             setTimeout(() => {
        //                 // this.player.attacked();
        //                 // this.battleState = 2;
        //                 this.ZodiacHPTag.innerHTML = this.player.hp
        //                 this.battleState = 0;
        //             }, 3000)
        //         }
        //         // console.log(`the current state is ${this.gameState}`)
                
        //         if (this.player.hp === 0) {
        //             this.battleState = 0;
        //             this.gameOver();
        //             // console.log(`state after game over is ${this.gameState}`)
        //         } else if (this.opponent.hp === 0) {
        //             this.battleState = 0;
        //             this.gameWon();
        //             // console.log(`state after game won is ${this.gameState}`)
        //         }
        
        //         // console.log(`state outside ${this.gameState}`)
                
        //     // }, 5000);
        //     //end of orig
        //     }, 50)

        // }, 3000);

        ///promise version
        const commands = document.querySelector(".command")

        this.opponent.attacked();
        this.battleState = 1;
        commands.style = "display: none"
        
        this.delay(3000).then(() => {
            this.OpponentHPTag.innerHTML = this.opponent.hp
            this.battleState = 0
            
        //animation of player attacking enemy lasting about 3 seconds
        //enemy hp go down after this animation
        //about 3 seconds of pause (maybe showing what the enemy will do)
        //evaluates it's response and retaliates (along with battlestate change)
        }).then(() => {
            this.delay(3000).then(() => {
                if (this.opponent.hp === 0) {
                    this.gameWon();
                    this.battleState = 0;
                    return;
                }

                if (this.opponent.hp < 30) {
                    this.player.magicked();
                    this.battleState = 4;
                } else {
                    this.player.attacked();
                    this.battleState = 2;
                }
            }).then(() => {
                this.delay(3000).then(() => {
                    this.ZodiacHPTag.innerHTML = this.player.hp
                    this.battleState = 0;
                    
                    if (this.player.hp === 0) {
                        this.gameOver();
                        this.battleState = 0;
                        return;
                    }
    
                    //ideally another .then waiting for gauge to be full before showing commands
                    commands.style = "display: block"
                })
            //this enemy retaliation will have about 3 seconds of animation before player's hp takes a hit
            })
        })

    };


    aiResponseMagick = () => {
        
        // // console.log(this.opponent.hp, this.player.hp)
        // this.opponent.magicked();
        // this.OpponentHPTag.innerHTML = this.opponent.hp
        // // let waiting = document.createElement("div");
        // // waiting.innerHTML = " Waiting..."
        // const zodiactag = document.querySelector(".zodiac")
        // // zodiactag.append(waiting)
        // // setTimeout(() => {
        //     if (this.opponent.hp < 30) {
        //         this.player.magicked();
        //         this.ZodiacHPTag.innerHTML = this.player.hp
        //         // waiting.style = "display: none"
        //     } else {
        //         this.player.attacked();
        //         this.ZodiacHPTag.innerHTML = this.player.hp
        //         // waiting.style = "display: none"
        //     }

        //     // console.log(`the current state is ${this.gameState}`)

        //     if (this.player.hp === 0) {
        //         this.gameOver();
        //         // console.log(`state after game over is ${this.gameState}`)
        //     } else if (this.opponent.hp === 0) {
        //         this.gameWon();
        //         // console.log(`state after game won is ${this.gameState}`)
        //     }
    
        //     // console.log(`state outside ${this.gameState}`)

        // // }, 1000);

        ///promise version
        const commands = document.querySelector(".command")

        this.opponent.magicked();
        this.battleState = 3;
        commands.style = "display: none"
        
        this.delay(3000).then(() => {
            this.OpponentHPTag.innerHTML = this.opponent.hp
            this.battleState = 0
        //animation of player attacking enemy lasting about 3 seconds
        //enemy hp go down after this animation
        //about 3 seconds of pause (maybe showing what the enemy will do)
        //evaluates it's response and retaliates (along with battlestate change)
        }).then(() => {
            this.delay(3000).then(() => {
                if (this.opponent.hp === 0) {
                    this.gameWon();
                    this.battleState = 0;
                    return;
                }

                if (this.opponent.hp < 30) {
                    this.player.magicked();
                    this.battleState = 4;
                } else {
                    this.player.attacked();
                    this.battleState = 2;
                }
            }).then(() => {
                this.delay(3000).then(() => {
                    this.ZodiacHPTag.innerHTML = this.player.hp
                    this.battleState = 0;

                    if (this.player.hp === 0) {
                        this.gameOver();
                        this.battleState = 0;
                        return;
                    }
                    //ideally another .then waiting for gauge to be full before showing commands
                    commands.style = "display: block"
                })
            //this enemy retaliation will have about 3 seconds of animation before player's hp takes a hit
            })
        })
    }

    aiResponseHeal = () => {
        
        // this.player.healed();
        
        // this.ZodiacHPTag.innerHTML = this.player.hp
        // // let waiting = document.createElement("div");
        // // waiting.innerHTML = " Waiting..."
        // const zodiactag = document.querySelector(".zodiac")
        // // zodiactag.append(waiting)
        // // setTimeout(() => {
        //     if (this.opponent.hp < 20) {
        //         this.player.magicked();
        //         this.ZodiacHPTag.innerHTML = this.player.hp
        //         // waiting.style = "display: none"
        //     } else {
        //         this.player.attacked();
        //         this.ZodiacHPTag.innerHTML = this.player.hp
        //         // waiting.style = "display: none"
        //     }

            
        //     // console.log(`the current state is ${this.gameState}`)

        //     if (this.player.hp === 0) {
        //         this.gameOver();
        //         // console.log(`state after game over is ${this.gameState}`)
        //     } else if (this.opponent.hp === 0) {
        //         this.gameWon();
        //         // console.log(`state after game won is ${this.gameState}`)
        //     }
    
        //     // console.log(`state outside ${this.gameState}`)
        // // }, 1000);

        ///promise version
        const commands = document.querySelector(".command")

        this.player.healed();
        this.battleState = 5;
        commands.style = "display: none"
        
        this.delay(1000).then(() => {
            this.ZodiacHPTag.innerHTML = this.player.hp
            this.battleState = 0
        //animation of player attacking enemy lasting about 3 seconds
        //enemy hp go down after this animation
        //about 3 seconds of pause (maybe showing what the enemy will do)
        //evaluates it's response and retaliates (along with battlestate change)
        }).then(() => {
            this.delay(3000).then(() => {
                if (this.opponent.hp === 0) {
                    this.gameWon();
                    this.battleState = 0;
                    return;
                }

                if (this.opponent.hp < 20) {
                    this.player.magicked();
                    this.battleState = 4;
                } else {
                    this.player.attacked();
                    this.battleState = 2;
                }
            }).then(() => {
                this.delay(3000).then(() => {
                    this.ZodiacHPTag.innerHTML = this.player.hp
                    this.battleState = 0;

                    if (this.player.hp === 0) {
                        this.gameOver();
                        this.battleState = 0;
                        return;
                    }
                    //ideally another .then waiting for gauge to be full before showing commands
                    commands.style = "display: block"
                })
            //this enemy retaliation will have about 3 seconds of animation before player's hp takes a hit
            })
        })

    }


    gameOver() {
        this.gameState += 1;
        const lost = document.querySelector(".lost")
        
        lost.style = "display: block"

        this.anim = false;

        return true;
    }

    gameWon() {
        this.gameState += 1;
        const won = document.querySelector(".won")
        won.style = "display: block"

        this.anim = false;

        return true;
    }
    // whoIsCurrentPlayer() {
    //     let current = this.currentPlayer
    //     if (current === this.currentPlayer) {
    //         current = this.opponent
    //     } else {
    //         current = this.currentPlayer
    //     }
    // }
    


}

export default Battle;

    


