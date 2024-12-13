const examen1 = parseFloat(prompt("Ingrese la calificación del examen 1:"));
const examen2 = parseFloat(prompt("Ingrese la calificación del examen 2:"));
const examen3 = parseFloat(prompt("Ingrese la calificación del examen 3:"));
const examen4 = parseFloat(prompt("Ingrese la calificación del examen 4:"));

const promedio = (examen1 + examen2 + examen3 + examen4) / 4;
alert(`El promedio es: ${promedio.toFixed(2)}`);
