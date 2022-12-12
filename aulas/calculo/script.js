let val = parseInt(document.getElementById("num1").value);
let res = document.getElementById("res");
let val2  = 54;
let cal = Number(val.value)
function calculo(){
    let quant = (cal*val2);
     res.innerHTML = `${quant}`
    

}