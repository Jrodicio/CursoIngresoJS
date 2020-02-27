function mostrar()
{
var numeroIngresado = parseInt(prompt("Ingrese un número"));;
var contadorPares = 0;

    if (isNaN(numeroIngresado)){
        alert("Número incorrecto");
    }
    
    for (i=1;i<=numeroIngresado;i++){
        if (i%2 == 0){
            contadorPares++
            console.log("Número par encontrado: "+i)
        }
    }
    console.log("Cantidad de pares: "+contadorPares);



}//FIN DE LA FUNCIÓN