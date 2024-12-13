let saldo = parseFloat(prompt("Ingrese el saldo de su cuenta:"));

let interes = saldo < 100000 ? saldo * 0.03 : saldo * 0.04;
let saldoFinal = saldo + interes;

console.log(`Interés pagado: $${interes.toFixed(2)}`);
console.log(`Saldo final: $${saldoFinal.toFixed(2)}`);
