// Exercício 1 Parte 1

let nome = "Davi";
let idade = 20;
let cidade = "Jaú";

console.log(
  "Você foi registrado no banco de dados nosso, confirma seus dados?",
  nome,
  idade,
  cidade,
);

// Exercício 2 parte 1


console.log("---------------------------------------------------------")
let x = 8;
let y = 5;
console.log("x =", x, "\ny =", y);
console.log("----------------");

let soma = x + y; 
console.log("A soma de x + y é", soma);


let subtracao = x - y; 
console.log("A subtração de x - y é", subtracao); 

let multiplicacao = x * y; 
console.log("A multiplicação de x * y é", multiplicacao); 


let divisao = x / y; 
console.log("A divisão de x / y é", divisao);

console.log("---------------------------------------------------------")

// Exercício 3 parte 1
let altura = 10
let base = 20
let retangulo = altura * base 

console.log("Calculando seu retângulo, aguarde!...", retangulo)

// Exercício 4 parte 1
let comprimento = 10
let largura = 20
let alturaA = 30
let paralelepidedo = comprimento * largura * alturaA

console.log("Calculando seu paralelepidedo , aguarde!...",paralelepidedo)

// Exercício 5 parte 1
function desconto(valorVenda, percentualDesconto) {
  let valorDesconto = valorVenda * (percentualDesconto / 100);
  return valorDesconto;
}

let totalPedido = 100;
let totalDesconto = desconto(totalPedido,50);
let valorFinal = totalPedido - totalDesconto;

console.log("------------------------------------------");
console.log("Total do Pedido:", totalPedido);
console.log("Total do Desconto:", totalDesconto);
console.log("Valor Final do Pedido:", valorFinal);
console.log("------------------------------------------");

// Exercício 6 parte 1
let celcius = 2
let Fahrenheit = (2 * 9/5) + 32 

console.log("A transformação de celcius para Fahrenheit é:",  Fahrenheit);


console.log("------------------------------------------");


// Exercício 7 parte 1
let pesoPessoa= 62 ;
let alturaB = 1.65
let calcular = pesoPessoa / alturaB * alturaB

console.log("O imc estimado da pessoa calculado acima é:",calcular)

console.log("------------------------------------------");

// Exercício 8 parte 1
  let notav1 = 7
  let notav2 = 5
  let notav3 = 10
  let calcularNota =notav1 + notav2 + notav3 /3

  console.log("A sua media final é:", calcularNota.toFixed(2))

  console.log("------------------------------------------");

  // Exercício 9  parte 1
  let a = 2
  let b = 4
  let c = 6
  let equacao = a * a + b + c

  console.log("O valor do delta da equação é:", equacao)

  console.log("------------------------------------------");

  // Exercício 10 parte 1






