let saldo = 0;
let quantia = 0;


saldo = parseFloat(prompt("Bem-vindo! Qual a sua quantidade de dinheiro inicial?"));
do{
    console.log("Saldo: " + saldo)
    console.log("1 - Fazer depósito");
    console.log("2 - Fazer Saque")
    console.log("3 - Sair do sistema!")
    
    option = prompt("Qual operação deseja realizar?");

    switch(option){
        case '1':
            saldo += parseFloat(prompt("Quanto você deseja depositar?"));
            break;
        case '2':
            valor = parseFloat(prompt("Quanto você deseja sacar?"));
            if(valor > saldo){
                console.log("Saldo insuficiente, por favor inserir valor correto!");
            }else{
                saldo -= valor;
            }
            break;
        case '3':
            break;
    }
}while(option != 3)