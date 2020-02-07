function mostrar()
{
//tomo la edad  
    var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad >= 18) {
        alert("Ud es mayor de edad.");
        
    } else {
        alert("Ud es menor de edad.");
    }

}//FIN DE LA FUNCIÓN