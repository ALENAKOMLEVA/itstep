document.querySelector(".parent").onclick = function(event){
    if(event.altKey){
        console.log("Alt") 
    }
    if(event.ctrlKey){
        console.log("Ctrl") 
    }
    if(event.shiftKey){
        console.log("Shift") 
    }
    if(event.metatKey){
        console.log("Win") 
    }
}