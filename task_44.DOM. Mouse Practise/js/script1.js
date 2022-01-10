document.querySelector(".square").onmouseover = function(event){
    // event.target.classList.contains("square")
    event.target.classList.add("bg-blue")
    
}

document.querySelector(".square").onmouseout = function(event){
    // event.target.classList.contains("square")
    event.target.classList.remove("bg-blue")
}
