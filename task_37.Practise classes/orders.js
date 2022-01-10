class Orders{
    comfortType;
    price;
    status;
    constructor(comfortType, km){
        this.comfortType = comfortType;
        this.price = km * 0.6;
    }
    placeOrder(){
        this.status = 0;
        console.log("Order crated");
    }
    startOrder(){
        this.status = 1;
        console.log("In trip");

    }
    endOrder(){
        this.status = 2;
        console.log("Order ended");
    }

}

export {Orders}