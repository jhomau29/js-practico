/*las funciones son la forma que encapsulamos un bloque de codigo 
repetittbo en un programa para poderlo usar mandandola a llamar cuando lo necesitemos*/
function nombreCompleto(nombre,apellido){/*estos son loa parametros de entrada */
    return nombre+' '+apellido;
}
nombreCompleto('mauricio','montano');/*estos son argumentos*/
/*crear una funcion nos sirve con bloques muy parecido que podrian tener parametros y variables
 repetitivvas
y tambien nos sirve cuando hay una archivo con codigo muchas lineas y mejorar las legibilidad
de nuestro codigo */
/*las funciones reciben parametros cuando las estamos creando y reciben argumentos cunado las 
estamos llamando*/
function saludo(nombre,apellido,namenick){
    const completeName=nombreCompleto(nombre,apellido);
    const nickname=namenick;
    console.log('mi nombre es '+completeName+' pero me gusta que me digan '+nickname+'.');
}
