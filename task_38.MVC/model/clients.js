import { Users } from "./users.js";

class Clients extends Users{
    constructor (name, login, password){
        super(name, login, password);
    }
}

export {Clients}