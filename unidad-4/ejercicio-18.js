"use strict";

var rangoMenor = parseInt(prompt("Ingrese el primer número del rango"));
var rangoMayor = parseInt(prompt("Ingrese el último número del rango"));

if (rangoMenor + 5 <= rangoMayor) {
    var num = parseInt(prompt("Ingrese un número"));

    if (num >= rangoMenor && num <= rangoMayor) {
        (num % 2 == 0) ? alert("El número está en rango y es par") : alert("El número está en rango pero no es par");
    } else {
        (num % 2 != 0) ? alert("El número no está dentro del rango y es impar") : alert("El número no está dentro del rango y además no es impar");
    }
} else {
    alert("Tus rangos tienen una diferencia inferior a 5 números");
}
