let d = []
let  count = 0;
let n = 10;
const min = 1;
const max = 100;

for (let i = 0; i < n; i++){
    d[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(d)


for (let i = 0; i < n; i++){
    if (d[i] % 2 == 0)
    count++;
}
//console.log("Количество четных чисел" + count)

let maxElement = d[0];
for (let i = 1; i < n; i++) {  
    if (d[i] > maxElement)
        maxElement = d[i];
}
//console.log(maxElement)

let sum = 0;
for (let i = 0; i < n; i++){
    sum = sum + d[i];
    
}
//console.log(sum / n)

let reverse = [];
for (let k = 0, i = n-1; k < n; k++, i--){ //k - это порядковый номер элементов в новом массиве; k < n - проверяет, чтобы в новом массиве было столько же элементов сколько в старом
    reverse[k] = d[i];
}
console.log(d,reverse);
