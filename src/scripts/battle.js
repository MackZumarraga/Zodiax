import Character from "./character";


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
        this.player = new Character(player, this.round)
        
        let generated = zodiacs[this.uniqueOpponent(11, character)]
        this.opponent = new Character(generated, this.round)
        
        this.playerMaxHp = this.player.hp
        this.opponentMaxHp = this.opponent.hp

        this.playerMaxMp = this.player.mp
        this.opponentMaxMp = this.opponent.mp

        this.playerOldHP = this.player.hp;
        this.opponentOldHP = this.opponent.hp;
         
        
        this.ZodiacHPTag = null;
        this.ZodiacMPTag = null;
        this.OpponentHPTag = null;


        this.ZodiacHPBar = null;
        this.ZodiacMPBar = null;

   
        this.playerDamage = document.querySelector(".player-damage")
        this.enemyDamage = document.querySelector(".enemy-damage")

        this.delay = this.delay.bind(this);
        this.gameWon = this.gameWon.bind(this);
        this.gameOver = this.gameOver.bind(this);

        this.slayed = [this.player.zodiac.Zodiac];

        this.uniqueOpponent = this.uniqueOpponent.bind(this);
        this.newOpponent = this.newOpponent.bind(this);

        //ascension
        this.currentPlayerAP = this.player.ap
        this.playerAscended = false; 


        //action message
        this.messageContainer = document.querySelector(".message-container")
        this.actionMessage = document.querySelector(".action-message")


        //magic and curse
        debugger
        this.currentPlayerMagic = this.player.magic

        
        this.init()
    }
    
    init() {
        this.anim = true;
        const attack = document.querySelector(".attack")
        const magick = document.querySelector(".magic")  
        const heal = document.querySelector(".heal")
        const special = document.querySelector(".special")
        const specialCommands = document.querySelector(".special-container")
        const charge = document.querySelector(".charge")
        const curse = document.querySelector(".curse")
        const back = document.querySelector(".back")

        //magic and curse naming
        magick.innerHTML = this.currentPlayerMagic === null ? this.player.magic : this.currentPlayerMagic

        attack.addEventListener("click", this.aiResponseAttack)
        magick.addEventListener("click", this.aiResponseMagick)
        heal.addEventListener("click", this.aiResponseHeal)
        
        special.addEventListener("click", () => {
            debugger
            let command = document.querySelector(".command")
            command.style = "display: none"
            specialCommands.style = "display: flex"
        })
        
        charge.addEventListener("click", this.aiResponseCharge)
        curse.addEventListener("click", this.aiResponseCurse)

        back.addEventListener("click", () => {
            debugger
            let command = document.querySelector(".command")
            specialCommands.style = "display: none"
            command.style = "display: flex"
        })
        

        const zodiacName = document.querySelector(".zodiac")
        zodiacName.innerHTML = this.player.name
        this.ZodiacHPTag = document.querySelector(".hp-gauge-bar")
        this.ZodiacHPTag.innerHTML = this.player.hp
        this.ZodiacMPTag = document.querySelector(".mp-gauge-bar")
        this.ZodiacMPTag.innerHTML = this.player.mp

        this.ZodiacMaxHPTag = document.querySelector(".max-hp")
        this.ZodiacMaxHPTag.innerHTML = this.playerMaxHp
        this.ZodiacMaxMPTag = document.querySelector(".max-mp")
        this.ZodiacMaxMPTag.innerHTML = this.playerMaxMp
        

        this.ZodiacHPBar = document.querySelector(".full-hp-bar")
        this.ZodiacMPBar = document.querySelector(".full-mp-bar")

        this.EnemyHPBar = document.querySelector(".enemy-full-hp-bar")
        

        const opponentName = document.querySelector(".enemy_zodiac")
        opponentName.innerHTML = this.opponent.name
        this.OpponentHPTag = document.querySelector(".enemy_hp")
        this.OpponentHPTag.innerHTML = this.opponent.hp
        this.OpponentMaxHPTag = document.querySelector(".enemy-max-hp")
        this.OpponentMaxHPTag.innerHTML = this.opponentMaxHp  

        //ascension
        this.PlayerAPTag = document.querySelector(".ap-gauge-bar")
        this.PlayerAPTag.innerHTML = this.player.ap
        this.PlayerAPBar = document.querySelector(".full-ap-bar")
        this.PlayerAPBar.style = `width: ${130 * (this.player.ap/100)}px`

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
        this.player = new Character(zodiacs[this.character], this.round)
        this.slayed.includes(this.player.zodiac.Zodiac) ? null : this.slayed.push(this.player.zodiac.Zodiac)
        
        
        const randomOpponent = zodiacs[Math.floor(Math.random() * 12)]
        const zodius = zodiacs[12]
        debugger
        this.opponent = new Character((this.round === 12 ? zodius : this.newOpponent(randomOpponent)), this.round)

        //opponent hp increase
        if (this.round > 1) {
            this.multiplier = (this.round/100) + 1
            const increaseOpponentHP = Math.ceil(((this.opponent.hp) ** this.multiplier) / 10) * 10;
            console.log(this.opponent.hp)
            console.log(increaseOpponentHP)
            this.opponent.hp = increaseOpponentHP
            console.log(this.opponent.hp)
        }

        //hp mp bar stabilizer
        this.playerMaxHp = this.player.hp
        this.opponentMaxHp = this.opponent.hp

        this.playerMaxMp = this.player.mp
        this.opponentMaxMp = this.opponent.mp
        
        //hp mp reinitializer
        this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/this.playerMaxMp)}px`

        const magickMPCheck = document.querySelector(".magic")
        const healMPCheck = document.querySelector(".heal")
        magickMPCheck.style = "color: whitesmoke !important; pointer-events: auto;"
        healMPCheck.style = "color: whitesmoke !important; pointer-events: auto;"


        this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

        this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/this.opponentMaxHp)}px`

        //Old hp
        this.playerOldHP = this.player.hp;
        this.opponentOldHP = this.opponent.hp;


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

        //ascension
        debugger
        console.log(`this player ap is ${this.player.ap}`)
        console.log(`this current player ap is ${this.currentPlayerAP}`)
        this.player.ap = this.currentPlayerAP //ap from the previous battle assigned to new player.ap
        debugger

        //magic and curse
        this.player.magic = this.currentPlayerMagic === null ? this.player.magic : this.currentPlayerMagic;
        

        this.init();
    }

    uniqueOpponent(lengthOfArray, indexToExclude) {
        let rand = null;  
        debugger
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
        ///promise version
        const commands = document.querySelector(".command")
        const specialButton = document.querySelector(".special")

        this.opponent.attacked();
        this.battleState = 1;
        commands.style = "display: none"
        
        this.delay(1000).then(() => {
            this.battleState = 0;
            this.OpponentHPTag.innerHTML = this.opponent.hp
            this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/this.opponentMaxHp)}px`

            let opponentDamage = this.opponentOldHP - this.opponent.hp
            this.enemyDamage.innerHTML = (opponentDamage * -1)
            this.enemyDamage.style = "display: block"
            this.opponentOldHP = this.opponent.hp            
        }).then(() => {
            this.delay(1000).then(() => {
                const painThreshold = (Math.random() * 100)/100

                this.enemyDamage.style = "display: none"

                if (this.opponent.hp === 0 || this.battleState === 'new match') {                    
                    this.gameWon();
                    this.battleState = 'new match';
                    return;
                } else if (this.opponent.hp < (painThreshold * this.opponentMaxHp) && this.opponent.hp > 0) {

                    if (Math.random() < 0.1) {
                        this.player.magickedPlus()
                    } else {
                        this.player.magicked()
                        this.actionMessage.innerHTML = this.opponent.magic
                    };

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
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

                    let playerDisplayDamage = this.playerOldHP - this.player.hp
                    this.playerDamage.innerHTML = (playerDisplayDamage * -1)
                    this.playerDamage.style = "display: block"
                    this.playerOldHP = this.player.hp

                    //ascension
                    this.currentPlayerAP = this.player.ap;
                    this.PlayerAPTag.innerHTML = this.currentPlayerAP
                    
                    this.PlayerAPBar.style = `width: ${130 * (this.currentPlayerAP/100)}px`

                    if (this.currentPlayerAP === 100) {
                        this.playerAscended = true;
                        specialButton.style = "color: whitesmoke !important; pointer-events: auto;"
                    }
                    
                    this.battleState = 0;
                }).then(() => {
                    this.delay(1000).then(() => {                        
                        //action message
                        this.messageContainer.style = "display: none"

                        if (this.player.hp === 0) {

                            this.battleState = 'new match'
                            this.playerDamage.style = "display: none"
                            this.gameOver();
                            return;
                        }

                        commands.style = "display: flex"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
                })
            })
        })

    };


    aiResponseMagick = () => {

        ///promise version
        const commands = document.querySelector(".command")
        const specialButton = document.querySelector(".special")
        
        this.opponent.magicked();
        this.battleState = 3;

        this.actionMessage.innerHTML = this.player.magic

        this.player.mp -= 30;
        this.ZodiacMPTag.innerHTML = this.player.mp
        this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/this.playerMaxMp)}px`

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
            this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/this.opponentMaxHp)}px`

            let opponentDamage = this.opponentOldHP - this.opponent.hp
            this.enemyDamage.innerHTML = (opponentDamage * -1)
            this.enemyDamage.style = "display: block"
            this.opponentOldHP = this.opponent.hp
        }).then(() => {
            this.delay(1000).then(() => {
                const painThreshold = (Math.random() * 100)/100

                this.enemyDamage.style = "display: none"

                if (this.opponent.hp === 0 || this.battleState === 'new match') {

                    this.gameWon();
                    this.battleState = 'new match';
                    
                    return;
                } else if (this.opponent.hp < (painThreshold * this.opponentMaxHp) && this.opponent.hp > 0) {
                    
                    if (Math.random() < 0.2) {
                        this.player.magickedPlus()
                    } else {
                        this.player.magicked()
                        this.actionMessage.innerHTML = this.opponent.magic
                    };

                    if ((this.playerOldHP - this.player.hp) === 0) {
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
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

                    let playerDisplayDamage = this.playerOldHP - this.player.hp
                    this.playerDamage.innerHTML = (playerDisplayDamage * -1)
                    this.playerDamage.style = "display: block"
                    this.playerOldHP = this.player.hp


                    //ascension
                    this.currentPlayerAP = this.player.ap;
                    this.PlayerAPTag.innerHTML = this.currentPlayerAP
                    
                    this.PlayerAPBar.style = `width: ${130 * (this.currentPlayerAP/100)}px`

                    if (this.currentPlayerAP === 100) {
                        this.playerAscended = true;
                        specialButton.style = "color: whitesmoke !important; pointer-events: auto;"
                    }

                    this.battleState = 0;
                }).then(() => {
                    this.delay(1000).then(() => {

                        //action message
                        this.messageContainer.style = "display: none"


                        if (this.player.hp === 0) {
    
                            this.battleState = 'new match'
                            this.playerDamage.style = "display: none"
                            this.gameOver();
                            return;
                        } 

                        commands.style = "display: flex"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
                })
            })
        })
    }

    aiResponseHeal = () => {

        ///promise version
        const commands = document.querySelector(".command")
        const specialButton = document.querySelector(".special")

        this.player.healed();
        this.battleState = 5;

        this.player.mp -= 10;
        this.ZodiacMPTag.innerHTML = this.player.mp
        this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/this.playerMaxMp)}px`

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
            this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

            let playerHeal = this.player.hp - this.playerOldHP
            this.playerDamage.innerHTML = playerHeal
            this.playerDamage.style = "display: block"
            this.playerOldHP = this.player.hp

        }).then(() => {
            this.delay(1000).then(() => {
                const painThreshold = (Math.random() * 100)/100

                this.playerDamage.style = "display: none"

                if (this.opponent.hp === 0) {
                    this.gameWon();
                    this.battleState = 0;
                    return;
                } else if (this.opponent.hp < (painThreshold * this.opponentMaxHp) && this.opponent.hp > 0) {
                    if (Math.random() < 0.3) {
                        this.player.magickedPlus()
                    } else {
                        this.player.magicked()
                        this.actionMessage.innerHTML = this.opponent.magic
                    };

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
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

                    let playerDisplayDamage = this.playerOldHP - this.player.hp
                    this.playerDamage.innerHTML = (playerDisplayDamage * -1)
                    this.playerDamage.style = "display: block"
                    this.playerOldHP = this.player.hp
                    

                    //ascension
                    this.currentPlayerAP = this.player.ap;
                    this.PlayerAPTag.innerHTML = this.currentPlayerAP
                    this.PlayerAPBar.style = `width: ${130 * (this.currentPlayerAP/100)}px`


                    if (this.currentPlayerAP === 100) {
                        this.playerAscended = true;
                        specialButton.style = "color: whitesmoke !important; pointer-events: auto;"
                    }

                    this.battleState = 0;

                }).then(() => {
                    this.delay(1000).then(() => {

                        //action message
                        this.messageContainer.style = "display: none"


                        if (this.player.hp === 0) {

                            this.battleState = 'new match'
                            this.playerDamage.style = "display: none"
                            this.gameOver();
                            return;
                        } 

                        commands.style = "display: flex"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
                })
            })
        })

    }


    aiResponseCharge = () => {
        
        const commands = document.querySelector(".command")
        const specialCommands = document.querySelector(".special-container")
        const specialButton = document.querySelector(".special")

        this.player.charged();
        this.battleState = 5;

        //ascension
        this.player.ap = 0
        this.currentPlayerAP = 0
        this.PlayerAPTag.innerHTML = this.player.ap
        this.playerAscended = false;
        specialButton.style = "color: grey !important; pointer-events: none;"
        this.PlayerAPBar.style = `width: ${130 * (this.player.ap/100)}px`

        //commands disappear
        const magickMPCheck = document.querySelector(".magic")
        const healMPCheck = document.querySelector(".heal")
        
        if (this.player.mp >= 30) {
            magickMPCheck.style = "color: whitesmoke !important; pointer-events: auto;"
        }
        if (this.player.mp >= 10) {
            healMPCheck.style = "color: whitesmoke !important; pointer-events: auto;"
        }

        commands.style = "display: none"
        specialCommands.style = "display: none"

        this.delay(1000).then(() => {
            this.battleState = 0
            debugger
            this.ZodiacMPTag.innerHTML = this.player.mp
            this.ZodiacMPBar.style = `width: ${130 * (this.player.mp/this.playerMaxMp)}px`

        }).then(() => {
            this.delay(1000).then(() => {
                const painThreshold = (Math.random() * 100)/100

                this.playerDamage.style = "display: none"

                if (this.opponent.hp === 0) {

                    this.gameWon();
                    this.battleState = 0;
                    return;
                } else if (this.opponent.hp < (painThreshold * this.opponentMaxHp) && this.opponent.hp > 0) {
                
                    if (Math.random() < 0.1) {
                        this.player.magickedPlus()
                    } else {
                        this.player.magicked()
                        this.actionMessage.innerHTML = this.opponent.magic
                    };

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
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

                    let playerDisplayDamage = this.playerOldHP - this.player.hp
                    this.playerDamage.innerHTML = (playerDisplayDamage * -1)
                    this.playerDamage.style = "display: block"
                    this.playerOldHP = this.player.hp
                    

                    //ascension
                    this.currentPlayerAP = this.player.ap;
                    this.PlayerAPTag.innerHTML = this.currentPlayerAP
                    this.PlayerAPBar.style = `width: ${130 * (this.currentPlayerAP/100)}px`

                    if (this.currentPlayerAP === 100) {
                        this.playerAscended = true;
                        specialButton.style = "color: whitesmoke !important; pointer-events: auto;"
                    }


                    this.battleState = 0;

                }).then(() => {
                    this.delay(1000).then(() => {
                        //action message
                        this.messageContainer.style = "display: none"


                        if (this.player.hp === 0) {

                            this.battleState = 'new match'
                            this.playerDamage.style = "display: none"
                            this.gameOver();
                            return;
                        } 

                        commands.style = "display: flex"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
                })
            })
        })

    }


    aiResponseCurse = () => {
        
        const commands = document.querySelector(".command")
        const specialCommands = document.querySelector(".special-container")
        const specialButton = document.querySelector(".special")

        this.opponent.cursed();
        this.battleState = 3;


        //ascension
        this.player.ap = 0
        this.currentPlayerAP = 0
        this.PlayerAPTag.innerHTML = this.player.ap
        this.playerAscended = false;
        specialButton.style = "color: grey !important; pointer-events: none;"
        this.PlayerAPBar.style = `width: ${130 * (this.player.ap/100)}px`

        //commands disappear
        commands.style = "display: none"
        specialCommands.style = "display: none"

        this.delay(1000).then(() => {
            this.battleState = 0
            debugger
            this.OpponentHPTag.innerHTML = this.opponent.hp
            this.EnemyHPBar.style = `width: ${300 * (this.opponent.hp/this.opponentMaxHp)}px`

            let opponentDamage = this.opponentOldHP - this.opponent.hp
            this.enemyDamage.innerHTML = (opponentDamage * -1)
            this.enemyDamage.style = "display: block"
            this.opponentOldHP = this.opponent.hp

        }).then(() => {
            this.delay(1000).then(() => {
                const painThreshold = (Math.random() * 100)/100

                this.enemyDamage.style = "display: none"

                if (this.opponent.hp === 0 || this.battleState === 'new match') {

                    this.gameWon();
                    this.battleState = 'new match';
                    // break;
                    return;
                } else if (this.opponent.hp < (painThreshold * this.opponentMaxHp) && this.opponent.hp > 0) {
            
                    if (Math.random() < 0.5) {
                        this.player.magickedPlus()
                    } else {
                        this.player.magicked()
                        this.actionMessage.innerHTML = this.opponent.magic
                    };


                    if ((this.playerOldHP - this.player.hp) === 0) {
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
                    this.ZodiacHPBar.style = `width: ${130 * (this.player.hp/this.playerMaxHp)}px`

                    let playerDisplayDamage = this.playerOldHP - this.player.hp
                    this.playerDamage.innerHTML = (playerDisplayDamage * -1)
                    this.playerDamage.style = "display: block"
                    this.playerOldHP = this.player.hp


                    //ascension
                    this.currentPlayerAP = this.player.ap;
                    this.PlayerAPTag.innerHTML = this.currentPlayerAP
                    this.PlayerAPBar.style = `width: ${130 * (this.currentPlayerAP/100)}px`

                    if (this.currentPlayerAP === 100) {
                        this.playerAscended = true;
                        specialButton.style = "color: whitesmoke !important; pointer-events: auto;"
                    }
                    
                    this.battleState = 0;

                }).then(() => {
                    this.delay(1000).then(() => {
                         //action message
                        this.messageContainer.style = "display: none"

                        if (this.player.hp === 0) {

                            this.battleState = 'new match'
                            this.playerDamage.style = "display: none"
                            this.gameOver();
                            // this.battleState = 0;
                            return;
                        } 

                        commands.style = "display: flex"
                        this.playerDamage.style = "display: none"
                        if (this.player.hp === 0 || this.opponent.hp === 0) return;
                    })
                })
            })
        })

    }


    gameOver() {

        //music
        const musicControl = document.querySelector(".music")
        const musicTag = document.getElementById("music");
        const musicTagLost = document.getElementById("music-lost");

        if (musicControl.innerHTML === "music: ON") {
            musicTag.pause();
            musicTag.currentTime = 0;
            musicTagLost.play();
        }
        //music

        this.slayed = [];
        console.log(this.slayed);

        this.gameState += 1;
        this.round = 1;

        //ascension
        document.querySelector(".special").style = "color: grey !important; pointer-events: none;"

        this.player.ap = 0;
        this.currentPlayerAP = 0;

        //magic and curse
        this.currentPlayerMagic = null;

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

        //music
        const musicControl = document.querySelector(".music")
        const musicTag = document.getElementById("music");
        const musicTagWon = document.getElementById("music-won");

        if (musicControl.innerHTML === "music: ON") {
            musicTag.pause();
            musicTag.currentTime = 0;
            musicTagWon.play();
        }
        //music


        this.slayed.push(this.opponent.name)
        console.log(`after a battle ${this.slayed}`);

       
        this.gameState += 1;

        if (this.round < 12) {
            this.round += 1;
            //pre zodius
            const won = document.querySelector(".won")
            const next = document.querySelector(".restart_won")
    
            won.style = "display: block"
           
            this.delay(2000).then(() => {
                next.style = "display: flex"
            });
        } else {
            //post zodius
            this.round = 1;

            //ascension
            document.querySelector(".special").style = "color: grey !important; pointer-events: none;"
            
            this.player.ap = 0;
            this.currentPlayerAP = 0;

            //magic and curse
            this.currentPlayerMagic = null;

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
}

export default Battle;

    


