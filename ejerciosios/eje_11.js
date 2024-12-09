/**Escribir un programa que sume, resta, multiplique y divida dos números.
 */

const operacion = (num1, num2) => {
    const operaciones = {
        suma: num1 + num2,
        multiplicacion: num1 * num2,
        division:  num1 / num2
    };
    return operaciones;
};

const result = operacion(6.3, 2);
console.log(result);
