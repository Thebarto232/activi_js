function piramide(altura) {
    for (let i = 1; i <= altura; i++) {
        let espacios = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }
}
