let a = [1,5,8,6]; //1, 7, 8, 3
let b = [5,7,3,6];
let arr = []

let unique = a.concat(b)

function arrayUnique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    console.log(result)
}
arrayUnique(unique)



