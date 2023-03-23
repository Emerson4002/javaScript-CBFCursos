
// Escreva um algoritmo que realize somas consecutivas de dois n ́umeros reais. Ele deve ser
// encerrado quando receber duas entradas iguais a 0.

let num; 
let num2; 
let soma = 0;

while(num != 0 || num2 !=0){
   num = Number(prompt("Digite um valor"))
   num2 = Number(prompt("Digite um valor"))
   soma = num2 + num;
   console.log(soma)
}
