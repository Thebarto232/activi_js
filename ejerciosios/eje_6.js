/**los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde */

function grupo(nombre, sexo) {
  if (sexo === 'M') {
      if (nombre < 'M') {
        alert("Pertenece al grupo A (Mujeres con nombre anterior a la M).");
      } else {
        alert("Pertenece al grupo B (Mujeres con nombre posterior o igual a la M).");
      }
  } else if (sexo === 'H') {
      if (nombre > 'N') {
        alert("Pertenece al grupo A (Hombres con nombre posterior a la N).");
      } else {
        alert("Pertenece al grupo B (Hombres con nombre anterior o igual a la N).");
      }
  } else {
      alert("Sexo inválido. Debes ingresar 'M' para mujer o 'H' para hombre.");
  }
}

let nombre = prompt("Ingrese su nombre");
let genero = prompt("Ingrese su sexo (M ,H):").toUpperCase(); // metodo en  mayúsculas

grupo(nombre, genero);  
