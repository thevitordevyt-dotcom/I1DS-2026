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
let horas1 = "1 hora no horario de brasilia"
let minutos2 = "60 minutos de 1 hora convertidos"
let segundos3 = "3600 convertidos de 60 minutos"
console.log("A conversão total de horas a cada uma 1 hora e",horas1,minutos2,segundos3)

console.log("------------------------------------------");

// Exercício 11 parte 2
function verificarNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero (nulo).");
    }
}

// Exemplos
verificarNumero(10);
verificarNumero(-5);
verificarNumero(0);

console.log("------------------------------------------");

// Exercício 12 parte 2
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}

// Exemplo de uso:
verificarParOuImpar(10);
verificarParOuImpar(7);


console.log("------------------------------------------");

// Exercício 13 parte 2
function verificarMultiploDe3(numero) {
    if (numero % 3 === 0) {
        console.log("O número é múltiplo de 3.");
    } else {
        console.log("O número não é múltiplo de 3.");
    }
}

// Exemplos:
verificarMultiploDe3(9);
verificarMultiploDe3(10);


console.log("------------------------------------------");


// Exercício 14 parte 2
function verificarSituacao(nota) {
    if (nota >= 7) {
        console.log("Aprovado");
    } else if (nota >= 5 && nota < 7) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}

// Exemplos:
verificarSituacao(8);
verificarSituacao(6);
verificarSituacao(4);


console.log("------------------------------------------");

// Exercício 15 parte 2

function verificarVoto(idade) {
    if (idade < 16) {
        console.log("Não pode votar.");
    } else if (idade >= 16 && idade < 18) {
        console.log("Voto facultativo.");
    } else if (idade >= 18 && idade <= 70) {
        console.log("Voto obrigatório.");
    } else {
        console.log("Voto facultativo.");
    }
}

// Exemplos:
verificarVoto(15);
verificarVoto(17);
verificarVoto(30);
verificarVoto(75);

console.log("------------------------------------------");

// Exercício 16 parte 2

function verificarIntervalo(numero) {
    if (numero >= 10 && numero <= 50) {
        console.log("O número está entre 10 e 50.");
    } else {
        console.log("O número NÃO está entre 10 e 50.");
    }
}

// Exemplos:
verificarIntervalo(25);
verificarIntervalo(9);
verificarIntervalo(50);

console.log("------------------------------------------");

// Exercício 17 parte 2
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

function login(usuario, senha) {
  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login OK");
  } else {
    console.log("Erro");
  }
}

// Exemplo de uso:
login("admin", "1234");

console.log("------------------------------------------");

// Exercício 18 parte 2
function maior(a, b) {
  if (a > b) return a;
  else return b;
}

// Exemplo:
console.log(maior(10, 20)); // 20

console.log("------------------------------------------");

// Exercício 19 parte 2

