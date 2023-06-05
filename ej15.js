const prompt=require("prompt-sync")();


function divisibles(arrnums, div) {
    const result = [];
    for (let i = 0; i < arrnums.length; i++) {
      if (arrnums[i] % div === 0) {
        result.push(arrnums[i]);
      }
  }
  return result;
}
console.log(divisibles([1,2,3,4,5,6],2));
console.log(divisibles([1,2,3,4,5,6],3));