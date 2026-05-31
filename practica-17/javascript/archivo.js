
let parrafo = document.getElementById("mensaje");

let precio = 7500;
let descuento = 20;

// cálculo del descuento (regla de 3 simple)

let total = precio - (precio * descuento / 100);

// consola

console.log("Precio sin descuento es: $" + precio);
console.log("El descuento es: " + descuento + "%");
console.log("Precio con descuento es: $" + total);

// mostrar en pantalla

parrafo.innerText =
"Precio original: $" + precio +
"\nDescuento: " + descuento + "%" +
"\nTotal a pagar: $" + total;

