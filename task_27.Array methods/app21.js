let array = [1, 2, 3, 0, 4, 5, 6];
let solve;
let result = array.reduceRight(function(sum, item) {
	if (item == 0) {
		solve = sum;
	} else {
		return sum + item;
	}
});

console.log(solve);