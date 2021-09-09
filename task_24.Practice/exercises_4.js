let arrayOne = [];
let n = 10;
let min = 1;
let max = 50;
let k = 5;
let count = 0;

for (let i = 0; i < n; i++){
    arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(arrayOne)

//4
let maxElement = arrayOne[0];
let minElement = arrayOne[0];
let iMax = 0;
let iMin = 0;

for (let i = 1; i < n; i++) {  
    if (arrayOne[i] > maxElement) {
        maxElement = arrayOne[i];
        iMax = i;
    }
    if (arrayOne[i] < minElement) {
        minElement = arrayOne[i];
        iMin = i; //этот индекс запомнил, где находится минимальный элемент
    }
}

/*
1 итерация
arrayOne[i] > maxElement 
1 > 0 -  сравнивается числа, которые имеют индексы 1 и 0
если в первом if не верно, то идет ко второму if

если верно, то maxElement = arrayOne[i]
теперь максимальному элементу присваивается найденное число

i1 = i
i1 - присваеивается индекс найденного числа

*/

arrayOne[iMax] = minElement;
arrayOne[iMin] = maxElement;
//элементу массива с максимальным значением присвоили минимальное значение, а минимальному максимальное
console.log(arrayOne)

