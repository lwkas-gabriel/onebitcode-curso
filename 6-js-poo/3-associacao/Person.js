class Person{

    //posso passar os paramentros do endereço por aqui mesmo e instaciar o objeto direto no construtor!
    // dessa forma, a dependencia seria direta.
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

module.exports = Person;