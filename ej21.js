const prompt=require("prompt-sync")();

function abbrevName(nom) {
    let initials = "";
    let words = nom.split(" ");
    for (let i = 0; i < words.length; i++) {
      initials += words[i][0].toUpperCase() + ".";
    }
    return initials.slice(0, -1);
  }

let nom=parseInt(prompt("Ingrese un nombre: "));
console.log(abbrevName(nom));
  
  
  
  
  
  