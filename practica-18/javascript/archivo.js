
let parrafo = document.getElementById("mensaje");

alert ("Al aceptar cambia todo");

let titulo = document.querySelector(".frase");

titulo.style.color = 'red';
titulo.style.fontSize = '1em';

let texto1 = "Esta materia se está volviendo un quilombete";
let texto2 = "...o quizás no tanto...";

let mostrarPrimero = true;

setInterval(function() {
    if (mostrarPrimero) {
        titulo.innerText = texto2;
    } else {
        titulo.innerText = texto1;
    }

    mostrarPrimero = !mostrarPrimero;
}, 10000);

