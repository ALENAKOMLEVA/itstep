
document.getElementById("ul").onclick = function(event){
 
  if(event.target.classList.contains("li-class")){ 
    let selected = ul.querySelectorAll('.selected'); //создается переменная в которую записываются элементы списка и проверяет есть ли класс '.selected'
      for(let elem of selected) {
        elem.classList.remove('selected'); //если он находит такой класс, то удаляет его, чтобы не выделялся цветом
    }
    event.target.classList.add("selected") //устанавливает класс, чтобы элемент списка выделялся цветом
    
  }

}
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