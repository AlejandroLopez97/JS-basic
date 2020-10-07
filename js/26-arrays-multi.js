'use strict'

//Arreglos multidimensionales 

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias,peliculas];

console.log(cine);
console.log(cine [0][1]);
console.log(cine [1][1]);

//Operaciones con array
//añadir

var elemento = "";
do{
	elemento = prompt("Digite una peicula:");
	peliculas.push(elemento);

}while(elemento != "ACABAR");
peliculas.pop();

//eliminar un elemento

var borrar = prompt("Digite la pelicula que desea borrar: ");
var indice = peliculas.indexOf(borrar);

if(indice > -1){
	peliculas.splice(indice,1);
}

//convierte el arreglo en una cadena de caracteres 

var cadenaPeliculas = peliculas.join();


console.log(peliculas);

//convertir cadenas de caracteres a un arreglo 

var cadena = "texto1, texto2, texto3, texto4";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

//para ordenar un arreglo utilizamos esta funcion 

peliculas.sort(); //nos lo ordena por orden alfabetico



