function colillaDePago (salario, ahorro) {
    let salud = salario * 0.125;
    let pension = salario * 0.16;
    let totalARecibir = salario - salud - pension - ahorro;
    
    console.log("Salario basico: $" + salario);
    console.log("Ahorro mensual: $" + ahorro);
    console.log("Aportes salud (EPS): $" + salud);
    console.log("Aporte pensiones: $" + pension);
    console.log("Total a recibir: $" + totalARecibir);
        
}

colillaDePago(2500000, 250000)



