/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;


function comenzar()
{
    var max = 7;
    var min = 1;
	var random;

    random = Math.floor(Math.random()*(max-min))+min;

    switch (random) {
        case 1:
            ColorSecreto = "azul";
            break;
        case 2:
            ColorSecreto = "amarillo";
            break;
        case 3:
            ColorSecreto = "marron";
            break;
        case 4:
            ColorSecreto = "verde";
            break;
        case 5:
            ColorSecreto = "celeste";
            break;
        case 6:
            ColorSecreto = "rojo";
            break;

    }

    console.log(random);
    console.log(ColorSecreto);

    document.getElementById("ColorElejido").value = ColorSecreto;

    tiempoInicio = new Date();
}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    var tiempoFin;
    var tiempoTotal;
    
    tiempoFin = new Date();
    tiempoTotal = (tiempoFin - tiempoInicio) / 1000;

    if (colorParametro == ColorSecreto){    
        alert("Correcto! Tiempo total: "+tiempoTotal+" segundos!");
        comenzar();
    }
    else {
        alert("Color incorrecto! Tiempo: "+tiempoTotal+" segundos!");
        comenzar();
    }

	


}//FIN DE LA FUNCIÓN
