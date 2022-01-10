import { Order } from "../model/order.js";

class OrderController{
    static create (request, driver){
        let newOrder = new Order(request, driver);
        
        console.log(newOrder);
        return newOrder;
    }
}

export {OrderController}