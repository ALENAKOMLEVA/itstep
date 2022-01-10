import { Person } from "./person.js";

class Driver extends Person{
    experience;
    constructor(experience, fullName, age){
        super(fullName, age);
        this.experience = experience;
    }
}

export {Driver}