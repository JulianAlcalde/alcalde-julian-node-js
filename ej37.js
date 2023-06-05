const prompt=require("prompt-sync")();

function determinarMayusculasOMinusculas(cad) {
    if (cad === cad.toUpperCase()) {
      return "Todas las letras son mayúsculas";
    } else if (cad === cad.toLowerCase()) {
      return "Todas las letras son minúsculas";
    } else {
      return "La cadena contiene mayúsculas y minúsculas";
    }
}

let cad=prompt("Ingrese una cadena de texto: ");
console.log(determinarMayusculasOMinusculas(cad));
