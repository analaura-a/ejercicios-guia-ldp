"use strict";

var num;

for (var i = 1 ; i <= 3 ; i++){
    num = parseInt(prompt("Ingrese un número"));

    if (num % 3 == 0 && num % 5 == 0){
        alert("Tu número es múltiplo de ambos");
    } else if (num % 3 == 0){
        alert("Tu número es múltiplo de 3");
    } else if (num % 5 == 0){
        alert("Tu número es múltiplo de 5");
    } else {
        alert("Tu número no es múltiplo de ninguno");
    }
}
