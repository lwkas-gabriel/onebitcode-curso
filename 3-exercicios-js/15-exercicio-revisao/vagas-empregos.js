function listarTodasAsVagas(){
    const descricaoGeralVagasCadastradas = bancoDeVagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += `${indice}. ${vaga.nomeVaga}\n 
        Inscritos: ${vaga.inscritos.length}\n
        ================ \n`
    });
    alert(descricaoGeralVagasCadastradas);
}

function criarNovaVaga(){
    let novaVaga = {};
    let confirma = false;

    do{
        novaVaga.nomeVaga = prompt("Qual o nome dessa vaga?");
        novaVaga.descricaoDaVaga = prompt("Insira uma breve descrição sobre a vaga:");
        novaVaga.dataLimite = prompt("Data limite de inscrição: ");

        confirma = confirm("Os dados abaixo estão corretos?" + "\n" 
        + novaVaga.nomeVaga + "\n" + 
        "Descrição: "+ novaVaga.descricaoDaVaga + "\n" + 
        "Data limite para inscrição: "+ novaVaga.dataLimite + "\n");

    }while(confirma===false);

    novaVaga.inscritos = [];
    bancoDeVagas.push(novaVaga);
}


function inscreverCandidato(){
    let confirma = false;

    do{
        const nomeCandidato = prompt("Informar nome do candidato:");
        indiceVaga = parseInt(prompt("Informar indice da vaga:"));

        confirma = confirm("Os dados abaixo estão corretos?" + "\n" + 
        "Nome candidato: " + nomeCandidato + "\n" + 
        "Indice da vaga: " + indiceVaga + "\n");
    }while(confirma === false);

    bancoDeVagas[indiceVaga].inscritos.push(nomeCandidato);
}

function excluirVaga(){
    let confirma;
    indiceVaga = parseInt(prompt("Informar indice da vaga:"));
    confirma = confirm(dadosDaVaga(indiceVaga));

    if(confirma){
        bancoDeVagas.splice(indiceVaga)
        alert("Vaga excluida com sucesso!");
    }else{
        alert("Cancelando operação!");
    }
}

function dadosDaVaga(indice){
    if(indice >= bancoDeVagas.length || indice < 0){
        return "Indice inválido!"
    }
        return `${bancoDeVagas[indice].nomeVaga} \n
        Descrição: ${bancoDeVagas[indice].descricaoDaVaga} \n
        Data Limite: ${bancoDeVagas[indice].dataLimite} \n
        Quantidade de inscritos: ${bancoDeVagas[indice].inscritos.length} \n
        Lista de inscritos: ${bancoDeVagas[indice].inscritos}`;
}

const bancoDeVagas = [];
let indiceVaga;

do{
    opt = parseInt(prompt("Sistem Genérico de Empregos!" + "\n"+
    "Qual operação você deseja realizar?" + "\n" + 
    "1 - Listar vagas disponíveis" + "\n" + 
    "2 - Criar uma nova vaga " + "\n" + 
    "3 - Visualizar uma vaga" + "\n" +
    "4 - Inscrever uma candidato em uma vaga" + "\n" + 
    "5 - Excluir vaga" + "\n" +
    "6 - Sair"));

    switch(opt){
        case 1:
            listarTodasAsVagas();
            break;
        case 2:
            criarNovaVaga();
            break;
        case 3:
            indiceVaga = parseInt(prompt("Informar indice da vaga:"));
            alert(dadosDaVaga(indiceVaga));
            break;
        case 4:
            inscreverCandidato();
            break;
        case 5:
            excluirVaga();
            break;
        case 6:
            alert("Saindo do sistema...");
            break;
        default:
            alert("não entendi, por favor repita a operação")
    }
}while(opt!==6);