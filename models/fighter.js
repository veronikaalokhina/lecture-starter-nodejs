class Fighter {
    constructor({ id, name, power, defense, health = 85 }) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.defense = defense;
        this.health = health;
    }

    static validate(fighter) {
        if (!fighter.name) {
            throw new Error('Invalid name');
        }

        if (!Number.isInteger(fighter.power) || fighter.power < 1 || fighter.power > 100) {
            throw new Error('Invalid power');
        }

        if (!Number.isInteger(fighter.defense) || fighter.defense < 1 || fighter.defense > 10) {
            throw new Error('Invalid defense');
        }

        if (fighter.health && (fighter.health < 80 || fighter.health > 120)) {
            throw new Error('Invalid health');
        }

        return true;
    }
}

export default Fighter;



