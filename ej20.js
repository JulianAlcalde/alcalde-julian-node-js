const prompt=require("prompt-sync")();


function sumattion(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

let num=parseInt(prompt("Ingrese un número: "))
console.log(sumattion(num));