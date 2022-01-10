function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let x;
let y1,y2,y3,y4;
let walls = new Array();
let robot = document.querySelector(".robot");
document.querySelector(".create-robot").onclick = function(){
    
    if(robot) //проверяем есть ли класс .robot
        robot.remove(); //  если есть то удаляем для того, чтобы появлялась в рандомных местах

    robot = document.createElement("div"); //создаем div
    robot.classList.add("robot"); //добавляем ему класс .robot
    x = getRandomNumber(0,15); //записываем в переменную х числа для функции рандома
    document.querySelectorAll(".field > div").item(x).append(robot); //получаем все div, нкмеруем их item(x) и вставляем robot
}

let wall = document.querySelector(".wall");
document.querySelector(".create-wall").onclick = function(){
    let w = document.querySelectorAll(".wall")
    w.forEach(element => {
        element.remove();
    });
    wall = document.createElement("div"); //создаем div
    wall.classList.add("wall");
    do{y1=getRandomInt(16);} while(y1==x && y1==y2 && y1==y3 && y1==y4);
    document.querySelectorAll(".field > div").item(y1).append(wall);

    wall = document.createElement("div"); //создаем div
    wall.classList.add("wall");
    do{y2=getRandomInt(16);} while(y2==x && y2==y1 && y2==y3 && y2==y4);
    document.querySelectorAll(".field > div").item(y2).append(wall);

    wall = document.createElement("div"); //создаем div
    wall.classList.add("wall");
    do{y3=getRandomInt(16);} while(y3==x && y3==y1 && y3==y2 && y3==y4);
    document.querySelectorAll(".field > div").item(y3).append(wall);

    wall = document.createElement("div"); //создаем div
    wall.classList.add("wall");
    do{y4=getRandomInt(16);} while(y4==x && y4==y1 && y4==y2 && y4==y3);
    document.querySelectorAll(".field > div").item(y4).append(wall);

}

document.addEventListener('keydown', function(event){
    switch(event.key){
      case 'ArrowUp':
        if(robot) //проверяем есть ли класс .robot
            robot.remove(); //  если есть то удаляем для того, чтобы  появлялась в рандомных местах

        robot = document.createElement("div"); //создаем div
        robot.classList.add("robot"); //добавляем ему класс .robot

        if(x-4>=0 && x-4!=y1 && x-4!=y2 && x-4!=y3 && x-4!=y4){
            x = x-4;
        }

        document.querySelectorAll(".field > div").item(x).append(robot);
        break;



      case 'ArrowRight':
        if(robot) //проверяем есть ли класс .robot
            robot.remove(); 

        robot = document.createElement("div"); //создаем div
        robot.classList.add("robot"); //добавляем ему класс .robot

        if(x!=3 && x!=7 && x!=11 && x!=15 && x+1!=y1 && x+1!=y2 && x+1!=y3
            && x+1!=y4){
            x = x+1;
        }

        document.querySelectorAll(".field > div").item(x).append(robot);
        break;



      case 'ArrowDown':
        if(robot) //проверяем есть ли класс .robot
            robot.remove(); //  если есть то удаляем для того, чтобы шашка появлялась в рандомных местах

        robot = document.createElement("div"); //создаем div
        robot.classList.add("robot"); //добавляем ему класс .robot

        if(x+4<16 && x+4!=y1 && x+4!=y2 && x+4!=y3 && x+4!=y4){
            x = x+4; 
        }
        document.querySelectorAll(".field > div").item(x).append(robot);
        break;



      case 'ArrowLeft':
        if(robot) //проверяем есть ли класс .robot
            robot.remove(); //  если есть то удаляем для того, чтобы шашка появлялась в рандомных местах

        robot = document.createElement("div"); //создаем div
        robot.classList.add("robot"); //добавляем ему класс .robot
        if(x!=0 && x!=4 && x!=8 && x!=12 && x-1!=y1 && x-1!=y2 && x-1!=y3 && x-1!=y4){
            x = x-1; 
        }
         document.querySelectorAll(".field > div").item(x).append(robot);
        break;};
  });

