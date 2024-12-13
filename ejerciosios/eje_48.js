let opcion = prompt("¿Desea calcular el área de un Triángulo (T) o Círculo (C)?").toUpperCase();

if (opcion === "T") {
    let base = parseFloat(prompt("Ingrese la base del triángulo:"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    let area = (base * altura) / 2;
    console.log(`El área del triángulo es: ${area}`);
} else if (opcion === "C") {
    let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    let area = Math.PI * Math.pow(radio, 2);
    console.log(`El área del círculo es: ${area}`);
} else {
    console.log("Opción no válida.");
}
