const prompt=require("prompt-sync")();

let num1=parseInt(prompt("Ingrese un número: "));
let num2=parseInt(prompt("Ingrese un número: "));
let num3=parseInt(prompt("Ingrese un número: "));

function operadoresLogicos(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    return "Número 1 es mayor y positivo";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else {
    return false;
  }
}

operadoresLogicos(num1, num2, num3);

console.log(operadoresLogicos(num1,num2,num3));