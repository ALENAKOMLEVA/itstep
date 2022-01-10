document.getElementById("add").onclick = function(){
    let uls = document.getElementsByTagName("ul");
    let ul;
    if(uls.length == 0){ //список = 0
            ul = document.createElement("ul"); //создаем ul
            document.getElementById("result").appendChild(ul); //вставляем ul в абзац
    } else {
            ul = uls.item(0);  //если список есть то берем первый элемент из списка, вычленить в отдельный элемент т.к этот метод возвращает колллекцию, чтобы работать с одним элементо используем айтем
    }

    let x = +document.getElementById("num").value; //+ - превращает в число

    if(isNaN(x))
            return; //проверка на число
    
    let countLi = document.getElementsByTagName("li").length; 
    for(let i = countLi; i < x + countLi; i++){
        let li = document.createElement("li");
        li.innerHTML = `Пункт ${i+1}`;
        ul.appendChild(li);
    }
}