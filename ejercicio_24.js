let montoPrestamo = 3000000;
const tasaAnual = 0.05;
const plazoAnios = 5;

let interesAnio = montoPrestamo * tasaAnual;

let interesUnMes = interesAnio / 12;
let interesTercerTrimestre = interesUnMes * 3;

let interesTotalCincoAnios = interesAnio * plazoAnios;
let totalAPagar = montoPrestamo + interesTotalCincoAnios;

console.log("Intereses pagados en un año: " + interesAnio);
console.log("intereses pagados en el tercer trimestre: " + interesTercerTrimestre);
console.log("Intereses pagados en el primer mes: " + interesUnMes);
console.log("Total a pagar por el prestamo: " + totalAPagar);