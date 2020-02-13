function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom ;
	
	// Generamos numero random entre 0 y 1
	numeroRandom = Math.random();
	/* Multiplicamos ese numeroRandom * 10 y sumamos 1. 
		para obtener un valor entre 1 y 10 */
	numeroRandom = numeroRandom * 10 + 1 ;
	//Parseamos a entero ese numero para evitar decimales.
	numeroRandom = parseInt(numeroRandom);

	alert("Su número random es: "+numeroRandom);

}//FIN DE LA FUNCIÓN