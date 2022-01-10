let a = 5;
let total = 0;

Number.prototype.factorialNumber = function(){
    
    for(let i = 0; i <= this; i++){
        total = total * 2;
    }
    return total;
}
console.log(a.factorialNumber())