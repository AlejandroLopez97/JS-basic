'use strict'

// Plantillas de texto

var nombre = prompt("Digite su nombre");
var apellido = prompt("Digite si apellido");

//var texto = "Mi nombre es: "+nombre+" Mis apellidos son: "+apellido;

//con esto hemos generado una plantilla de texto
var texto = `
	<h1>Hola Que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mi apellido es: ${apellido} </h3>

`;

document.write(texto);