// Escreva um algoritmo que imprima os n ́umeros de 300 a 500, mas n ̃ao deve imprimir os
// m ́ultiplos de 25. Utilize o comando continue obrigatoriamente.

for(let i = 300; i<=500; i++){
  if(i % 25 !=0){
    console.log(i)
    continue;
  }
}