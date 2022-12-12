// Escreva um algoritmo que imprima a lista dos 100 primeiros n ́umeros primos, iniciando do
// 2. N ́umero primo  ́e um n ́umero natural que tem apenas dois divisores diferentes, o 1 e ele
// mesmo. Por defini ̧c ̃ao, 1 n ̃ao  ́e primo.

function ehPrimo(i) {
    for (var divisor = 2; divisor < i; divisor++) if (i % divisor == 0) return false;
    return true;
}

for (var i = 2; i < 548; i++) if (ehPrimo(i)) console.log(i + '\n');
