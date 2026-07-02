let totalCompra = 105000;

let valorDescuento = totalCompra * 0.10;
let compraConDescuento = totalCompra - valorDescuento;

let valorIva = compraConDescuento * 0.19;

let totalFactura = compraConDescuento + valorIva;

console.log("Valor de la compra: " + totalCompra);
console.log("Descuento aplicado (10%): " + valorDescuento);
console.log("Ddescuento: " + compraConDescuento);
console.log("IVA (19%): " + valorIva);
console.log("El valor total de la factura es: " + totalFactura);