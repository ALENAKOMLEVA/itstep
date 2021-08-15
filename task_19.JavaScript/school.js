var a = 4;
var Perimetr = a * 4;
//console.log(Perimetr)

var R = 2;
var Square = Math.PI * R ** 2;
//console.log(Square)

var a = 3 ** 2;
var b = 2 ** 2;
var c = a + b;
//console.log(c)

var a = 1;
var b = 2;
var c = a;
a = b;
b = c;
//console.log(a)

var a = 1;
var b = 2;
a = a + b; //3
b = a - b; //1
a = a - b; //2
//console.log(a)

var a = 123;
var b, first, second, third;
first = a % 10;
second = (a - first) / 10 % 10;
third = (a - first - 10 * second) / 100;
b = first + second + third;
//console.log(a , b)

var a = 123;
var b, first, second, third;
third = a % 10;
second = (a - first) / 10 % 10;
first = (a - first - 10 * second) / 100;
b = 100 * third + 10 * second + first;
//console.log(b)

var a = 1000;
var b;
var c;
var d;
var f
b = (a / 100) * 10 + a; //1100
c = (b / 100) * 10 + b; //1210
d = (c / 100) * 10 + c; //1331
f = d - a;
//console.log(f)

var min = 1;
var max = 100;
min = Math.ceil(min);
max = Math.floor(max);
//console.log(Math.floor(Math.random() * (max - min + 1)) + min);