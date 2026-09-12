





//1 - ano bissexto//
let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log("Ano bissexto");
} else {
    console.log("Não é ano bissexto");
}// fim ano bissexto

console.log("Fim do programa");

