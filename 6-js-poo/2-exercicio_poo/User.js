class User{
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(this.email === email & this.password === password){
            console.log("Login efetuado com sucesso!");
        }else{
            console.log("Verifique suas credenciais!");
        }
    }
}   