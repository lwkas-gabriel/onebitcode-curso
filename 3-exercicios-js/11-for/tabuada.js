alert("Gerador de Tabuada!");
let numero = parseInt(prompt("Qual a tábuada a ser gerada?"));
let tabuada = "";

for(let i = 1; i<=20;i++){
    tabuada += numero + " x " + i + " = " + numero*i + "\n";
}

alert(tabuada);