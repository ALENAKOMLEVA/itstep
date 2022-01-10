document.forms.form.onsubmit = function(event){
    let Err = true;

    let name = this.FIO.value;
    let newErrorOne = this.FIO;
    console.log(name)
    if(name == ""){
        newErrorOne.insertAdjacentHTML('afterend', '<span>*заполните поле</span');
        
    }
    
    let email = this.email.value;
    newErrorOne = this.email;
    if(!email.includes('@')){
        newErrorOne.insertAdjacentHTML('afterend', '<span>*введен не email</span');
        // let error = document.getElementById("error");
        // error.innerHTML = '*введен не email';
    
    }


    let radio = this.sex.value;
    let newSpan = document.getElementById("select_sex");
    if(radio == ''){
        newSpan.insertAdjacentHTML('afterend', '<span>*выберите пол</span');
    }
    
    /*
    1 способ 
    for(let i = 0; i < radio.length; i++){ //i < radio.length - выполняется пока i(индекс) меньше размера массива radio.length
            if(radio[i].checked){
                console.log(`выбран ${i}`)
            }else{
                
            }
        }
    2 способ
        let newSpan = document.getElementById("select_sex");
        if(radio[0].checked){
            console.log(`выбран ${radio[0].value}`);
        }else if(radio[1].checked){
            console.log(`выбран ${radio[1].value}`);
        }else{
            newSpan.insertAdjacentHTML('afterend', '<span>*выберите пол</span');
        }
    */


    let element = this.lang_p.value;
    newErrorOne = this.lang_p;
    if(element == "0"){
        newErrorOne.insertAdjacentHTML('afterend', '<span>*выберите язык</span');
    }

    // let checkRobot = this.norobot.value;
    // let newErrorTwo = this.robotCheck;
    // if(this.norobot.checked){
    //     console.log(checkRobot);
    // }else{
    //      newErrorTwo.insertAdjacentHTML('afterend', '<span>*подтвердите что вы не робот</span'); 
    //     console.log("no")
    // }

    
    let newErrorTwo = this.norobot;
    if(this.norobot.checked){
        console.log(checkRobot);
    }else{
        newErrorTwo.insertAdjacentHTML('beforebegin', '<span>*подтвердите что вы не робот</span><br>');
    };

    return false;
   
//    if(Err){
//     document.getElementById("formId").style.display="none";
//     return false;
//    }
//    else
//     return true;
}
