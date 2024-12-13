const regex = /^[a-zA-Z0-9]+$/;
const input = prompt("Ingrese un texto (letras y números):");

if (regex.test(input)) {
    alert("El texto es válido.");
} else {
    alert("El texto no es válido.");
}
