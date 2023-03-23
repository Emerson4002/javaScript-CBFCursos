
let valores = 0;
let soma = 0;
for(let i = 0; i < 30; i++)
{
    valores = parseInt(prompt("Digite um valor"));
    soma = valores + soma;
    let max = Math.max(valores)
    let min = Math.min(valores)
   
}console.log(`soma dos valores é ${Number(soma)}`)