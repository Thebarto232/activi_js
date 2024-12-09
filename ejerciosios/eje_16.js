
/**. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
minutos, exprese el resultado en metros/segundo. */
const velocidad = 60; 
const tiempo = 2; 
function calcular(velocidad,tiempo) {
    const distancia=velocidad*tiempo;
    return distancia;
}
const resultado = calcular(velocidad, tiempo);
console.log(resultado); 