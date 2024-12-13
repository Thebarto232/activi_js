
function calcularTiempoLlenado(caudal, radio, altura) {

    const PI = Math.PI;


    let volumen = PI * Math.pow(radio, 2) * altura * 1000;


    let tiempoSegundos = volumen / caudal;

    let tiempoMinutos = tiempoSegundos / 60;

    return tiempoMinutos;
}

let caudal = 50; 
let radio = 2; 
let altura = 5; 

let tiempoEstimado = calcularTiempoLlenado(caudal, radio, altura);
console.log(`El tiempo estimado para llenar el depósito es: ${tiempoEstimado.toFixed(2)} minutos.`);
