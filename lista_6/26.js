// Dizemos que um n ́umero natural  ́e triangular se ele  ́e produto de trˆes n ́umeros naturais
// consecutivos. Exemplo: 120  ́e triangular, pois 4 × 5 × 6 = 120. Dado um inteiro n ̃ao
// negativo n, verificar se n  ́e triangular.

let i = 1;
let prod = 1;
let num = Number(prompt("Digite um valor"));

while(prod < num)
{
    prod = i*(i+1)* (i+2);
    i = i+1;

}i = i-1;
if(prod == num){
    console.log("é triangular");
}else(console.log("não é triangular"));
