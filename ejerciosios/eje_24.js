const costo = parseFloat(prompt("Ingrese el costo de los medicamentos:"));
const descuento = costo * 0.10;
const precioFinal = costo - descuento;
alert(`El precio final con descuento es: $${precioFinal.toFixed(2)}`);
