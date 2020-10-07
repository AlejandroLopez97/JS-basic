'use strict'

//Funciones anonimas 
//funciones que no tienen nombre

var pelicula = function(nombre){
	return "La pelicula es: "+nombre;
}

//aqui recibimos las funciones anonimas como parametros a la funcion sumame
function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

//aqui llamamos las funciones por callback 
sumame(4,5, dato => /*Funcion flecha */{
	console.log("La suma es: ",dato);
},
function(dato){
	console.log("La suma por dos es: "+(dato*2));
});