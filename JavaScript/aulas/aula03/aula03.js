"use strict"
//var = tem um escopo global
// let =  tem um escopo local/ limita-se ao bloco
//const = apos ser declarado o valor não pode ser mudado

function teste(){
    if(true){
        var nome = "Juca"
        let sobrenome = "Beludo"
        console.log("dentro do IF do teste:" + nome + sobrenome)
    }
    console.log("dentro do teste: " + nome + sobrenome)
}

teste()
