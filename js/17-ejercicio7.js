'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var numero = parseInt(pormpt("Digite un numero",0));


document.write("<h1> Tabla del "+numero+"</h1><br/>");
for (var i = 1; i <= 10; i++) {
	document.write(numero+" X "+i+" = "+(numero*i)+"<br/>");
}