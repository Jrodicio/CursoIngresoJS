function mostrar()
{

	var respuesta=true;
	var numero;
	var max = 0;
	var min = 0;
	var contador = 0;

	
	
	debugger;
	while(respuesta){
		
		numero = prompt('Ingrese un número','0');
		if (numero == null){
			break;
		}
		numero = parseInt(numero);
		while (isNaN(numero)){
			numero = prompt("Ingrese un número correcto:");
			if (numero == null){
				break;
			}
			numero = parseInt(numero);
		}
		if (numero == null){
			break;
		}
		contador++;
		if (numero > max || contador == 1){
			max = numero;
		}
		if (numero < min || contador == 1){
			min = numero;
		}

		respuesta = confirm('¿Desea ingresar otro número?');

	}
	if (contador > 0){
		document.getElementById("maximo").value = max;
		document.getElementById("minimo").value = min;
	}
	else{
		document.getElementById("maximo").value = "";
		document.getElementById("minimo").value = "";
	}


}//FIN DE LA FUNCIÓN