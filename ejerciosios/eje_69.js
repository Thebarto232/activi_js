let altura = parseInt(prompt("Ingresa la altura del triángulo:"));

for (let i = 1; i <= altura; i++) {
    let espacios = ' '.repeat(altura - i);
    let asteriscos = '*'.repeat(i);
    console.log(espacios + asteriscos);
}
