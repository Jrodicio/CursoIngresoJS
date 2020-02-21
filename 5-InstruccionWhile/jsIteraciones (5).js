function mostrar()
{
    //creo variables
    var sexo;
    var sexoValidado ;
    
    // Pido dato.
    sexo = prompt("Ingrese f ó m:");
    if (sexo == null){
        return;
    }
    // Si no entró a if, sigo con el codigo.
    //Paso a minuscula.
    sexo = sexo.toLowerCase();

    // Verifico si ingreso F/f o M/m.
    while (sexo != "f" && sexo != "m"){
        sexo = prompt("Vuelva a intentarlo. Ingrese f ó m:");
        if (sexo == null){
            return;
        } 
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
