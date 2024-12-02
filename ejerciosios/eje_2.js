/**escribir un programa que almacene la cadena de caracteres contraseña de una variable,
pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida  */

regex= /([^A-Za-z])+([0-9])$/;
nombre=prompt("ingrese su nombre");
contra=prompt("digite su contraseña");
let conraseña=["juan123","kevin456","camilo789"];
if(conraseña===conraseña){
    console.log("su contraseña asignada es correcta"); 
}
else{
    console.log("incorrect");

}

console.log(conraseña);
