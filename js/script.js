
// const btnEnvair = document.querySelector('.boton--primarios');
// btnEnvair.addEventListener('click' , function(evento){
//     console.log(evento.target);
//     evento.preventDefault();
//     console.log('enviando formulario');

// });


// eventos de los inpust y textarea


const datos ={
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTrxto);
email.addEventListener('input', leerTrxto);
mensaje.addEventListener('input', leerTrxto);
formulario.addEventListener('submit', function(evento){ //el evento de submit
    evento.preventDefault();

    //validad el formulario
    const {nombre, email, mensaje} = datos;
    if(nombre === '' || email=== '' || mensaje ==='' ){
        mostarAlerta('Todos los campos son oligatorios', true);
        return;// cortar la ejecucion
    }
    // crear la otra alerta de envio correcto
    mostarAlerta('Mensaje enviado correctamente');
});


function leerTrxto(e){
    datos[e.target.id]= e.target.value;

    //console.log(datos);
}


// validacion de mensajes y alerta que se envio 
function mostarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);
     //desaparesca despues de 5 segundos 
     setTimeout(() => {
        alerta.remove();
    },5000);
}

// mostrar alerta que se envio correctamente 
// function mostrarMensaje(mensaje){
//     // const alerta = document.createElement('P');
//     // alerta.textContent = mensaje;
//     // alerta.classList.add('correcto');

//     // formulario.appendChild(alerta);

//     //desaparesca despues de 5 segundos 
//     setTimeout(() => {
//         alerta.remove();
//     },5000);

// }

// // mostrar error en la pantalla

// function mostarError(mensaje){
//     // const error = document.createElement('P');
//     // error.textContent = mensaje;
//     // error.classList.add('error');

//     // formulario.appendChild( error );

//     // desaparesca despues de 5 segundos
//     setTimeout(() => {
//         error.remove();
//     },5000);

// }





