"use strict";

var letra = prompt("Ingrese una letra");

switch(letra) {
    case 'a':
    case 'A':
        alert("La letra ingresada es la primera vocal");
    break;

    case 'e':
    case 'E':
        alert("La letra ingresada es la segunda vocal");
    break;

    case 'i':
    case 'I':
        alert("La letra ingresada es la tercer vocal");
    break;

    case 'o':
    case 'O':
        alert("La letra ingresada es la cuarta vocal");
    break;

    case 'u':
    case 'U':
        alert("La letra ingresada es la quinta vocal");
    break;

    default:
        alert("La letra ingresada no es una vocal");
}
