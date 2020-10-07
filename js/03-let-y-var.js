'use strict'

//pruebas con let y var

//prueba con var
var numero = 40;
console.log(numero); //valor sera 40

if (true) {
	var numero = 50;
	console.log(numero); //valor va a ser 50
}

console.log(numero); //valor sera 50


//prueba con let 
var texto = "Curso JS";
console.log(texto); // valor sera el mismo

if (true) {
	let texto = "Curso de big data";
	console.log(texto); // valor sera el big data 
}

console.log(texto); // el valor sera JS