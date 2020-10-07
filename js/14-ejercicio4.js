'use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos
por el usuario.
*/

var numero1 = parseInt(prompt("Digite un numero",0));
var numero2 = parseInt(prompt("Digite un segundo numero",0));

document.write("<h1>De"+numero1+" a "+numero2+"estan estos numeros impares:</h1>");

if (numero1 < numero2) {
	for (var i = numero1; i < numero2; i++) {
	
		if (i%2 != 0) {
			document.write(i+"<br/>");
		}
 	}
}else if(numero1 > numero2){
	for (var i = numero2; i < numero1; i++) {
	
		if (i%2 != 0) {
			document.write(i+"<br/>");
		}
 	}
}else{
	alert("Su caso es algo extraordinario");
}
