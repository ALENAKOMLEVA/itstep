let arrayOne = [];
let n = 10;
let min = 1;
let max = 50;
let k = 5


for (let i = 0; i < n; i++){
    arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(arrayOne)

let a = 0;
let b = 0;

for (let i = 0; i < n - 1; i++){
    if(arrayOne[i] > arrayOne[i + 1]){ //для сравнения элементов массива попарно
        a++; //считает количество сравнений для убывания или возрастания
    }
    if(arrayOne[i] < arrayOne[i + 1]){
        b++;
    }
}
if(a == n - 1){ // а должно быть равно 9 сравнениям, чтобы удовлетворить условию тк n - 1 то есть 10 -1 = 9
    console.log('по убыванию')
}
if(b == n - 1){
    console.log('по возрастанию')
}