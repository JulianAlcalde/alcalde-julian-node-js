const prompt=require("prompt-sync")();

function moveZeros(arr) {
    const sincer = arr.filter(cac => cac !== 0);  
    const concer = arr.filter(cac => cac === 0);     
    return [...sincer, ...concer];                  
  }

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

