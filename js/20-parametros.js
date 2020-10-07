'use strict'

//Parametros REST y SPREAD

//tipo REST

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana");

var frutas = ["Manzana", "Naranja"];

//tipo SPREAD
listadoFrutas(...frutas, "Sandia", "Pera", "Coco");