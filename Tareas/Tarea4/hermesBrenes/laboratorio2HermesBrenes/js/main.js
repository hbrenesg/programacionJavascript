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
        cancelarCliente();
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
            var cliente = new Cliente(nombreInput.value, apellidoInput.value, emailInput.value, fondosInput.value, mensualidadInput.value);
            clientes.push(cliente);

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
            var clientesTableHeader = createElement('th', clientesTableRowHeader, { innerHTML: 'Nombre' });
            clientesTableHeader = createElement('th', clientesTableRowHeader, { innerHTML: 'Apellido' });
            clientesTableHeader = createElement('th', clientesTableRowHeader, { innerHTML: 'Email' });
            clientesTableHeader = createElement('th', clientesTableRowHeader, { innerHTML: 'Fondos' });
            clientesTableHeader = createElement('th', clientesTableRowHeader, { innerHTML: 'Mensualidad ' });
        } else {
            var clientesTable = document.getElementById('clientesTbl');
        }
        clientes.forEach((cliente, index) => {
            if ((clientes.length - 1) === index) {
                if (Number(cliente.fondos) === 0) {
                    var clientesTableRow = createElement('tr', clientesTable, { className: 'trRojoTablaClientes' });
                } else {
                    var clientesTableRow = createElement('tr', clientesTable);
                }
                var clientesTableData = createElement('td', clientesTableRow, { innerHTML: cliente.nombre });
                var clientesTableData = createElement('td', clientesTableRow, { innerHTML: cliente.apellido });
                var clientesTableData = createElement('td', clientesTableRow, { innerHTML: cliente.email });
                var clientesTableData = createElement('td', clientesTableRow, { innerHTML: cliente.fondos });
                var clientesTableData = createElement('td', clientesTableRow, { innerHTML: cliente.mensualidad });
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

    function cancelarCliente() {
        limpiarCampos();
    }
}