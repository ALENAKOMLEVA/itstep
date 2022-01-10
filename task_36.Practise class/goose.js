class Goose {
    color;
    size;
    name;
    constructor(color, size, name){
        this.color = color;
        this.size = size;
        this.name = name;
    }
    getSize(){
        console.log(`Такой-то гусь по имени ${this.name}, был ого-го какой ${this.size}`)
    }
}

export {Goose}