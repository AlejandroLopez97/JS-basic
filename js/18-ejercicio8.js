'use strict'

/*
Una calculadora:

pida dos numero por pantalla
si metemos mal un numero, que los vuelva a pedir 
muestre en el body de la pagina en una alerta y por la consola el resultado de sumar, restar, multiplicar y 
dividir esas 2 cifras

*/

var numero1 = parseInt(prompt("Digite un numero",0));
var numero2 = parseInt(prompt("Digite un segundo numero",0));

while(isNan(numero1) || isNan(numero2) || numero1 < 0 || numero1 <0){
	numero1 = parseInt(prompt("Digite un numero",0));
	numero2 = parseInt(prompt("Digite un segundo numero",0));
}

var resultado = "La suma es: "+(numero1+numero2)+"<br/>"+
				"La resta es: "+(numero1-numero2)+"<br/>"+
				"La multiplicación es: "+(numero1*numero2)+"<br/>"+
				"La división es: "+(numero1/numero2)+"<br/>";

document.write(resultado);