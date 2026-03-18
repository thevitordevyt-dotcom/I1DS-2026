/* 
🧠 Desafio de Programação – Sistema de Média Escolar
🎯 Objetivo


Criar um programa em JavaScript que calcule a média final de um aluno e informe sua situação no final do ano.


📌 Regras do programa
1. O programa deve receber 4 notas (de 0 a 10).
2. Calcular a média das notas.
3. Informar a situação do aluno de acordo com a média:


Média                   Situação
menor que 5             Reprovado
entre 5 e 6.9           Recuperação
maior ou igual a 7      Aprovado
*/

function Final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "reprovado";
  else if (media > 7) situacao = "recuperação";

  return ("Mostrar no boletim final", media);
}

console.log(Final(5, 6.9, 7, 10));
let media = 6.9;

switch (media) {
  case 5.0:
  case 6.9:
  case 7.0:
  case 10.0:
    console.log("Aprovado no trimestre");
    break;
  default:
    console.log("Reprovado no trimestre");
    break;
}
console.log(media.toFixed(2));
console.log("Sua nota final e:", media);
