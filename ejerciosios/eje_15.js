
/**Escribir un programa que calcule la longitud y el área de una circunferencia. */
function logintud() {
    const formula = (radio) => {
        const pi = Math.PI;
        const longitud = 2 * pi * radio;
        const area = pi * Math.pow(radio, 2);
        return { longitud, area };
    };
    
    
    const radio = 5;
    const resultados = formula(radio);
    
    console.log(`Longitud: ${resultados.longitud}`);
    console.log(`Área: ${resultados.area}`);
}
logintud(); 

