let cidades = "";
let yesNo = ""
let count = 0;


yesNo = prompt("Você já viajou para alguma cidade? (Sim/Não)");

while(yesNo === "Sim"){
    cidades += ", " + prompt("Para qual?");
    count++;
    yesNo = prompt("Você já viajou para alguma cidade? (Sim/Não)");
}

console.log(cidades);
console.log("Você visitou " + count + " cidade(s)!")