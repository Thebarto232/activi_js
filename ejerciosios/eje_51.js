let consumo = parseFloat(prompt("Ingrese el monto del consumo:"));

if (consumo > 130000) {
    let descuento = consumo * 0.15;
    let total = consumo - descuento;
    console.log(`El total con descuento es: ${total}`);
} else {
    console.log(`El total a pagar es: ${consumo}`);
}
