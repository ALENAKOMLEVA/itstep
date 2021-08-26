//1
let square = 9;
let perimetr;
let side 
side = Math.sqrt(9);
perimetr = side * 4;
//console.log(perimetr)

//2
let a = 9;
let b = 9;
let c = 1;
if (a != b && a != c && b != c) {
    //console.log("разносторонний");
} else if (a == b && b == c && a == c) {
    //console.log("равносторонний");
} else {
    //console.log("равнобедренный");
}

//3
a = 3;
b = 4;
c = 5;
if(a + b > c && a + c > b && b + c > a) {
    //console.log ("существует");
} else {
    //console.log ("не существует");
}

//4
let m = 1001011021; //последовательность
b = 0; //переменная для укорачивания длинны последовательности до k
let k = 9; //девятая цифра в последовательности
k = 10 - k; //10 - длинная последовательности; 10 - позиция цифр в последовательности; сколько цифр с конца нужно убрать
a = m; // для выведения и последовательности и цифры
for (k; k > 0; k--) {
    b = a % 10; //определяем последнюю цифру
    a = a - b; //отнимаем последнюю цифру из последовательности
    a = a / 10; //убираем в конце последовательности
}
a = a % 10; //определяем k цифру
//console.log(m,a)


//5
a = 7;
b = 2;
if ((a + b) % 2 == 0) {
    //console.log(a * b);
} else {
    //console.log(a / b)
}

//6
let age = 80;
if (age <= 17) {
    //console.log("молодой");
} else if (age >= 18 && age <= 69) {
    //console.log("взрослый в самом расвете сил");
} else {
    //console.log ("пожилой")
}

//7
let circleRadius = 5;
let sideSquare = 2;
if ((sideSquare * Math.sqrt(2)) > (2 * circleRadius)) {
    //console.log("не поместится")
} else {
    //console.log("поместится")
}

//8
let day = 14;
let month = 12;
let year = 1055;
if (month > 0 && month <= 12 && day <= 31 && year > 0) {
    if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 12) && day <= 31){
        //console.log("Есть");
    } else if ((month == 4 || month == 6 || month == 9) && day <= 30) {
        //console.log("Есть");
    } else if (month ==2 && day <= 28){
        //console.log("Есть");
    } else {
        //console.log("Нету")
    }

}

//9
let x = 2;
let y = -6;
if(x > 0 && y > 0) {
    //console.log("1 четверть")
} else if (x < 0 && y > 0){
    //console.log("2 четверть")
} else if (x < 0 && y < 0){
    //console.log("3 четверть")
} else if (x > 0 && y < 0){
    //console.log("4 четверть")
} else {
    //console.log("Точка лежит на оси")
}


//10
let distance;
let x1;
let x2;
let y1;
let y2;
x = x1 - x2;
y = y1 - y2;
let commonRadius;
let radiusOne;
let radiusTwo;
distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
commonRadius = radiusOne + radiusTwo;
if (distance > commonRadius) {
    //console.log("не пересекаются");
} else if (distance == commonRadius) {
    //console.log("соприкасаются");
} else {
    //console.log("пересекаются");
}

//11
a = 2;
b = 5;
c = "*";
if (c == "+") {
    //console.log(a +b);
}
if (c == "-") {
    //console.log(a - b);
}
if (c == "*") {
    //console.log(a * b);
}
if (c == "/") {
    //console.log(a / b);
}

switch (c){
    case "+":
        //console.log(a +b); break;
    case "-":
        //console.log(a - b); break;
    case "*":
        //console.log(a * b); break;
    case "/":
        if (b == 0) 
            console.log("no");
         else 
            //console.log(a / b);
        break;
    default:
        //console.log("Error")
               
}


//12
let sum = 0;
a = 5;
let count = 0;
while (count != 20) {
    if ( a % 5 == 0){
        sum = sum + a; // суммирует числа кратные 5 числа
        count ++; //считает числа, которые прошли по условию
    }
    a = a + 1; // прибавляет единицу
}
console.log(sum)
