// let width;
// let height;

// let element = document.querySelector(".square-normal");
// element.addEventListener("click", function(event){
//     width = window.getComputedStyle(element, null).getPropertyValue("width");
//     width = String(width);
//     width = width.slice(0, -2);
//     console.log(width);

//     height = window.getComputedStyle(element, null).getPropertyValue("height");
//     height = String(height);
//     height = height.slice(0, -2);
//     console.log(height)

//     if(event.which == 1){
//         width = +width / 2;
//         height = +height / 2;
//     }
// });


document.querySelector(".square-normal").onclick = function(event){
    let style = getComputedStyle(this); //получаем стили, в скобочках может быть записано любое слово
    let widthStr = style.width; //получаем ширину из CSS
    let heightStr = style.height;

    width = +widthStr.slice(0, -2) * 2; // + - это преобразование в число
    height = +heightStr.slice(0, -2) * 2;

    this.style.width = `${width}px`;
    this.style.height = `${height}px`
}

document.querySelector(".square-normal").oncontextmenu = function(event){
    let style = getComputedStyle(this); //получаем стили, в скобочках может быть записано любое слово
    let widthStr = style.width; //получаем ширину из CSS
    let heightStr = style.height;

    width = +widthStr.slice(0, -2) / 2;
    height = +heightStr.slice(0, -2) / 2;

    this.style.width = `${width}px`;
    this.style.height = `${height}px`
    return false;
}



