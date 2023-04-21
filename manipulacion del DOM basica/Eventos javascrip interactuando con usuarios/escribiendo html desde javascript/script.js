const h1=document.querySelector('h1');/*con querySelector esto 
seleccionamos el elemento h1 del html*/

const input1=document.querySelector('#calculo1');/*seleccionamos con querySelector los input del html*/
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btncalcular');
const pResult=document.querySelector('#result');

function btnOnClick(){
    console.log("escuchando el evento del btnonclick")
    const sumaImput=input1.value+input2.value;
    pResult.innerText="resultado: "+sumaImput;

}

