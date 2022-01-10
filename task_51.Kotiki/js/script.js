let table = document.getElementById("table");
document.forms.form.submit.onclick = function(){
    let nameCat = document.forms.form.catName.value;
    let colorCat = document.forms.form.catColor.value;

    let row = document.createElement("tr"); //создаем строки

        let data = document.createElement("td"); //создаем столбцы
        data.innerHTML = nameCat;
        row.append(data) 

        data = document.createElement("td");
        data.style.cssText = `background: ${colorCat}`; 
        row.append(data)

        data = document.createElement("td"); 
        let element = document.getElementById("breeds");
        let strUser = element.options[element.selectedIndex].value;
        if(strUser == 0){
            data.textContent = 'ничего не выбрано'
        }
        if(strUser == "no"){
            data.textContent = 'без породы'
        }
        if(strUser == "b"){
            data.textContent = 'британец'
        }
        if(strUser == "s"){
            data.textContent = 'сфинкс'
        }
        row.append(data) 

        data = document.createElement("td"); 
        var nameRadio = document.getElementsByName("sex");
        if(nameRadio[0].checked){
            data.textContent = 'Кот'
        }else if(nameRadio[1].checked){
            data.textContent = 'Кошка'
        }
        row.append(data) 
    table.append(row);  //вставляем строки в таблицу

   

   return false
}
    