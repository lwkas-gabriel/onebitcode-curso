const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns; // não é uma copia propriamente dita, mas sim uma referencia ao array original.

// townsCopy.pop();
// townsCopy.pop();
// townsCopy.push("Juno");

// console.log({towns, townsCopy}); // efetuei as operações apenas no townsCopy, mas acabei mudando o array original tbm

const townsClone = [...towns]; // o operador spread faz de fato uma cópia do array... diferente de uma atribução por referencia.

townsClone.push("Juno");

console.log({towns, townsClone});

const townsObject = { ...towns };
const townsObjectClone = { ... townsObject };

townsObjectClone.teste = "Teste"; // apenas o clone vai ter a propriedade teste!

console.log({townsObject, townsObjectClone});