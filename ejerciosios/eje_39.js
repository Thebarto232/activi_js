
function Presupuesto(area, precioPorM2) {
  
    let presupuestoTotal = area * precioPorM2;

    return presupuestoTotal;
}


let areaPintar = 50;
let precioPorM2 = 120; 
let presupuesto = Presupuesto(areaPintar, precioPorM2);
console.log(`El presupuesto para pintar ${areaPintar} m² es: $${presupuesto}`);
