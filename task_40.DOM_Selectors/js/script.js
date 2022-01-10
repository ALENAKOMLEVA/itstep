//1
let sections = document.getElementsByClassName("first-section");

let section = sections.item(0);// sections[0];
let neighbors = section.getElementsByClassName("neighbor");


for(let i = 0; i < neighbors.length; i++){
    neighbors.item(i).innerHTML =  "Я хороший сосед";
}

//1.2
for(let i = 0; i < neighbors.length; i++){
    neighbors.item(i).innerHTML =  `Я хороший сосед №${i+1}`;
}

//1.3
neighbors = section.getElementsByClassName('neighbor');
for(let i = 0; i < neighbors.length; i++){
    neighbors.item(i).innerHTML = `<span>${neighbors.item(i).innerHTML}</span>`;
}

//1.4
for(let i = 0; i < neighbors.length; i++){
    let span = neighbors.item(i).getElementsByTagName("span").item(0);
    span.outerHTML = `<b>${span.innerHTML}</b>`;
}

//1.5
let lastElement = document.querySelectorAll(".fourth-neighbor b");
console.log(lastElement.item(0)) //тк мы обралитились к последнему селектору то получим его содержание 
lastElement.item(0).outerHTML = `<b>${'Я последний хороший сосед'}</b>`;

//2
let secondElem = document.getElementById("second-element");
let out = `<ul>`;
for (let i = 1; i <= 10; i++){
    out = out + `<li>Пункт ${i}</li>`;
}
out = out + `</ul>`;
secondElem.insertAdjacentHTML('beforeend', out);

//2.2
secondElem = document.getElementById("second-element");
let findEvenList = secondElem.getElementsByTagName("li");
console.log(findEvenList)
for (let i = 1; i <= 10; i++){
    if (i%2 !=0){             
        findEvenList[i].style.color = "red";
    }
}
/*№1 
мы обратились ко второй секции с помощью id

№2
определили новую переменную и во второй секции с помощью secondElem.getElementsByTagName наши все li

№3
потом перебираем весь список с помощь цикла

№4
в цикле ставим условие:
если i  делится на 2 без с остатом т.е. явялется четным, то мы красим найденный элемент в красный

т.к. i = 1 на ПЕРВОМ ИТЕРАЦИИ то
1 / 2 = 

*/

//2.3

let secondEleme = document.getElementById("second-element");
findOddList = secondEleme.getElementsByTagName("li");
for (let i = 0; i <= findOddList-1; i++){
    if (i%2 ==0){             
        findOddList[i].classList.add("add-element");
    }
}

//2.4
//элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза

secondElem = document.getElementById("second-element");
findEvenList = secondElem.getElementsByTagName("li");

///////


//3
let element = document.getElementById("third-element");
let tagB = element.getElementsByTagName("b");
for(let i = 0; i < tagB.length; i++){
    tagB.item(0).outerHTML = `<strong>${tagB.item(0).innerHTML}</strong>`
}

//3.1
//удалить в тегах strong все теги, т.е. должен остаться только текст

// let tagStrong = element.getElementsByTagName("strong");
// for(let i = 0; i < tagStrong.length; i++){
//     /////////////
// }

//3.2
// обернуть каждое слово в тег span 

let strongs = element.getElementsByTagName("strong");
for(let i = 0; i < strongs.length; i++){
    let words = strongs.item(i).textContent.split(" ");
    strongs.item(i).innerHTML = "";
    words.forEach(function(word){
        let span = document.createElement("span");
        span.textContent = word;
        strongs.item(i).appendChild(span);
    });
}

//4
element = document.getElementById("fourth-element");

//4.1
let divs = element.parentElement.getElementsByTagName("div");

for(let i = 0; i < divs.length; i++){
    console.log(divs.item(i).textContent);
}

//4.2
//Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст
let texts = [];
for(let i = 0; i < divs.length; i++){
    texts.push(divs.item(i).textContent);
}
texts.reverse();
for(let i = 0; i < divs.length; i++){
    divs.item(i).textContent = texts[i];
}

//4.3
divs.item(1).remove();

//4.4
divs.item(0).insertAdjacentHTML("afterend", "<div>Я пятый сосед</div>");

//4.5
divs.item(0).style.border = "1px solid #000";
divs.item(0).style.padding = "20px";
divs.item(0).style.backgroundColor = "yellow";


  
//5
sections = document.getElementById("fifth-element");
let firstElement = document.createElement("div");
firstElement.classList.add("first-neighbor");
firstElement.classList.add("neighbor");
firstElement.innerHTML = "Я хороший сосед";
sections.prepend(firstElement);

let secondElement = document.createElement("div");
secondElement.classList.add("second-neighbor");
secondElement.classList.add("neighbor");
secondElement.innerHTML = "Я хороший сосед";
sections.prepend(secondElement);

let thirdElement = document.createElement("div");
thirdElement.classList.add("third-neighbor");
thirdElement.classList.add("neighbor");
thirdElement.innerHTML = "Я хороший сосед";
sections.append(thirdElement);

let fourthElement = document.createElement("div");
fourthElement.classList.add("fourth-neighbor");
fourthElement.classList.add("neighbor");
fourthElement.innerHTML = "Я хороший сосед";
sections.append(fourthElement);


// sections.insertAdjacentHTML('afterbegin', '<div class="first-neighbor neighbor">Я сосед</div>');
// sections.insertAdjacentHTML('afterbegin', '<div class="second-neighbor neighbor">Я сосед</div>');
// sections.insertAdjacentHTML('afterend', '<div class="third-neighbor neighbor">Я сосед</div>');
// sections.insertAdjacentHTML('afterend', '<div class="fourth-neighbor neighbor">Я сосед</div>');





