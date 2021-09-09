function compareNumber(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
  
let a = [3, 4, 1, 2, 7]; 
  
a.sort(compareNumber);
  
console.log(a); 