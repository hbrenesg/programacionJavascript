import { ClienteComponent } from './clienteComponent.js';
import { input, div, h1, button, select, option, } from './html.js'
import { Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

window.addEventListener('load', main)
function main() {

    var container = div(document.body, { id: 'container', className: 'container' });
    var uiContainer = div(container, { id: 'uiContainer', className: 'uiContainer' });
    var clientesContainer = div(container, { id: 'clientesContainer', className: 'clientesContainer' });

    h1(uiContainer, { id: 'mainTitle', className: 'main_title', innerHTML: 'Empresas' });
    var empresaIn = input(uiContainer, { id: 'empresaIn', className: 'm-1', placeholder: 'Nombre de Empresa' });
    var registrarEmpresaBtn = div(uiContainer, { id: 'registrarEmpresaBtn', className: 'custom_button', innerHTML: 'Registrar Empresa' });

    var empresaSlt = select(uiContainer, { id: 'empresaSlt', className: '' });
    var mostrarEmpresaBtn = div(uiContainer, { id: 'mostrarEmpresaBtn', className: 'custom_button', innerHTML: 'Mostrar Empresa' });

    h1(uiContainer, { id: 'mainTitle', className: 'main_title', innerHTML: 'Cliente' })
    var nombreIn = input(uiContainer, { id: 'nombreIn', className: 'm-1', placeholder: 'Nombre' });
    var apellidoIn = input(uiContainer, { id: 'apellidoIn', className: 'm-1', placeholder: 'Apellido' });
    var emailIn = input(uiContainer, { id: 'emailIn', className: 'm-1', placeholder: 'E-mail' });
    var fondosIn = input(uiContainer, { id: 'fondosIn', className: 'm-1', placeholder: 'Fondos disponibles' });
    var mensualidadIn = input(uiContainer, { id: 'mensualidadIn', className: 'm-1', placeholder: 'Mensualidad' });
    var registrarClienteBtn = div(uiContainer, { id: 'registrarClienteBtn', className: 'custom_button', innerHTML: 'Guardar' });
    var cancelarBtn = div(uiContainer, { className: 'custom_button', innerHTML: 'Cancelar' });

    var clienteSelected = null;

    var empresas = [];
    var clientes = [];
    // clientes.push(new Cliente('Esteban', 'Padilla', 'ep@mail.com', 100, 10));
    // clientes.push(new Cliente('Juan', 'Perez', 'jp@mail.com', 100, 15));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg@mail.com', 200, 25));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg1@mail.com', 200, 25));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg2@mail.com', 200, 25));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg3@mail.com', 200, 25));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg4@mail.com', 200, 25));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg5@mail.com', 200, 25));
    // clientes.push(new Cliente('Maria', 'Gomez', 'mg6@mail.com', 200, 25));

    actualizarClientesUI(clientes);

    function registrarCliente() {
        if (empresaSlt.innerHTML !== '') {
            var nombre = nombreIn.value;
            var apellido = apellidoIn.value;
            var email = emailIn.value;
            var fondos = Number(fondosIn.value);
            var mensualidad = Number(mensualidadIn.value);

            if (nombre === "" || apellido === "" || email === "" || fondosIn.value === "" || mensualidadIn.value === "") {
                alert('Debe de rellenar todos los campos!');
            } else if (!validarEmail(email)) {
                alert('email ya registrado!');
            } else {
                if (clienteSelected !== null) {
                    clienteSelected.nombre = nombre;
                    clienteSelected.apellido = apellido;
                    clienteSelected.email = email;
                    clienteSelected.fondos = fondos;
                    clienteSelected.mensualidad = mensualidad;
                    clienteSelected = null;
                } else {
                    clientes = empresas[Number(empresaSlt.value)].cliente;
                    const cliente = new Cliente(nombre, apellido, email, fondos, mensualidad);
                    clientes.push(cliente);
                    empresas[Number(empresaSlt.value)].cliente = clientes;
                }

                actualizarClientesUI(clientes);
                limpiar();
                clientes = [];
            }
        } else {
            alert('Debe registrar una empresa');
        }
    }

    function registrarEmpresa() {
        var nombreEmpresa = empresaIn.value;

        if (nombreEmpresa === '') {
            alert('Debe de rellenar el nombre de la empresa');
        } else if (!validarNombreEmpresa(nombreEmpresa)) {
            alert('Empresa ya registrada!');
        } else {
            empresas.push(new Empresa(nombreEmpresa, clientes));
        }
        empresaIn.value = "";
        actualizarEmpresaSlt();
    }

    function validarEmail(email) {
        if (clienteSelected !== null && clienteSelected.email === email) {
            return true;
        }

        for (let i = 0; i < clientes.length; i++) {
            const cliente = clientes[i];
            if (cliente.validarEmail(email)) {
                return false;
            }
        }

        return true;
    }

    function validarNombreEmpresa(nombreEmpresa) {
        for (let i = 0; i < empresas.length; i++) {
            if (empresas[i].nombre === nombreEmpresa) {
                return false;
            }
        }
        return true;
    }

    function mostrarEmpresa() {
        if (empresaSlt.innerHTML !== '') {
            actualizarClientesUI(empresas[Number(empresaSlt.value)].cliente);
        } else {
            alert('Debe registrar una empresa');
        }
    }

    function limpiar() {
        nombreIn.value = "";
        apellidoIn.value = "";
        emailIn.value = "";
        fondosIn.value = "";
        mensualidadIn.value = "";
    }

    registrarEmpresaBtn.onclick = function () {
        registrarEmpresa();
    }

    mostrarEmpresaBtn.onclick = function () {
        mostrarEmpresa();
    }

    registrarClienteBtn.onclick = function () {
        registrarCliente();
    }

    cancelarBtn.onclick = function () {
        cancelarOperacion();
    }

    function cancelarOperacion() {
        nombreIn.value = "";
        apellidoIn.value = "";
        emailIn.value = "";
        fondosIn.value = "";
        mensualidadIn.value = "";
    }

    function actualizarClientesUI(clientes) {
        clientesContainer.innerHTML = '';
        if (clientes.length > 0) {
            clientes.forEach((cliente, index) => {
                var clientView = new ClienteComponent(clientesContainer, cliente, aplicarMensualidad, updateCliente, eliminarCliente);
            });
        }
    }

    function actualizarEmpresaSlt() {
        empresaSlt.innerHTML = '';
        empresas.forEach((empresa, index) => {
            var empresaOpcion = option(empresaSlt, { innerHTML: empresa.nombre, value: index });
        });
    }

    function updateCliente(cliente) {
        // var actualizarBtn = event.target;
        clienteSelected = cliente;
        nombreIn.value = clienteSelected.nombre;
        apellidoIn.value = clienteSelected.apellido;
        emailIn.value = clienteSelected.email;
        fondosIn.value = clienteSelected.fondos;
        mensualidadIn.value = clienteSelected.mensualidad;
    }

    function aplicarMensualidad(cliente) {
        cliente.cobrarMensualidad();
        actualizarClientesUI(clientes);
    }

    function eliminarCliente(cliente) {
        var resultado = window.confirm('¿Estás seguro?');
        if (resultado === true) {
            var indice = clientes.indexOf(cliente);
            if (indice !== -1) {
                clientes.splice(indice, 1);
                alert('El cliente ' + cliente.nombre + ' ' + cliente.apellido + ' ha sido eliminado!');
                actualizarClientesUI(clientes);
            }
        } else {
            alert('No se ha tomado ninguna acción.');
        }
    }
}