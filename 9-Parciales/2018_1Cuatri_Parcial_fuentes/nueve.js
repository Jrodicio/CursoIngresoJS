function mostrar()
{
    var marcaProducto;
    var pesoProducto;
    var temperaturaAlmacenamientoProducto;
    var temperaturasPares = 0;
    var marcaProductoMasPesado;
    var cantidadProductosTempBajoCero = 0;
    var acumuladorPeso =0;
    var contadorProductos = 0;
    var promedioPeso;
    var pesoMaximo = 0;
    var pesoMinimo = 101;
    var ingresoProducto = false;
    var continuar = true;
debugger;
    while (continuar){
        //Solicitamos marca, si es null salimos.
        marcaProducto = prompt("Ingrese la marca del producto");
        if (marcaProducto == null){
            break;
        }
        
        //Solicitamos peso. Si es null salimos, si no es un valor valido, volvemos a pedir.
        do{
            pesoProducto = prompt("Ingrese el peso del producto (1 a 100)");
            if (pesoProducto == null){
                break;
            }
            pesoProducto = parseInt(pesoProducto);
        }while (isNaN(pesoProducto) || pesoProducto > 100 || pesoProducto < 1);
        if (pesoProducto == null){
            break;
        }

        //Solicitamos temperatura. Si es null salimos, si no es un valor valido, volvemos a pedir.
        do{
            temperaturaAlmacenamientoProducto = prompt("Ingrese la temperatura de almacenamiento del producto (-30 a 30)");
            if (temperaturaAlmacenamientoProducto == null){
                break;
            }
            temperaturaAlmacenamientoProducto = parseInt(temperaturaAlmacenamientoProducto);
        }while (isNaN(temperaturaAlmacenamientoProducto) || temperaturaAlmacenamientoProducto > 30 || temperaturaAlmacenamientoProducto < -30);
        if (temperaturaAlmacenamientoProducto == null){
            break;
        }        

        //Si ingreso todo, comenzamos a contar los productos ingresados
        
        //D
        acumuladorPeso += pesoProducto;
        contadorProductos++;
        ingresoProducto = true;

        //A
        if (temperaturaAlmacenamientoProducto % 2 == 0){
            temperaturasPares++;
        }

        //C
        if (temperaturaAlmacenamientoProducto < 0){
            cantidadProductosTempBajoCero++;
        }

        //B y F
        if (pesoProducto > pesoMaximo){
            pesoMaximo = pesoProducto;
            marcaProductoMasPesado = marcaProducto;
        }
        if (pesoProducto < pesoMinimo){
            pesoMinimo = pesoProducto;
        }

        continuar = confirm("¿Desea continuar?");
    }

    if (ingresoProducto){
        promedioPeso = acumuladorPeso/contadorProductos;
        document.write("a- Temperaturas pares: "+temperaturasPares+"<br>");
        document.write("b- Marca de producto más pesado: "+marcaProductoMasPesado+"<br>");
        document.write("c- Cantidad de productos que se conservan a menos de 0 grados: "+cantidadProductosTempBajoCero+"<br>");
        document.write("d- Promedio peso: "+promedioPeso+"<br>");
        document.write("f- Peso máximo ; Peso mínimo: "+pesoMaximo+" ; "+pesoMinimo);
    }
}
