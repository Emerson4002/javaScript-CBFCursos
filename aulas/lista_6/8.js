// Um n ́umero par  ́e um n ́umero inteiro que pode ser escrito na forma 2n e n  ́e inteiro. Escreva
// um algoritmo que escreva a soma dos 100 n ́umeros pares consecutivos, iniciando do 100.
let soma = 0;
for(let i = 100; i <= 302; i++)
{
    if(i%2 == 0)
    {
        soma =  i + soma

    }
}console.log(`A soma é igual a ${soma}`);