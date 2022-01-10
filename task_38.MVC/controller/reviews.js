import { Reviews } from "../model/reviews.js";

class Reviewscontroller{
    static create (client, date, rate, text){
        let newReview = new Reviews(client, date, rate, text);
        console.log(newReview);
        return newReview;
    }
}

export {Reviewscontroller}