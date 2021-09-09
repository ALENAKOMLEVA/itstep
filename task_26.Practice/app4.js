function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}





function findIndexMax(arrayOne) {
    let maxIndex = 1;
    let max = arrayOne[1];
 
    for (let i = 0; i < arrayOne.length; i++) {
      
      if (arrayOne[i] > max) {
        max = arrayOne[i]
        maxIndex = i;
      }
    }
    return maxIndex
}

let b = [];
b = fullArray(b, 10);
console.log(b);

let index;
index = findIndexMax(b);
console.log(index)