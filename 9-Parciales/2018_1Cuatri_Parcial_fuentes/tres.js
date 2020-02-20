function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);

    while (isNaN(precio)){
        precio = prompt("Ingrese un valor válido para el precio");
        precio = parseInt(precio);
    }

    porcentajeDescuento = prompt("Ingrese el porcentaje del descuento");
    porcentajeDescuento = parseInt(porcentajeDescuento);

    while (isNaN(porcentajeDescuento) || porcentajeDescuento > 100 || porcentajeDescuento < 0){
        porcentajeDescuento = prompt("Ingrese un valor válido para el descuento");
        porcentajeDescuento = parseInt(porcentajeDescuento);
    }

    descuento = precio*(porcentajeDescuento/100);
    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = "$"+precioFinal;
}
