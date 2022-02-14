class Character {
    // constructor(zodiac, attacktag, magictag, healtag, hptag, zodiactag) {
    //     this.zodiac = zodiac
    //     this.zodiacName = zodiac.Zodiac
    //     this.hp = zodiac.HP
    //     this.MagicDamage = zodiac.MagicDamage

    //     this.attacktag = attacktag
    //     this.attacktag.innerHTML = "Attack"
    //     // this.attacktag.addEventListener("click", this.attacked.bind(this))

    //     this.magictag = magictag
    //     this.magictag.innerHTML = zodiac.Magic
    //     // this.magictag.addEventListener("click", this.magicked.bind(this))

    //     this.healtag = healtag
    //     this.healtag.innerHTML = "Heal"
    //     // this.healtag.addEventListener("click", this.healed.bind(this))

    //     this.hptag = hptag
    //     this.hptag.innerHTML = `HP: ${this.hp}`

    //     this.zodiactag = zodiactag
    //     this.zodiactag.innerHTML = `Zodiac: ${zodiac.Zodiac}`

    //     // this.attacked = this.attacked.bind(this); --used if attacked, magicked, healed are written ES5 version aka these functions' context is the element unless bounded specifically to this or whatever instance of character the function is being called on
    // }

    // constructor(zodiac) {
    //     this.zodiac = zodiac
    //     this.zodiacName = zodiac.Zodiac
    //     this.hp = zodiac.HP
    // }

    constructor(zodiac, round) {
        this.zodiac = zodiac
        this.name = zodiac.Zodiac
        this.round = round

        // const zodiacHP = zodiac.HP
        
        // this.hp = 100
        // this.mp = 100
        debugger
        this.multiplier = this.round === 1 ? 1 : (this.round/10) + 1

        this.hp = Math.ceil(((this.zodiac.HP) ** this.multiplier) / 10) * 10;
        this.mp = Math.ceil(((this.zodiac.MP) ** this.multiplier) / 10) * 10;
        // this.mp = (this.zodiac.MP) ** this.multiplier

        // this.MagicDamage = Math.floor(Math.random() * (50 - 35) + 35)
        // this.attackDamage = Math.floor(Math.random() * (20 - 5) + 5)
        // this.healAmount = Math.floor(Math.random() * (20 - 10) + 10)
        // this.randomizer = Math.floor(Math.random() * (max - min) + min)
        

        //Image
        this.zodiacPath = zodiac.Image
    }

    attacked = () => {
        const normAttack = Math.floor(Math.random() * (20 - 5) + 5)
        const attackDamage = this.round === 1 ? normAttack : Math.ceil((normAttack ** this.multiplier) / 10) * 10
        
        if (this.hp - attackDamage <= 0) {
            this.hp = 0
            // this.hptag.innerHTML = `HP: ${this.hp}`
            // alert (`${this.zodiacName} is dead`)
        } else {
            debugger
            // let randomizer = Math.random()
            debugger
            this.hp -= attackDamage
            // console.log(this.hp)
            // console.log(this)
            // this.hptag.innerHTML = `HP: ${this.hp}`
        }
    }


    magicked = () => {
        const normMagick = Math.floor(Math.random() * (50 - 35) + 35)
        const MagicDamage = this.round === 1 ? normMagick : Math.ceil((normMagick ** this.multiplier) / 10) * 10
        
        if (this.hp - MagicDamage <= 0) {
            this.hp = 0
            // this.hptag.innerHTML = `HP: ${this.hp}`
            // alert (`${this.zodiacName} is dead`)
        } else {
            this.hp -= MagicDamage
            // console.log(this.hp)
            // console.log(this)
            // this.hptag.innerHTML = `HP: ${this.hp}`
        }
    }


    healed = () => {
        const normHeal = Math.floor(Math.random() * (30 - 10) + 10)
        const healAmount = this.round === 1 ? normHeal : Math.ceil((normHeal ** this.multiplier) / 10) * 10

        if (this.hp + healAmount > 100) {
            this.hp = 100
        } else {
            this.hp += healAmount
        }
        // console.log(this.hp)
        // console.log(this)
        // this.hptag.innerHTML = `HP: ${this.hp}`
    }

}

export default Character;
// module.exports = Character;