class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo,linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log("programando....");
    }
}

module.exports = Desenvolvedor;