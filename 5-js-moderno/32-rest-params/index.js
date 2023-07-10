/// com esse rest param, é possível passar uma quantidade qualquer de parametros
// a estruturao deve ser usada sempre no final

function sum(...numbers){
    return numbers.reduce((accum, num)=> accum + num, 0)
}

console.log(sum(1,1));
console.log(sum(1,1,5,6,4,7,8,9,6,5,4,1,2,3));