window.addEventListener('load', init, false);

function init() {

    const DESCUENTO_1 = 0;
    const DESCUENTO_2 = 7;
    const DESCUENTO_3 = 10;
    const DESCUENTO_4 = 25;

    var nombreInput = getElementById('nombreInput');
    var apellidoInput = getElementById('apellidoInput');
    var precioInput = getElementById('precioInput');
    var nochesInput = getElementById('nochesInput');
    var tipoClienteSlt = getElementById('tipoClienteSlt');
    var calcularBtn = getElementById('calcularBtn');
    var historialBtn = getElementById('historialBtn');
    var descuentoSlt = getElementById('descuentoSlt');
    var historialP = getElementById('historialP');
    var descuento1 = getElementById('descuento1');
    var descuento2 = getElementById('descuento2');
    var descuento3 = getElementById('descuento3');
    var descuento4 = getElementById('descuento4');

    function getElementById(id) {
        return document.getElementById(id);
    }

    descuento1.innerHTML = `${DESCUENTO_1}%`;
    descuento2.innerHTML = `${DESCUENTO_2}%`;
    descuento3.innerHTML = `${DESCUENTO_3}%`;
    descuento4.innerHTML = `${DESCUENTO_4}%`;


    calcularBtn.onclick = function () {
        calcularPrecio();
    }

    historialBtn.onclick = function () {
        mostrarHistorial();
    }

    function calcularPrecio() {
        var descuestoSeleccionado = Number(descuentoSlt.value);
        var tipoClienteSeleccionado = tipoClienteSlt.value;

        var descuento = 0;
        var descuentoExtra = 0;

        if (descuestoSeleccionado === 1) {
            descuento = DESCUENTO_1;
        } else if (descuestoSeleccionado === 2) {
            descuento = DESCUENTO_2;
        } else if (descuestoSeleccionado === 3) {
            descuento = DESCUENTO_3;
        } else if (descuestoSeleccionado === 4) {
            descuento = DESCUENTO_4;
        }

        //DESCUENTO EXTRA
        if (tipoClienteSeleccionado === 1) {
        }

        console.log(descuestoSeleccionado);
    }

}