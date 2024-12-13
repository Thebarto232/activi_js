
function numeros(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b; 
    } else {
        return c; 
    }
}


let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Ingrese el tercer número:"));

let mayor = numeros(numero1, numero2, numero3);

console.log(`El mayor de los números ingresados es: ${mayor}`);
