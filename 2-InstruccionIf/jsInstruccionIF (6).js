function mostrar()
{
    //tomo la edad  
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad >= 18 ) {
        alert("Ud es mayor de edad.")
    }
    else if (edad >=13) {
        alert("Ud es un adolescente.")
    }
    else {
        alert("Ud es un niño.")
    }
}//FIN DE LA FUNCIÓN