const prompt=require("prompt-sync")();

function rango(com,fin,sum){
    const result = [];
  for (let i = com; i <= fin; i += sum) {
    result.push(i);
  }
  return result;
}

let comienzo=parseInt(prompt("Ingrese el número del comienzo de su lista: "));
let final=parseInt(prompt("Ingrese el limite de su lista de números: "));
let incremento=parseInt(prompt("Ingrese el numero de incremento de su lista: "));
console.log(rango(comienzo,final,incremento));