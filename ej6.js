const prompt=require("prompt-sync")();

let angulo1 = parseInt(prompt("Introduce el valor del primer ángulo: "));
let angulo2 = parseInt(prompt("Introduce el valor del segundo ángulo: "));
let angulo3 = parseInt(prompt("Introduce el valor del tercer ángulo: "));

let suma_angulos = angulo1 + angulo2 + angulo3;

if (suma_angulos === 180) {
  console.log("Los ángulos introducidos corresponden a un triángulo válido.");
} else {
  console.log("Los ángulos introducidos no corresponden a un triángulo válido.");
}