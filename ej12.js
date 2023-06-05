const prompt=require("prompt-sync")();

let num=parseInt(prompt("Ingrese un número: "));

function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }

  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

console.log(function esPrimo(num));
