class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`The ninjas name is ${ this.name }.`);
    }

    showStats() {
        console.log(`${ this.name } has ${this.strength} strength, ${this.speed} speed, and ${this.health} health.`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank the sake. +10HP`)
    }
}


const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();