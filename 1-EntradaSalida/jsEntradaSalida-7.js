/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var numeroUno;
var numeroDos;
var resultado;

function sumar()
{	
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno+numeroDos;

    alert("El resultado de la suma es "+resultado);
}

function restar()
{
	numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    
    resultado = numeroUno-numeroDos;
    
    alert("El resultado de la resta es "+resultado);
}

function multiplicar()
{ 
	numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno*numeroDos;
    
    alert("El resultado de la multiplicación es "+resultado);
}

function dividir()
{
	numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno/numeroDos;
    
    alert("El resultado de la división es "+resultado);
}

