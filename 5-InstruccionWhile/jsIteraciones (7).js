function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta == 'si'){
		contador++;
		num = prompt("Ingrese un número:");
		num = parseInt(num);
		while (isNaN(num)){
			num = prompt("Número inválido. Ingrese un número correcto:");
			num = parseInt(num);
		}
		acumulador = acumulador + num;
		respuesta = prompt("¿Desea ingresar otro número? (si/no)","si");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN