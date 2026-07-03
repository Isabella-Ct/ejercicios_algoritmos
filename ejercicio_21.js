function mostrarDatosEstudiante (nombre, direccion, anoNacimiento) {
    let calcularEdad = 2026 - anoNacimiento;
    console.log("--- DATOS DEL APRENDIZ ---");
    console.log("Nombre completo: " + nombre);
    console.log("Dirección: " + direccion);
    console.log("Edad Actual: " + calcularEdad + " años")
}

mostrarDatosEstudiante ("Camilo Betancur Ortiz", "Cra 97 # 68 AC 14", 2007);