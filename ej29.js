const prompt=require('prompt-sync')();

function contarHasta() {
    let numero = parseInt(prompt("Ingresa un número positivo"));
    let contador = 0;
    let numeros = [];
  
    while (contador <= numero) {
      numeros.push(contador);
      contador++;
    }
  
    return numeros;
}

console.log(contarHasta());