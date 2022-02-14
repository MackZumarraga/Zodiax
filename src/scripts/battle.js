import Character from "./character";
import Particle from "../canvas/particle";

let zodiacs = require('./zodiacs').zodiacs


class Battle {
    constructor(character, ctx, round) {
        this.ctx = ctx
        this.battleState = 0;
        this.gameState = 0;
        this.anim = true;
        this.round = round;

        if (this.gameState === 0) {
            const modal = document.querySelector(".modal")
            modal.addEventListener("click", () =>{
                modal.style = "display: none"
                this.gameState += 1
            })
        }

        this.character = character

        let player = zodiacs[character]
        this.player = new Character(player)
        // debugger
        // let generated = zodiacs[Math.floor(Math.random() * 12)]
        // console.log("hello this is battle")

        let generated = zodiacs[this.uniqueOpponent(11, character)]
        this.opponent = new Character(generated)
        // this.opponent = new Character(zodius)

        // debugger

        
        // this.opponent = new Character(generated)
        debugger
        // this.player.hp = 100
        this.opponentOldHP = 100;
        this.playerOldHP = 100;

             
        
        this.ZodiacHPTag = null;
        this.ZodiacMPTag = null;
        this.OpponentHPTag = null;


        this.ZodiacHPBar = null;
        this.ZodiacMPBar = null;

        // console.log(this.player)
        // console.log(this.opponent)
        // console.log(`player is ${this.player.name}`)
        // console.log(`opponent is ${this.opponent.name}`)
        // console.log(`the hp of ${this.player.name} is ${this.player.hp}`)
        // console.log(`the hp of ${this.opponent.name} is ${this.player.hp}`)

   
        this.playerDamage = document.querySelector(".player-damage")
        this.enemyDamage = document.querySelector(".enemy-damage")

        // this.aiResponseAttack = this.aiResponseAttack.bind(this);
        // this.aiResponseMagick = this.aiResponseMagick.bind(this);
        // this.aiResponseHeal = this.aiResponseHeal.bind(this);
        this.delay = this.delay.bind(this);
        this.gameWon = this.gameWon.bind(this);
        this.gameOver = this.gameOver.bind(this);

        this.slayed = [this.player.zodiac.Zodiac];
        this.uniqueOpponent = this.uniqueOpponent.bind(this);
        this.newOpponent = this.newOpponent.bind(this);
        
        this.init()
    }
    
    init() {
        this.anim = true;
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
        


        this.ZodiacHPBar = document.querySelector(".full-hp-bar")
        this.ZodiacMPBar = document.querySelector(".full-mp-bar")

        this.EnemyHPBar = document.querySelector(".enemy-full-hp-bar")
        

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
        const next = document.querySelector(".restart_won")
        next.style = "display: none"

        
        this.anim = true;
        this.character = zodiacId
        this.player = new Character(zodiacs[this.character])
        // this.player = new Character(zodiacs[this.character])
        // this.opponent = new Character(zodiacs[Math.floor(Math.random() * 12)])
        // const confirmedOpponent = !this.slayed.includes(randomOpponent.name) ? randomOpponent :
        
        const randomOpponent = zodiacs[Math.floor(Math.random() * 12)]
        const zodius = zodiacs[12]
        debugger
        this.opponent = new Character(this.round === 12 ? zodius : this.newOpponent(randomOpponent))
        
        //hp mp reinitializer
        this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/100)}px`

        const magickMPCheck = document.querySelector(".magic")
        const healMPCheck = document.querySelector(".heal")
        magickMPCheck.style = "color: whitesmoke !important; pointer-events: auto;"
        healMPCheck.style = "color: whitesmoke !important; pointer-events: auto;"


        this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/100)}px`

        this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/100)}px`

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

        let playerMP = document.querySelector(".mp-gauge-bar")
        playerMP.style = "display: flex"

        /*start battle rendering - ending */

        this.init();
    }

    uniqueOpponent(lengthOfArray, indexToExclude) {
        let rand = null;  

        while (rand === null || rand === indexToExclude) {
            rand = Math.round(Math.random() * (lengthOfArray - 1));
        }

        return rand;
    }

    newOpponent(randomOpponent) {
        debugger
        while (this.slayed.includes(randomOpponent.Zodiac)) {
            debugger
            randomOpponent = zodiacs[Math.floor(Math.random() * 12)]
        }

        debugger
        return randomOpponent;
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
        
        this.delay(1000).then(() => {
            this.battleState = 0;
            this.OpponentHPTag.innerHTML = this.opponent.hp
            this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/100)}px`

            let opponentDamage = this.opponentOldHP - this.opponent.hp
            this.enemyDamage.innerHTML = (opponentDamage * -1)
            this.enemyDamage.style = "display: block"
            this.opponentOldHP = this.opponent.hp

            // this.battleState = 0
            
        //animation of player attacking enemy lasting about 3 seconds
        //enemy hp go down after this animation
        //about 3 seconds of pause (maybe showing what the enemy will do)
        //evaluates it's response and retaliates (along with battlestate change)
        }).then(() => {
            this.delay(1000).then(() => {
                this.enemyDamage.style = "display: none"

                if (this.opponent.hp === 0 || this.battleState === 'new match') {
                    
                    this.playerOldHP = 100
                    this.opponentOldHP = 100

                    this.gameWon();
                    this.battleState = 'new match';
                    // this.anim = false;
                    return;
                } else if (this.opponent.hp < 30 && this.opponent.hp > 0) {
                    this.player.magicked();
                    // this.battleState = 4;

                    // if ((this.playerOldHP - this.player.hp) === 0) {
                    //     this.battleState = 0;
                    //     return;
                    // } else {
                    //     this.battleState = 4;
                    // }
                    if (this.battleState === 'new match') {
                        this.battleState = 0;
                        return;
                    } else {
                        this.battleState = 4;
                    }

                } else {
                    this.player.attacked();
                    this.battleState = 2;
                }
            }).then(() => {
                this.delay(1000).then(() => {
                    // if (this.gameWon() || this.gameOver()) return;
                    
                    
                    this.ZodiacHPTag.innerHTML = this.player.hp
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/100)}px`
                    
                    if (this.player.hp === 0) {
                    
                        this.playerOldHP = 100
                        this.opponentOldHP = 100

                        this.battleState = 'new match'

                        this.gameOver();
                        return;
                    } else {
                        let playerDamage = this.playerOldHP - this.player.hp
                        this.playerDamage.innerHTML = (playerDamage * -1)
                        // playerDamage === 0 ? this.playerDamage.style = "display: none" : this.playerDamage.style = "display: block"
                        if (playerDamage === 0 || this.battleState === 'new match') {
                            this.playerDamage.style = "display: none"
                            return;
                        } else {
                            this.playerDamage.style = "display: block"
                        }
                        // this.playerDamage.style = "display: block"
                        this.playerOldHP = this.player.hp
                    }

                    // let playerDamage = this.playerOldHP - this.player.hp
                    // this.playerDamage.innerHTML = (playerDamage * -1)
                    // this.playerDamage.style = "display: block"
                    // this.playerOldHP = this.player.hp

                    this.battleState = 0;
                    
                    // if (this.player.hp === 0) {
                    //     this.gameOver();
                    //     this.anim = false;
                    //     this.battleState = 0;
                    //     return;
                    // }
    
                }).then(() => {
                    this.delay(1000).then(() => {
                        // if (this.player.hp === 0 || this.opponent.hp === 0) return;
                        // if (this.gameWon() || this.gameOver()) return;
                        //ideally another .then waiting for gauge to be full before showing commands
                        commands.style = "display: block"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
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

        //mp decrease
        // console.log(this.player.mp)
        this.player.mp = this.player.mp - 30
        // console.log(this.player.mp)
        this.ZodiacMPTag.innerHTML = this.player.mp
        this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/100)}px`

        //commands disappear
        const magickMPCheck = document.querySelector(".magic")
        const healMPCheck = document.querySelector(".heal")
        
        if (this.player.mp < 30) {
            magickMPCheck.style = "color: grey !important; pointer-events: none;"
        }
        if (this.player.mp < 10) {
            healMPCheck.style = "color: grey !important; pointer-events: none;"
        }

        commands.style = "display: none"
        
        this.delay(1000).then(() => {
            this.battleState = 0;
            this.OpponentHPTag.innerHTML = this.opponent.hp
            this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/100)}px`

            let opponentDamage = this.opponentOldHP - this.opponent.hp
            this.enemyDamage.innerHTML = (opponentDamage * -1)
            this.enemyDamage.style = "display: block"
            this.opponentOldHP = this.opponent.hp

            // this.battleState = 0
        //animation of player attacking enemy lasting about 3 seconds
        //enemy hp go down after this animation
        //about 3 seconds of pause (maybe showing what the enemy will do)
        //evaluates it's response and retaliates (along with battlestate change)
        }).then(() => {
            this.delay(1000).then(() => {
                this.enemyDamage.style = "display: none"

                if (this.opponent.hp === 0 || this.battleState === 'new match') {

                    this.playerOldHP = 100
                    this.opponentOldHP = 100

                    this.gameWon();
                    this.battleState = 'new match';
                    // break;
                    return;
                // if (this.gameWon() === true) {

                //     this.playerOldHP = 100
                //     this.opponentOldHP = 100

                //     this.gameWon();
                    // return;
                } else if (this.opponent.hp < 30 && this.opponent.hp > 0) {
                    this.player.magicked();

                    if ((this.playerOldHP - this.player.hp) === 0) {
                        this.battleState = 0;
                        return;
                    } else {
                        this.battleState = 4;
                    }

                    // this.battleState = 4;
                } else {
                    this.player.attacked();
                    this.battleState = 2;
                }
            }).then(() => {
                this.delay(1000).then(() => {
                    this.ZodiacHPTag.innerHTML = this.player.hp
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/100)}px`

                    if (this.player.hp === 0) {

                        this.playerOldHP = 100
                        this.opponentOldHP = 100

                        this.battleState = 'new match'

                        this.gameOver();
                        // break;
                        return;
                    // if (this.gameOver() === true) {

                    //     this.playerOldHP = 100
                    //     this.opponentOldHP = 100

                    //     this.gameOver();
                    //     return;
                    } else {
                        let playerDamage = this.playerOldHP - this.player.hp
                        this.playerDamage.innerHTML = (playerDamage * -1)
                        // playerDamage === 0 ? this.playerDamage.style = "display: none" : this.playerDamage.style = "display: block"
                        if (playerDamage === 0 || this.battleState === 'new match') {
                            this.playerDamage.style = "display: none"
                            return;
                        } else {
                            this.playerDamage.style = "display: block"
                        }
                        // this.playerDamage.style = "display: block"
                        this.playerOldHP = this.player.hp
                    }


                    this.battleState = 0;
                }).then(() => {
                    this.delay(1000).then(() => {
                        //ideally another .then waiting for gauge to be full before showing commands
                        commands.style = "display: block"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
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

        this.player.mp = this.player.mp - 10
        // console.log(this.player.mp)
        this.ZodiacMPTag.innerHTML = this.player.mp
        this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/100)}px`

        //commands disappear
        const healMPCheck = document.querySelector(".heal")
        const magickMPCheck = document.querySelector(".magic")
        
        if (this.player.mp < 30) {
            magickMPCheck.style = "color: grey !important; pointer-events: none;"
        }
        if (this.player.mp < 10) {
            healMPCheck.style = "color: grey !important; pointer-events: none;"
        }

        commands.style = "display: none"
        
        this.delay(1000).then(() => {
            this.battleState = 0

            this.ZodiacHPTag.innerHTML = this.player.hp
            this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/100)}px`

            let playerHeal = this.player.hp - this.playerOldHP
            this.playerDamage.innerHTML = playerHeal
            this.playerDamage.style = "display: block"
            this.playerOldHP = this.player.hp

        //animation of player attacking enemy lasting about 3 seconds
        //enemy hp go down after this animation
        //about 3 seconds of pause (maybe showing what the enemy will do)
        //evaluates it's response and retaliates (along with battlestate change)
        }).then(() => {
            this.delay(1000).then(() => {
                this.playerDamage.style = "display: none"

                if (this.opponent.hp === 0) {

                    this.playerOldHP = 100
                    this.opponentOldHP = 100

                    this.gameWon();
                    this.battleState = 0;
                    return;
                } else if (this.opponent.hp < 20 && this.opponent.hp > 0) {
                    this.player.magicked();
                    // this.battleState = 4;

                    if (this.battleState === 'new match') {
                        this.battleState = 0;
                        return;
                    } else {
                        this.battleState = 4;
                    }

                } else {
                    this.player.attacked();
                    this.battleState = 2;
                }
            }).then(() => {
                this.delay(1000).then(() => {
                    this.ZodiacHPTag.innerHTML = this.player.hp
                    

                    if (this.player.hp === 0) {

                        this.playerOldHP = 100
                        this.opponentOldHP = 100

                        this.battleState = 'new match'

                        this.gameOver();
                        // this.battleState = 0;
                        return;
                    } else {
                        let playerDamage = this.playerOldHP - this.player.hp
                        this.playerDamage.innerHTML = (playerDamage * -1)
                        // playerDamage === 0 ? this.playerDamage.style = "display: none" : this.playerDamage.style = "display: block"
                        // this.playerDamage.style = "display: block"

                        if (playerDamage === 0 || this.battleState === 'new match') {
                            this.playerDamage.style = "display: none"
                            return;
                        } else {
                            this.playerDamage.style = "display: block"
                        }

                        this.playerOldHP = this.player.hp
    
                    }

                    this.battleState = 0;

                }).then(() => {
                    this.delay(1000).then(() => {
                        //ideally another .then waiting for gauge to be full before showing commands
                        commands.style = "display: block"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
                })
            //this enemy retaliation will have about 3 seconds of animation before player's hp takes a hit
            })
        })

    }


    gameOver() {
        this.slayed = [];
        console.log(this.slayed);

        this.gameState += 1;
        this.round = 1;

        const lost = document.querySelector(".lost")
        const restart = document.querySelector(".restart_lost")
        
        lost.style = "display: block"

        this.delay(2000).then(() => {
            restart.style = "display: flex"
        });
        

        this.anim = false;

        return true;
    }

    gameWon() {
        this.slayed.push(this.opponent.name)
        console.log(this.slayed);

        this.round += 1;
        this.gameState += 1;

        if (this.round < 13) {
            //pre zodius
            const won = document.querySelector(".won")
            const next = document.querySelector(".restart_won")
    
            won.style = "display: block"
           
            this.delay(2000).then(() => {
                next.style = "display: flex"
            });
        } else {
            //pre zodius
            const wonFinished = document.querySelector(".finished-container")
            const restart = document.querySelector(".restart-game")
    
            wonFinished.style = "display: block"
           
            this.delay(2000).then(() => {
                restart.style = "display: flex"
            });
        }

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

    


