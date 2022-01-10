let d = new Date (2019, 3, 15)
let k = 12
let a

console.log(d)
a = d.getDate() + k //getDate() число 15 из нашей даты + k
d = new Date(d.getFullYear(), d.getMonth(), a) //перезаписываем дату с новым числом а = 15+12=27,
console.log(d)
console.log(d.getDay())

switch(d.getDay()){
    case 0:
        console.log("Воскресенье")
        break;
    case 1:
        console.log("Понедельник")
        break;
    case 2:
        console.log("Вторник")
        break;
    case 3:
        console.log("Среда")
        break;
    case 4:
        console.log("Четверг")
        break;
    case 5:
        console.log("Пятница")
        break;
    case 6:
        console.log("Суббота")
        break;
}