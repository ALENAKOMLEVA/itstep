import { Car } from "../model/car.js";

class CarController{
    static create (model, number, color, childrenChair, capacity, comfort){
        let newCar = new Car(model, number, color, childrenChair, capacity, comfort);
        console.log(newCar);
        return newCar;
    }
}

export {CarController}