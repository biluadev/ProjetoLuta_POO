


// Knight ou Sorcerer 
// LittleMonster ou BigMonster

class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1Element = fighter1Element;
        this.fighter2Element = fighter2Element;
    }

    start() {
        this.update();

        this.fighter1Element.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2Element.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        // Fighter 1
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Percent = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1Element.querySelector('.bar').style.width = `${f1Percent}%`;
        // Fighter 2
        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Percent = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2Element.querySelector('.bar').style.width = `${f2Percent}%`;
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            console.log('Atacando cachorro morto');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            console.log(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano ${attacked.name}`)
        } else {
            console.log(`${attacked.name} conseguiu defender...`);
        }

        this.update();
    }
}