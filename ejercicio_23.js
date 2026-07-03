function calcularTiempo(metrosEscalador) {
    let tiempo = (5/7);
    let metrosNuevos = tiempo * metrosEscalador;
    return metrosNuevos;
    }
    let resultado = calcularTiempo(4);
    
    console.log ("El tiempo que tardara el escalador es de: " + resultado.toFixed(2) +" horas");
    