let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));

let maxNota = 0, minNota = 100;
let max100 = 0, rangoA = 0, rangoB = 0, rangoC = 0, rangoD = 0;

for (let i = 0; i < cantidadNotas; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} (1 - 100):`));


    maxNota = Math.max(maxNota, nota);
    minNota = Math.min(minNota, nota);

    if (nota === 100) max100++;
    else if (nota >= 90) rangoA++;
    else if (nota >= 80) rangoB++;
    else if (nota >= 70) rangoC++;
    else if (nota >= 60) rangoD++;
}


console.log(`Nota más alta: ${maxNota}`);
console.log(`Nota más baja: ${minNota}`);
console.log(`Cantidad de notas perfectas (100): ${max100}`);
console.log(`Rango A (90-99): ${rangoA}`);
console.log(`Rango B (80-89): ${rangoB}`);
console.log(`Rango C (70-79): ${rangoC}`);
console.log(`Rango D (60-69): ${rangoD}`);
