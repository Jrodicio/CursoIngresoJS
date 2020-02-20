function mostrar()
{
    // Pido dato.
    var sexo = prompt("Ingrese f ó m:");
    var sexoValidado ;
    
    // Lo paso a minuscula.
    sexo = sexo.toLowerCase();

    // Verifico si ingreso F/f o M/m.
    while (sexo != "f" && sexo != "m"){
        sexo = prompt("Vuelva a intentarlo. Ingrese f ó m:");
        sexo = sexo.toLowerCase();
    }
    
    //Una vez que ingreso el dato correcto, lo muestro validado.
    switch (sexo){
        case "m":
            sexoValidado = "Masculino";
        break;
        default:
            sexoValidado = "Femenino";
        break;
    }

    document.getElementById('Sexo').value=sexoValidado;

}//FIN DE LA FUNCIÓN