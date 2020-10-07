'use strict'

//Ambito de las variables

function holaMundo(texto){
	var hola_mundo = "Texto dentro de funcion";

	console.log(texto);
	console.log(numero.toString());
	console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);

/*console.log(hola_mundo); Esto no lo puedo hacer porque la variable hola_mundo es variable local de funcion
y no variable global del programa */