let entrada;

do {
    entrada = prompt("Escribe algo (escribe 'salir' para terminar):");
    if (entrada !== "salir") {
        console.log(entrada);
    }
} while (entrada !== "salir");

console.log("Programa terminado.");
