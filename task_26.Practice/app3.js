function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}




function findMaxElement (arrayOne){

    let maxElement = arrayOne[0]; 
   
    for (let i = 1; i < arrayOne.length; i++) {  
        if (arrayOne[i] > maxElement)
        maxElement = arrayOne[i];
     
    }
    return maxElement;
}


let b = [];
b = fullArray(b, 10);
console.log(b);


let element;
element = findMaxElement(b);
console.log(element)
