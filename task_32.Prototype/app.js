let house = {
    width : 20,
    l : 10,
    getSquare : function(){
        return this.l * this.width;
    }

};

let oneFloorHouse = {
    __proto__:house,

};

let atticHouse = {
    __proto__:house,
    getSquare: function(){
        return 1.5 * this.l * this.width;
    }
};

let mezzelHouse = {
    __proto__:house,
    getSquare: function(){
        return 2 * this.l * this.width;
    }
};

