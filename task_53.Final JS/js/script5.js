let arrOne = [1, 5, 8, 2, 6];
let arrTwo = [3, 5, 8, 8, 3];
let k = 5;
let a;
let b;
let razn;

a = arrOne[0] //1
b = arrTwo[0] //3
razn = Math.abs(k - (a + b)) //5 - (1+3) = 1
for(let i = 0; i < arrOne.length; i++){ //1
    for(let j = 0; j < arrTwo.length; j++){ //3
        if(Math.abs(k - (arrOne[i] + arrTwo[j])) < razn){ //5-(1+3) < 1 - 1-1 - razn = 1
            razn = k - (arrOne[i] + arrTwo[j])
            a = arrOne[i]
            b = arrTwo[j]
        }
    }
} 
console.log(a, b)

/* 
итерации идут так - берется число с первого массива и сравнивается со всеми числами второго
на первой итерации 1 сравнивается с 3, на второй 1 с 5, на третьей 1 с 8 и тд
когда сравнит 1 со всеми числами второго массива, то начинает сравнивать 5 со всеми числами второго массива
*/