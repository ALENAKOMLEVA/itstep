document.addEventListener('mousemove', e => {
    square.style.left = e.pageX + "px";
    square.style.top = e.pageY + "px";
});




// document.addEventListener('mousemove', e => {
//     let shiftX = e.clientX - square.getBoundingClientRect().left;
//     let shiftY = e.clientY - square.getBoundingClientRect().top;
//     square.style.left = e.pageX - shiftX + "px";
//     square.style.top = e.pageY - shiftY + "px";
// });
