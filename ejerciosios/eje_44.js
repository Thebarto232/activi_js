
function conversion_moneda(pesos) {
  
    const tasaDolar = 0.05; 
    const tasaEuro = 0.04; 


    let dolares = pesos * tasaDolar;
    let euros = pesos * tasaEuro;


    console.log(`${pesos} pesos equivalen a ${dolares.toFixed(2)} dólares`);
    console.log(`${pesos} pesos equivalen a ${euros.toFixed(2)} euros`);
}


let pesos = 1000; 
conversion_moneda(pesos);
