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

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log("Gerenciando...");
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo,linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log("programando....");
    }
}


const gerenteNovo = new Gerente("Gerente 1", 37, "Gerente", "Financeiro");
const programadorNovo = new Desenvolvedor("Programador 1", 22, "Desenvolvedor", "Desenvolvimento");

console.log(gerenteNovo);
console.log(programadorNovo);

gerenteNovo.gerenciar();
programadorNovo.programar();