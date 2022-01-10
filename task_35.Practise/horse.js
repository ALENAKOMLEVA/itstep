import {Animal} from "./animal.js"

class Horse extends Animal{
    height;
    constructor(food, location, height, name){
        super(food, location, name)
        this.height = height;
    }
    makeNoise(){
        console.log(`${this.name} иго-го`)
    }
    eat(){
        console.log(`Ест свою ${this.food}`)
    }
    sleep(){
        console.log(`${this.name} спит`);
    }
}

export{Horse}