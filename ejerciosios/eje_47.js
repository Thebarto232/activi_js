let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
} else {
    let mayor = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);
    console.log(`El mayor es: ${mayor}`);
    console.log(`El menor es: ${menor}`);
}
