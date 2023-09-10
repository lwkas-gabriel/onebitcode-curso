class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log("Gerenciando...");
    }
}


module.exports = Gerente;