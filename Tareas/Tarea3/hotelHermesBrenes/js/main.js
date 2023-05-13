window.addEventListener('load', main);

function findElement(id) {
    return document.getElementById(id);
}

function main() {
    const DESCUENTO_1 = 0;
    const DESCUENTO_2 = 5;
    const DESCUENTO_3 = 10;
    const DESCUENTO_4 = 25;

    const DESCUENTO_NORMAL = 0;
    const DESCUENTO_VIP = 5;
    const DESCUENTO_PREMIUM = 10;

    const NORMAL = 'NORMAL';
    const VIP = 'VIP';
    const PREMIUM = 'PREMIUM';

    var nombreInput = findElement('nombreInput');
    var apellidoInput = findElement('apellidoInput');
    var precioInput = findElement('precioInput');
    var nochesInput = findElement('nochesInput');
    var tipoClienteSlt = findElement('tipoClienteSlt');
    var calculaBtn = findElement('calculaBtn');
    var historialBtn = findElement('historialBtn');
    var descuentoSlt = findElement('descuentoSlt');
    var historialP = findElement('historialP');
    var descuento1 = findElement('descuento1');
    var descuento2 = findElement('descuento2');
    var descuento3 = findElement('descuento3');
    var descuento4 = findElement('descuento4');
    var historial = [];

    descuento1.innerHTML = `${DESCUENTO_1}%`;
    descuento2.innerHTML = `${DESCUENTO_2}%`;
    descuento3.innerHTML = `${DESCUENTO_3}%`;
    descuento4.innerHTML = `${DESCUENTO_4}%`;

    calculaBtn.onclick = function () {
        calcularPrecio();
    }

    historialBtn.onclick = function () {
        mostrarHistorial();
    }

    function calcularPrecio() {
        var descuentoSeleccionado = Number(descuentoSlt.value);
        var tipoClienteSeleccionado = tipoClienteSlt.value;

        var descuento = 0;
        var descuentoExtra = 0;

        if (descuentoSeleccionado === 1) {
            descuento = DESCUENTO_1;
        } else if (descuentoSeleccionado === 2) {
            descuento = DESCUENTO_2;
        } else if (descuentoSeleccionado === 3) {
            descuento = DESCUENTO_3;
        } else if (descuentoSeleccionado === 4) {
            descuento = DESCUENTO_4;
        }

        switch (tipoClienteSeleccionado) {
            case NORMAL:
                descuentoExtra = DESCUENTO_NORMAL;
                break;
            case VIP:
                descuentoExtra = DESCUENTO_VIP;
                break;
            case PREMIUM:
                descuentoExtra = DESCUENTO_PREMIUM;
                break;

            default:
                break;
        }

        var descuentoTotal = 0;
        var montoPorNoche = 0;
        var montoTotalAPagar = 0;
        if (nombreInput.value != '' && apellidoInput.value != '' && precioInput.value != '' && nochesInput.value != '') {
            descuentoTotal = descuento + descuentoExtra;
            montoPorNoche = precioInput.value - ((precioInput.value * descuentoTotal) / 100);
            montoTotalAPagar = montoPorNoche * nochesInput.value;

            historial.push('Nombre:', nombreInput.value, 'Apellido:', apellidoInput.value, 'Precio Habitación:', precioInput.value, 'Noches:', nochesInput.value, 'Descuento:', descuento,
                'Descuento Extra:', descuentoExtra, 'Monto Total A Pagar:', montoTotalAPagar);

            nombreInput.value = '';
            apellidoInput.value = '';
            precioInput.value = '';
            nochesInput.value = '';
            descuentoSlt.value = '1';
            tipoClienteSlt.value = NORMAL;
        } else {
            alert('No se permite campos vacios');
        }
    }

    function mostrarHistorial() {
        historialP.innerText = '';
        historialP.innerText = 'Información: \n';
        historial.forEach((element, index) => {
            var texto = '';
            if (element === 'Nombre:' && (index + 1) > 1) {
                texto += '\n';
            }
            texto += element + ' ';
            if (((index + 1) % 2) === 0 && (index + 1) > 1) {
                texto += '\n';
            }
            historialP.innerText += texto;
        });
    }

}