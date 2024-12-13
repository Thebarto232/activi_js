function formula(radio) {
 
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
}

let radio = parseFloat(prompt("Introduce el radio de la esfera: "));

let volumen = formula(radio);


alert(`El volumen de la esfera con radio ${radio} es: ${volumen.toFixed(2)}`);
/**toFixed = redondiar ejem=11.123 redondeda 11.12,*/
console.log("Calculating the volume of the sphere..."); 
console.log(`The volume of the sphere with radius ${radio} is: ${volumen.toFixed(2)}`);