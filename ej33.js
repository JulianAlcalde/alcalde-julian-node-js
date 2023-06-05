const propmt=require("prompt-sync")();

let respuesta;

do {
    let num1 = parseInt(prompt("Ingresa un número:"));
    let num2 = parseInt(prompt("Ingresa otro número:"));
    let suma = num1 + num2;
    console.log("La suma de ",num1," más ",num2," es: ",suma);
    
    do {
      respuesta = prompt("¿Quieres repetir la operación? (SI/NO)").toUpperCase();
    } while (respuesta !== "SI" && respuesta !== "NO");
} while (respuesta === "SI");
  
console.log("finalizó");