function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    
    /*
    Comentamos que meses estan en cada estacion.
    preInvierno = ["Enero","Febrero","Marzo","Abril","Mayo","Junio"];
    invierno = ["Julio","Agosto"];
    postInvierno = ["Septiembre","Octubre","Noviembre","Diciembre"];
    */
    
    
    switch (mesDelAño) {
        // Case de preInvierno
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno.");
            break;
        // Case de invierno
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio.");
            break;
        // Case de postInvierno
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frío, ahora calor!!!");
        default:
            break;
    }





}//FIN DE LA FUNCIÓN