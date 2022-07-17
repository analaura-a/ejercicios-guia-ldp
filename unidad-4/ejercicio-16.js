"use strict";

var num = parseInt(prompt("Ingrese un número"));

if (num % 3 == 0 && num % 5 == 0) {
    alert("El número es múltiplo de 3 y 5");
} else if (num % 5 == 0) {
    alert("El número es múltiplo de 5");
} else if (num % 3 == 0) {
    alert("El número es múltiplo de 3");
} else {
    alert("El número no es múltiplo ni de 3 ni de 5");
}