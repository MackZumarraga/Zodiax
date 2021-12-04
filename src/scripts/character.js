class Character {
    constructor(zodiac, attacktag, magictag, healtag, hptag, zodiactag) {
        this.zodiac = zodiac
        this.hp = zodiac.HP
        this.MagicDamage = zodiac.MagicDamage

        this.attacktag = attacktag
        this.attacktag.innerHTML = "Attack"
        // this.attacktag.addEventListener("click", this.attacked.bind(this))

        this.magictag = magictag
        this.magictag.innerHTML = zodiac.Magic
        // this.magictag.addEventListener("click", this.magicked.bind(this))

        this.healtag = healtag
        this.healtag.innerHTML = "Heal"
        // this.healtag.addEventListener("click", this.healed.bind(this))

        this.hptag = hptag
        this.hptag.innerHTML = `HP: ${this.hp}`

        this.zodiactag = zodiactag
        this.zodiactag.innerHTML = `Zodiac: ${zodiac.Zodiac}`

        // this.attacked = this.attacked.bind(this); --used if attacked, magicked, healed are written ES5 version aka these functions' context is the element unless bounded specifically to this or whatever instance of character the function is being called on
    }

    attacked = () => {
        if (this.hp - 20 <= 0) {
            this.hp = 0
            alert("You're dead")
        } else {
            this.hp -= 20
            console.log(this.hp)
            console.log(this)
            this.hptag.innerHTML = `HP: ${this.hp}`
        }
    }


    magicked = () => {
        if (this.hp - this.MagicDamage <= 0) {
            this.hp = 0
            alert("You're dead")
        } else {
            this.hp -= this.MagicDamage
            console.log(this.hp)
            console.log(this)
            this.hptag.innerHTML = `HP: ${this.hp}`
        }
    }


    healed = () => {
        if (this.hp + 20 > 100) {
            this.hp = 100
        } else {
            this.hp += 20
        }
        console.log(this.hp)
        console.log(this)
        this.hptag.innerHTML = `HP: ${this.hp}`
    }

}

export default Character;