//Escreva um algoritmo que leia 10 n ́umeros inteiros e imprima, a soma deles.
let valores = 0;
let soma = 0;
for(let i = 0; i < 10; i++)
{
    valores = parseInt(prompt("Digite um valor"));
    soma = valores + soma;
}console.log(`soma dos valores é ${Number(soma)}`)