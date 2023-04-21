function consegirTipoSuscripcion(suscripcion){
    if(suscripcion=='free'){
        console.log("solo puedes tomar cursos gratis ");
        return;
    }
    if(suscripcion=='basic'){
        console.log("pueder tomar todos los cursos de platzi durante un mes");
        return;
    }
    if(suscripcion=='expert'){
        console.log("puedes tomar todos los cursos de platzi durante un annio");
        return;
    }
    if(suscripcion=='expert duo'){
        console.log("tu y otra pueden tomar todos los cursos de platzi durante un annio");
        return;
    }
    console.warn("este tipo de suscripcion no existe");
}

function conseguirTipoSuscripcionobjeto(suscripcion){
  const tiposDeSuscripciones={
    free:"solo puedes tomar cursos gratis",
    basic:"puedes tomar todos los cursos de platzi durante un mes",
    expert:"puedes tomar todos los cursos de platzi durante una annio",
    expertduo:"tu y otra pueden tomar todos los cursos de platzi durante un annio",
  };
  if(tiposDeSuscripciones[suscripcion]){//si la condicion nos devuelve algo se cumple y si no pasa
    console.log(tiposDeSuscripciones[suscripcion]);
    return;
  }
  console.warn("este tipo de suscripcion no existe");
  
}
