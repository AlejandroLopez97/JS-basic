'use strict'

//condicional IF
/* operadores relacionales 
Mayor : >
Menor: <
Mayor o igual: >=
Menor o igual: <=
igual: ==
Diferente: !=
*/

//Si A es igual a B entonces haz algo

var edad = 30;
var nombre = "David Suarez";

//si pasa esto
if (edad >= 18) {
	//pasa esto
	console.log(nombre + "tiene "+edad+" años, es mayor de edad");

	if (edad <= 33) {

		console.log("Todavia es millenial");

	}else if (edad >=70) {

		console.log("Eres anciano");

	}else{

		console.log("Ya no eres millenial");
	}
}// fin si 

/* Operadores logicos
AND(Y): &
OR(O): ||
Negación: !
*/

//Negación

var year = 2018;
if(year != 2016){
	console.log("El año no es 2016 realmente es: "+year);
}

//AND
if (year >= 2000 && year <= 2020) {
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || year == 2018) {
	console.log("El año acaba en 8");
}