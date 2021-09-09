function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}


let x = 10;
function findElement (arrayOne){
    

    for(i = 0; i < arrayOne.length; i++){
        if(arrayOne[i] == x){
            
            return true;
        }
        
    }
    return false
}


let b = [];
b = fullArray(b, 10);
console.log(b);

let element;
element = findElement (b);
console.log(element)
