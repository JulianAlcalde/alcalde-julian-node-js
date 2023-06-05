const prompt=require("prompt-sync")();

function esPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    
    let divisor = 2;
    while (divisor < numero) {
      if (numero % divisor === 0) {
        return false;
      }
      divisor++;
    }
    
    return true;
  }

