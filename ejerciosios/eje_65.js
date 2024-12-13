let numero = parseInt(prompt("Ingresa un número entero positivo:"));
let countdown = [];

for (let i = numero; i >= 0; i--) {
    countdown.push(i);
}

console.log(countdown.join(", "));
