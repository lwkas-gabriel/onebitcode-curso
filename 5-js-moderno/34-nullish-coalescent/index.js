const a = 0;

const b = null;

const c = "Teste";

console.log(a || b || c);


// se operando do lado esquerdo for nulo ou nullish, retorna o outro!
// se o valor do operador por "traduzivel" para "falso", a mesma coisa acima vai ocorrer
console.log(b ?? a);