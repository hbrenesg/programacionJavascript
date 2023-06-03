import { createElement } from './html.js';
import { Cliente } from './Cliente.js';

window.addEventListener('load', init, false);

function init() {
    var nombreInput = document.getElementById('nombreInput');
    var apellidoInput = document.getElementById('apellidoInput');
    var emailInput = document.getElementById('emailInput');
    var fondosInput = document.getElementById('fondosInput');
    var mensualidadInput = document.getElementById('mensualidadInput');
    var agregarBtn = document.getElementById('agregarBtn');
    var cancelarBtn = document.getElementById('cancelarBtn');
    var tablaDiv = document.getElementById('tablaDiv');
    var clientes = [];
    var indiceClienteActualizar;

    agregarBtn.onclick = function () {
        if (agregarBtn.innerText === 'Actualizar') {
            actualizarCliente();
        } else {
            agregarCliente();
        }
    }

    cancelarBtn.onclick = function () {
        limpiarCampos();
        agregarBtn.innerText = 'Agregar / Salvar';
    }

    function agregarCliente() {
        if (nombreInput.value != '' && apellidoInput.value != '' && emailInput.value != '' && fondosInput.value != '' && mensualidadInput.value != '') {
            if (validarCorreoUnico(emailInput.value)) {
                var clienteNuevo = new Cliente(nombreInput.value, apellidoInput.value, emailInput.value, fondosInput.value, mensualidadInput.value);
                clientes.push(clienteNuevo);

                actualizarTabla();
                actualizarClientesUI();
                limpiarCampos();
            }
        } else {
            alert('No se permite campos vacios');
        }
    }

    function validarCorreoUnico(email, emailOriginal = '') {
        for (let index = 0; index < clientes.length; index++) {
            if (clientes[index].email === email) {
                if (emailOriginal !== '') {
                    if (clientes[index].email !== emailOriginal) {
                        alert('Ya existe un cliente con ese email');
                        limpiarCampos();
                        return false;
                    }
                } else {
                    alert('Ya existe un cliente con ese email');
                    limpiarCampos();
                    return false;
                }
            }
        }
        return true;
    }

    function actualizarClientesUI() {

    }

    function actualizarTabla() {
        tablaDiv.innerHTML = '';
        var clientesTable = createElement('table', tablaDiv, { className: 'tablaClientes', id: 'clientesTable' });
        var clientesTableRowHeader = createElement('tr', clientesTable, { className: 'trHeaderTablaClientes', id: 'clientesTableRowHeader' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Nombre' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Apellido' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Email' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Fondos' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Mensualidad ' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Cobrar' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Eliminar' });
        createElement('th', clientesTableRowHeader, { innerHTML: 'Update' });
        clientes.forEach((cliente, index) => {
            if (Number(cliente.fondos) === 0) {
                var clientesTableRow = createElement('tr', clientesTable, { className: 'trRojoTablaClientes', id: 'Fila' + index });
            } else {
                var clientesTableRow = createElement('tr', clientesTable, { id: 'Fila' + index });
            }
            createElement('td', clientesTableRow, { innerHTML: cliente.nombre, id: 'nombreTd' + index });
            createElement('td', clientesTableRow, { innerHTML: cliente.apellido, id: 'apellidoTd' + index });
            createElement('td', clientesTableRow, { innerHTML: cliente.email, id: 'emailTd' + index });
            createElement('td', clientesTableRow, { innerHTML: cliente.fondos, id: 'fondosTd' + index });
            createElement('td', clientesTableRow, { innerHTML: cliente.mensualidad, id: 'mensualidadTd' + index });
            var clientesTableTdCobrar = createElement('td', clientesTableRow, { innerHTML: 'Cobrar', className: 'botonCobrar' });
            clientesTableTdCobrar.onclick = function () { aplicarMensualidad(index); };
            var clientesTableTdEliminar = createElement('td', clientesTableRow, { innerHTML: 'Eliminar', className: 'botonEliminar' });
            clientesTableTdEliminar.onclick = function () { eliminarCliente(index); };
            var clientsTableTdActualizar = createElement('td', clientesTableRow, { innerHTML: 'Update', className: 'botonUpdate' });
            clientsTableTdActualizar.onclick = function () { empezarActualizacionCliente(index); };

        })
    }

    function limpiarCampos() {
        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        fondosInput.value = '';
        mensualidadInput.value = '';
    }

    function aplicarMensualidad(index) {
        clientes[Number(index)].cobrarMensualidad();
        actualizarTabla();
        actualizarClientesUI();
    }

    function eliminarCliente(index) {
        if (confirm('Desea eliminar el cliente ' + clientes[index].nombre + ' ' + clientes[index].apellido)) {
            alert('El cliente ' + clientes[index].nombre + ' ' + clientes[index].apellido + ' ha sido eliminado con éxito.')
            clientes.splice(Number(index), 1);
            actualizarTabla();
            actualizarClientesUI();
        }
    }

    function empezarActualizacionCliente(indiceCliente) {
        nombreInput.value = clientes[indiceCliente].nombre;
        apellidoInput.value = clientes[indiceCliente].apellido;
        emailInput.value = clientes[indiceCliente].email;
        fondosInput.value = clientes[indiceCliente].fondos;
        mensualidadInput.value = clientes[indiceCliente].mensualidad;

        indiceClienteActualizar = indiceCliente;
        agregarBtn.innerText = 'Actualizar';
    }

    function actualizarCliente() {
        if (validarCorreoUnico(emailInput.value, clientes[indiceClienteActualizar].email)) {
            clientes[indiceClienteActualizar].nombre = nombreInput.value;
            clientes[indiceClienteActualizar].apellido = apellidoInput.value;
            clientes[indiceClienteActualizar].email = emailInput.value;
            clientes[indiceClienteActualizar].fondos = fondosInput.value;
            clientes[indiceClienteActualizar].mensualidad = mensualidadInput.value;
            limpiarCampos();
            actualizarTabla();
            actualizarClientesUI();
        }
        agregarBtn.innerText = 'Agregar / Salvar';
    }
}