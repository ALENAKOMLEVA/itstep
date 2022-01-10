let arr = [1, 2, 8, 9, 4, 3, 5]
let arrA = []
let a = 5

for(let i = 0; i < arr.length; i++){
    if(arr[i] < a){
        arrA.push(arr[i]) //вставляем числа которые меньше а
    }
}
for(let i = 0; i < arr.length; i++){
    if(arr[i] == a){
        arrA.push(arr[i]) //которые равны а
    }
}
for(let i = 0; i < arr.length; i++){
    if(arr[i] > a){
        arrA.push(arr[i]) //которые больше а
    }
}
console.log(arrA)