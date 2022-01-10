import { Users } from "./users.js";

class Drivers extends Users{
    car;
    reviews;
    constructor(name, login, password, car){
        super(name, login, password);
        this.car = car;
        this.reviews = [];
    }

    addReview(review){
        this.reviews.push(review);
    }
    addCar(car){
        this.car = car;
    }
    removeCar()
}

export {Drivers}