function verificarSituacao(nota) {
  if (nota < 5) {
    return "reprovado";
  } else if (nota < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}
console.log(verificarSituacao(5));
console.log(verificarSituacao(7));

// Parte 2 da resolução + parte extra
function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "reprovado";
  } else if (media < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}

console.log(situacaoFinal(7, 8, 6, 5));
console.log(situacaoFinal(7, 8, 7, 7));

console.log(
  "-----------------------------------------------------------------",
);
console.log("                              Solução 03");
console.log(
  "-----------------------------------------------------------------",
);

function Final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "reprovado";
  else if (media > 7) situacao = "recuperação";
  else situacao = "Aprovado";

  return "Média:" + media + " - situação " + situacao;
}

console.log(Final(7, 8, 6, 5));

