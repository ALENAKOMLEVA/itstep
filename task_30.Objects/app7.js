let user = {
    name: "Иван",
    age: 30
};

const cloneUser = Object.assign({}, user);
console.log(cloneUser)


//или
let cloneUser2 = {};
for(let key in user){
    cloneUser2[key] = user[key];
}
console.log(cloneUser2)