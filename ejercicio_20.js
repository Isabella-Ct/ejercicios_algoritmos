function calculoProducto (cantidad, precio, descuento ) {

    let valorDescuento = cantidad * precio * descuento;
    let subtotal = (cantidad * precio) - valorDescuento;
    let montoIva =  subtotal * 0.19;
    let precioNeto = subtotal + montoIva;


    console.log("Subtotal:" + subtotal);
    console.log("Descuento aplicado (20%): " + valorDescuento);
    console.log("Monto IVA (19%): " + montoIva);
    console.log("Precio neto: " + precioNeto);
}

calculoProducto(3, 8500, 0.20)

