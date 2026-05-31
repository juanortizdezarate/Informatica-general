
let parrafo = document.getElementById("mensaje");

let nombre = "Juan";
let apellido = "Ortiz de Zarate";
let edad = 67;

const universidad = "Universidad de las Artes"

parrafo.innerText =
"1- Nombre " + nombre + 
"\n2- Apellido " + apellido + 
"\n3- Nombre y apellido " + nombre + " " + apellido +
"\n4- edad = " + edad +
"\n5- universidad = " + universidad;

// para que aparezca en la consola

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(universidad);