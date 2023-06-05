const prompt=require("prompt-sync")();

let str1=prompt("Ingrese un string: ");

let str2=prompt("Ingrese un string: ");

let sonIguales = str1 === str2;

let mismaLongitud = str1.length === str2.length;

console.log("Los strings son iguales: " + sonIguales);
console.log("Los strings tienen la misma longitud: " + mismaLongitud);


