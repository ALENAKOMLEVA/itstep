

let guessButton = document.getElementById("calc");
guessButton.onclick = function(){
    let randomNumber =  Math.floor(Math.random() * 100) + 1;
    let guess;
    let x = + document.getElementById("a").value;
    if(x == randomNumber){
        guess = 'you are right!';
        
    } else if(x > randomNumber){
        guess = 'your number is more';
        
    } else if(x < randomNumber){
        guess = 'your number is less';
       
    }
    
    result.innerHTML = guess;
    
}