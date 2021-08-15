var firstName = 'Вася';
const  lastName = 'Пупкин';


var growth, weight;
growth = '180';
weight = '0.89';
var oldWeight = weight
var weightKilo = (weight * 10); 

console.log("Меня зовут " + firstName + " " + lastName + ". Я вешу " + weight + "ц . Мой рост " + growth + "см .")

weight = weight + 10/100;
weightKilo = weightKilo - 2;

console.log( firstName + " " + lastName + " потолстел и стоптался")

firstName = 'Петя';
weight = oldWeight * 2;
console.log("Теперь я " + firstName + " " + lastName + " и вешу в " + weight/oldWeight + " раза больше, чем в молодости")
