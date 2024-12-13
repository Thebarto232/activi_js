let cursos = parseInt(prompt("Ingrese la cantidad de cursos:"));
let pago;

if (cursos < 6) {
    pago = cursos * 2000000;
} else {
    pago = cursos * 1200000;
}
console.log(`El pago total por los cursos es: $${pago}`);
