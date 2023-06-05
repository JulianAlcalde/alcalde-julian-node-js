const prompt=require("prompt-sync")();

function pluck(arr, propName) {
    return arr.map(function(obj) {
      return obj[propName];
    });
  }
var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }];

var nombres = pluck(productos, 'name');

console.log(nombres); 

var precios = pluck(productos, 'price');

console.log(precios); 