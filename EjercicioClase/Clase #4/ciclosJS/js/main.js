import { div, input } from './html.js'

window.addEventListener('load', init, false);

function init() {
    console.log('App starting!');

    // var enterLoop = true;
    // var contador = 0;
    var estudiantes = ['Esteban', 'Mario', 'Juan', 'Maria', 'Pedro'];

    var esteban = { nombre: 'Esteban', apellido: 'Padilla', correo: 'ep@gmail.com', hobbies: ['progamar', 'mejenga'] };

    var atributos = { className: 'red_box', id: 'redBox' };

    // //Opcion 1
    // while (enterLoop) {
    //     const estudiante = estudiantes[contador];

    //     console.log('Running on while loop!', estudiante);
    //     contador += 1;

    //     if (contador >= estudiantes.length) {
    //         enterLoop = false;
    //     }
    // }

    // //Opcion 2
    // while (contador < estudiantes.length) {
    //     const estudiante = estudiantes[contador];
    //     console.log('Running on while loop!', estudiante);
    //     contador += 1;
    // }

    // for (let contador = 0; contador < estudiantes.length; contador++) {
    //     const estudiante = estudiantes[contador];
    //     console.log('Running on while loop!', estudiante);
    // }

    // window.onkeydown = function (event) {
    //     console.log(event);
    //     // if (event.code === 'Space') {
    //     //     console.log('Space Release');
    //     //     enterLoop = false;
    //     // }
    //     enterLoop = false;
    // }


    // estudiantes.forEach(porCadaElementoEnArreglo);

    // function porCadaElementoEnArreglo(estudiante, index, array) {
    //     console.log(estudiante, index, array);
    // }

    // estudiantes.forEach(estudiante => {
    //     console.log(estudiante);
    // });

    // estudiantes.every(enCadaEstudiante);

    // function enCadaEstudiante(estudiante, index) {
    //     if (index == 2) {
    //         return false;
    //     }
    //     console.log(estudiante);
    //     return true;
    // }

    // for (const key in esteban) {
    //     console.log(key);
    //     console.log(esteban[key]);
    // }
    //div(atributos);

    var boxesContainer = document.getElementById('boxesContainer');
    div(boxesContainer, { className: 'red_box', id: 'redBox', innerHTML: 'Red Box' });
    div(boxesContainer, { className: 'blue_box', id: 'blueBox' });
    div(boxesContainer, { className: 'green_box', id: 'greenBox' });
    
    input(document.body, {placeholder:'prueba'});


    console.log('App ending');


}