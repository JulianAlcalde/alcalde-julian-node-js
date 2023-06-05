const prompt=require("prompt-sync")();

function nuevarr(num){
    const arr=[]
    for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
      return arr;
}

let nummax=parseInt(prompt("Ingrese un número: "));
console.log(nuevarr(nummax));

