button.onclick = function(event) { //событие нажатие (onclick) присваивается кнопке, через функцию
    if (event.altKey && event.shiftKey) { //если свойство объекта event = true т.е зажата клавиша Alt и Shift
      alert('Ура!');                      // выводим Ура!
    }
};

<input onmousemove="this.value=event.clientX+':'+event.clientY" value="Наведи на меня мышь"></input> //в поле ввода прописаны координаты относительно окна 


{/* <span ondblclick="alert('dblclick')">Сделайте двойной клик на мне</span> */} //при двойном клике на текст, вывести dblclick

{/* <b ondblclick="alert('Клик!')" onmousedown="return false">  //тексту в теге b при двойном клике на него вывести Клик, но при нажатии и опущении мыши тектс не должен выделяться
  Сделайте двойной клик на мне 
</b> */}
