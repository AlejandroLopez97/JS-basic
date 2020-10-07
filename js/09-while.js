'use strict'

//bucle while 

var year = 2018;

while(year <= 2051){
	//ejecuta esto 
	console.log("Estamos en el año: "+year);
	
	//utilizando el break para salir del bucle sin necesidad de que termine todo el ciclo

	if(year == 2030){
		break;
	}

	year++;

}

// Do While 

var years = 30;

do{
	alert("SOLO CUANDO SEA DIFERENTE A 20");
	years--;

}while (years > 25)


