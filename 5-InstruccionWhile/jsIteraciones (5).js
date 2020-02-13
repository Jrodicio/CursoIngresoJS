function mostrar()
{
    // Pido dato.
    var sexo = prompt("Ingrese f ó m:");
    
    // Lo paso a minuscula.
    sexo = sexo.toLowerCase();

    // Verifico si ingreso F/f o M/m.
    while (sexo != "f" && sexo != "m"){
        sexo = prompt("Vuelva a intentarlo. Ingrese f ó m:");
        sexo = sexo.toLowerCase();
    }
    
    //Una vez que ingreso el dato correcto, lo muestro validado.
    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN