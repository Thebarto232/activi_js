function impuestos(edad, ingreso) {
    if (edad > 16 && ingreso >= 1000) {
        console.log("Debe tributar.");
    } else {
        console.log("No debe tributar.");
    }
}


let edad_usu = parseInt(prompt("¿Cuántos años tienes?"));
let ingresos = parseFloat(prompt("¿Cuáles son tus ingresos mensuales?"));


impuestos(edad_usu, ingresos);
