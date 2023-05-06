window.onload = function () {
    //Obteniendo elementos de HTML
    var nombreInput = document.getElementById('nombreInput');
    var apellidoInput = document.getElementById('apellidoInput');
    var notaInput = document.getElementById('notaInput');
    var emailInput = document.getElementById('emailInput');
    var ingresarBtn = document.getElementById('ingresarBtn');
    var estudiantesSlt = document.getElementById('estudiantesSlt');
    var mostrarInfoBtn = document.getElementById('mostrarInfoBtn');
    var informacionEstudiante = document.getElementById('informacionEstudiante');

    //Declaración de variables
    var nombresDeEstudiantes = [];
    var apellidosDeEstudiantes = [];
    var notasDeEstudiantes = [];
    var emailsDeEstudiantes = [];

    ingresarBtn.onclick = function () {
        ingresarEstudiante();
    }

    mostrarInfoBtn.onclick = function () {
        mostrarInformacionEstudiantes();
    }

    //Eventos de botones
    function ingresarEstudiante() {
        if (nombreInput.value != '' && apellidoInput.value != '' && notaInput.value != '' && emailInput.value != '') {
            if (nombresDeEstudiantes.includes(nombreInput.value) && apellidosDeEstudiantes.includes(apellidoInput.value)) {
                alert('Ya existe ese nombre y apellido');
            } else {
                nombresDeEstudiantes.push(nombreInput.value);
                apellidosDeEstudiantes.push(apellidoInput.value);
                notasDeEstudiantes.push(Number(notaInput.value));
                emailsDeEstudiantes.push(emailInput.value);

                llenarEstudiantesSlt();
            }
            nombreInput.value = '';
            apellidoInput.value = '';
            notaInput.value = '';
            emailInput.value = '';
        } else {
            alert('No se permite campos vacios');
        }
    }

    function mostrarInformacionEstudiantes() {
        informacionEstudiante.innerText = '';
        informacionEstudiante.innerText = 'Información: \n';
        for (let index = 0; index < nombresDeEstudiantes.length; index++) {
            var textoH3 = nombresDeEstudiantes[index] + ' ' + apellidosDeEstudiantes[index] + '\n' +
                'nota: ' + notasDeEstudiantes[index] + '\n' +
                'email: ' + emailsDeEstudiantes[index] + '\n\n';
            informacionEstudiante.innerText += textoH3;
        }
    }

    //Funciones de lógica
    function llenarEstudiantesSlt() {
        estudiantesSlt.innerHTML = '';
        nombresDeEstudiantes.forEach(function (nombreDeEstudiante, index) {
            var estudianteOpcion = document.createElement('option');
            estudianteOpcion.innerHTML = `${nombresDeEstudiantes[index]} ${apellidosDeEstudiantes[index]}`;
            estudianteOpcion.value = index;
            estudiantesSlt.appendChild(estudianteOpcion);
        })
    }

}