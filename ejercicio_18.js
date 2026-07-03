function pagoMatricula (matricula ) {
    let cuota1 = matricula * 0.40;
    let cuota2 = matricula * 0.25;
    let cuota3 = matricula * 0.20;
    let cuota4 = matricula * 0.15;

    console.log("Primera cuota: $" + cuota1);
    console.log("Segunda cuota: $" + cuota2);
    console.log("Tercera cuota: $" + cuota3);
    console.log("Cuarta cuota: $" + cuota4);

}

pagoMatricula(300000)