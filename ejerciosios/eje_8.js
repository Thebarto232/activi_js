/**En una determinada empresa, sus empleados son evaluados al final de cada año. Los
puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando,
traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados
pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas.
A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.
a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la
puntuación del nivel.
b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más
Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento,
así como la cantidad de dinero que recibirá el usuario */


function empresa(puntuacion) {
    let nivel;
    let dinero;


    if (puntuacion === 0.0) {
        nivel = "Inaceptable";
        dinero = 2400 * 0.0;
    } else if (puntuacion === 0.4) {
        nivel = "Aceptable";
        dinero = 2400 * 0.4;
    } else if (puntuacion >= 0.6) {
        nivel = "Meritorio";
        dinero = 2400 * puntuacion;
    } else {
        nivel = "Inválido";
        dinero = 0;
    }

    return { nivel, dinero };
}

let puntuacion = parseFloat(prompt("Introduce tu puntuación (0.0, 0.4, 0.6 o más):"));


if ([0.0, 0.4, 0.6].includes(puntuacion) || puntuacion > 0.6) {
    let resultado = empresa(puntuacion);
    
    if (resultado.nivel !== "Inválido") {
        alert("Tu nivel es: " + resultado.nivel);
        alert("Dinero a recibir: " + resultado.dinero + "€");
    } else {
        alert("Puntuación fuera de los valores aceptables.");
    }
} else {
    alert("Puntuación inválida. Debes ingresar una puntuación válida (0.0, 0.4, 0.6 o más).");
}
