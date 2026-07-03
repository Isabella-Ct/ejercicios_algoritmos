function registrarVenta(montoVenta, cantidadPagada) {
    let iva = montoVenta * 0.19;
    let totalPagar = montoVenta + iva;
    let cambio = cantidadPagada - totalPagar;

    console.log("IVA: " + iva);
    console.log("Total a pagar: $" + totalPagar);
    console.log("Cambio: $" + cambio);
}

registrarVenta(100000, 170000);
