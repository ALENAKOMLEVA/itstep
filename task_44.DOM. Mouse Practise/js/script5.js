
document.getElementById("ul").ondblclick = function(event){
    let list = document.querySelector(".ul-class"); //получаем список

    let selected = ul.querySelectorAll('.clone'); //ищем элементы с классом .clone
      for(let elem of selected) { //прогоняет все найденные элементы с классом 
        elem.classList.remove('clone'); //удаляем у найденных элементов класс
    }
    event.target.classList.add("clone")  //добавляем класс 
    let clone = document.querySelector(".clone").cloneNode(true);
    list.appendChild(clone);
}