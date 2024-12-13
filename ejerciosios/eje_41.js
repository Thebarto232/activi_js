
function invertirFrase(frase) {
    
    return frase.split('').reverse().join('');
}

let frase = "Soy programador de Software"; 
let fraseInvertida = invertirFrase(frase);
console.log(`Frase original: ${frase}`);
console.log(`Frase invertida: ${fraseInvertida}`);
