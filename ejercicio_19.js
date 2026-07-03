function promedioEstudiante( n1, n2, n3, n4, n5) {
    let promedio = (n1 + n2 + n3 + n4 + n5) / 5;
    return promedio;
}

let nombre = "Mario Morales Castrillon";
let programa = "Desarrollo de Software";
let ficha = "4356789";
let promedioFinal = promedioEstudiante ( 4.0, 5.0, 3.5, 4.0, 5.0);

console.log("Nombre del estudiante: " + nombre);
console.log("Programa de formacion: " + programa);
console.log("Ficha: " + ficha);
console.log("El promedio final del estudiante es: " + promedioFinal);

