//Сервис предоставляет возможность заказа такси. 2 типа пользователей:  клиент – может размещать заказы на поездки с выбранным типом комфорта, 
//цена формируется автоматические исходя из километража (можно брать из API карт); водитель – может выполнять заказы на поездку. 
//Также должна быть возможность написания отзыва по окончанию поездки.

import { Users } from "./users.js";
import { Clients } from "./clients.js";
import { Drivers } from "./drivers.js";
import { Orders } from "./orders.js";
import { Reviews } from "./reviews.js";

let order1 = new Orders('comfort', 2)
let order2 = new Orders('business', 5)
let client1 = new Clients('Kate', 'Petrova', 'K123789', 1234567, '+44885158588');
let client2 = new Clients('Max', 'Ivanov', 'M94248', 123456784, '+44885158857858');
let driver1 = new Drivers('Nim', 'Kovalev', 'M94248', 1234784, '+44885158', 4578);
console.log(driver1)
order1.placeOrder();
order2.startOrder();

client1.getOrder(order1);
console.log(client1.orders)

client2.getOrder(order2);
console.log(client2.orders)

