class User{
    login;
    password;
    userBasket;
    constructor(login, password, userBasket){
        this.login = login;
        this.password = password;
        this.userBasket = userBasket;
    }
}

export { User}