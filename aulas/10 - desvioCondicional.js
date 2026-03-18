// Desvio condicional - if - ELSE

/*Condições simples com if
sintaxe: if (condition) {
    codigo a ser executado, se for verdadeiro.
}
/*/

let anoNascimento = 2003;

if (anoNascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}

if (anoNascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003");
}

if (anoNascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}
//condicional if - ELSE
if (anoNascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000");
} else {
  console.log("A pessoa nasceu antes de 2000");
}

//condicional composta  com if
const login = "Admin";
const senha = "12345";

let loginUser = "Admin";
let senhaUser = "1234";

if (loginUser == login && senhaUser == senha) {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Acesso negado!");
}

//Desvios aninhados - IF - else - IF - else...
let semaforo = "Vermelho";

if (semaforo == "Vermelho") {
  console.log("Pare");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else if (semaforo == "Verde") {
  console.log("Siga");
}

//Criando variaveis locais (Só existem dentro do bloco onde foram criadas)
let mes = "Agosto";
let dia = "15";

if(dia == 15 && mes == "Agosto"){
    let mensagem = "Hoje e dia 15 de agosto";
    console.log(mensagem)
    }
    console.log("Tentando acessar a variavel 'mensagem' fora do escopo IF, vai dar erro!!!");
    //console.log(mensagem);

    /***************************************************************** */
    // IF  ternário( IF Inline)

    let preco = 500;
    let resultado =(preco <= 100) ? "Tá barato dms" : "Slk num compensa";
    console.log("Preço:", preco, "-",resultado);

    // O codigo acima , faz exatamente a mesma coisa que o codigo abaixo
    if(preco <= 100){
        resultado ="Tá barato dms ";
        }else{
            resultado ="Slk num compensa ";  
              }
               console.log("Preço:", preco, "-",resultado);