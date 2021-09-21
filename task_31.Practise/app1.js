let calculator = {
    a : 0,
    b : 0,
    add : function(){
        return this.a + this.b;
    },
    sub : function(){
        return this.a - this.b;
    },
    mul : function(){
        return this.a * 2;
    },
    dif : function(){
        return this.a / this.b;
    }
}


let x = 4;
let y = 5;
calculator.a = y, calculator.b = 2;
let o1 = calculator.mul();


calculator.a = x, calculator.b = o1;
let o2 = calculator.sub();


calculator.a = x, calculator.b = y;
let o3 = calculator.add();


calculator.a = o2, calculator.b = o3;
let o4 = calculator.dif();

console.log(o4)
