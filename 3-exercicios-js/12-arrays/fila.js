let filaPacientes = [];
let opt = 0;

do{
    opt = parseInt(prompt(
    imprimirListaDePacientes(filaPacientes) + "\n" +
    "Consultorio médico!" + "\n" +
    "1 - Adicionar novo paciente" + "\n" +
    "2 - Atender paciente" + "\n" +
    "3 - Sair da aplicação" + "\n" + 
    "O que você deseja fazer?"));

    switch (opt){
        case 1: // adicionando paciente a fila!
            let pacienteNovo = prompt("Qual o nome do paciente?");
            filaPacientes.push(pacienteNovo);
            alert(`O paciente ${pacienteNovo} foi adicionado a fila!`);
            break;
        case 2: // atendendo o paciente
            if(filaPacientes.length===0){
                alert("Não temos pacientes para atender!")
            }else{
                let pacienteRemovido = filaPacientes.shift();
                alert(`O paciente ${pacienteRemovido} foi atendido!`);
            }
            break;
        case 3:
            alert("encerrando aplicação...");
            break;
        default:
            alert(`Opção inválida!`)
    }
}while(opt!==3);


function imprimirListaDePacientes(filaPacientes){
    let filaConcatenada = "";
    if(filaPacientes.length===0){
        filaConcatenada += "A fila de atendimento ainda está vazia!"
    }else{
        for(let i = 0; i < filaPacientes.length; i++){
            filaConcatenada += `${i+1}º - ${filaPacientes[i]} \n`
        }
    }

    return filaConcatenada;
}