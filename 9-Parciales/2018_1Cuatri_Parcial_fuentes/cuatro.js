function mostrar()
{
    var numero1 ;
    var numero2 ;
    var resultado ;

    numero1 = prompt("Ingrese su primer número");
    numero1 = parseInt(numero1)
    while (isNaN(numero1)){
        numero1 = prompt("Numero inválido. Ingrese nuevamente su primer número");
        numero1 = parseInt(numero1)
    }
    
    numero2 = prompt("Ingrese su segundo número");
    numero2 = parseInt(numero2)
    while (isNaN(numero2)){
        numero2 = prompt("Numero inválido. Ingrese nuevamente su segundo número");
        numero2 = parseInt(numero2)
        }
    debugger;
    if (numero1 == numero2){
        
        numero1 = numero1.toString();
        numero2 = numero2.toString();
        resultado = numero1 + numero2;
    }
    else if (numero1 > numero2){
        resultado = numero1 - numero2;
    }
    else {
        resultado = numero1+numero2;
        if (resultado > 10){
            resultado = "La suma es "+resultado+" y superó el 10"
        }
    }
    alert(resultado);
}
