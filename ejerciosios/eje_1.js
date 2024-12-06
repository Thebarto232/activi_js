/**
 * Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 
 */



let edad = prompt("ingrese su edad");
if (edad > 0) {
    if (edad >= 18) {
        console.log("ud es mayor de edad");
    }
    else {
        console.log("ud es menor de edad");

    }
} else {
    console.log("Numero invalido");

}


