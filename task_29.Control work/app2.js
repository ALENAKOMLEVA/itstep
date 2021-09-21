let array = [1, -2, 3, 0, -4, 5, -6];
let result = array.reduce(function(sum, item) {
	if (item > 0) {
		return  sum + item;
	}else{
        return sum;
    }
});

console.log(result); 



