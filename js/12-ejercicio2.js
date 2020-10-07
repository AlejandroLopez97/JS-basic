'use strict'

/*utilizando un bucle, mostrar la media y la suma de numeros introducidos por el usuario,
 hasta que el usuario ingrese un numero negativo*/

 var suma = 0;
 var contador = 0;

 do{
 	var numero = parseInt(pumpt("Digite un numero hasta que ingreses un numero negativo",0));
 	
 	if (isNaN(numero)) { 
 		numero = 0;
 	}else if (numero >= 0) {
 		suma += numero;

 		contador ++;
 	}
 	

 }while(numero >= 0)

 alert("La suma es: "+ suma);
 alert("La media es: "+ (suma/contador));