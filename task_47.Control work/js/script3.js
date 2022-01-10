document.querySelector(".main_div").onmouseover = function(event){
    if(event.target.classList.contains("block")){
        event.target.classList.add("bg-opacity")
    }
    
}
document.querySelector(".main_div").onmouseout = function(event){
    if(event.target.classList.contains("block")){
        event.target.classList.remove("bg-opacity")
    }
    
}


