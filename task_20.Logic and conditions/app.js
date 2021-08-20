let number = 2;
if (number % 2 == 0) {
    //console.log("even")
} else  {
    //console.log("odd")
} 

let year = 2011;
if (year % 400 == 0 || year % 4 == 0 && year % 100 !=0) {
    //console.log("Leap year");
} else {
    //console.log("No leap year")
}

let word = 5;
if (word % 100 > 10 && word % 100 < 20 || 
    word % 10 > 4 && word % 10 < 10 ||
    word % 10 == 0) {
    //console.log(word + "грибов");
} else if (word % 10 == 1) {
    //console.log(word + "гриб");
} else {
    //onsole.log("гриба")
}

let date = 5, time = 19;

if (date >= 1 && date <=6 && time >= 8 && time <= 16) {
    console.log("сегодня с 8.00 до 16.00");
} else if (date >=1 && date <=5  && time > 16) {
    console.log("завтра с 8.00 до 16.00")
} else if (date == 6 && time > 16) {
    console.log("послезавтра с 8.00 до 16.00")
}
