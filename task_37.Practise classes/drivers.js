import { Users } from "./users.js";

class Drivers extends Users{
    carNumber;
    constructor(name, lastName, login, password, carNumber){
        super(name, lastName, login, password);
        this.carNumber = carNumber;
    }
}

export {Drivers}