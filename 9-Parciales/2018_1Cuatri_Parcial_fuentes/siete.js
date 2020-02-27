function mostrar()
{
    //Declaramos variables a utilizar
    var contador = 0;
    var notaIngresada;
    var sexoIngresado;
    var acumuladorNotas = 0;
    var promedioNotas;
    var notaMasBaja = 11;
    var notaMasBajaMasculino = false;
    var notaMasBajaFemenino = false;
    var sexoNotaMasBaja;
    var contadorVaronesNotaMayorIgualSeis = 0;
    
    
    //Iniciamos bucle while
    while (contador < 5){
        
        //Pedimos nota y convertimos a INT
        notaIngresada = prompt("Ingrese nota","0");
        notaIngresada = parseInt(notaIngresada);

        //Validamos que la nota sea válida
        while (isNaN(notaIngresada) || (notaIngresada < 0 && notaIngresada > 10)){
            notaIngresada = prompt("Ingrese una nota válida (0 a 10)","0");
            notaIngresada = parseInt(notaIngresada);
        }
        
        sexoIngresado = prompt("Ingrese sexo del alumno");
        sexoIngresado = sexoIngresado.toLowerCase();

        while (sexoIngresado != "m" && sexoIngresado != "f" ){
            sexoIngresado = prompt("Ingrese sexo del alumno (f o m)");
            sexoIngresado = sexoIngresado.toLowerCase();
        }

        //Sumamos contador y acumulamos nota
        contador++;
        acumuladorNotas += notaIngresada;

        //Validamos si la nota es la mas baja
        if (notaIngresada < notaMasBaja){
            notaMasBaja = notaIngresada;
            switch (sexoIngresado) {
                case "m":
                    notaMasBajaMasculino = true;
                    notaMasBajaFemenino = false;
                    break;
                case "f":
                    notaMasBajaFemenino = true;
                    notaMasBajaMasculino = false;
                    break;
            }//fin switch
        }//fin if
        else if(notaIngresada == notaMasBaja){
            
            switch (sexoIngresado) {
                case "m":
                    notaMasBajaMasculino = true;
                    break;
                case "f":
                    notaMasBajaFemenino = true;
                    break;
            }//fin switch
        }//fin else if
        
        if (sexoIngresado == "m" && notaIngresada >= 6){
            contadorVaronesNotaMayorIgualSeis++;
        }//fin IF

    }//fin while

    //Calculos y validaciones finales

    if (notaMasBajaFemenino && notaMasBajaMasculino){
        sexoNotaMasBaja = "Ambos sexos";
    }
    else if (notaMasBajaFemenino){
        sexoNotaMasBaja = "Femenino";
    }
    else {
        sexoNotaMasBaja = "Masculino";
    }

    promedioNotas = acumuladorNotas/contador;

    //Resultado

    console.log("A - Promedio de notas: "+promedioNotas);
    console.log("B - Nota más baja y sexo: "+notaMasBaja+". "+sexoNotaMasBaja);
    console.log("C - Varones con nota mayor o igual a 6: "+contadorVaronesNotaMayorIgualSeis);

}
