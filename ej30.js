const prompt=require('prompt-sync')();

let numero = 1;
let suma = 0;

while (numero !== 0) {
  numero = Number(prompt('Ingrese un número 0 para salir: '));
  suma =suma+numero;
}

console.log("La suma de los números ingresados es: ",suma);