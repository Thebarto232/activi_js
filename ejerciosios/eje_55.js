let tipoMembresia = prompt("Ingrese su tipo de membresía (A, B o C):").toUpperCase();
let totalCompra = parseFloat(prompt("Ingrese el total de su compra:"));

let descuento = 0;

if (tipoMembresia === "A") {
    descuento = totalCompra * 0.10;
} else if (tipoMembresia === "B") {
    descuento = totalCompra * 0.15;
} else if (tipoMembresia === "C") {
    descuento = totalCompra * 0.20;
} else {
    console.log("Tipo de membresía no válido.");
}

if (descuento > 0) {
    let totalConDescuento = totalCompra - descuento;
    console.log(`Su descuento es de: $${descuento}. Total a pagar: $${totalConDescuento}`);
}
