function mostrar()
{

	//Declaramos variables
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferenciaPyN = 0;
	var auxNegativos = 0;
	var auxPositivos = 0;
	var respuesta = true;

	debugger;
	//Inicia while mientras respuesta sea true
	while(respuesta){
		//Ingresa numero
		numeroIngresado = prompt("Ingrese su número:","0") ;
		//Si no se ingresa nada, rompemos while.
		if (numeroIngresado == null){
			break;
		}
		numeroIngresado = parseInt(numeroIngresado)	;
		while (isNaN(numeroIngresado)){
			numeroIngresado = prompt("Ingrese un número correcto:");
			if (numeroIngresado == null){
				break;
			}
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (numeroIngresado == null){
			break;
		}
		//Validamos cual de estos case es true y ejecutamos.
		switch (true) {
			
			case (numeroIngresado > 0):
				sumaPositivos += numeroIngresado ;
				cantidadPositivos++ ;
			break;
			case (numeroIngresado < 0) :
				sumaNegativos += numeroIngresado ;
				cantidadNegativos++ ;
			break;
			default:
				cantidadCeros++
			break;
		}
		if (numeroIngresado%2 == 0){
			cantidadPares++;
		}
			
		respuesta = confirm("¿Desea continuar?");

	}
	//Fin while
	// auxNegativos y auxPositivos valen 0 a excepcion de cuando la cantidad de negativos/positivos sean 0.
	// Se utiliza para evitar dividir por 0.
	if (cantidadNegativos == 0 ){
		auxNegativos = 1 ;
	}
	if (cantidadPositivos == 0){
		auxPositivos = 1 ;
	}
	
	//Promedios
	promedioNegativos = sumaNegativos / (cantidadNegativos+auxNegativos);
	promedioPositivos = sumaPositivos / (cantidadPositivos+auxPositivos);
	
	//Diferencia entre positivos y negativos
	diferenciaPyN = sumaPositivos - sumaNegativos;

	/** Damos devolucion.
	 * 1-Suma de los negativos. 
	 * 2-Suma de los positivos. 
	 * 3-Cantidad de positivos. 
	 * 4-Cantidad de negativos. 
	 * 5-Cantidad de ceros. 
	 * 6-Cantidad de números pares. 
	 * 7-Promedio de positivos. 
	 * 8-Promedios de negativos. 
	 * 9-Diferencia entre positivos y negativos */

	 document.write("1-Suma de los negativos: "+sumaNegativos+"<br>");
	 document.write("2-Suma de los positivos: "+sumaPositivos+"<br>");
	 document.write("3-Cantidad de positivos: "+cantidadPositivos+"<br>");
	 document.write("4-Cantidad de negativos: "+cantidadNegativos+"<br>");
	 document.write("5-Cantidad de ceros: "+cantidadCeros+"<br>");
	 document.write("6-Cantidad de números pares: "+cantidadPares+"<br>");
	 document.write("7-Promedio de positivos: "+promedioPositivos.toFixed(2)+"<br>");
	 document.write("8-Promedios de negativos: "+promedioNegativos.toFixed(2)+"<br>");
	 document.write("9-Diferencia entre positivos y negativos: "+diferenciaPyN);


}//FIN DE LA FUNCIÓN