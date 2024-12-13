function calcularPesoTotal(cajas, pesoPorCaja) {
 
    let pesoTotal = cajas * pesoPorCaja;
    return pesoTotal;
}

let cajas = 25; 
let pesoPorCaja = 748;

let pesoTransportado = calcularPesoTotal(cajas, pesoPorCaja);
console.log(`El camión transporta ${pesoTransportado} kg.`);
