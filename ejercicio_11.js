function calcularNotaDefinitiva(p1, p2, p3, examen, trabajo) {
    let porcentajeParciales = ((p1 + p2 + p3) / 3) * 0.55;
    let porcentajeExamen = examen * 0.30;
    let porcentajeTrabajo = trabajo * 0.15;
    return porcentajeParciales + porcentajeExamen + porcentajeTrabajo;
}

console.log("Su calificiacion final en algortimos es: " + calcularNotaDefinitiva (4.0, 3.5, 4.5, 4.2, 4.8));
