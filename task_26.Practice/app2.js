function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}

let b = [];

b = fullArray(b, 10);
console.log(b);
