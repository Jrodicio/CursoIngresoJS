/*4.	Para el departamento de iluminación:
        Tomando en cuenta que todas las lámparas están 
            en oferta al mismo precio de $35 pesos final.
            
 */
function CalcularPrecio () 
{
 
    var precioFinal ;
    var cantidadCompra ;
    var marca ;
    var descuento ;
    var subtotal ;
    var total ;
    var ingresosBrutos ;

    precioFinal = 35 ;
    cantidadCompra = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;

    cantidadCompra = parseInt(cantidadCompra);

    subtotal = cantidadCompra * precioFinal ;
    descuento = 0 ;

//A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadCompra >= 6){
        
        descuento = subtotal * 0.50 ;
        console.log("Entra en A.");
        console.log("Subtotal:"+subtotal);
        console.log("Descuento 50%:"+descuento);
    }
//B.Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    else if (cantidadCompra == 5){
        console.log("Entra en B.");
        console.log("Subtotal:"+subtotal);
        
        if (marca == "ArgentinaLuz"){
            descuento = subtotal * 0.40 ;
            console.log("Descuento 40%:"+descuento);
        }
        else {
            descuento = subtotal * 0.30 ;
            console.log("Descuento 30%:"+descuento);
        }
    }
//C.Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    else if (cantidadCompra == 4) {
        console.log("Entra en C.");
        console.log("Subtotal:"+subtotal);
        
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = subtotal * 0.25 ;
            console.log("Descuento 25%:"+descuento);
        }
        else {
            descuento = subtotal * 0.20 ;
            console.log("Descuento 20%:"+descuento);
        }
    }
//D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    else if (cantidadCompra == 3) {
        console.log("Entra en D.");
        console.log("Subtotal:"+subtotal);
        
        if (marca == "ArgentinaLuz"){
            descuento = subtotal * 0.15 ;
            console.log("Descuento 15%:"+descuento);
        }
        else if (marca == "FelipeLamparas"){
            descuento = subtotal * 0.10 ;
            console.log("Descuento 10%:"+descuento);
        }
        else {
            descuento = subtotal * 0.05 ;
            console.log("Descuento 5%:"+descuento);
        }
    }
//Asignamos en total, el valor de subtotal-descuento

    total = subtotal - descuento ;
//E.Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
    if (total > 120){
        console.log("Entra en E.");
        ingresosBrutos = total*0.10 ;
        total = total + ingresosBrutos ;
        document.getElementById("precioDescuento").value = "$"+total+". IIBB Usted pago $"+ingresosBrutos+".";
        console.log("FIN en E.");
    }
    else {
        console.log("FIN sin E.");
        document.getElementById("precioDescuento").value = "$"+total+".";
    }
    
}