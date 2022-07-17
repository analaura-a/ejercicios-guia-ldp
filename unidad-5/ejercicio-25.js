"use strict";

let nota;

let contadorAprobados = 0;
let contadorDesaprobados = 0;

let promedio;

let acumuladorAprobados = 0;
let acumuladorDesaprobados = 0;

let contadorAlumnos = 0;

do {
    do {
        nota = parseInt(prompt("Ingrese la nota del alumno"));
    } while (isNaN(nota) || nota < 1 || nota > 10);

    if (nota >= 4) {
        contadorAprobados++;
        acumuladorAprobados += nota;
    } else {
        contadorDesaprobados++;
        acumuladorDesaprobados += nota;
    }

    contadorAlumnos++

} while (confirm("¿Desea ingresar la nota de otro alumno?"));

let porcentajeAprobados = (contadorAprobados / contadorAlumnos) * 100;
let porcentajeDesaprobados = (contadorDesaprobados / contadorAlumnos) * 100;
promedio = (acumuladorAprobados + acumuladorDesaprobados) / contadorAlumnos;

document.write(`<p>El porcentaje de alumnos aprobados es de ${porcentajeAprobados} y el porcentaje de alumnos desaprobados es de ${porcentajeDesaprobados}. Por último, el promedio total de las notas es de ${promedio}<p>`);