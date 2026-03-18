// switch Case -> estrutura de decisão usada quando queremos comprarar, o valor de variável com vários possíveis resultados.
// REGRA DO PROFCASTELLO = se tiver mais que 3 comparadores , faça o switch Case.

//exemplo 01 - MENU
// Neste exemplo a varíavel MENUselecionado guardará o nome de uma opção de MENU.
//O switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente.

let MENUselecionado = "home";
switch (MENUselecionado) {
    case "Home":
        console.log("Você clicou no link 'home'");
        break;
case "Quem somos":
console.log("Você clicou no link 'Quem somos'")
break;
case "contato":
    console.log("Você clicou no link 'contato'")
    break;
    case "Redes sociais":
       console.log("Você clicou no link 'Redes sociais'")
       break;
       case "Pague um café para o Cervati":
       console.log("Você clicou no link 'Pague um café para o Cervati'")
    default:
        console.log("opção incorreta, selecione uma opção do MENU!");
         console.log("Você seleciou uma opção do MENU");
        break;
}

const pi = 3.1415683

console.log(pi)
console.log(pi.toFixed(2))