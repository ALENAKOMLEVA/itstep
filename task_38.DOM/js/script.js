var fruits = ["apple", "orange", "lime","watermelon"];

let out = "<ul>";
// fruits.forEach(function(item){
//     out = out + `<li>${item}</li>`;
// })
// out += "</ul>"; 

for(i = 0; i < fruits.length; i++){
    out = out + `<li>${fruits[i]}</li>`;
}
out = "</ul>";
document.write(out)

let out = "<div class = 'box'>";
for(let i = 1; i <= 30; i++){
    
    if(i%2 == 0)
        out = out + `<span class 'red'>${i}</span>`;
    else
    out += `<span>${i}</span>`    
}
 out = out + "</div class = 'box'>";
// document.write(out)


out = "<table class='chess'>";

for(let i = 1; i <= 6; i++){
    out = out + "<tr>"
    for(let j = 1; j <= 6; j++){
        if((i+j) % 2 == 0){
            out += "<td class='white'></td>"; //ячейки
        }
        else{
            out += "<td class='black'></td>"; //ячейки
        }
    }
    out = out + "</tr>"
}

out += "</table>";

// document.write(out);

