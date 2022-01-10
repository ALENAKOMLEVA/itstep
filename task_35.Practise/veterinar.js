import {Animal} from "./animal.js"

class Veterinar{
    treatAnimal(animal){
        console.log(`${animal.name} ест ${animal.food} в месте ${animal.location}`);
    }
}

export {Veterinar}