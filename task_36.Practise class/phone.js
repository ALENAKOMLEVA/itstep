class Phone{
    number;
    model;
    weight;
    constructor(number, model, weight){
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
    receineCall(name){
        console.log(`Звонит ${name}`)
    }
    getNumber(){
        console.log(this.number)
        
    }
}



export {Phone}
