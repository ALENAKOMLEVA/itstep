

document.querySelector(".parent").onmouseenter = function(event){
    if(event.target.classList.contains("parent")){
        event.target.classList.add("bg-blue")
    }
   
}


document.querySelector(".parent").onmouseleave = function(event){ //возвращение красного фона 
    if(event.target.classList.contains("parent")){
        event.target.classList.remove("bg-blue")
    }
   
}

document.querySelector(".child").onmouseenter = function(event){
   
    if(event.target.classList.contains("child")){
        event.target.classList.add("bg-black")
        // event.relatedTarget.classList.remove("bg-blue")
    }
}

document.querySelector(".child").onmouseleave = function(event){ //возвращение зеленого фона
   
    if(event.target.classList.contains("child")){
        event.target.classList.remove("bg-black")
        // event.relatedTarget.classList.add("bg-blue")
    }
}
