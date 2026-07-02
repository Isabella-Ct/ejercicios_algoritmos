Algoritmo RegistroVentas

Definir ( ValorCompra, iva, totalApagar, efectivo, cambio)

Escribir "Ingresar valor de la compra:"
Leer ValorCompra

Calcular <- ValorCompra * 0.19
Escribir "El IVA es: " 

Calcular y mostrar Total a pagar
ValorCompra + iva
Escribir "El total a pagar es: "

Escribir "Leer efectivo"
Leer efectivo

Condicion
Si efectivo >= valorDeLaCompra Entonces
cambio <- efectivo - valorDeLaCompra 
Escribir "Cambio; ", cambio
Sino 
Escribir "Error."
FinSi

Fin Algoritmo