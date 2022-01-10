let arrOne = [1, 2, 5];
let arrTwo = [1, 3, 9];
let arrThree = [2, 3, 5];
let arrEnd = []
let count = 1; //в скольких массивах встречается число- 1 - число только в одном массиве, 2 - в двух, 3 - в трех

for(let i = 0; i < arrOne.length; i++){ //первый массив
    if(arrTwo.indexOf(arrOne[i]) != -1){ //сравниваем со вторым, елси наше число arrOne[i] в массиве arrTwo
        count++  
    }
    if(arrThree.indexOf(arrOne[i]) != -1){ //есть ли наше число arrOne[i] в arrThree
        count++
    }
    if(count != 2){ //если число втсретилось либо в одном либо в трех массивах, то счетчик становится 1
        count = 1
    }else{ //иначе число встретилось в двух массивах
        count = 1 //счетчик опять 1
        if(arrEnd.indexOf(arrOne[i]) == -1){ //чтобы не было повторяющихся чисел выведено в итоге -1 числа не было
            arrEnd.push(arrOne[i])
        }
      
    }
}
for(let i = 0; i < arrTwo.length; i++){
    if(arrOne.indexOf(arrTwo[i]) != -1){
        count++
    }
    if(arrThree.indexOf(arrTwo[i]) != -1){
        count++
    }
    if(count != 2){
        count = 1
    }else{
        count = 1
        if(arrEnd.indexOf(arrTwo[i]) == -1){
            arrEnd.push(arrTwo[i])
        }
    }
}
for(let i = 0; i < arrThree.length; i++){
    if(arrOne.indexOf(arrThree[i]) != -1){
        count++
    }
    if(arrTwo.indexOf(arrThree[i]) != -1){
        count++
    }
    if(count != 2){
        count = 1
    }else{
        count = 1
        if(arrEnd.indexOf(arrThree[i]) == -1){
            arrEnd.push(arrThree[i])
        }
    }
}
console.log(arrEnd)