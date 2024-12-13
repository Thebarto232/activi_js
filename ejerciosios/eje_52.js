
let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo):").toLowerCase();


let horasTrabajadas = parseInt(prompt("Ingrese el total de horas trabajadas:"));

let pago_porhora;
let pagoTotal;


if (tipoEmpleado === "planta") {
    pago_porHora = 20000;
} else if (tipoEmpleado === "administrativo") {
    pagoporhora = 10000;
} else {
    console.log("Tipo de empleado no válido.");
    pago_porhora = 0; //
}

if (pago_porhora > 0) {
    pagoTotal = horasTrabajadas * pago_porhora;
    console.log(`El pago total para un empleado de tipo ${tipoEmpleado} es: $${pagoTotal}`);
}
