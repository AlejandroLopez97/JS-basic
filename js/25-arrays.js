'use strict'

//Arreglos, existen 2 maneras de crearse, con corchetes y como objeto 

var nombres = ["Victor", "Camilo", "Juan", "Manolo", 72, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres);
console.log(lenguajes);

//para acceder a un valor dentro del arreglo ultilizamos sus indices

console.log(lenguajes[1]);

//Asi obtenemos el numero de elementos en los array

console.log(nombres.length);

var elemento = parseInt(prompt("Que elemento del array quieres?",0));
if(elemento>=nombres.length){
	alert("Introduce un numero correcto menor que "+nombres.length);

}else{
	alert("El usuario seleccionado es: "+nombre[elemento]); 
}


//recorriendo el arreglo para mostrar todos sus datos en el body 
document.write("<h1>Lenguaes de programación 2018</h1>")
document.write("<ul>");
 for (var i = 0; i < lenguajes.length; i++) {
 	document.write("<li>"+lenguajes[i]+"</li>");
 }
 docuemnt.write("</lu>");

//otra manera de recorrer arreglos con foreach 

 document.write("<ul>");

 lenguajes.foreach((elemento, indice)=>{
 	document.write("<l1>"+indice+" - "+elemento+"</li>");

 });
 docuemnt.write("</lu>");

 //otra manera de recorrer arreglos con el for in

 for(let lenguaje in lenguajes){
 	document.write("<l1>"+lenguajes[lenguaje]+"</li>");
 }

 //busquedas en un arreglo 

var busqueda = lenguajes.find(function(lenguaje){
 	return lenguaje == "PHP";
 });

//otra manera 

var busqueda1 = lenguajes.find( lenguaje => lenguaje == "Java");

console.log(busqueda);
console.log(busqueda1);
//tambien existe la funcion findIndex que nos permite sacar el indice donde se encuentra dicha busqueda 