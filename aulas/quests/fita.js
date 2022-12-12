let res = "VEEDDVEDV";
let cr = "";
let array = []
let soma = 0;

for(let i = 0; i<res.length;i++){
    let value = res.charAt(i);
    
    switch(value){
       
        case "V":
            cr = 3+cr;
            soma +=cr
            break;
        case "E":
            cr = 1+cr;
            soma +=cr
            break;
        case "D":
            cr = 0+cr;
            soma +=cr
        break;

        
    }
    
    
}array.push(cr).map
 console.log(array.sort((a,b) => a-b))
 console.log()