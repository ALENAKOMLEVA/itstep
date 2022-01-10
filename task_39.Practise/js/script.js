//1
let element = document.getElementById("first-element");
console.log(element.tagName);
console.log(element);
element.classList.add("www");

element.classList.remove("www");

console.log(element.classList.contains("www"));

element.classList.toggle("www");

console.log(element.classList.length);

console.log(element.classList);

element.style.color = "red";
element.style.fontSize = "30px";
element.style.border = "1px solid black";

console.log(element.tagName.toLowerCase());

element.before(document.createElement('span'));
let createElement =  document.querySelector('#first-element');
let span = document.createElement('span');
span.innerHTML = 'i love span';
createElement.appendChild(span);

let list = document.getElementById("first-element");
list.insertAdjacentHTML('beforeend', '<ul> <li> createElement </li> <li> appendChild </li> <li> insertBefore </li> </ul>');

let newDiv = document.createElement('div');
newDiv.classList.add("neighbor");
newDiv.innerHTML = 'еще один сосед';
let newDiv2 = document.getElementById("first-element");
let parentDiv = newDiv2.parentNode;
parentDiv.insertBefore(newDiv, element);

//2
let newSpan = document.getElementById("second-element");
newSpan.insertAdjacentHTML('beforebegin', '<span>!!!</span');

newSpan.insertAdjacentHTML('afterend', '<span>!!!</span');

newSpan.insertAdjacentHTML('beforeend', '<span>!!!</span');

newSpan.insertAdjacentHTML('afterbegin', '<span>!!!</span');


//3
let findFirstChild = document.getElementById("third-element");
findFirstChild.firstElementChild.style.color = "red"

let findLastElement = document.getElementById("third-element");
findLastElement.lastElementChild.style.color = "red";

let childrenElements = document.getElementById("third-element");
let childrenElem = childrenElements.children;
// childrenElem.insertAdjacentHTML('beforeend', '<span>!!!</span')


//4
let addText = document.getElementById("fourth-element");
let text = addText.previousElementSibling;
text.insertAdjacentHTML('beforeend', '<span>!</span');

let textTwo = addText.nextElementSibling;
textTwo.insertAdjacentHTML('beforeend', '<span>!</span')

let textThirt = addText.nextElementSibling;
let textF = textThirt.nextSibling;
textF.nextSibling.insertAdjacentHTML('beforeend', '<span>!</span');

//5
let five = document.getElementById("fifth-element");
five.parentElement.style.color = "blue";
let parentsElem = document.getElementById("fifth-element");
parentsElem.parentElement.parentElement.style.color = "green";

