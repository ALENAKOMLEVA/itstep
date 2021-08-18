
let sum = 0, i = 2;
while ( i <= 100) {
    sum += i;
    i += 2;
}
//console.log(sum)

sum = 0, i = 1;
while (i <= 100) {
    if ( i % 2 == 0){
        sum = sum + i;
    }
    i = i + 1;
}


sum = 0, i = 2;
do {
    sum += i;
    i +=2;
} while(i <= 100);
//console.log(sum)


for(sum = 0, i = 2; i <= 100; i +=2){
   sum += i;
}
//console.log(sum)

let n = 1_000_000, count = 0;

while (n != 1) {
    if ( n % 2 ==0 ){
       n = n / 2;
    } else {
        n = (n * 3 + 1) / 2;
    }
    count++; //счетчик
}
//console.log(count)

count = 0, b = 1 ;
while(count !=51){
    if(b % 7 ==0 && b % 5 !=0){
        count++;
    }
    b++
}
//console.log(--b)

count = 0, d = 100; //с - это счетчик
while (count != 10){
    if((d % 21 == 0) || (d % 14 !=0)){
        count++; //кол-во чисел, которые удовлетворили условию
        //console.log(d)
    }

    d++ //просто увеличивает число на 1, в след итерации увеличивалось число на единицу
}




