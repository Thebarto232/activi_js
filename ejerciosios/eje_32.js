let product_1=parseFloat(prompt("ingrese su primer producto"))
let product_2=parseFloat(prompt("ingrese su segundo producto"))
let product_3=parseFloat(prompt("ingrese su tercer producto"))
let product_4=parseFloat(prompt("ingrese su cuarto producto"))
let product_5=parseFloat(prompt("ingrese su quinto producto"))

let total=product_1+product_2+product_3+product_4+product_5;
function descuento(total_descuento) {
    let descuento1 = product_1*0.05;   
    let descuento2 = product_2*0.05;   
    let descuento3 = product_3*0.02;   
    let descuento4 = product_4*0.02;   
    let descuento5 = product_5*0.02;   

    let total_descuento = descuento1 + descuento2 + descuento3 + descuento4 + descuento5;
    alert(`Total por el primer producto: $${descuento1.toFixed(2)}`);
    alert(`Total por el primer producto: $${descuento2.toFixed(2)}`);
    alert(`Total por el primer producto: $${descuento3.toFixed(2)}`);
    alert(`Total por el primer producto: $${descuento4.toFixed(2)}`);
    alert(`Total por el primer producto: $${descuento5.toFixed(2)}`);
    
}
