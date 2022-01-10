let n = 5; 
let m = 5;
let x = [];
const min = 1, max = 100;

for (let i = 0; i < m; i++){
  x[i] = [];
  for (let j = 0; j < n; j++){
    x[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;;
  }
}

let maxElement = x[0][0]; //для начального значения максимального и минимального элементов
let minElement = x[0][0];
for (let i = 1; i < n; i++) {  
    for(let j = 1; j < m; j++){
      let currentValue = x[i][j];
      if(currentValue < minElement)
      minElement = currentValue;
      if(currentValue > maxElement)
      maxElement = currentValue;
    }
}

console.log(x);
console.log(minElement, maxElement)
let diff = maxElement - minElement;
console.log(diff)

