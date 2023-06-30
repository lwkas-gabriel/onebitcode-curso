let opt = 0;
const listaImoveis = [];

do{
    opt = parseInt(prompt("Qtd imóveis cadastrados no sistema: " + listaImoveis.length + "\n" +  
    "O que você deseja fazer?" + "\n" + 
    "1 - Salvar novo imóvel" + "\n" +
    "2 - Listar imóveis" + "\n" + 
    "3 - Sair"));

    switch(opt){
        case 1:
            let imovel = {};
            imovel.proprietario = prompt("Qual o nome do proprietário?");
            imovel.qtdQuartos = parseInt(prompt("Quantos quartos tem no imóvel?"));
            imovel.qtdBanheiros = parseInt(prompt("Quantos banheiros tem no imóvel?"));
            imovel.temGaragem = prompt("O imóvel possui garagem?");
            listaImoveis.push(imovel);
            alert("Imóvel adicionado com sucesso!");
            break;
        case 2:
            let listaStringConcat = "";
            for(let i = 0; i < listaImoveis.length; i++){
                listaStringConcat += 
                "Proprietário: " + listaImoveis[i].proprietario + "\n" + 
                "Quantidade de Banheiros: " + listaImoveis[i].qtdBanheiros + "\n" +
                "Tem Garagem: " + listaImoveis[i].temGaragem + "\n" + 
                "======================================" + "\n";
            }
            alert(listaStringConcat);
            break;
        case 3:
            alert("Saindo do sistema")
            break;
        default:
            alert("Não entendi, por favor repita a operação!")
    }
}while(opt!==3);