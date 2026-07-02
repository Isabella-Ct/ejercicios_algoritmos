function emitirFactura(p1, cant1, p2, cant2, p3, cant3, p4, cant4) {
    
    let subtotal1 = p1 * cant1;
    let subtotal2 = p2 * cant2;
    let subtotal3 = p3 * cant3;
    let subtotal4 = p4 * cant4;
    
    let compraSinIva = subtotal1 + subtotal2 + subtotal3 + subtotal4;
    
    let valorIVA = compraSinIva * 0.19;
    
    let totalFactura = compraSinIva + valorIVA;
    
    console.log(" FACTURA DE COMPRA ");
    console.log("Subtotal de los artículos: $" + compraSinIva);
    console.log("Valor del IVA (19%): $" + valorIVA);
    console.log("Total final a pagar: $" + totalFactura);
}

emitirFactura(15000, 3, 18000, 5, 3500, 3, 50000, 2);

