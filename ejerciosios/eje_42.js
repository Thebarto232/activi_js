
function papeleria(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {

    let Libro = 10000;
    let Cuaderno = 7550;
    let Lapicero = 5550;

    let totalLibros = cantidadLibros * Libro;
    let totalCuadernos = cantidadCuadernos * Cuaderno;
    let totalLapiceros = cantidadLapiceros * Lapicero;

    let montoTotal = totalLibros + totalCuadernos + totalLapiceros;

    return montoTotal;
}

let cantidadLibros = 5; 
let cantidadCuadernos = 3; 
let cantidadLapiceros = 10; 
let totalVenta = papeleria(cantidadLibros, cantidadCuadernos, cantidadLapiceros);
console.log(`El monto total de la venta es: $${totalVenta}`);
