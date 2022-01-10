let textForm;
let close;
let inputForm;
document.getElementById("b").onclick = function(){
    textForm = document.forms.form.task.value;
    let myList = document.getElementById("list");
    let newTask = document.createElement("li");
    newTask.innerHTML = `${textForm} <i id="cross" class="fas fa-times cross"></i>`;
    myList.appendChild(newTask);
    // close = document.getElementsByTagName('i');
    // for (let i = 0; i < close.length; i++) {
    //     close[i].onclick = function() {
    //         let parentEl = this.parentElement;
    //         parentEl.style.display = "none";
    //     }
    // }
    
    return false;
}


document.querySelector("ul").addEventListener("click", function (event) {
    let current = event.target;
    
    if(!current.classList.contains("cross"))
        return false;

    current.parentElement.remove();
    return false;
})



document.getElementById("list").onclick = function(event){
    let targetLi = event.target;
    targetLi.classList.toggle('checked');
}
 

// //4
// document.getElementById("list").oncontextmenu = function(event){
//     let targetLi = event.target;
//     inputForm = document.getElementById("task");
//     inputForm.value = targetLi.textContent;

// }

// //5
// let taskListEl = document.getElementById("list");
