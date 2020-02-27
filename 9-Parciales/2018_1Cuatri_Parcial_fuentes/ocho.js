function mostrar()
{
    //Declaramos variables
    var letraIngresada;
    var numeroIngresado;
    var continuar = true;
    var contador = 0;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var promedioPositivos;
    var sumaPositivos;
    var contadorPositivos;
    var sumaNegativos;
    var numeroMinimo = 101;
    var letraMinimo;
    var numeroMaximo = -101;
    var letraMaximo;
    //Comenzamos bucle while

    while (continuar){
        
        //Ingresamos valor letra y validamos
        letraIngresada = prompt("Ingrese una letra (A-Z)");
        if (letraIngresada == null){
            break;
        }
        while (isNaN(letraIngresada) == false || letraIngresada.length > 1){
            letraIngresada = prompt("Ingrese una letra válida (A-Z)");
            if (letraIngresada == null){
            break;
        }
        }
        
        if (letraIngresada == null){
            break;
        }

        //Ingresamos valor número y validamos
        numeroIngresado = prompt("Ingrese un número (-100;100)");
        if (numeroIngresado == null){
            break;
        }
        
        numeroIngresado = parseInt(numeroIngresado);

        while (isNaN(numeroIngresado) || numeroIngresado > 100 || numeroIngresado < -100 ){
            numeroIngresado = prompt("Ingrese un número (-100;100)");
            if (numeroIngresado == null){
                break;
            }
            numeroIngresado = parseInt(numeroIngresado);
        }
        
        if (numeroIngresado == null){
            break;
        }

        
        //Una vez validados los dos datos, realizamos cálculos
        contador++;
        
        //Verificamos pares e impares
        if (numeroIngresado % 2 == 0){
            contadorPares++;
        }
        else{
            contadorImpares++;
        }

        //Contamos ceros
        if (numeroIngresado == 0){
            contadorCeros++;
        }

        //Acumulamos positivos y contamos
        if (numeroIngresado > 0){
            sumaPositivos += numeroIngresado;
            contadorPositivos++;
        }
        //Sino, acumulamos negativos
        else {
            sumaNegativos += numeroIngresado;
        }

        if (numeroIngresado > numeroMaximo){
            numeroMaximo = numeroIngresado;
            letraMaximo = letraIngresada;
        }
        if (numeroIngresado < numeroMaximo){
            numeroMinimo = numeroIngresado;
            letraMinimo = letraIngresada;
        }

        continuar = confirm("¿Desea continuar?");
    }

}
