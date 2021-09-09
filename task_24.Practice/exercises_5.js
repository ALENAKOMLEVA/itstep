let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];
let n = 10;
let min = 1;
let max = 50;
let k = 5


for (let i = 0; i < n; i++){
    arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arrayOne)

let a = 0, b = 0;
for(let i = 0; i < n; i++){
    if(i % 2 == 0){
        arrayTwo[a] = arrayOne[i];
        a++;
    } else {
        arrayThree[b] = arrayOne[i];
        b++;
    }
}
console.log(arrayTwo, arrayThree)