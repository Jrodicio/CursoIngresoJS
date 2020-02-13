function mostrar()
{
//tomo la edad  
    var laHora = document.getElementById('hora').value;

    laHora = parseInt(laHora);

//alert (laHora);
	switch (true) {
        case (laHora >= 7 && laHora <= 11):
            alert("Es de mañana");
            break;
    
        default:
            break;
    }
	
}//FIN DE LA FUNCIÓN