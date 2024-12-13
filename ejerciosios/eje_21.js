
let a = parseFloat(prompt("Ingrese el semieje a: "));
let b = parseFloat(prompt("Ingrese el semieje b: "));
let c = parseFloat(prompt("Ingrese el semieje c: "));

let volumen = (4 / 3) * Math.PI * a * b * c;
alert(`El volumen del elipsoide es: ${volumen.toFixed(2)}`);
