alert("Verificador de palíndromos!");
let word = prompt("Qual a palavra a ser verificada?");
let reverseWord = "";

for(let i = word.length-1; i >= 0; i--){
    reverseWord += word[i]
}

if(word === reverseWord){
    alert("palavra informada: " + word + "\n" +
    "palavra invertida: " + reverseWord + "\n"+
    "Logo, a palavra informada é um palíndromo!");
}else{
    alert("palavra informada: " + word + "\n" +
    "palavra invertida: " + reverseWord + "\n"+
    "Logo, a palavra informada não é um palíndromo!");
}