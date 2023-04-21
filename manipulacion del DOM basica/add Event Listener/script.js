const h1=document.querySelector('h1');/*con querySelector esto 
seleccionamos el elemento h1 del html*/

const input1=document.querySelector('#calculo1');/*seleccionamos con querySelector los input del html*/
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btncalcular');
const pResult=document.querySelector('#result');
const form=document.querySelector('#form');
form.addEventListener('submit',btnOnClick);


/*btn.addEventListener('click',btnOnClick);/*escuchaldor de eventos desde javascript*/ 
function btnOnClick(event){
    console.log({event});
    event.preventDefault();/*esta linea no permite coratar el evento de recarga del formulario 
    a la ora do hacer click en el boton asi podemos ejecutar el codigo que queremos sin 
    recargar la pagina */
    console.log("escuchando el evento del btnonclick")
    const sumaImput=input1.value+input2.value;
    pResult.innerText="resultado: "+sumaImput;

}

