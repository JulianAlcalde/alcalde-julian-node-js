const prompt=require('prompt-sync')();

function totalDeArticulos(productos) {
    const preciosPorSeccion = {};
  
    for (const producto of productos) {
      if (!preciosPorSeccion[producto.nombre]) {
        preciosPorSeccion[producto.nombre] = 0;
      }
  
      preciosPorSeccion[producto.nombre] += producto.precio * producto.articulos;
    }
  
    const resultado = [];
  
    for (const nombreProducto in preciosPorSeccion) {
      resultado.push({ [nombreProducto]: preciosPorSeccion[nombreProducto] });
    }
  
    return resultado;
  }

const ecommerce = [
   { nombre: "Samsung TV", precio: 6000, articulos:10}, 
   { nombre: "DELL notbook", precio: 4000, articulos:30 }, 
   { nombre:"Auriculares Sony", precio: 1500, articulos:15}, 
   { nombre:"Monitor Philips", precio:12000, articulos:20}, 
   { nombre:"Teclado logitech", precio: 3000, articulos:5}
];
  
console.log(totalDeArticulos(ecommerce));


