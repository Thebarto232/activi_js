let postulantes = parseInt(prompt("Ingrese el número de postulantes:"));
let seleccionados = 0;

for (let i = 0; i < postulantes; i++) {
    let edad = parseInt(prompt("Ingrese la edad del postulante:"));
    let estatura = parseFloat(prompt("Ingrese la estatura del postulante (cm):"));
    let peso = parseFloat(prompt("Ingrese el peso del postulante (kg):"));

    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        seleccionados++;
        console.log("El postulante cumple con los requisitos.");
    } else {
        console.log("El postulante NO cumple con los requisitos.");
    }
}
console.log(`Total de seleccionados: ${seleccionados}`);
