function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom ;
	var nota ;
	// Generamos numero random entre 0 y 1
	numeroRandom = Math.random();
	/* Multiplicamos ese numeroRandom * 10 +1 
		para obtener un valor entre 1 y 10 */
	numeroRandom = numeroRandom * 10 + 1 ;
	/* Parseamos a entero ese numero para evitar decimales. 
		Lo alojamos en variable nota */
	nota = parseInt(numeroRandom);

	/* Si la nota es 9 o 10, mostramos "Excelente" */
	if (nota == 9 || nota == 10){
		console.log("nota: "+nota);
		alert("EXCELENTE");
	}
	/* Si la nota es 4 o más, mostramos "Aprobado" */
	else if (nota >= 4){
		console.log("nota: "+nota);
		alert("APROBADO");
	}
	/* Si la nota es menor a 4, mostramos "Vamos, la próxima..." */
	else if (nota < 4){
		console.log("nota: "+nota);
		alert("Vamos, la próxima se puede.");
	}
}//FIN DE LA FUNCIÓN