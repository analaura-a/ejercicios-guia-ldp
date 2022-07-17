"use strict";

var categoria = prompt("Ingrese la categoría a la que pertenece (1, 2 o 3)");
var horasExtra = parseInt(prompt("Ingrese la cantidad de horas extra trabajadas en el mes"));

var sueldo;

switch (categoria) {
    case '1':
        (horasExtra > 20) ? sueldo = 2000 + 500 : sueldo = 2000;
        break;
    
    case '2':
        sueldo = 3000;
        break;

    case '3':
        (horasExtra > 30) ? sueldo = 4000 + 1000 : sueldo = 4000;
        break;

    default:
        alert("Por favor, ingrese una categoría válida entre 1, 2 y 3");
        break;
}

(sueldo > 4000) ? alert(`Tu sueldo mensual es de ${sueldo} y supera los u$s4000`) : alert(`Tu sueldo mensual es de ${sueldo} y no supera los u$s4000`);

