"use strict";

let numero;
let contador = 0;
let acumulador = 0;

let min;
let max;

do {
    contador++;

    do {
        numero = parseInt(prompt("Ingrese el número"));
    } while (isNaN(numero));

    if (contador % 2 != 0) {
        acumulador += numero;
    }

    if (contador == 1) {
        min = numero;
        max = numero;
    } else {
        if (numero < min) {
            min = numero;
        }
        if (numero > max) {
            max = numero;
        }

    }

} while (confirm("¿Desea continuar ingresando números?"));

document.write(`La suma de todos los valores que se ingresaron en orden impar es de ${acumulador}. El valor máximo ingresado es de ${max} y el mínimo es de ${min}`);