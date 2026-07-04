function calcularFactura(totalCompra) {
    let valorDescuento = totalCompra * 0.10;
    let compraConDescuento = totalCompra - valorDescuento;
    
    let valorIva = compraConDescuento * 0.19;

    let totalFactura = compraConDescuento + valorIva;

    console.log("El valor del IVA (19%) es: $" + valorIva);
    console.log("El descuento aplicadoo fue (10%) " + valorDescuento);
    console.log("El valor total de la factura es: $" + totalFactura);
}

calcularFactura (105000);
