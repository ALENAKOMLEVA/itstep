let arrayOne = [1,1,1,2,3,3,4,5,5,5];
let n = 10;
let min = 1;
let max = 50;
let m = 0;


// for (let i = 0; i < n; i++){
//     arrayOne[i] = Math.floor(Math.random() * (max - min + 1)) + min;
// }

console.log(arrayOne)


for(let i = 0; i < arrayOne.length; i++){
    for(let g = i + 1; g < arrayOne.length; g++){
        if(arrayOne[i]==arrayOne[g]){
            for (let k = g; k < arrayOne.length; k++) {
                arrayOne[k]=arrayOne[k+1];
            }
            arrayOne.length--;
            m++;
        }
    }
}
//arrayOne.splice(arrayOne.length - m, m)
console.log(arrayOne)