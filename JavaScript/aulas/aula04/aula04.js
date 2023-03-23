let num1,num2,res,num3

num1 = 2;
num2 = 15;
num3 = 10;

console.log(`${num2} dividido por ${num1} = ${num2/num1}`);
console.log(`e o resto é = ${num2%num1}`);

console.log(`Antes de incrementar ${num3}`);
num3++
console.log(`Após o incremento ${num3}`);
num3--
console.log(`Apos o decremento ${num3}`)
//num3+=1 //num3++ ou num3=num3+1
//mas caso seja num3+=qualquer valor acima de 1 o primeiro exemplo ja não mais valido e somente num+=5 ==>num3=num3+5
num3+=5
console.log(num3)
