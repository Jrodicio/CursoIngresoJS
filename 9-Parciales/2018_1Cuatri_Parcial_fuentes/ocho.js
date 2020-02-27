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
    var sumaPositivos = 0;
    var contadorPositivos = 0;
    var sumaNegativos = 0;
    var numeroMinimo = 101;
    var letraMinimo;
    var numeroMaximo = -101;
    var letraMaximo;
    var ingresoPositivo = false;
    //Comenzamos bucle while

debugger;
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
                
        //Verificamos pares e impares
        if (numeroIngresado % 2 == 0){
            contadorPares++;
            //Contamos ceros
            if (numeroIngresado == 0){
                contadorCeros++;
            }
        }
        else{
            contadorImpares++;
        }

        

        //Acumulamos positivos y contamos
        if (numeroIngresado > 0){
            sumaPositivos += numeroIngresado;
            contadorPositivos++;
            ingresoPositivo = true
        }
        //Sino, acumulamos negativos
        else {
            sumaNegativos += numeroIngresado;
        }

        if (numeroIngresado > numeroMaximo){
            numeroMaximo = numeroIngresado;
            letraMaximo = letraIngresada;
        }
        if (numeroIngresado < numeroMinimo){
            numeroMinimo = numeroIngresado;
            letraMinimo = letraIngresada;
        }

        continuar = confirm("¿Desea continuar?");
    }


    //Devoluciones
    /**
      *  a) La cantidad de números pares. 
      *  b) La cantidad de números impares. 
      *  c) La cantidad de ceros. 
      *  d) El promedio de todos los números positivos ingresados. 
      *  e) La suma de todos los números negativos. 
      *  f) El número y la letra del máximo y el mínimo.
     **/

    if (ingresoPositivo){
        promedioPositivos = sumaPositivos/contadorPositivos;
    }
    else{
        promedioPositivos="N/A";
    }

    document.write("a) Cantidad de números pares: "+contadorPares+"<br>");
    document.write("b) Cantidad de números impares: "+contadorImpares+"<br>");
    document.write("c) Cantidad de ceros: "+contadorCeros+"<br>");
    document.write("d) Promedio de todos los números positivos ingresados: "+promedioPositivos+"<br>");
    document.write("e) Suma de todos los números negativos: "+sumaNegativos+"<br>");
    document.write("f1) Número y la letra del máximo: "+numeroMaximo+letraMaximo+"<br>");
    document.write("f2) Número y la letra del mínimo: "+numeroMinimo+letraMinimo+"<br>");
}
