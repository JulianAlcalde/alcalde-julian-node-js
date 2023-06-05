const prompt=require("prompt-sync")();

var grados=prompt("Ingrese un número de grados en fahrenheit que desee pasar a grados celsius: ")

function conversion(grados){
    var conver=grados/33.8;
    console.log("Los grados que ha ingresado ",grados," en Celsius serian ",conver);

}

conversion (grados);