const h1=document.querySelector('h1');/*con esto seleccionamos el elemento h1 del html*/
const p=document.querySelector('p');/*seleccionamos el parrafo del html*/
const parrafito=document.querySelector('.parrafito');/*seleccionamos la etiqueta con nobmre clase 
parrafito del html*/
const pid=document.querySelector('#pid');/*seleccionamos loa etiqueta con id pid del html*/
const input=document.querySelector('input');/*seleccionamos los input del html*/

console.log(h1);/*nos muestra el html del elemento*/
console.log({/*nos muestra las propidedes del elemento html y las [podemos escuchar*/
    h1,
    p,
    parrafito,
    pid,
    pid,
    input
});
console.log(input.value)/*tenmos funciones que nos da el navegador para interactuar con las etiquetas 
del html*/