function maior(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// Exemplo:
console.log(maior(10, 25, 15)); // 25

console.log("------------------------------------------");

// Exercício 20 parte 2
function classificarIdade(idade) {
  if (idade >= 0 && idade <= 12) return "Criança";
  if (idade >= 13 && idade <= 17) return "Adolescente";
  if (idade >= 18 && idade <= 59) return "Adulto";
  if (idade >= 60) return "Idoso";
  return "Idade inválida";
}

// Exemplos:
console.log(classificarIdade(8));   // Criança
console.log(classificarIdade(15));  // Adolescente
console.log(classificarIdade(30));  // Adulto
console.log(classificarIdade(70));  // Idoso

console.log("------------------------------------------");

// Exercício 21 parte 3
function diaDaSemana(num) {
  const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  if (num >= 1 && num <= 7) return dias[num - 1];
  return "Número inválido";
}

// Exemplos:
console.log(diaDaSemana(1)); // Domingo
console.log(diaDaSemana(5)); // Quinta
console.log(diaDaSemana(7)); // Sábado

console.log("------------------------------------------");

//Exercício 22 parte 3
function nomeDoMes(num) {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  if (num >= 1 && num <= 12) return meses[num - 1];
  return "Mês inválido";
}

// Exemplos:
console.log(nomeDoMes(1));  // Janeiro
console.log(nomeDoMes(7));  // Julho
console.log(nomeDoMes(12)); // Dezembro

console.log("------------------------------------------");

// Exercício 23 parte 3
function trimestreDoMes(mes) {
  if (mes >= 1 && mes <= 3) return "1º Trimestre";
  if (mes >= 4 && mes <= 6) return "2º Trimestre";
  if (mes >= 7 && mes <= 9) return "3º Trimestre";
  if (mes >= 10 && mes <= 12) return "4º Trimestre";
  return "Mês inválido";
}

// Exemplos:
console.log(trimestreDoMes(2));  // 1º Trimestre
console.log(trimestreDoMes(5));  // 2º Trimestre
console.log(trimestreDoMes(11)); // 4º Trimestre

console.log("------------------------------------------");

// Exercício 24 parte 3
function menu(opcao, a, b) {
  switch(opcao) {
    case 1:
      return a + b;
    case 2:
      return a - b;
    case 3:
      return a * b;
    case 4:
      if (b !== 0) return a / b;
      else return "Erro: divisão por zero";
    default:
      return "Opção inválida";
  }
}

// Exemplos:
console.log(menu(1, 10, 5)); // 15 (Soma)
console.log(menu(2, 10, 5)); // 5  (Subtração)
console.log(menu(3, 10, 5)); // 50 (Multiplicação)
console.log(menu(4, 10, 5)); // 2  (Divisão)

console.log("------------------------------------------");

// Exercício 25 parte 3
function avaliacao(nota) {
  switch(nota.toUpperCase()) {
    case "A":
      return "Excelente";
    case "B":
      return "Bom";
    case "C":
      return "Regular";
    case "D":
      return "Ruim";
    default:
      return "Nota inválida";
  }
}

// Exemplos:
console.log(avaliacao("A")); // Excelente
console.log(avaliacao("b")); // Bom
console.log(avaliacao("C")); // Regular
console.log(avaliacao("D")); // Ruim
console.log(avaliacao("E")); // Nota inválida
console.log("------------------------------------------");

// Exercício 26 parte 4
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("------------------------------------------");

// Exercício 27 parte 4
for (let i = 100; i >= 1; i--) {
  console.log(i);
}
console.log("------------------------------------------");

// Exercício 28 parte 4
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}
console.log("------------------------------------------");

// Exercício 29 parte 4
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}
console.log("------------------------------------------");

// Exercício 30 parte 4
let soma7 = 0;
for (let i = 1; i <= 100; i++) {
  soma7 += i;
}
console.log("Soma de 1 a 100:", soma7);

console.log("------------------------------------------");

// Exercício 31 parte 4
function fatorial(n) {
  let resultado7 = 1;
  for (let i = 2; i <= n; i++) {
    resultado7 *= i;
  }
  return resultado7;
}

// Exemplo:
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1


console.log("------------------------------------------");

// Exercício 32 parte 4
function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Exemplo:
tabuada(5);

console.log("------------------------------------------");

// Exercício 33 parte 4
let contador = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    contador++;
  }
}

console.log("Quantidade de números pares entre 1 e 100:", contador);
console.log("------------------------------------------");

// Exercício 34 parte 4
for (let i = 0; i <= 100; i += 5) {
  console.log(i);
}
console.log("------------------------------------------");
// Exercício 35 parte 4
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
console.log("------------------------------------------");

// Exercício 36 parte 5
let numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
console.log("------------------------------------------");

// Exercício 37 parte 5
let numeros8 = [1,2,3,4,5,6,7,8,9,10];
let soma8 = 0;

for (let i = 0; i < numeros8.length; i++) {
  soma8 += numeros8[i];
}

console.log("Soma dos elementos do vetor:", soma8);

console.log("------------------------------------------");

// Exercício 38 parte 5
let numeros9 = [1,2,3,4,5,6,7,8,9,10];
let soma9 = 0;

for (let i = 0; i < numeros9.length; i++) {
  soma9 += numeros9[i];
}

let media9 = soma9 / numeros9.length;
console.log("Média dos elementos do vetor:", media9);

console.log("------------------------------------------");

// Exercício 39 parte 5
let numeros10 = [5, 12, 8, 20, 3, 15, 7, 10, 2, 18];
let maior10 = numeros10[0];

