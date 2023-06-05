const prompt=require("prompt-sync")();



var num1=prompt("Ingrese un número: ");

function nummd5(num1){
    var num1d5=num1%5;
    if (num1d5==0){
        console.log("El número ingresado ",num1," es divisible por 5");

    }
}
    

nummd5(num1);