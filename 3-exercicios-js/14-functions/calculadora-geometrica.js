function areaTriangulo(){
    base = parseFloat(prompt("Qual a base?"));
    altura = parseFloat(prompt("Qual a altura?"));
    alert(`A área do Triangulo é ${(base*altura)/2}`);
}

function areaRetangulo(){
    base = parseFloat(prompt("Qual a base?"));
    altura = parseFloat(prompt("Qual a altura?"));
    alert(`A área do Retangulo é ${(base*altura)}`);
}

function areaQuadrado(){
    lado = parseFloat(prompt("Qual o lado do quadrado?"));
    alert(`A área do Quadrado é ${Math.pow(lado,2)}`);
}

function areaTrapezio(){
    base = parseFloat(prompt("Qual a base maior do trapezio?"));
    baseMenor = parseFloat(prompt("Qual a base menor do trapezio?"));
    altura = parseFloat(prompt("Qual a altura?")); 
    alert(`A área do Trapezio é ${(base+baseMenor)*altura/2}`);
}

function areaCirculo(){
    raio = parseFloat(prompt("Qual o raio do circulo?"));
    alert(`A área do Circulo é ${3.14 * Math.pow(raio,2)}`);
}

let opt = 0;
let base;
let baseMenor;
let altura;
let lado;
let raio;

do{
    opt = parseInt(prompt("Calculadora Geométrica!" + "\n"+
    "Qual operação você deseja realizar?" + "\n" + 
    "1 - Calcular a área de um triângulo" + "\n" + 
    "2 - Calcular a área de um retângulo " + "\n" + 
    "3 - Calcular a área de um quadrado" + "\n" +
    "4 - Calcular a área de um trapézio" + "\n" + 
    "5 - Calcular a área de um círculo" + "\n" +
    "6 - Sair"));

    switch(opt){
        case 1:
            areaTriangulo();
            break;
        case 2:
            areaRetangulo();
            break;
        case 3:
            areaQuadrado();
            break;
        case 4:
            areaTrapezio();
            break;
        case 5:
            areaCirculo();
            break;
        case 6:
            alert("Saindo do sistema...");
            break;
        default:
            alert("não entendi, por favor repita a operação")
    }
}while(opt!==6);