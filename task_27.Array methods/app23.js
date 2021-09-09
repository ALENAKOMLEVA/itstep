let a = [1, 2, 3, 4, 5, 9, 78];
let m;
let result = a.reduceRight(function(sum, item){
    if (sum > 10){
        sum = sum + item;
        k++;
        return sum;
    }
}, 0);
console.log(k)