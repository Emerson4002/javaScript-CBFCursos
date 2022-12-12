// Escreva um algoritmo que leia um n ́umero inteiro e indique se este  ́e primo ou n ̃ao. N ́umero
// primo  ́e um n ́umero natural que tem apenas dois divisores diferentes, o 1 e ele mesmo. Por
// defini ̧c ̃ao, 1 n ̃ao  ́e primo.

let numeroDigitado = Number(prompt("Digite um valor"))
let divisor = 2;
while(numeroDigitado%divisor != 0)
    divisor++;

if(numeroDigitado == divisor)
    console.log("Número Primo!");
else
    console.log("Número NÃO primo!");