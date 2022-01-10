document.getElementById("inputOne").onblur = function(){
    if(inputOne.value == 0){
        let error = document.getElementById("error");
        error.innerHTML = '*данное поле обязательно для заполнения'
       
    }
}

document.getElementById("inputTwo").onblur = function(){
    if(isNaN(`${inputTwo.value}`)){
        let error = document.getElementById("error");
        error.innerHTML = '*введено не число'
    }
}

document.getElementById("inputThree").onblur = function(){
    
    if(!inputThree.value.includes('@')){
        let error = document.getElementById("error");
        error.innerHTML = '*введен не email'
    }
}