function mostrar()
{

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
	var respuesta="si";
	
	
	
	while(respuesta!="no")
	{
		//Ingresa numero
		numeroIngresado = prompt("Ingrese su número:","0") ;
		numeroIngresado = parseInt(numeroIngresado)	;
		
		//Validamos cual de estos case es true y ejecutamos.
		switch (true) {
			case (numeroIngresado > 0):
				sumaPositivos = sumaPositivos + numeroIngresado ;
				cantidadPositivos++ ;	
			break;
			case (numeroIngresado < 0) :
				sumaNegativos = sumaNegativos + numeroIngresado ;
				cantidadNegativos++ ;
			break;
			case (numeroIngresado == 0):
				cantidadCeros++
			break;
			
			default:

			break;
		}
		if (numeroIngresado%2 == 0){
			cantidadPares++;
		}
			
		respuesta = prompt("¿Desea continuar?","si");

	}
	// Si respuesta == no: Salimos de while y hacemos calculos finales.
	if (cantidadNegativos == 0){
		cantidadNegativos == 1 ;
	}
	if (cantidadPositivos == 0){
		cantidadPositivos == 1 ;
	}
	//Promedios
	promedioNegativos = sumaNegativos / cantidadNegativos;
	promedioPositivos = sumaPositivos / cantidadPositivos;
	diferenciaPyN = sumaPositivos - sumaNegativos;
	/** Damos devolucioin.
	 * 1-Suma de los negativos. 
	 * 2-Suma de los positivos. 
	 * 3-Cantidad de positivos. 
	 * 4-Cantidad de negativos. 
	 * 5-Cantidad de ceros. 
	 * 6-Cantidad de números pares. 
	 * 7-Promedio de positivos. 
	 * 8-Promedios de negativos. 
	 * 9-Diferencia entre positivos y negativos */

	 document.writeln("1-Suma de los negativos: "+sumaNegativos+"<br>");
	 document.writeln("2-Suma de los positivos: "+sumaPositivos+"<br>");
	 document.writeln("3-Cantidad de positivos: "+cantidadPositivos+"<br>");
	 document.writeln("4-Cantidad de negativos: "+cantidadNegativos+"<br>");
	 document.writeln("5-Cantidad de ceros: "+cantidadCeros+"<br>");
	 document.writeln("6-Cantidad de números pares: "+cantidadPares+"<br>");
	 document.writeln("7-Promedio de positivos: "+promedioPositivos+"<br>");
	 document.writeln("8-Promedios de negativos: "+promedioNegativos+"<br>");
	 document.writeln("9-Diferencia entre positivos y negativos: "+diferenciaPyN);


}//FIN DE LA FUNCIÓN