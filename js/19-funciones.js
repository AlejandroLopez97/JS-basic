'use strict'

//Funciones

//defino la funcion
function calculadora(){
	//conjunto de instrucciones a ejecutar
	return "Hola soy la calculadora"
}

//invocar o llamar a la funcion
console.log(calculadora());
calculadora();

//Parametros

function calculadora1(numero1,numero2){

	console.log("Suma: "+(numero1+numero2));
	console.log("Resta: "+(numero1-numero2));
	console.log("Multiplicación: "+(numero1*numero2));
	console.log("División: "+(numero1/numero2));
	console.log("************************");
}

calculadora1(2,4);


//funciones dentro de otras funciones

function porConsola(a,b){
	console.log("Suma: "+(a+b));
	console.log("Resta: "+(a-b));
	console.log("Multiplicación: "+(a*b));
	console.log("División: "+(a/b));
	console.log("************************");
}

function porWeb(){
	document.write("Suma: "+(numero1+numero2)+"<br/>");
	document.write("Resta: "+(numero1-numero2)+"<br/>");
	document.write("Multiplicación: "+(numero1*numero2)+"<br/>");
	document.write("División: "+(numero1/numero2)+"<br/>");
	document.write("************************");
}

function calculadora2(numero1, numero2, mostrar = false){

	if (mostrar) {
		porWeb(numero1,numero2);
	}else{
		porConsola(numro1,numero2);
	}

	return true;
}

calculadora2(5,6);
