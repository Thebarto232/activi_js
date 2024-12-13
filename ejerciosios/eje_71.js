let numero = parseInt(prompt("Ingresa un número entero:"));
let esPrimo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo && numero > 1) {
    console.log(`${numero} es un número primo.`);
} else {
    console.log(`${numero} no es un número primo.`);
}
