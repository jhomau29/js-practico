/*un ciclo es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion
......exiten diferentes ciclos como while ,for , do while
la diferencia entre el while y el for es que el while solo te pide la condicion y la variable 
que se va a cambiar a principio y a final , encambio el fot nos obliga a declarar estas dos 
variables*/

/*un ciclo infinito es cuando la validacion de nuestras condicionales nunca se cumple y 
termina totenado(danando) la aplicacion*/

/*si se puede combinar y agregar condicionales en los ciclos */
for(let i=0;i<5;i++){
    console.log("el valor de i es : "+i);
}

for(let i=10;i>=2;i--){
    console.log("el valor de i es :"+i);
}

let i=0
while(i<5){
    console.log("el valor de i es: "+i);
    i++;
}

let j=10;
while(j>=2){
    console.log("el valor de j es:"+j);
    j--;
}

let respuesta=1;
while(respuesta!=4){
    respuesta=prompt('cuanto es 2+2');
}