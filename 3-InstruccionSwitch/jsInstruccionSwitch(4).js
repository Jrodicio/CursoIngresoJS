function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

/*
31 dias: Enero;Marzo;Mayo;Julio;Agosto;Octubre;Diciembre
30 dias: Abril;Junio;Septiembre;Noviembre
28 dias: Febrero;
*/
//alert (mesDelAño);
	switch (mesDelAño) {
        // Case para 31 dias
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            alert("Tiene 31 días");
            break;
        // Case para 30 días
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("Tiene 30 días");
            break;
        // Case de 28 días
        case "Febrero":
            alert("Tiene 28 días");
            break;
        default:
            break;
    }
	



}//FIN DE LA FUNCIÓN