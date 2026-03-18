/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/
function Nota(Notas) {
  let frase;
  if (Notas >= 7) {
    frase = "Aprovado";
  } else if (nota <= 5 && nota <= 6.9 ) {
    frase = "reprovado";
  } else {
    frase = "recuperação";
  }
  return frase;
}
let nota = 6.9;
console.log("Notas:", nota, "-", Nota(nota));
nota = 7.0;
console.log("Notas:", nota, "-", Nota(nota));
nota = 5.0;
console.log("Notas:", nota, "-", Nota(nota));


