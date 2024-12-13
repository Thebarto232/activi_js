let subtotal = 0;

for (let i = 1; i <= 5; i++) {
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    subtotal += precio;
}

let iva = subtotal * 0.19; // 19% de IVA
let total = subtotal + iva;

console.log(`Subtotal: ${subtotal}`);
console.log(`IVA: ${iva}`);
console.log(`Total: ${total}`);
