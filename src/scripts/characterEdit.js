class CharacterEdit {
    constructor(zodiac) {
        this.zodiac = zodiac
        this.zodiacName = zodiac.Zodiac
        this.hp = zodiac.HP

        this.AttackDamage = 20
        this.MagicDamage = zodiac.MagicDamage
        this.HealAmount = 20
    }
}

// export default CharacterEdit;
// module.exports = Character;