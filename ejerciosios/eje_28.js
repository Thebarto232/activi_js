// Solicitar los datos del empleado
let nombre = prompt("Ingrese el nombre del empleado: ");
let horasTrabajo = parseFloat(prompt("Ingrese las horas trabajadas: "));
let pagoHora = parseFloat(prompt("Ingrese el pago por hora: "));

// Calcular el sueldo
let sueldo = horasTrabajo * pagoHora;

// Mostrar el resultado
alert(`El sueldo de ${nombre} es: $${sueldo.toFixed(2)}`);
