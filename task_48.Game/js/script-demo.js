function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let players = [];
var field = [[0,0,0],[0,0,0],[0,0,0]];
var current = 1;


document.forms.form_start.button_start.onclick = function(){
    document.forms.form_start.classList.add("d-none");
    document.forms.reg_form.classList.remove("d-none");
    return false;
}

let block = document.getElementById("form");
document.forms.reg_form.buttonStart.onclick = function(){
    block.style.display = "none";

    current = getRandomNumber(1, 2);
    //получаем имена из input
    if(current == 1){
        players[1] = document.forms.reg_form.player1_name.value; 
        players[2] = document.forms.reg_form.player2_name.value;
    } else{
        players[2] = document.forms.reg_form.player2_name.value;
        players[1] = document.forms.reg_form.player1_name.value;
    }

    //создаем таблицу 
    let table = document.createElement("table")
    for(let i = 0; i < 3; i++){
        let row = document.createElement("tr"); //создаем строки
        
        for(let j = 0; j < 3; j++){
            let data = document.createElement("td"); //создаем столбцы
            row.append(data) //вставляем столбцы в строки
            } 
        table.append(row);  //вставляем строки в таблицу
        }

    //вешаем на таблицу событие клик, функцию    
    table.addEventListener("click",play, false);
    // в конец div с классом .field вставляем
    document.querySelector(".field").append(table);
    //в div с классом .current вставляем текст какой игрок ходит
    document.querySelector(".current").innerHTML = `Ходит игрок <b>${players[current]}</b>`;
    //удаляем класс d-none - появляется таблица
    document.querySelector(".game_form").classList.remove("d-none");
  
    return false;
}

//функция отвечает полностью за игру
function play(event){
    let td = event.target; //вешаем событие на столбцы

    if(td.tagName != "TD")
        return false;  
    
    let x = td.cellIndex;    //ячейки
    let y = td.parentNode.rowIndex; //получаем tr т.к. tr - родитель для td

    //не дает поменять нолик на крестик и наоборот, если ячейка не пустая, то ничего не делать 
    if(field[x][y] !=0){ 
        return false
    }

    //расстановка крестиков и ноликов
    if(current == 1){
        td.classList.add("k"); //класс с картинкой крестика
        current = 2; //меняем текущего (первого) игрока на второго
        field[x][y] = 1; //cross
    } else{
        td.classList.add("n");
        current = 1;
        field[x][y] = -1;
    }
    
    //проверки на победителя, ничьи и продолжения игры
    let winner = checkWinner();
    if(winner > 0){ //есть ли победитель
    document.querySelector(".result").innerHTML = `Победил игрок: <b>${players[winner]}</b>`; //в div с классом .result записываем какой игрок победил
    document.querySelector(".current").innerHTML = ``; //обнуляем текущего игрока
    document.querySelector(".field table").removeEventListener("click", play, false); //с таблицы удаляем события

    } else if(checkDraw()){ // если победителя нет и свободных ячеек нет, тогда ничья; если функция checkDraw() истина, то выполняется условие, если лож, то выполняется последний else
    document.querySelector(".current").innerHTML = ``;
    document.querySelector(".field table").removeEventListener("click", play, false);
    document.querySelector(".result").innerHTML = `Ничья`;

    } else { //если свободные ячейки остались и победителя нет - игра продолжается
    document.querySelector(".current").innerHTML = `Ходит игрок: <b>${players[current]}</b>`;
    }
}



//функция проверки на победу крестиков или ноликов
function checkWinner(){
    let checkCross = 0; //считают количество крестиков или ноликов в строке, столбце или диагоналях
    let checkZero = 0;
    //сумма по строкам
    for(let i = 0; i < 3; i++){ //1 этап: берет 0 строку i в ней элемента массива j
        for (let j = 0; j < 3; j++){
            if(field[i][j] == 1){ //перебирает элементы, значение их полей j; если == 1, то прибавляет к крестикам
                checkCross = checkCross + 1; 
            } 
            if(field[i][j] == -1){ //если == -1, то к ноликам
                checkZero = checkZero + 1;
            } 
            
        }
        //заканчивается проверка 0вой строки i
        if(checkCross == 3){  //сколько насчитал крестиков, если == 3, то возвращает 1 - первого игрока
            return 1;
        }else if(checkZero == 3){ // иначе проверяет количество ноликов, если == 3, то возвращает второго
            return 2;
        }
        //если ни одна из проверок не пройдет, то он сбрросит значения и пойдет проверять 1 строку i
        checkCross = 0;
        checkZero = 0;
    }
    //по столбцам
    for(let i = 0; i < 3; i++){ 
        for (let j = 0; j < 3; j++){
            if(field[j][i] == 1){
                checkCross = checkCross + 1;
            } 
            if(field[j][i] == -1){
                checkZero = checkZero + 1;
            } 
            
        }
        if(checkCross == 3){
            return 1;
        }else if(checkZero == 3){
            return 2;
        }
        checkCross = 0;
        checkZero = 0;

    }
    // главная диагональ (верхний левый угол); [i][i] - потому что у них одинаковые координаты
    for(let i = 0; i < 3; i++){
        if(field[i][i] == 1){
            checkCross = checkCross + 1;
        }
        if(field[i][i] == -1){
            checkZero = checkZero + 1;
        }
    }
    if(checkCross == 3){
        return 1;
    }else if(checkZero == 3){
        return 2;
    }
    checkCross = 0;
    checkZero = 0;

    //побочная дианональ (правый верхний угол)
    for(let i = 0; i < 3; i++){
        if(field[i][2-i] == 1){  //координаты: [0][2]; [1][1]; [2][0] - [2-i] - 2 - 0=2 - получаем такую координату [0][2]
            checkCross = checkCross + 1;
        }
        if(field[i][2-i] == -1){
            checkZero = checkZero + 1;
        }
    }
    if(checkCross == 3){
        return 1;
    }else if(checkZero == 3){
        return 2;
    }
    checkCross = 0;
    checkZero = 0;
    
    return 0;
}
 
//проверка на свободные клетки
function checkDraw(){
    let count = 0; //счетчик
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(field[i][j] == 0)
                count++; //если находит свободные клетки 0 - то прибавляет 1 к сетчику
        }
    } 
    
    if(count == 0) //нет свободных клеток
        return true; 
    else
        return false;
}



