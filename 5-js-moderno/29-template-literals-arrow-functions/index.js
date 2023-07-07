const imprimaMeuNome = () =>{
    const nome = prompt("Insira seu nome: ");
    alert(`Seja bem-vindo, ${nome}!`);
};

imprimaMeuNome();

/// Para que usar arrow functions? Pra que usar funções anonimas?
// deixa o codigo mais legível..

//asssim como as funcções anominas, precisam ser armazenadas em variáveis, pois não possuem nome.
// se o return so tiver uma linha, não precisa do return
// se só tiver um parametro, os parenteses se tornam opcionais!

// caso de uso abaixo onde as arrows functions são bem utilizadas!

//com as high order functions dos arrays!
const towns = ["Prontera" ,"Izlude", "Payon", "Alberta", "Geffen", "Aldebaran", "Juno"];

const startingWithP = towns.filter(town => town[0] === "P");

console.log(startingWithP);