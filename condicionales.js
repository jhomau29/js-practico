/*condicionales*/
/*son ;a fotrma en la que ejecutamos un bloque codigo u otro dependiendo de una condicion o
validacion*
hay varios tipos  if , else else if, switch*/
/*el condicional if else elseif nos permite hacer validadciones completamente distintas 
en cada condicion si haci lo queremos , en cambio el condicional switch solo podemos validar con una
sola condicion;
las condicionales se pueden conbinar con las funciones*/
const tipoDeSuscripcion="basic";

switch (tipoDeSuscripcion){
    case "free":
        console.log("solo puedes tomar los cursos gratis.");
        break;
    case "basic":
        console.log("puedes tomar todos los cursos de palzi durante un mes");
        break;
    case "expert":
        console.log("puedes tomar todos los cursos de platzi durante un annio");
        break;
    case "expert duo":
        console.log("tu y algien mas pueden tomar todos los cursos de platzi");
        break;
}
/*el mismo funcionamiento en la condicional if*/
if(tipoDeSuscripcion=="free"){
    console.log("solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion=="basic"){
    console.log("puedes tomar todos los cursos de platzi durante un mes");
}else if(tipoDeSuscripcion=="expert"){
    console.log("puedes tomar todos los cursos de plarzi durante un annio");
}else if(tipoDeSuscripcion=="expert duo"){
    console.log("tu y alguine mas pueden tomar todos los cursos de plazi");
}