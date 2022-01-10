let arr = [1, 0, -4, 5, 6, -7,-2, 3, 8]
let arrSum = []
let maxSum
let currentSum
let m

for(let i = 0; i < arr.length; i++){
    maxSum = arr[i]; //записываем в maxSum = 1 итый элемент
    m=i+1; //чтобы двигаться по массиву начиная со след числа
    for (m; m < arr.length; m++) {
        if(maxSum + arr[m] >= maxSum){ 
            maxSum = maxSum + arr[m] //перезаписываем сумму
        }
        else{
            arrSum.push(maxSum); 
            break;
        }
    }
}
function getMaxOfArray(numArray) {
    let s=numArray[0];
    for (let o = 1; o < numArray.length; o++) {
        if(numArray[o]>=s){
            s=numArray[o];
        }
        
    }
    return s;
}
console.log(arrSum)
console.log(getMaxOfArray(arrSum))