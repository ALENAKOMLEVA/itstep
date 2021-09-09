function fullArray (arrayOne, n){
    
    let min = 1;
    let max = 50;
    for (let i = 0; i < n; i++){
        arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return arrayOne;
}

function arraySum(arrayOne){
    let sum = 0;
    for(let i = 0; i < arrayOne.length; i++){ //i < arrayOne.length; метод length просто посчитает количество элементов в массиве
        sum = sum + arrayOne[i];
    }
    return sum;
}

let b = [];

b = fullArray(b, 5); //в массив b занесется результат функции fullArray, которая вернет заполненный массив b размером 5
console.log(b);

let sum;
sum = arraySum(b);
console.log(sum)

//
