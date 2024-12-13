let numero = parseInt(prompt("ingresa un número entero positivo:"));
let impares = [];

for (let i = 1; i <= numero; i += 2) {
    impares.push(i);
}

console.log(impares.join(", "));
