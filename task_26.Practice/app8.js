function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}


let x;
function findElement (arrayOne, x){
    let k = 0, m;

    for(i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] == x){ 
            k++;
            m = i;
            break;
        }
    }
    if(k != 0){
        return m;
    }
    else{
        return -1;
    }
}

let b = [];
b = fullArray(b, 10);
console.log(b);

let element;
element = findElement (b, 12);
console.log(element)