import { Goose } from "./goose.js";

class Dragon extends Goose{
    constructor(color, size, name){
        super(color, size, name)
    }
    getSize(){
        console.log(`Дракоша ${this.name}, очень любил свой ${this.size} рост`)
       
    }
}

export {Dragon}