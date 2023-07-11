const mediaAritmetica = (...numbers) => {
    const somatoria = numbers.reduce((increment, number) => increment + number, 0);
    return parseFloat(somatoria / numbers.length)
}

const mediaAritmeticaPonderada = (...numbers) => {
    // o nullish ali é meramente ilustrativo, o exercicio não pede, foi só pra demonstrar o uso
    const somatoria = numbers.reduce((increment, number) => increment + (number.valor * (number.peso ?? 1)), 0);
    const somaPesos = numbers.reduce((increment, number) => increment + (number.peso ?? 1), 0);
    return parseFloat(somatoria / somaPesos);
}

const mediana = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a - b);
    if(orderedNumbers.length % 2 === 0){
        return (orderedNumbers[((orderedNumbers.length)/2)-1] + orderedNumbers[(orderedNumbers.length)/2])/2;
    }else{
        return (orderedNumbers[(orderedNumbers.length-1)/2])
    }
}

const moda = (...numbers) => {
    // teremos abaixo um array bidimensional
    // ex: [ [n, qtd], [n, qtd], [n, qtd]]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ]);

    quantities.sort((a,b) => b[1] - a[1]);
    
    return quantities[0][0];
}

// console.log(mediaAritmeticaPonderada({valor: 9, peso: 1}, {valor: 5, peso: 2}, {valor: 9, peso: 3}, {valor: 7, peso: 4}));

// console.log(mediana(1,2,4,5,8,9));