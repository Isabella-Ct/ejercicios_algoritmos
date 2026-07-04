function calcularDefinitiva(nota1, nota2, nota3){
    let totalNota1 = nota1*0.2;
    let totalNota2 = nota2*0.3;
    let totalNota3 = nota3*0.5;
    return totalNota1+totalNota2+totalNota3;
}

console.log( "la nota definitiva del aprendiz es: " + calcularDefinitiva(4.4, 3.8, 5));