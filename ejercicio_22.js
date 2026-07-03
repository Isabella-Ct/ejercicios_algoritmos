function calcularTiempoLlenado(baldeA, baldeB, baldeC) {
    let tasaTiempo = 1.5;

    let tiempoBaldeA = baldeA * tasaTiempo;
    let tiempoBaldeB = baldeB * tasaTiempo;
    let tiempoBaldeC = baldeC * tasaTiempo;

    return tiempoBaldeA, tiempoBaldeB, tiempoBaldeC;
}

let reporteConocido = calcularTiempoLlenado(5, 3, 1);

console.log("--- TIEMPOS PARA BALDES CONOCIDOS ---");
console.log("Balde de 5 Litros tarda: " + reporteConocido.tiempoA + " horas (7 horas y media)");
console.log("Balde de 3 Litros tarda: " + reporteConocido.tiempoB + " horas (4 horas y media)");
console.log("Balde de 1 Litro tarda: " + reporteConocido.tiempoC + " horas (1 hora y media)");

let tamañoX = 10;
let tamañoY = 2;
let tamañoZ = 0.5;

let reporteDesconocido = calcularTiempoLlenado(tamañoX, tamañoY, tamañoZ);

console.log("--- TIEMPOS PARA BALDES DESCONOCIDOS ---");
console.log("Balde de " + tamañoX + "L tarda: " + reporteDesconocido.tiempoA + " horas");
console.log("Balde de " + tamañoY + "L tarda: " + reporteDesconocido.tiempoB + " horas");
console.log("Balde de " + tamañoZ + "L tarda: " + reporteDesconocido.tiempoC + " horas");
