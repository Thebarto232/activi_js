function aleatorioParOImpar() {
    let num = Math.floor(Math.random() * 10) + 1;
    console.log(`Número aleatorio: ${num}`);
    return num % 2 === 0 ? "Par" : "Impar";
}
