function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}

function decreaseEvenNumbers(arrayOne){
    for (let i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] % 2 == 0) {
            arrayOne[i] = arrayOne[i] / 2;
        }
    }    
    return arrayOne;
}

let b = [];
b = fullArray(b, 10);
console.log(b);

let decrease;
decrease = decreaseEvenNumbers(b);
console.log(decrease)