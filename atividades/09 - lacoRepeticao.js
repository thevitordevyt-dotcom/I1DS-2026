// Dado um vetor , calcule  e exiba a quantidade  de  e  de impares

var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let dividirPares = 14 ;
let par = 0;
let impar = 0;
let resultado = par =+ impar

for (let i = 0 ; i < numeros.length; i++) {
    if(i % 2 == 0) par++
    else impar++   
}

console.log("Quantidade de números par registrada:", par)
console.log("Quantidade de números impar registrada:", impar)
console.log("Quantidade de números par e impar somada", resultado)
console.log("-----------------------------------------------------")


//Dado o vetor , multiplique o todos os seus elementos por 3
console.table(numeros)
for (let i = 0; i < numeros.length; i++) {
    numeros[i] *=3; //números[i] = //números[i] * 3

    console.table(numeros
    )
    
}

// Dado uma matriz 2x3 , imprima todos os seus elementos com as respectivas posições
let matriz = [
    [8,4,1],
    [3,7,8],
    [6,2,8],
    [1,3,9],

];
console.table(matriz)

// Obtendo elemento com base e seus índices
console.log(matriz[0,1])
console.log(matriz[2,2])
console.log(matriz[3,0])
console.log(matriz[1,3])

