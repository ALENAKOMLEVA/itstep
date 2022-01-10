//проверка на имя
document.getElementById("FIO").onblur = function(event){
    if(!(/[a-z ]/i.test(String.fromCharCode(event.keyCode)))){
        let error = document.getElementById("errorOne");
        error.innerHTML = '*введено число';
        
    }
}
document.getElementById("FIO").onfocus = function(){
    let error = document.getElementById("errorOne");
    error.innerHTML = ""; 
}

//проверка email
document.getElementById("email").onblur = function(){
    
    if(!email.value.includes('@')){
        let error = document.getElementById("error");
        error.innerHTML = '*введен не email';
    
    }
}
document.getElementById("email").onfocus = function(){
    error.innerHTML = ""; 
}

//проверка на пол

var nameRadio = document.getElementsByName("sex");
if(nameRadio[0].checked){
    console.log("male");
}else if(nameRadio[1].checked){
    console.log('female')
}else{
    error.innerHTML = '*выберите пол';
}
  




//проверка выпадающего списка
let element = document.getElementById("lang_p");
let strUser = element.options[element.selectedIndex].value;
if(strUser == 0){
    let error = document.getElementById("error");
    error.innerHTML = '*выберите язык';
    element.append(error);
}


//проверка я не робот
// let checkbox = document.querySelector("robot_check").onclick = function() {
//     if ( this.checked ) {
//         console.log('checked');
//     } else console.log('unchecked');
// }




