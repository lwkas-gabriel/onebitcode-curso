let pilhaDeCartas = [];
let opt = 0;

do{
    opt = parseInt(prompt(
    imprimirPilhaDeCartas(pilhaDeCartas) + "\n" +
    "Baralho!" + "\n" +
    "1 - Adicionar nova carta" + "\n" +
    "2 - Puxar carta" + "\n" +
    "3 - Sair da aplicação" + "\n" + 
    "O que você deseja fazer?"));

    switch (opt){
        case 1: // adicionando carta na pilha!
            let cartaNova = prompt("Qual carta você deseja adicionar?");
            pilhaDeCartas.push(cartaNova);
            alert(`A carta ${cartaNova} foi adicionado a pilha!`);
            break;
        case 2: // retirando carta da pilha
            if(pilhaDeCartas.length===0){
                alert("Não tem carta para retirar a pilha!")
            }else{
                let cartaRemovida = pilhaDeCartas.pop();
                alert(`A carta ${cartaRemovida} foi retirada do topo do baralho!`);
            }
            break;
        case 3:
            alert("encerrando aplicação...");
            break;
        default:
            alert(`Opção inválida!`)
    }
}while(opt!==3);


function imprimirPilhaDeCartas(pilhaDeCartas){
    let stringConcatenada = "";
    if(stringConcatenada.length===0){
        stringConcatenada += "A pilha de cartas ainda está vazia!"
    }else{
        for(let i = 0; i < pilhaDeCartas.length; i++){
            stringConcatenada += `${i+1}º - ${pilhaDeCartas[i]} \n`
        }
    }

    return stringConcatenada;
}