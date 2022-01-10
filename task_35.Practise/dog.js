import {Animal} from "./animal.js"

class Dog extends Animal{
    tail;
    constructor(food, location, name, tail){
        super(food, location, name);
        this.tail = tail;
    }

    makeNoise(){
        console.log(`${this.name} гав-гав`)
    }
    eat(){
        console.log(`Ест свою ${this.food}`)
    }
    sleep(){
        console.log(`${this.name} спит`);
    }
    dogTail(){
        console.log(`${this.name} виляет ${this.tail}`)
    }

}

export{Dog}