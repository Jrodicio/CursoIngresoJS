function mostrar()
{

    var repeticiones = prompt("Ingrese el número de repeticiones","1");
    repeticiones = parseInt(repeticiones);

    if (isNaN(repeticiones)|| repeticiones < 1 || repeticiones > 1000){
        alert("Ingrese un número válido");
    }
    else {
        for (var i = 0; i < repeticiones; i++){
            document.write("Hola UTN FRA.<br>");
        }
    }
}