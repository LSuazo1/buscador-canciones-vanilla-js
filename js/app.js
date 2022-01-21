import * as UI from './interfaz.js';
import API from './api.js';


UI.formularioBuscar.addEventListener('submit', buscarCancion);



function buscarCancion(e) {
    e.preventDefault();

    //Obtener datos del formulario
    const artista=document.querySelector('#artista').value;
    const cancion=document.querySelector('#cancion').value;

    //validar el formulario
    if (artista==='' || cancion==='') {
        //EL usuario dejo al menos un campo vacio,mostrar error
        UI.divMensaje.textContent= `Error.. todos los campos son obligatorios`;
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent='';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        return;
    }
    //consultar api
   const busqueda= new API(artista, cancion);
   busqueda.consultarAPI();
}