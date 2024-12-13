// Solicitar las calificaciones de los exámenes
let examen1 = parseFloat(prompt("Ingrese la calificación del primer examen: "));
let examen2 = parseFloat(prompt("Ingrese la calificación del segundo examen: "));
let examen3 = parseFloat(prompt("Ingrese la calificación del tercer examen: "));
let examen4 = parseFloat(prompt("Ingrese la calificación del cuarto examen: "));


let promedio = (examen1 + examen2 + examen3 + examen4) / 4;


alert(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);
