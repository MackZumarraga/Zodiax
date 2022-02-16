class Character {

    constructor(zodiac, round) {
        this.zodiac = zodiac
        this.name = zodiac.Zodiac
        this.round = round

        this.multiplier = this.round === 1 ? 1 : (this.round/100) + 1.1

        this.hp = Math.ceil(((this.zodiac.HP) ** this.multiplier) / 10) * 10;
        this.mp = Math.ceil(((this.zodiac.MP) ** this.multiplier) / 10) * 10;
        
        this.maxHp = this.hp
        this.maxMp = this.mp
        
        //ascension 
        this.ap = 0

        //action message
        this.messageContainer = document.querySelector(".message-container")
        this.actionMessage = document.querySelector(".action-message")

        //magic and curse
        this.magic = this.zodiac.Magic

        //Image
        this.playerPath = zodiac.Right
        this.enemyPath = zodiac.Left
    }

    attacked = () => {
        this.messageContainer.style = "display: flex"
        this.actionMessage.innerHTML = "Attack"

        const normAttack = Math.floor(Math.random() * (35 - 20) + 20)
        const attackDamage = this.round === 1 ? normAttack : Math.ceil((normAttack ** this.multiplier) / 10) * 10

        
        if (this.hp - attackDamage <= 0) {
            this.hp = 0

        } else {

            this.hp -= attackDamage
            const damages = Math.round((normAttack/this.maxHp) * 100) 
            this.ap = (this.ap + damages >= 100) ? 100 : this.ap + damages
        }
    }


    magicked = () => {
        this.messageContainer.style = "display: flex"

        const normMagick = Math.floor(Math.random() * (50 - 35) + 35)
        const magicDamage = this.round === 1 ? normMagick : Math.ceil((normMagick ** this.multiplier) / 10) * 10

        if (this.hp - magicDamage <= 0) {
            this.hp = 0
        } else {
            this.hp -= magicDamage
            const damages = Math.round((normMagick/this.maxHp) * 100) 
            this.ap = (this.ap + damages >= 100) ? 100 : this.ap + damages
        }
    }


    healed = () => {
        this.messageContainer.style = "display: flex"
        this.actionMessage.innerHTML = "Heal"

        const sevenths = this.maxHp * 0.70
        const normHeal = Math.floor(Math.random() * (this.maxHp - sevenths) + sevenths)
        const healAmount = this.round === 1 ? normHeal : Math.ceil((normHeal ** this.multiplier) / 10) * 10

        if (this.hp + healAmount > this.maxHp) {
            this.hp = this.maxHp
        } else {
            this.hp += healAmount
        }
    }


    charged = () => {
        this.messageContainer.style = "display: flex"
        this.actionMessage.innerHTML = "Charge"

        this.mp = this.maxMp
    }


    cursed = () => {
        this.messageContainer.style = "display: flex"
        this.actionMessage.innerHTML = "Curse"
        
        const hpHalved = this.maxHp / 2
        const normCurse = Math.floor(Math.random() * (this.maxHp - hpHalved) + hpHalved)

        if (this.hp - normCurse <= 0) {
            this.hp = 0

        } else {
            this.hp -= normCurse
            const damages = Math.round((normCurse/this.maxHp) * 100) 
            this.ap = (this.ap + damages >= 100) ? 100 : this.ap + damages
        }
    }

    //AI Response
    magickedPlus = () => {
        this.messageContainer.style = "display: flex"
        this.actionMessage.innerHTML = "Curse"

        const sevenths = this.maxHp * 0.70
        const damages = Math.floor(Math.random() * (this.maxHp - sevenths) + sevenths)
        
        if (this.hp - damages <= 0) {
            this.hp = 0
        } else {
            this.hp -= damages
            this.ap = (this.ap + damages >= 100) ? 100 : this.ap + damages
        }
    }

}

export default Character;
