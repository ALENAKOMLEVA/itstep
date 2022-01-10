import { Phone } from "./phone.js";
let firstPhone = new Phone(80123, 'Samsung', 150);
let secondPhone = new Phone(801234, 'Samsung', 150);
let thirtPhone = new Phone(8012954985, 'Samsung', 150);

// firstPhone.receineCall('Vasya')
// firstPhone.getNumber();

// secondPhone.receineCall('Kate');
// secondPhone.getNumber();

// thirtPhone.receineCall('Ira');
// thirtPhone.getNumber();


import { Student } from "./student.js";
import { Aspirant } from "./aspirant.js";

let student1 = new Student('Petya', 'Ivanov', 21, 5)
let student2 = new Student('Vasya', 'Petrov', 21, 5)
let aspirant = new Aspirant('Kate', 'Orlova', 49, 3, 'Article')

let students = [];
students.push(student1);
students.push(student2);
students.push(aspirant);
students.forEach(function(item) {
    // console.log(item.getScolarship())
});


import { Goose } from "./goose.js";
import { Dragon } from "./dragon.js";

let goose = new Goose('серый', 'маленький', 'Геннадий');
// goose.getSize();

let dragon = new Dragon('синий', 'огромный', 'Василий');
// dragon.getSize();

import { Category } from "./category.js";
import { Basket} from "./basket.js"
import {Product} from "./product.js"
import { User} from "./user.js"

let milk = new Product('Milk', 2, 5);
let egg = new Product('Egg', 5, 3);
let bread = new Product('Bread', 1, 4);
let cream = new Product('Cream', 4, 6);
let chocolate = new Product('Chocolate', 8, 4);
let milkProd = [milk, cream];
let allProd = [milk, egg, bread, cream, chocolate];
let category1 = new Category('category 1', milkProd);
let category2 = new Category('category 2', allProd);
let milkBasket = new Basket(milkProd);
let current = new User(123456, 'currentPassword', milkBasket);



import { Car } from "./car.js";
import { Engine } from "./engine.js";
import { Driver } from "./driver.js";
import { Person } from "./person.js";
import { Lorry } from "./lorry.js";
import { sportCar } from "./sport_car.js";

let Mark = new Person("Mark Cow", 13);
let DriverMark = new Driver(10);
let Motor = new Engine(750, "H&M");
let Mers = new Car("luxary", Motor, DriverMark, "Mers-Benz");
Motor.show();
