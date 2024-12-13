let calificacion = parseFloat(prompt("Ingrese la calificación numérica (de 0 a 10):"));
let asignacion;

if (calificacion >= 9.1 && calificacion <= 10) {
    asignacion = "A (Excelente)";
} else if (calificacion >= 8.1 && calificacion < 9) {
    asignacion = "A (Muy bien)";
} else if (calificacion >= 7.5 && calificacion < 8) {
    asignacion = "A (Bien)";
} else if (calificacion < 7.5) {
    asignacion = "NA (No aprobado)";
} else {
    asignacion = "Calificación no válida";
}

console.log(`Asignación literal: ${asignacion}`);
    