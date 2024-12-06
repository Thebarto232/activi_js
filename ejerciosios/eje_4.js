/** . Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
o impar*/
function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}


let numero = parseInt(prompt("Por favor, ingresa un número entero:"));

verificarParidad(numero);
