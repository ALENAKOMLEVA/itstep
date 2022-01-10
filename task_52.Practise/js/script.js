//1
// function find (a, b){
//   if(a.split("").sort().join("") == b.split("").sort().join("")){
//     return true;
//   }
//   return false;

// }

// let str = "";
// let str2 = "";
// let res;
// res = find (str, str2);
// console.log(res)

//2
// function outArray(arr) {
//   let i = 0;
//   let  counter  = setInterval(function() {
//         console.log(i);
//         i++;
//         if(i == arr.length)
//           clearInterval(counter);
//   }, 3000);
// }

// outArray([1,2,3,4,5]);

//3
// function compareNum(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// let arr = [1,2,2];
// let count;
// function findEl(arrTwo){
//   arrTwo.sort(compareNum);
//   for(let i = 0; i < arrTwo.length; i++){
//     if(arrTwo.indexOf(arrTwo[i]) != arrTwo.lastIndexOf(arrTwo[i])){
//       count = arrTwo.lastIndexOf(arrTwo[i]) - arrTwo.indexOf(arrTwo[i]);
//       arrTwo.splice(i, count+1);
//       i--;
//     }
//   }
//   console.log(arrTwo)
// }

// findEl(arr)

//4

// function decreaseNum(arr){
//   console.log(arr);
//   let odd = [];
//   let even = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//       even.push(arr[i])
//     }else{
//       odd.push(arr[i])
//     }
//   }
//   odd.sort(function(a, b){
//     return a - b;
//   })
//   even.sort(function(a, b){
//     return b - a;
//   })
//   console.log(even);
//   console.log(odd);

//   let countOdd = 0;
//   let countEven = 0;
//   for(let i = 0; i < arr.length; i++){ //получаем первоначальный массив arr
//     if(arr[i] % 2 == 0){ //если четный
//       arr[i] = even[countEven];
//       countEven++;

//     }else{
//       arr[i] = odd[countOdd];
//       countOdd++;
//     }
//   }
//   console.log(arr);
// }
// decreaseNum([4,1,8,2,5,10,9,14,11,15])


//5
// function Bomb(time){ //получаем время
//   this.time = time;
//   let timer = setInterval(function(){ //объявляем переменную timer
//     if(time != 0){ //если время не равно 0, для реализации обратного отсчета
//       console.log(time); //выводит сколько секунд осталось 
//       time--; //отнимает 1
//     }
//     else{
//       console.log("Hi!"); //когда время дойдет до 0, то выводит сообщение
//       clearInterval(timer); //прекращает работу setInterval
//     }


  //}, 1000) //выполнил функцию, ждет 1000, потом опять выполняет функцию и ждет 1000
 

//}
//let b = new Bomb(5); //задаем время отсчета

//6
// let d = [];
// function sortDates(arrDate){
//   arrDate.sort(function(a, b){
//     return a - b
//   })
//   console.log(arrDate);
// }
// let d1 = new Date(2021, 5, 18);
// d.push(d1);
// let d2 = new Date(2015, 0, 28);
// d.push(d2);
// let d3 = new Date(2015, 11, 15);
// d.push(d3);
// sortDates(d)

//8
let arr = [];
let n = 10;
const min = 1, max = 100;

for(let i = 0; i < n; i++){
  arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

let maxElement = arr[0]; //для начального значения максимального и минимального элементов
let minElement = arr[0];
for (let i = 1; i < n; i++) {  
    if (arr[i] > maxElement) 
        maxElement = arr[i];
    if (arr[i] < minElement)
        minElement = arr[i];
}
let diff = maxElement - minElement;
console.log(arr)
console.log(maxElement, minElement)
console.log(diff)

