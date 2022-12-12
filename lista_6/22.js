// Escreva um algoritmo que imprima um menu com cinco op ̧c ̃oes (soma, subtra ̧c ̃ao, mul-
//    tiplica ̧c ̃ao, divis ̃ao e sair) e, de acordo com a escolha do usu ́ario, deve solicitar os dois
//    operandos e realizar a operacao ou encerrar a execu ̧c ̃ao. Enquanto n ̃ao escolher sair, o al-
//    goritmo deve ficar imprimindo o menu, lendo a op ̧c ̃ao e executando a opera ̧c ̃ao aritm ́etica.

let opcao;
let num;
let num2;
do{
   console.log("******** MENU ********\nSelecione uma opção\n");
   console.log("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n0 - Sair\n\n");

   opcao = Number(prompt("Operação: "));
   if(opcao > 0 && opcao < 5)
   {
       num = Number(prompt("Digite o primeiro valor: "))
      num2 = Number(prompt("Digite um segundo valor: "))
   }

   switch(opcao){
      case 0:
         console.log("Saindo...")
         break;
      case 1:
         console.log(`Soma: ${num + num2}\n`);
         break;
      case 2:
         console.log(`Subtração: ${num - num2}\n`)
         break;
      case 3:
         console.log(`Multiplicação: ${num * num2}\n`)
         break;
      case 4:
         if(num2 == 0){
            Number(prompt("Não existe divisão por zero! \nDigite outro valor: "));
         }else{console.log(`Divisão ${num/num2}\n`)}
         break;
      default:
         console.log("Opcao invalida.\nDigite outra opcao: ");



   }
}while(opcao !=0);