for (let i = 1; i < numeros10.length; i++) {
  if (numeros10[i] > maior10) {
    maior10 = numeros10[i];
  }
}

console.log("Maior valor do vetor:", maior10);

console.log("------------------------------------------");

// Exercício 40 parte 5
let numeros11 = [5, 12, 8, 20, 3, 15, 7, 10, 2, 18];
let menor11 = numeros11[0];

for (let i = 1; i < numeros11.length; i++) {
  if (numeros11[i] < menor11) {
    menor11 = numeros11[i];
  }
}

console.log("Menor valor do vetor:", menor11);

console.log("------------------------------------------");

// Exercício 41 parte 5
let numeros12 = [5, 12, 8, 20, 3, 15, 7, 10, 2, 18];
let pares12 = 0;
let impares12 = 0;

for (let i = 0; i < numeros12.length; i++) {
  if (numeros12[i] % 2 === 0) {
    pares12++;
  } else {
    impares12++;
  }
}

console.log("Números pares:", pares12);
console.log("Números ímpares:", impares12);

console.log("------------------------------------------");

// Exercício 42 parte 5
let numeros13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros13.length; i++) {
  numeros13[i] *= 2;
}

console.log("Vetor multiplicado por 2:", numeros13);

console.log("------------------------------------------");

// Exercício 43 parte 6
let matriz14 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz14.length; i++) {
  for (let j = 0; j < matriz14[i].length; j++) {
    console.log(`matriz[${i}][${j}] = ${matriz14[i][j]}`);
  }
}

console.log("------------------------------------------");

// Exercício 44 parte 6
let matriz15 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Diagonal principal:");
for (let i = 0; i < matriz15.length; i++) {
  for (let j = 0; j < matriz15[i].length; j++) {
    if (i === j) {
      console.log(matriz15[i][j]);
    }
  }
}
console.log("------------------------------------------");

// Exercício 45 parte 6
let matriz16 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Diagonal secundária:");
for (let i = 0; i < matriz16.length; i++) {
  for (let j = 0; j < matriz16[i].length; j++) {
    if (i + j === matriz16.length - 1) {
      console.log(matriz16[i][j]);
    }
  }
}

console.log("------------------------------------------");

// Exercício 46 parte 6
let matriz17 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma17 = 0;

for (let i = 0; i < matriz17.length; i++) {
  for (let j = 0; j < matriz17[i].length; j++) {
    soma17 += matriz17[i][j];
  }
}

console.log("Soma de todos os elementos da matriz:", soma17);

console.log("------------------------------------------");

// Exercício 47 parte 6
let matriz18 = [
  [5, 12, 8],
  [20, 3, 15],
  [7, 10, 2]
];

let maior18 = matriz18[0][0];

for (let i = 0; i < matriz18.length; i++) {
  for (let j = 0; j < matriz18[i].length; j++) {
    if (matriz18[i][j] > maior18) {
      maior18 = matriz18[i][j];
    }
  }
}

console.log("Maior valor da matriz:", maior18);

console.log("------------------------------------------");

// Exercício 48 parte 6
let matriz20 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let X1 = 3; // número pelo qual queremos multiplicar

for (let i = 0; i < matriz20.length; i++) {
  for (let j = 0; j < matriz20[i].length; j++) {
    matriz20[i][j] *= X1;
  }
}

console.log("Matriz multiplicada por", X1, ":");
for (let i = 0; i < matriz20.length; i++) {
  console.log(matriz20[i]);
}

console.log("------------------------------------------");

// Exercício 49 parte 6
let matriz21 = [
  [5, 12, 8],
  [20, 3, 15],
  [7, 10, 2]
];

let contador21 = 0;

for (let i = 0; i < matriz21.length; i++) {
  for (let j = 0; j < matriz21[i].length; j++) {
    if (matriz21[i][j] > 10) {
      contador21++;
    }
  }
}

console.log("Quantidade de valores maiores que 10:", contador21);

// Exercício 50 parte 6
let matriz22 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz22.length; i++) {
  let linha22 = "[ ";
  for (let j = 0; j < matriz22[i].length; j++) {
    linha22+= matriz22[i][j] + " ";
  }
  linha22 += "]";
  console.log(linha22);
}
console.log("------------------------------------------");













