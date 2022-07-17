"use strict";

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
var operador = prompt("Ingrese el operador (+, -, *, /)");

var resultado;

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
        alert("Ingrese un operador válido entre +, -, *, /")
        break;
}

alert(`El resultado de su operación matemática es ${resultado}`);