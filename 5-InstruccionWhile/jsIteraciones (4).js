function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9 (inclusive).");
	if (numero == null){
		document.getElementById("Numero").value = null;
		return;
	}
	while (parseInt(numero) < 0 || parseInt(numero) > 9 || isNaN(parseInt(numero))){
		numero = prompt("Numero incorrecto. Vuelva a ingresar un número entre 0 y 9 (inclusive).");
	}
	
	document.getElementById("Numero").value = numero;
	
}//FIN DE LA FUNCIÓN