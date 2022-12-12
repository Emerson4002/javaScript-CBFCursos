var frase = prompt("Digite uma palavra");
var letra = "B"
var quantidade = 0

for (var i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    quantidade++
  }
}

console.log(quantidade)