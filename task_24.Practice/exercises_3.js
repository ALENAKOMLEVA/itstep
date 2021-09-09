let arrayOne = [];
let n = 10;
let min = 1;
let max = 50;
let k = 5


for (let i = 0; i < n; i++){
    arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arrayOne)

//3
let maxElement = arrayOne[0]; //для начального значения максимального и минимального элементов
let minElement = arrayOne[0];
let sum = 0;
for (let i = 1; i < n; i++) {  
    if (arrayOne[i] > maxElement) //arrayOne[1] > arrayOne[0] - 1 элемент массива сравнивается с 0 элементом массива
        maxElement = arrayOne[i];
    if (arrayOne[i] < minElement)
        minElement = arrayOne[i];
}
sum = minElement + maxElement
console.log(maxElement, minElement)
