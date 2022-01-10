class Elips {
    a = 0;
    b = 0;
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    getSquare(){
        return Math.PI * this.a *this.b;
    }
}

let ellipse = new Elips(3, 4);
console.log(ellipse.getSquare())

class Ellipsoid extends Elips {
    c;
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getSquare(){
        return 3/4 * Math.PI * this.a * this.b * this.c;
    }
    getVolume(){
        return 4/3 * Math.PI * this.a * this.b * this.c;
    }
}

let ellipsoid = new Ellipsoid(3,4,5);
console.log(ellipsoid.getSquare())