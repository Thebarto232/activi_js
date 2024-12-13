let cantidad = parseFloat(prompt("Cuánto deseas invertir"));
let interes = parseFloat(prompt("¿cuál es el interés anual"));
let años = parseInt(prompt("por cuántos años deseas invertir"));

for (let i = 1; i <= años; i++) {
    cantidad += cantidad * (interes / 100);
    console.log(`año ${i}: $${cantidad.toFixed(2)}`);
}
