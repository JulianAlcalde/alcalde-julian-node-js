const prompt=require("prompt-sync")();

function fizzBuzz(pl1, pl2, num1, num2, maxnum) {
    for (let i = 1; i <= maxnum; i++) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log(pl1 + pl2);
      } else if (i % num1 === 0) {
        console.log(pl1);
      } else if (i % num2 === 0) {
        console.log(pl2);
      } else {
        console.log(i);
      }
    }
  }

fizzBuzz('Plata', 'Forma', 2, 7, 17);