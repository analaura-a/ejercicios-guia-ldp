"use strict";

let num1;
let num2;
let operador;
let resultado;

do {
    do {
        num1 = parseInt(prompt("Ingrese el primer número de la operación"));
    } while (isNaN(num1));

    do {
        num2 = parseInt(prompt("Ingrese el segundo número de la operación"));
    } while (isNaN(num2));

    operador = prompt("Ingrese el operador");

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;

        case '-':
            resultado = num1 - num2;
            break;

        case '*':
            resultado = num1 * num2;
            break;

        case '/':
            resultado = num1 / num2;
            break;

        default:
            alert("Ingrese un operador válido entre +, -, *, /");
            break;
    }

    document.write(`El resultado de la operación es ${resultado}`);

} while (confirm("¿Desea realizar otra operación?"));