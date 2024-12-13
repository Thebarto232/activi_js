function Lorena() {

    let parteMartin = 2 / 3;
    let parteJairo = 1 / 4;


    let totalCompartido = parteMartin + parteJairo;

 
    let parteLorena = 1 - totalCompartido;

    return parteLorena;
}


let parteLorena = Lorena();
console.log(`A Lorena le corresponde ${parteLorena} del total.`);
