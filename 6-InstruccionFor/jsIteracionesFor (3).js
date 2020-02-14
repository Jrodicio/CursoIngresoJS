function mostrar()
{

    var repeticiones = prompt("Ingrese el número de repeticiones","1");
    parseInt(repeticiones);

    for (var i = 0; i < repeticiones; i++){
        document.write("Hola UTN FRA.<br>");
    }
}