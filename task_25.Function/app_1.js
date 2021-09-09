function fullArray(arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}

function increaseEvenNumbers(arrayOne){
    for (let i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] % 2 == 0) {
            arrayOne[i] = arrayOne[i] * 2;
        }
    }    
    return arrayOne;
}


function deleteElement(arrayOne){
    let k = 0;
    for(let i = k + 1; i < arrayOne.length + 1; i++){
        arrayOne[i - 1] = arrayOne[i];
    }
    return arrayOne;
}



console.log(findIndexOfMinMax(arrayOne))
let c;
c = increaseEvenNumbers(b);
console.log(c)

let d;
d = deleteElement(b);
console.log(d)
