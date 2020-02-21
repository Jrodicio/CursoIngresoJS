function mostrar()
{

	//var contador=0; variable que no se utiliza
	//Creamos variables
	var positivo=0;
	var negativo=0;
	var num;
	var respuesta=true;

	//Mientras la respuesta sea "si":
	debugger;
	while (respuesta){
		// Se ingresa numero y se pasa a INT
		num = prompt("Ingrese un número:");
		if (num == null){
			break;
		}
		num = parseInt(num);
		while (isNaN(num)){
			num = prompt("Ingrese un número correcto:");
			if (num == null){
				break;
			}
			num = parseInt(num);
		}
		if (num == null){
			break;
		}
		// Si numero es negativo, verifico que no sea 0 antes de realizar el producto.
		if (num < 0){
			if (negativo == 0){
				negativo = 1;
			}
			negativo = negativo * num;
		}
		// Si es positivo o 0 lo sumo.
		else {
			positivo = positivo + num;
		}
		respuesta = confirm("¿Desea continuar ingresando números?");
	
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN