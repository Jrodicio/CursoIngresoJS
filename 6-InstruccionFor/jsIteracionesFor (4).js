function mostrar()
{
var random;
    for (;;){
        random = Math.floor(Math.random()*10);
        console.log(random);
        if (random == 5){
            console.log("break");
            break;
        }
        console.log("repetir")
    }


}//FIN DE LA FUNCIÓN