/**7. los tramos impositivos para la declaración de la renta en un determinado país son:
a. entre 10000 y 20000 ---- 5%
b. entre 20000 y 35000 ---- 10%
c. entre 35000 y 60000 ---- 20%
d. más de 60000 ---- 45% */



const n_pais=function() {
    if(n_pais<10){
        alert("5%");
      
        
    }
    if(n_pais<20){
        alert("10%");
       
    }
    if(n_pais<35){
        alert("20%");
    
    }
    if(n_pais>60){
    alert("no pagas impestos");
        
}
}
let numero = parseInt(prompt("ingrese cantidad para declar impuestos:"));

n_pais(numero);