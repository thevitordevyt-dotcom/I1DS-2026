// Criando variáveis do tipo array (Vetor)

var dinos = ["Tiranossauro Rex","Estegossauro","Brontossauro"];

console.log(dinos);
console.table(dinos);

// length --> "Tamanho"do array ( quantidade de elementos)
console.log("O vetor tem",dinos.length,"elementos");

//Imprimir elemento a partir do indice
console.log(dinos[2]);

// push -> adiciona um novo elemento no final da fila 
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O vetor agora tem",dinos.length,"elementos");

//unshift -> adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor")
console.table(dinos);
console.log("O vetor agora tem",dinos.length,"elementos");

//obter um elemento a partir do indice
console.log("1° posição ", dinos [0]);
console.log("4° posição ", dinos [3]);
console.log("20° posição ", dinos [20]);