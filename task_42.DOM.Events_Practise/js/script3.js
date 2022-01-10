
document.getElementById("list").onclick = function(){
    let element =  document.getElementsByTagName("div").item(0).classList; //получаем список классов в диве с первого элемента т.к. это коллекция
    let ol = document.createElement("ol"); //создаем нумерованный список

    for(let i = 0; i < element.length; i++){ //с помощью цикла перебираем каждый элемент
        let li = document.createElement("li"); //создаем ли
        li.textContent = element[i]; //в ли записываем каждый элемент т.е классы из дива
        ol.appendChild(li); //в нумерованный список вставляем лишки
    }
    
    document.getElementsByTagName("div").item(0).appendChild(ol); 
}