const tiempoBasePorLitro = 1.5;

function calcularTiempo (litros) {
    return litros * tiempoBasePorLitro;
}
const tiempoBalde1L = calcularTiempo(1)
const tiempoBalde3L = calcularTiempo(3);
const tiempoBalde5L = calcularTiempo(5);

console.log ("El balde de 1.5 litros tarda: " + tiempoBasePorLitro + " horas");
console.log ("El balde de 3 litros tarda: " + tiempoBalde3L + " horas");
console.log ("El balde de 5 litros tardar: " + tiempoBalde5L + " horas");

let Desconocido1 = 2;
let Desconocido2 = 4;
let Desconocido3 = 7;

let tiempoDesconocido1 = calcularTiempo(Desconocido1);
let tiempoDesconocido2 = calcularTiempo(Desconocido2);
let tiempoDesconocido3 = calcularTiempo(Desconocido3);

console.log ("El balde de " + Desconocido1 + " litros tarda: " + tiempoDesconocido1 + " horas");
console.log ("El balde de " + Desconocido2 + " litros tarda: " + tiempoDesconocido2 + " horas");
console.log ("El balde de " + Desconocido3 + " litros tarda: " + tiempoDesconocido3 + " horas");



