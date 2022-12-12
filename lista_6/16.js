// Um pal ́ındromo  ́e uma sequˆencia de caracteres cuja leitura  ́e idˆentica se feita da esquerda
// para a direita ou vice-versa. Por exemplo, OSSO e OVO s ̃ao pal ́ındromos. Escreva um
// algoritmo que leia uma palavra e indique se  ́e pal ́ındromo ou n ̃ao.

let texto = prompt("digite uma palavra");
let reverso = texto.split('').reverse().join(''); 

if(texto === reverso) {
   console.log(`A palavra ${texto} é um palíndromo!`);
} else {
   console.log(`A palavra ${texto} não é um palíndromo!`);
}

