const prompt=require("prompt-sync")();

let num1=parseInt(prompt("Ingrese un número: "));
let num2=parseInt(prompt("Ingrese otro número: "));

if (num1>num2){
    console.log("El número mayor es ",num1," y el menor es ",num2)
    
}   else {
    console.log("El número mayor es ",num2," y el menor es ",num1)
}