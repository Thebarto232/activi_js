// Función para calcular la edad
function edad(annoNacimiento) {
    // Obtener el año actual
    let annoActual = new Date().getFullYear();

    // Calcular la edad
    let edad = annoActual - annoNacimiento;

    return edad;
}

// Ejemplo de uso
let annoNacimiento = 1995; // Año de nacimiento de la persona (ejemplo)
let edadPersona = edad(annoNacimiento);
console.log(`La edad de la persona que nació en ${annoNacimiento} es: ${edadPersona} años.`);
