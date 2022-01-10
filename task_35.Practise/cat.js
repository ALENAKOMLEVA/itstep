import {Animal} from "./animal.js"

class Cat extends Animal{
    earBrushes;
    constructor(food, location, name, earBrushes){
        super(food, location, name);
        this.earBrushes = earBrushes;
    }
    makeNoise(){
        console.log(`${this.name} мяу-мяу`)
    }
    eat(){
        console.log(`Ест свою ${this.food}`)
    }
    sleep(){
        console.log(`${this.name} спит`);
    }
}

export {Cat}