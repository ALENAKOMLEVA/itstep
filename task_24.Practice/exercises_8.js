let arrayOne = [];
let n = 10;
let min = 1;
let max = 50;



for (let i = 0; i < n; i++){
    arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arrayOne)


//метод splice
//arrayOne.splice(0, 1)


//
let k = 0;
for(let i = k + 1; i < n + 1; i++){
    arrayOne[i - 1] = arrayOne[i]
}

//i = k + 1; i = 0+1; i = 1;
//arrayOne[1 - 1] = arrayOne[0];
// i = 2;
//arrayOne[2 - 1] = arrayOne[1];
// i = 3;
//arrayOne[3 - 1] = arrayOne[2];
//элементы сдвигаются на индекс влевож
//i = 11;
//arrayOne[11 - 1] = arrayOne[10];


console.log(arrayOne)