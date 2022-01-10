document.getElementById("text").onclick = function(){
    let p = document.getElementsByTagName("p").item(0); //извлекаем текст для дальнейших преобразований
    p.style.fontWeight = "600";
    document.getElementsByTagName("p").item(0) = p; //получаем преобразованный текст
   
}
