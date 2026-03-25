let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];
console.table(matriz);

console.log(matriz[(0, 1)]);
console.log(
  "Esse valor dado e a diagonal principal, pois é metade que corta o valor ao meio da última coluna!",
);
console.log(
  "-----------------------------------------------------------------------------------------------",
);
console.log(matriz[(2, 2)]);
console.log(matriz[(3, 0)]);
console.log(matriz[(1, 3)]);

matriz[1][2] = 20;
matriz[2][0] = 30;

console.table(matriz);
