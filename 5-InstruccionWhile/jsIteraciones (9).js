function mostrar()
{

	var respuesta='si';
	var numero;
	var max = 0;
	var min = 0;

	
	
	
	while(respuesta=='si'){
		
		numero = prompt('Ingrese un número','0');	
		numero = parseInt(numero);
		while (isNaN(num)){
			num = prompt("Ingrese un número correcto:");
			num = parseInt(num);
		}
		if (numero > max){
			max = numero;
		}
		if (numero < min){
			min = numero;
		}

		respuesta = prompt('¿Desea ingresar otro número?','si');

	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;



}//FIN DE LA FUNCIÓN