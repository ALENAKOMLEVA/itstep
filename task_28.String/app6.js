let str = 'я люблю и учу javascript!';
let n = 13;
let result;
if(str.length > n){
    result = str.substr(0, n)
    console.log(result + '...')
} else{
    result = str
    console.log(result)
}