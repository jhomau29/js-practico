/*arrays:
es una lista de elementos

*/
const array=[1,"fasa",true,false];

/*objeto ;
es una lista de elementos PERO cada elemento tiene un nombre clave*/

const obj={
    nombre:"fulanito",
    edad:3,
};

/*cuando los elementos a guardar no son importantes se ura arrays 
las reglas se pueden incumplir , pero para objetos cuando el nombre del elemento es 
importante */

/*Los arrays pueden guardar objetos y los objetos pueden guardar arrays en sus propiedades*/
function imprimirPrimerELementoArray(array){
    console.log(array[0]);
}
imprimirPrimerELementoArray(["juan","pepe","ana"]);

function imprimirElementoPorElemento(array){
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

imprimirElementoPorElemento(["jose","pepe","ana",'andrea']);
/*imprimimos cada elemento del objeto*/
const objeto={
    edad:29,
    nombre:"jhonatan",
    apellido:"montano",
    ci:6966076,
};
function imprimirElementosPorElementoObj(obj){
    let arrayObjeto=Object.values(obj);/*convertimos el objeto a arrays*/
    for(let i=0;i<arrayObjeto.length;i++){
        console.log(arrayObjeto[i]);
    }
}
imprimirElementosPorElementoObj(objeto);
