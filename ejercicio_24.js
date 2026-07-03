const interesAnual = 0.5;
function prestamo(montoPrestamo) {
    let totalInteresAño = montoPrestamo * interesAnual
    let interesTrimestre = (interesAnual / 12) + 3;
    let interesMes1 = (interesAnual / 12);
    let total = montoPrestamo + totalInteresAño;

    console.log ("Total intereses del año: $" + totalInteresAño.toFixed(0));
    console.log("Total intereses trimestre del año: $" + interesTrimestre.toFixed(3));
    console.log("total interes primer mes: $" + interesMes1.toFixed(1));
    console.log("Total prestamo + intereses: $" + total.toFixed(0));
}
prestamo (20000000);