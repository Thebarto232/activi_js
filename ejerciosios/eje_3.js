/**Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
el divisor es cero el programa debe mostrar un error, se debe manejar mediante
excepciones y el mensaje debe ser personalizado. */

let división = (a, b) => a / b;

if (división ==0){
    console.log("error");
}

console.log(división(5,10));
