function check(){
let radio = document.getElementsByName('sex');
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            console.log(`выбран ${i}`)
        }
    }
}
