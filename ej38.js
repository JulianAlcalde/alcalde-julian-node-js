const prompt=require("prompt-sync")();

function esPalindromo(cadena) {
    
    cadena = cadena.toLowerCase().replace(/[^a-z]/g, '');
    if (cadena===cadena.split('').reverse().join('')){
        return "Es palíndromo";
    }
    return "No es palíndromo";
}

let cad=prompt("Ingrese una cadena para comprobar si es un palíndromo: ");
console.log(esPalindromo(cad));