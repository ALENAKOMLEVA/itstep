

document.querySelector(".parent").onmouseover = function(event){
    if(event.target.classList.contains("parent")){ //приходим на родителя - цвет синий
        event.target.classList.add("bg-blue")
    }
    if(event.target.classList.contains("child")){ //приходим на ребенка - цвет черный
        event.target.classList.add("bg-black")
        event.relatedTarget.classList.add("bg-blue") //оставляем синий фон на родителе обращаемся через relatedTarget т.к. мы пришли от родителя
    }
   
}
document.querySelector(".parent").onmouseout = function(event){
    if(event.target.classList.contains("parent")){ //уходим с родителя - удаляем синий 
        event.target.classList.remove("bg-blue")
    }
    if(event.target.classList.contains("child")){ //уходим с ребенка - удаляем черный
        event.target.classList.remove("bg-black")
    }
    
}