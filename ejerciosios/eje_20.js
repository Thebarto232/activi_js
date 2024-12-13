
let a = parseFloat(prompt("Ingrese el valor de a: "));
let b = parseFloat(prompt("Ingrese el valor de b: "));
let c = parseFloat(prompt("Ingrese el valor de c: "));


let discriminante = Math.pow(b, 2) - 4 * a * c;

if (discriminante >= 0) {
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert(`Las raíces reales son: ${raiz1} y ${raiz2}`);
} else {
    alert("No hay raíces reales.");
}
