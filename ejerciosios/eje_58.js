let signo = "";
let mes;

while (true) {
    mes = prompt("Ingrese el nombre del mes:").toLowerCase();

    switch (mes) {
        case "enero":
        case "febrero":
            signo = "Acuario";
            break;
        case "marzo":
            signo = "Piscis";
            break;
        case "abril":
            signo = "Aries";
            break;
        case "mayo":
            signo = "Tauro";
            break;
        case "junio":
            signo = "Géminis";
            break;
        case "julio":
            signo = "Cáncer";
            break;
        case "agosto":
            signo = "Leo";
            break;
        case "septiembre":
            signo = "Virgo";
            break;
        case "octubre":
            signo = "Libra";
            break;
        case "noviembre":
            signo = "Escorpio";
            break;
        case "diciembre":
            signo = "Sagitario";
            break;
        default:
            console.log("Mes no válido, intente nuevamente.");
            continue;
    }
    break; 
}

console.log(`El signo zodiacal es: ${signo}`);
