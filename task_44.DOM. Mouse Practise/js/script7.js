function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".checker").onclick = function(){
    let chess = document.querySelector(".chess");
    if(chess) //проверяем есть ли класс .chess
        chess.remove(); //  если есть то удаляем для того, чтобы шашка появлялась в рандомных местах

    chess = document.createElement("div"); //создаем div
    chess.classList.add("chess"); //добавляем ему класс .chess

    let x = getRandomNumber(0,15); //записываем в переменную х числа для функции рандома

    document.querySelectorAll(".box > div").item(x).append(chess); //получаем все div, нкмеруем их item(x) и вставляем chess
}


document.querySelector(".change_checker").onclick = function(){
    let cells = document.querySelectorAll(".box > div"); //получаем список div
    cells.forEach(function(cells){ //перебираем каждый div
        cells.classList.toggle("white"); //если бедые есть, то удаляем, если нету, то добавляем
        cells.classList.toggle("black"); //если черные есть, то удаляем, если нету, то добавляем
    });
}

var angle = 0; //задаем переменную угл
document.querySelector(".turn").onclick = function(){
    angle = angle + 90; //поаорот угла на 90
    document.querySelector(".box").style.transform = `rotate(${angle}deg)`; //записываем поворот в стиль CSS
}