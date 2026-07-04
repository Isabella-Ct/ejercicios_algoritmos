function calcularDefinitiva(nota1, nota2, nota3){
    let totalNota1 = nota1*0.3;
    let totalNota2 = nota2*0.3;
    let totalNota3 = nota3*0.4;
    return totalNota1+totalNota2+totalNota3;
}

console.log(calcularDefinitiva(3.4, 4, 5));