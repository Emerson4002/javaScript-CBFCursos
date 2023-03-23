// Escreva um algoritmo que realize somas consecutivas de dois n ́umeros reais. Ele deve ser
// encerrado quando receber duas entradas iguais a 0. Utilize o comando break para encerrar
// a execu ̧c ̃ao.

let num; 
let num2; 
let multi = 0;

while(num != 0 || num2 !=0){
   num = Number(prompt("Digite um valor"))
   num2 = Number(prompt("Digite um valor"))
   multi = num2 * num;
   console.log(multi)
  if(num == 0 && num2 == 0){
    break;
  }
}