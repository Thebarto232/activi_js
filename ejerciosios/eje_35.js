function calcularDineroInicial() {

    let costoJuegoLlaves = 11500; 
    let cantidadJuegos = 5; 
    let costoBomba = 1168000; 
    let costoCajaPernos = 87000; 
    let cantidadCajas = 3; 
    let dineroSobrante = 91000;

    let totalLlaves = costoJuegoLlaves * cantidadJuegos;
    let totalPernos = costoCajaPernos * cantidadCajas;
    
    let totalGastado = totalLlaves + costoBomba + totalPernos;

    let dineroInicial = totalGastado + dineroSobrante;

    return dineroInicial;
}


let dineroQueTenia = calcularDineroInicial();
console.log(`El jefe de obra tenía $${dineroQueTenia}`);
