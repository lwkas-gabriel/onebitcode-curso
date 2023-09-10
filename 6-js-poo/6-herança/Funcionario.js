class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log("Olá, meu nome é " + this.nome);
    }

    trabalhar(){
        console.log("Trabalhando...");
    }
}

module.exports = Funcionario;