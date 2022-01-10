import { Users } from "./users.js";

class Clients extends Users{
    phoneNumber;
    orders;
    constructor(name, lastName, login, password, phoneNumber){
        super(name, lastName, login, password)
        this.phoneNumber = phoneNumber;
        this.orders = [];
    }
    getOrder(order){
        this.orders.push(order)
    }

    info(){
        console.log(`Name: ${this.name}, LName: ${this.lastName} \nLogin: ${this.login}, Pass: ${this.password}`)
    }
}

export {Clients}