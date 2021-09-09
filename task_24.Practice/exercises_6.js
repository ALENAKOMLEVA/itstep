let arrayOne = [];
let n = 10;
let min = 1;
let max = 50;
let k = 5


for (let i = 0; i < n; i++){
    arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arrayOne)


for (let i = 0; i < n; i++){
    if(arrayOne[i] % 2 == 0) {
        arrayOne[i] = arrayOne[i] / 2;
    } else {
        arrayOne[i] = arrayOne[i] + 1;
    }
}
console.log(arrayOne)