let x = document.getElementById("a");
let abzac = document.getElementById("text");
let buttonAdd = document.getElementById("button").onclick = function(event){
    
    if(document.querySelector('button').textContent == "Редактировать"){
        x.style.visibility="visible";
        if(abzac.innerHTML!="")
        x.value = abzac.innerHTML;
        document.querySelector('button').textContent = "Сохранить";
        return false;
    }

    if(document.querySelector('button').textContent == "Сохранить"){
        x.style.visibility="hidden";
        if(x.value!="")
        abzac.innerHTML = x.value;
        x.value="";
        document.querySelector('button').textContent = "Редактировать";
        return false;
    }
    
    
}