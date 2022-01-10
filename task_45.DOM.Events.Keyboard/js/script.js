document.addEventListener('keydown', function(event){
    let list = document.querySelector(".ul-list"); //получаем список
    if (event.key == (event.shiftKey && "+" && "+")){ //при нажатии на shift и + +
        let li = document.createElement("li"); //создается li
        li.textContent = document.querySelectorAll("ul > li").length+1; //записываем все li; textContent позволяет получать или дополнять текстовое содержимое элементов
        list.appendChild(li); //записываем li в конец списка
    }
    if (event.key == (event.shiftKey && "-" && "-")){ //при нажатии shif и - -
       if(document.querySelectorAll("ul > li").length > 0){ //если длинна li больше 0
           document.querySelector("ul > li:last-child").remove(); //последний li удаляем
       }
    }
    
});