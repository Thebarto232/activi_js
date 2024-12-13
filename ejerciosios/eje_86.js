function sumaPositivos(arr) {
    const suma = arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    return suma;
}
