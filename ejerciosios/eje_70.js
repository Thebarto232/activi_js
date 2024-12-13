let contrasenaCorrecta = "contraseña";
let contrasenaIngresada;

do {
    contrasenaIngresada = prompt("Ingresa la contraseña:");
} while (contrasenaIngresada !== contrasenaCorrecta);

console.log("Contraseña correcta.");
