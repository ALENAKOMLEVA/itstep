import { Animal } from "./animal.js";
import { Dog } from "./dog.js";
import { Cat } from "./cat.js";
import{Horse} from "./horse.js"



let dog = new Dog("Bone","Home","Rex","Long tail");
dog.sleep();
dog.makeNoise();
dog.eat();
dog.dogTail();

let cat = new Cat("Meat","Home","Барсик", "beautiful ear");
cat.sleep();
cat.makeNoise();
cat.eat();
console.log(cat.earBrushes);

console.log(Animals);
for(let i = 0; i<Animals.length; i++){
    vet.treatAnimal(Animals[i]);
}

