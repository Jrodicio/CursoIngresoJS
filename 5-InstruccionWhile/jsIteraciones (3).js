function mostrar()
{

    var clave = prompt("ingrese el número clave.").toLowerCase();
    var pass = "utn750";
    var contador = 0;
    
    while (clave != pass && contador < 2) {
        contador++ ;
        clave = prompt("Clave incorrecta. Vuelva a intentar.").toLowerCase();
        
    }
    
}//FIN DE LA FUNCIÓN
