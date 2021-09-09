let a = [1, 2, 3, 4];
let sumArrayElements = a.reduce(function(previousValue, item, index, array) {
    return item + previousValue;
}, 0 );
console.log(sumArrayElements)


/* 
previousValue - предыдущее значение

1 шаг
previousValue = 0
item = 1;
item + previousValue = 1;

2 шаг
previousValue = 1
item = 2;
item + previousValue = 3;

3 шаг
previousValue = 3
item = 3;
item + previousValue = 6;

4 шаг
previousValue = 6
item = 4;
item + previousValue = 10;
*/