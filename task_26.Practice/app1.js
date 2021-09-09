let min = 1;
let max = 50;
function randomNumber(min, max){
    let n;
    n = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return n;
}

console.log(randomNumber(min, max))


