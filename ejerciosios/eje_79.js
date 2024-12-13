function contarSilabas(palabra) {
    const silabas = palabra.split(/[^aeiouáéíóú]/).filter(s => s.length > 0);
    return silabas.length;
}
