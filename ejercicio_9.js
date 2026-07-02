let sueldoBase = 3000000;
let venta1 = 500000, venta2 = 345000, venta3 = 750000; 

let comisiones = (venta1 + venta2 + venta3) * 0.10;

let totalDelMes = sueldoBase + comisiones;

console.log ("El dinero obtenido por concepto de comisiones es:: " + comisiones);
console.log ("Total del sueldo base + las comisiones : " + totalDelMes);
