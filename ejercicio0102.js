/*Ingresa el producto */
let producto = parseInt(prompt("Seleccione un producto:"))

let precioProducto

/* Establecer el precio según el código de producto*/
switch (producto) {
    case 1:
        precioProducto = 70.99;
        break;
    case 2:
        precioProducto = 78.99;
        break;
    case 3:
        precioProducto = 100.99;
        break;
    case 4:
        precioProducto = 58.50;
        break;
    case 5:
        precioProducto = 35.00;
        break;
    default:
        precioProducto = 0;
        alert("Debe selecionar un producto de la lista.")
        break;
}

/* Seleccione la cantidad*/
let cantidad
let descuento

if(precioProducto > 0){
    cantidad = parseInt(prompt("Indique la cantidad: "));

    /* descuento*/
    if(cantidad < 10){
        descuento = 0.035;
    }else if (cantidad >=10 && cantidad<=20) {
        descuento = 0.07;
    }else if (cantidad > 20) {
        descuento = 0.095
    }

    let descuentoTotal = (precioProducto*cantidad)*descuento;
    document.write("<p>Precio unitario: " + precioProducto + "</p>");
    document.write("<p>Cantidad: " + cantidad + "</p>");
    document.write("<p>Descuento: " + descuento*100 + "%</p>");
    document.write("<p>Total: " + ((precioProducto*cantidad)-(descuento*precioProducto))+ "</p>");

} else {
    alert("<p>No ingreso el producto correcto.")
}