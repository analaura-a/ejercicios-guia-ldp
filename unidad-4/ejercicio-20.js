"use strict";

var lado1 = parseInt(prompt("Ingrese el primer lado de un triángulo"));
var lado2 = parseInt(prompt("Ingrese el segundo lado de un triángulo"));
var lado3 = parseInt(prompt("Ingrese el tercer lado de un triángulo"));

if (lado1 == lado2) {
    if (lado2 == lado3) {
        alert("El triángulo tiene sus tres lados iguales y es equilátero");
    } else {
        alert("El triángulo tiene dos de sus lados iguales y es isósceles");
    }
} else if (lado2 != lado3) {
    if (lado1 != lado3) {
        alert("El triángulo tiene tres lados distintos y es escaleno");
    } else {
        alert("El triángulo tiene dos de sus lados iguales y es isósceles");
    }
} else {
    alert("El triángulo tiene dos de sus lados iguales y es isósceles");
}