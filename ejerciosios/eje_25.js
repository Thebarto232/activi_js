const parciales = parseFloat(prompt("Ingrese el promedio de parciales:"));
const examen = parseFloat(prompt("Ingrese la calificación del examen final:"));
const trabajo = parseFloat(prompt("Ingrese la calificación del trabajo final:"));

const promedioFinal = (parciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);
alert(`El promedio final es: ${promedioFinal.toFixed(2)}`);
