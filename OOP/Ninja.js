class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`The ninja's name is ${this.name}.`);
    }

    showStats() {
        console.log(`${this.name} has ${this.strength} strength, ${this.speed} speed, and ${this.health} health.`);
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


////////////////// ADDED SENSEI CLASS ///////////////////////

class Sensei extends Ninja {
    constructor(name, wisdom = 10){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

console.log();
console.log("---------------Sensei----------------")
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"