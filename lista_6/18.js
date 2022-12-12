let fita_dna = "CTGCGCTAAA"
let complementar;

//não finalizei
 complementar = fita_dna.replace(/A/g, "T",/C/g, "G",/T/g,"A",/G/g,"C")

console.log(complementar.split("").reverse().join(""))

