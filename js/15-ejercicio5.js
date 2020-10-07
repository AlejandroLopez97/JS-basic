'use strict'

/*
Muestre todos los numeros divisores de un numero introducidos por el usuario
*/

var numero = parseInt(prompt("Digite un numero para hallar sus divisores",0));
document.write("<h1>Divisores de: "+numero+"</h1>");

for (var i = 1; i <= numero; i++) {
	if (numero%i == 0) {
		document.write("<h2> Divisor "+i+"</h2>");
	}
}