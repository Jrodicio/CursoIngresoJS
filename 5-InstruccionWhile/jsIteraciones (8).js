function mostrar()
{

	//var contador=0; variable que no se utiliza
	var positivo=0;
	var negativo=1;
	var num;

	var respuesta='si';
	while (respuesta == 'si'){
		num = prompt("Ingrese un número:");
		num = parseInt(num);
		if (num < 0){
			negativo = negativo * num;
		}
		else {
			positivo = positivo + num;
		}
		respuesta = prompt("¿Desea continuar ingresando números?","si");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN