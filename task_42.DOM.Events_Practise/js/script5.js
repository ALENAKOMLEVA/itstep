document.getElementById("button").onclick = function(){
    let x = document.getElementById("a").value;
    let res;
    if( x.value = Number){
        res = "num";
       
    } else(x.value )(
        res = "not num"
    )
    document.getElementsByTagName("p").item(0).innerHTML = res;
}