// Escreva um algoritmo que leia uma palavra e escreva o numero de cada uma das vogais.

let palavra = prompt("Digite uma palavra").toUpperCase();

console.log(`Vogal A aparece no indice ${palavra.indexOf("A")}`)
console.log(`Vogal E aparece no indice ${palavra.indexOf("E")}`)
console.log(`Vogal I aparece no indice ${palavra.indexOf("I")}`)
console.log(`Vogal O aparece no indice ${palavra.indexOf("O")}`)
console.log(`Vogal U aparece no indice ${palavra.indexOf("U")}`)