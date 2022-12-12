// Escreva um algoritmo que leia uma palavra e a escreva invertida. Ex.: ao ler IFPB, escreve
// BPFI.
let palavra = prompt("Digite uma palavra").toUpperCase();

console.log(`a palavra ${palavra} invertida fica ${palavra.split("").reverse().join("")}`)