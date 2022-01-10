
class Engine{
    power;
    company;
    constructor(power, company){
        this.power = power;
        this.company = company;
    }
    toString(){
        // console.log("Motor from: " + this.company + ", with " + this.power + " HP");
    }
}

export{Engine}