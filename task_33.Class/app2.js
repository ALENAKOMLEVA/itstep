class Clothes {
    color;
    size;
    material;
    constructor(color, size, material){
        this.color = color;
        this.size = size;
        this.materi = material;
    }
}
let clothes = new Clothes('blue', 46, 'jeans');
console.log(clothes)

class Shirt extends Clothes {
    length;
    belt;
    constructor(color, size, material, length, belt){
        super(color, size, material);
        this.length = length;
        this.belt = belt;
    }
}
let shirt = new Shirt('blue', 46, 'jeans', 80, 'yes');
console.log(shirt.color)

class Trousers extends Clothes {
    collar;
    constructor(color, size, material, collar){
        super(color, size, material);
        this.collar = collar;
    }
}
let trousers = new Trousers('blue', 46, 'jeans', 30);
console.log(trousers.collar)
