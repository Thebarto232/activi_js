let lado_1 = parseFloat(prompt("Ingrese el primer lado del rectángulo:"));
let lado_2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo:"));

if (lado1 > 0 && lado_2 > 0) {
    let area = lado_1 * lado_2;
    console.log(`El área del rectángulo es: ${area}`);
} else {
    console.log("Ambos lados deben ser positivos.");
}
