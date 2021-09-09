
let array = [1, 2, 3, 0, 4, 5, 6];
let solve;
let result = array.reduce(function(sum, item) {
	if (item == 0) {
		solve = sum;
	} else {
		return sum + item;
	}
});

console.log(solve);  

/*
1 шаг
sum = 0;
item = 1;
sum + item  = 1;

2 шаг
sum = 1;
item = 2;
sum + item  = 3;

3 шаг
sum = 3;
item = 3;
sum + item  = 6;

4 шаг
sum = 6;
item = 0;
if (item == 0);
solve = sum 
solve = 6;
*/