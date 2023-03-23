// Escreva um algoritmo que leia uma palavra e indique o n ́umero de ocorrˆencias de cada uma
// das seguintes letras, B, C e D.

var frase = prompt("Digite uma palavra").toUpperCase();
var letra = "B";
var letra2 = "C";
var letra3 = "D";
var quantidade = 0
var quantidade_c = 0
var quantidade_d = 0

for (var i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    quantidade++
  }
  else if(frase[i] == letra2){
    quantidade_c++
  }
  else if(frase[i] == letra3){
    quantidade_d++
  }
}

console.log(`B aparece ${quantidade}`)
console.log(`C aparece ${quantidade_c}`)
console.log(`D aparece ${quantidade_d}`)
  