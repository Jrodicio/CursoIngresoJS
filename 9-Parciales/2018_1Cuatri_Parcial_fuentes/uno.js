
function mostrar()
{
    //Creo variables
    var ancho;
    var largo;
    var perimetro;

    //Pido valor ancho por prompt
    ancho = prompt("Ingrese el ancho del rectángulo.","0");
    //Parseo a entero
    ancho = parseInt(ancho);
    //Si es NaN, vuelvo a solicitar.
    while (isNan(ancho)){
        ancho = prompt("Ingrese un valor válido para el ancho del rectángulo.","0");
        ancho = parseInt(ancho);
    }
    
    //Pido valor largo por prompt
    largo = prompt("Ingrese el largo del rectángulo","0");
    //Parseo a entero
    largo = parseInt(largo);
    //Si es NaN, vuelvo a solicitar.
    while (isNan(largo)){
        largo = prompt("Ingrese un valor válido para el ancho del rectángulo.","0");
        largo = parseInt(largo);
    }
    
    //Calculo perimetro
    perimetro = 2*(ancho+largo);

    //Muestro perimetro por alert
    alert("El perimetro del rectangulo es: "+perimetro);

}
