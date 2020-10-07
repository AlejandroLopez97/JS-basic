'use strict'

//metodos transformación de textos.
var numero = 444;
var texto1 = "Bienvenido al curso de javascript";
var texto2 = "EL curso esta bueno";

//con este metodo convertimos el numero a un texto 
var dato = numero.toString();

//convertir a mayuscula 
dato = texto1.toUpperCase();
//convertir a miniscula
dato = texto2.toLowerCase();

console.log(typeof dato);

//Calcular longuitud 
var nombre = "Alejandro Lopez";
	nombre = ["Hola", "hola"];

console.log(nombre.length); //cuenta el numero de letras que hay en la cadena de texto, sirve para contar tambien en los array

//concatenar, unir textos

//var textoTotal = texto1 + texto2;
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);

//buscar una palabra dentro de una cadena de caracteres 

var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//nos retorna un array con los resultados que encuentre 
busqueda = texto2.match("curso");
busqueda = texto1.substr(14,5);
busqueda = texto1.charAt(44); //nos muestra la letra en esa posicion de caracter
busqueda = texto2.startsWith("amor"); //retorna true o false si encuentra la palabra al inicio de la cadena 
busqueda = texto1.endsWith("al"); //retorna true o false dependiendo si encuentra la palabra en la cadena 
busqueda = texto1.includes("javascript"); //busca en la cadena de caracteres la palabra y nos retorna true o false 

//funciones de reemplazo

busqueda = texto1.replace("javascript", "violin"); //reemplaza javascript por violin en la cadena 
busqueda = texto1.split(" ");//nos genera un arreglo con el contenido de la cadena de texto, separa por el espacio indicado
bsuqueda = texto1.trim(); //nos quita los espacios por delante y por detras




