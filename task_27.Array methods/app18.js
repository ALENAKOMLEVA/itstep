let a = [2, 4, 5, 6, 7, 8];
function negativeElement(element, index, array){
    return element < 0;
}

console.log(a.some(negativeElement))