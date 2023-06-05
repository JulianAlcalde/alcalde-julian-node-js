const prompt=require("prompt-sync")();

function toTime(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    return `${horas} hora(s) y ${minutos} minuto(s)`;
  }

let segs=parseInt(prompt("Ingrese los segundos para transformar en hora(s) y minuto(s): "))
console.log(toTime(segs));
