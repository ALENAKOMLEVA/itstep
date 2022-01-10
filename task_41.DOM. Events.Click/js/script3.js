let num = document.getElementById("calc");

let ul = document.createElement("ul");

num.onclick = function(){

    let x = + document.getElementById("a").value;
    for(let i = 1; i <= 10; i++){
        let li = document.createElement("li");
        li.innerHTML = `Пункт ${i}`;
        ul.appendChild(li);
    }
    
}

document.getElementById("calc").onclick = function(){
    let uls = document.getElementsByTagName("ul");
    let ul;
    if(ul.length == 0){
        ul = document.createElement("ul");
        document.getElementById("result").appendChild(ul)
    } else {
        ul = uls.item(0); //если список есть то берем первый элемент из списка, вычленить в отдельный элемент т.к этот методвозвращает колллекцию, чтобы работать с одним элементо используем айтем
    }

    let x = + document.getElementById("a").value;
    if(isNan(x)) //если введена какая-то фигня то выводим NaN
        return;
    let countLi = document.getElementsByTagName("li").length
    for(let i = countLi; i < x+countLi; i++){
        let li = document.createElement("li");
        li.innerHTML = `Пункт ${i}`;
        ul.appendChild(li)
    }

}
