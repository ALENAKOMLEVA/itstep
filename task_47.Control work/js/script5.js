let buttonAdd = document.getElementById("add").onclick = function(){
    let x = +document.getElementById("a").value;
    let y = +document.getElementById("b").value;
    document.getElementsByTagName("p").item(0).innerHTML = x+y;
    
}
let buttonSub = document.getElementById("sub").onclick = function(){
    let x = +document.getElementById("a").value;
    let y = +document.getElementById("b").value;
    document.getElementsByTagName("p").item(0).innerHTML = x-y;
    
}
let buttonMul = document.getElementById("mul").onclick = function(){
    let x = +document.getElementById("a").value;
    let y = +document.getElementById("b").value;
    document.getElementsByTagName("p").item(0).innerHTML = x*y;
    
}
let buttonDiv = document.getElementById("div").onclick = function(){
    let x = +document.getElementById("a").value;
    let y = +document.getElementById("b").value;
    document.getElementsByTagName("p").item(0).innerHTML = x/y;
    if(y == 0){
        document.getElementsByTagName("p").item(0).innerHTML = "ошибка, нельзя делить на ноль";
    }
    
}




