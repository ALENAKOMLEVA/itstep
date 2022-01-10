import { Clients } from "../model/clients.js";
import { Reviews} from "../model/reviews.js"

class ClientController{
    static create (name, login, password){
        let newClient = new Clients(name, login, password);
        console.log(newClient);
        return newClient;
    }
    static update (client, name, login, password){
        client.name = name;
        client.login = login;
        client.password = password;
        return client;
    }

    static createReview(client, date, rate, text){
        let review = new Reviews(client, date, rate, text);
        return review;
    }

    // static delete(client){
    //     delete client;
    // }
}

export {ClientController}