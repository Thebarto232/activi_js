let contraseña = prompt("Ingrese su contraseña: ");

let regexMayuscula = /[A-Z]/;
let regexMinuscula = /[a-z]/;
let regexDigito = /\d/;


let contador = 0;


for (let i = 0; i < contraseña; i++) {
    contador++;
}

if (contador >= 8 && contador <= 12 && 
    regexMayuscula.test(contraseña) && 
    regexMinuscula.test(contraseña) && 
    regexDigito.test(contraseña)) {
    alert("La contraseña es fuerte.");
} else {
    alert("La contraseña no es lo suficientemente fuerte.");
}
