let user = {
    name: "Иван",
    sizes: {
      height: 182,
      width: 50
    }
};

let cloneUser = {};
for(let key in user){
    if(typeof user[key] != 'object'){
        cloneUser[key] = user[key];
    } else{
        cloneUser[key] = {};
        for(let key1 in user[key]){
            cloneUser[key][key1] = user[key][key1];
        }
    }
}
console.log(cloneUser)