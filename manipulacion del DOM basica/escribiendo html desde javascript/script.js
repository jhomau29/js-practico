const h1=document.querySelector('h1');/*con querySelector esto seleccionamos el elemento h1 del html*/
const p=document.querySelector('p');/*seleccionamos  con queryselector el parrafo del html*/
const parrafito=document.getElementsByClassName('parrafito');/*seleccionamos 
con gerElementByClassName a etiqueta con nobmre clase 
parrafito del html*/
const pid=document.getElementById('pid');/*seleccionamos con getElementById 
a etiqueta con id pid del html*/
const input=document.querySelector('input');/*seleccionamos con querySelector los input del html*/

console.log(h1);/*nos muestra el html del elemento*/
console.log({/*nos muestra las propidedes del elemento html y las [podemos escuchar*/
    h1,
    p,
    parrafito,
    pid,
    pid,
    input
});
console.log(input.value);/*tenmos funciones que nos da el navegador para interactuar con las etiquetas 
del html*/
p.innerHTML="patito <br> feo";/*con innerHTML cambiamos no solo el contenido del html si 
no podemos agregar contendio html al html*/
h1.innerText="paste <br>lalallaa";/*con  innertext solo cambiomos el contendio del las etiquetas 
html*/
console.log(h1.getAttribute('class'));
/*getatribute nos ayuda a leer los atibutos que tenga nuestro elemento*/
h1.setAttribute('class','rojo');/*setatribute nos ayuda a modificar atributos que 
tenga nuestro elemento*/
h1.classList.add('azul');/*con classList.add agregamos clases a la etiqueta*/
h1.classList.remove('rojo');/*con classList.add eliminamos la clase de la etiqueta*/
input.value="456"/*con value podemos modificar el value de imput sirve para input*/
const img=document.createElement('img');/*coin document.createElement('etiquetaa a crear)'
creamos una etiqueta o elemento el en html desde java script*/
img.setAttribute('src','./a.gif');
console.log(img);/*mostramos en la consola lo que tiene el valor img
pid.innerHTML="";/*borramos el contenido del pid o lo cambiamos por nada*/
pid.append(img);/*agregamos el contenido con append al pid*/
console.log(document.createElement('span'));