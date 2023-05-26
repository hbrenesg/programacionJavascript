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

    agregarBtn.onclick = function () {
        agregarCliente();
    }

    cancelarBtn.onclick = function () {
        limpiarCampos();
    }

    function agregarCliente() {
        if (nombreInput.value != '' && apellidoInput.value != '' && emailInput.value != '' && fondosInput.value != '' && mensualidadInput.value != '') {
            for (let index = 0; index < clientes.length; index++) {
                if (clientes[index].email === emailInput.value) {
                    alert('Ya existe este cliente');
                    limpiarCampos();
                    return false;
                }
            }
            var clienteNuevo = new Cliente(nombreInput.value, apellidoInput.value, emailInput.value, fondosInput.value, mensualidadInput.value);
            clientes.push(clienteNuevo);

            insertarClienteEnTabla();
            limpiarCampos();
        } else {
            alert('No se permite campos vacios');
        }
    }

    function insertarClienteEnTabla() {
        if (tablaDiv.childElementCount === 0) {
            var clientesTable = createElement('table', tablaDiv, { className: 'tablaClientes', id: 'clientesTbl' });
            var clientesTableRowHeader = createElement('tr', clientesTable, { className: 'trHeaderTablaClientes' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Nombre' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Apellido' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Email' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Fondos' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Mensualidad ' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Cobrar' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Eliminar' });
            createElement('th', clientesTableRowHeader, { innerHTML: 'Update' });
        } else {
            var clientesTable = document.getElementById('clientesTbl');
        }
        clientes.forEach((cliente, index) => {
            if ((clientes.length - 1) === index) {
                if (Number(cliente.fondos) === 0) {
                    var clientesTableRow = createElement('tr', clientesTable, { className: 'trRojoTablaClientes', id: index });
                } else {
                    var clientesTableRow = createElement('tr', clientesTable, { id: 'Fila' + index });
                }
                createElement('td', clientesTableRow, { innerHTML: cliente.nombre });
                createElement('td', clientesTableRow, { innerHTML: cliente.apellido });
                createElement('td', clientesTableRow, { innerHTML: cliente.email });
                createElement('td', clientesTableRow, { innerHTML: cliente.fondos });
                createElement('td', clientesTableRow, { innerHTML: cliente.mensualidad });
                createElement('td', clientesTableRow, { innerHTML: 'Cobrar', className: 'botonCobrar', onclick: aplicarMensualidad, });
                createElement('td', clientesTableRow, { innerHTML: 'Eliminar', className: 'botonEliminar' });
                createElement('td', clientesTableRow, { innerHTML: 'Update', className: 'botonUpdate' });
            }
        })
    }

    function limpiarCampos() {
        nombreInput.value = '';
        apellidoInput.value = '';
        emailInput.value = '';
        fondosInput.value = '';
        mensualidadInput.value = '';
    }

    function aplicarMensualidad() {
        console.log('prueba');
    }
}