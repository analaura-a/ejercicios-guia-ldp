"use strict";

var num = parseInt(prompt("Ingrese un número"));

if (num == 0){
    alert("Su número es 0");
} else if (num % 2 == 0) {
    alert("Su número es par");
} else {
    alert("Su número es impar");
}