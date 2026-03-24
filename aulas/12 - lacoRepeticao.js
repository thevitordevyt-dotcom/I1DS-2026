// O professor te colocou de castigo e pediu para escrever mil vezes a frase!
// Eu vou prestar atenção nas aulas e anotar tudo!
// laço de repetição for (para)
    //Let i = 0 => primeiro utilizo uma variavel de controle
    // i < 1000  condição da repetição
    // i++ => variavel de controle para não travar o Somar
    for (let i = 0; i < 1000; i++) {
        console.log("Eu vou prestar atenção nas aulas e anotar tudo")
    
}

// Escreva os números de 1 a 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// Escreva os números pares entre 1 e 20
for (let i = 1; i < 20; i += 2) {
   console.log(i)

   // Outra solução para números pares
   for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0 ) console.log(i);
    // % resto da Divisão
    // i % 2 = resto da divisao

    
   }
    
}

// Dado um vetor, calcule a somatoria e exiba os elementos.
var numeros = [5, 6 ,8 ,14 , 0 ,6 , 9 ,7 , 2 ];
let soma= 0;

console.log(numeros.length)//Mostra a quantidade de números dentro do array



for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    
    console.log(soma)
}


