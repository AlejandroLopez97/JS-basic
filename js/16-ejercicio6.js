'use strict'

/*
	Hacer un programa que nos diga si un numero que es par o impar.
	1- Ventana prompt
	2- Si no es valido que nos pida de nuevo el numero.
*/

var numero = parseInt(prompt("Digite un numero",0));

while (IsNan(numero)) {
	numero = parseInt(prompt("Digite nuevamente el numero",0));
	
	if (numero%2 == 0) {
		alert("El numero es par");
	}else {
		alert("El numero es impar");
	}
}