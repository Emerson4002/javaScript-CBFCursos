// Dizemos que um n ́umero natural  ́e triangular se ele  ́e produto de trˆes n ́umeros naturais
// consecutivos. Exemplo: 120  ́e triangular, pois 4 × 5 × 6 = 120. Escreva um algoritmo que
// imprima os 10 primeiros n ́umeros triangulares.

let a = 0;
let b = 0;
    for (a = 0, b = 0; b < 50;a++){
        
        b = (a + 1) + b;  
        console.log(b)
    }
 