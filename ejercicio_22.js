const tiempoBasePorLitro = 1.5;

function calcularTiempo (litros) {
    return litros * tiempoBasePorLitro;
}
const tiempoBalde3L = calcularTiempo(3);
const tiempoBalde5L = calcularTiempo(5);

console.log ("El balde de 1.5 litros tarda: " + tiempoBasePorLitro + "horas");
console.log ("El balde de 3 litros tarda: " + tiempoBalde3L + "horas");
console.log ("El balde de 5 litros tardar: " + tiempoBalde5L + "horas");

