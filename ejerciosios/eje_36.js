function calcularHarina(cacao) {

    let harinaPor100Gramos = 100;
    let cacaoPor10Gramos = 10;


    let cantidadHarina = (harinaPor100Gramos * cacao) / cacaoPor10Gramos;

    return cantidadHarina;
}

let cacao = 20; 
let harinaNecesaria = calcularHarina(cacao);
console.log(`Para ${cacao} gramos de cacao, se necesitan ${harinaNecesaria} gramos de harina.`);
