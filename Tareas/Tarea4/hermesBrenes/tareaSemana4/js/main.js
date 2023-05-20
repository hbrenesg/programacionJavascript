window.addEventListener('load', init, false);

function init() {
    var tempLunesInput = document.getElementById('tempLunesInput');
    var tempMartesInput = document.getElementById('tempMartesInput');
    var tempMiercolesInput = document.getElementById('tempMiercolesInput');
    var tempJuevesInput = document.getElementById('tempJuevesInput');
    var tempViernesInput = document.getElementById('tempViernesInput');
    var tempSabadoInput = document.getElementById('tempSabadoInput');
    var tempDomingoInput = document.getElementById('tempDomingoInput');
    var agregarTempBtn = document.getElementById('agregarTempBtn');
    var cancelarTempBtn = document.getElementById('cancelarTempBtn');
    var promedioClimaP = document.getElementById('promedioClimaP');
    var temperaturas = [];

    var ventaLunesInput = document.getElementById('ventaLunesInput');
    var ventaMartesInput = document.getElementById('ventaMartesInput');
    var ventaMiercolesInput = document.getElementById('ventaMiercolesInput');
    var ventaJuevesInput = document.getElementById('ventaJuevesInput');
    var ventaViernesInput = document.getElementById('ventaViernesInput');
    var ventaSabadoInput = document.getElementById('ventaSabadoInput');
    var agregarVentasBtn = document.getElementById('agregarVentasBtn');
    var cancelarVentasBtn = document.getElementById('cancelarVentasBtn');
    var totalVentasSemanalP = document.getElementById('totalVentasSemanalP');
    var promedioDiarioVentaP = document.getElementById('promedioDiarioVentaP');
    var ventas = [];

    agregarTempBtn.onclick = function () {
        insertarTemperaturas();
    }
    cancelarTempBtn.onclick = function () {
        limpiarCamposTemperaturas();
    }

    agregarVentasBtn.onclick = function () {
        insertarVentas();
    }
    cancelarVentasBtn.onclick = function () {
        limpiarCamposVentas();
    }

    function insertarTemperaturas() {
        if (tempLunesInput.value != '' && tempMartesInput.value != '' && tempMiercolesInput.value != '' && tempJuevesInput.value != '' && tempViernesInput.value != ''
            && tempSabadoInput.value != '' && tempDomingoInput.value != '') {
            temperaturas = [];
            temperaturas.push(Number(tempLunesInput.value));
            temperaturas.push(Number(tempMartesInput.value));
            temperaturas.push(Number(tempMiercolesInput.value));
            temperaturas.push(Number(tempJuevesInput.value));
            temperaturas.push(Number(tempViernesInput.value));
            temperaturas.push(Number(tempSabadoInput.value));
            temperaturas.push(Number(tempDomingoInput.value));

            calcularPromedioTemperaturas();
        } else {
            alert('No se permite campos vacios');
        }
        limpiarCamposTemperaturas();
    }
    function calcularPromedioTemperaturas() {
        var sumaTemperaturas = 0;
        for (let index = 0; index < temperaturas.length; index++) {
            sumaTemperaturas += temperaturas[index];
        }
        var promedioTemperaturas = sumaTemperaturas / temperaturas.length;
        promedioClimaP.innerText = 'El promedio semanal de la temperatura es de: ' + promedioTemperaturas;
    }
    function limpiarCamposTemperaturas() {
        tempLunesInput.value = '';
        tempMartesInput.value = '';
        tempMiercolesInput.value = '';
        tempJuevesInput.value = '';
        tempViernesInput.value = '';
        tempSabadoInput.value = '';
        tempDomingoInput.value = '';
    }


    function insertarVentas() {
        if (ventaLunesInput.value != '' && ventaMartesInput.value != '' && ventaMiercolesInput.value != '' && ventaJuevesInput.value != '' && ventaViernesInput.value != ''
            && ventaSabadoInput.value != '') {
            ventas = [];
            ventas.push(Number(ventaLunesInput.value));
            ventas.push(Number(ventaMartesInput.value));
            ventas.push(Number(ventaMiercolesInput.value));
            ventas.push(Number(ventaJuevesInput.value));
            ventas.push(Number(ventaViernesInput.value));
            ventas.push(Number(ventaSabadoInput.value));

            calcularTotalPromedioVentas();
        } else {
            alert('No se permite campos vacios');
        }
        limpiarCamposVentas();
    }
    function calcularTotalPromedioVentas() {
        var sumaVentas = 0;
        for (let index = 0; index < ventas.length; index++) {
            sumaVentas += ventas[index];
        }
        var promedioVentas = sumaVentas / ventas.length;
        totalVentasSemanalP.innerText = 'El total de ventas de la semana es de: ' + sumaVentas;
        promedioDiarioVentaP.innerText = 'El promedio diario de ventas es de: ' + promedioVentas;
    }
    function limpiarCamposVentas() {
        ventaLunesInput.value = '';
        ventaMartesInput.value = '';
        ventaMiercolesInput.value = '';
        ventaJuevesInput.value = '';
        ventaViernesInput.value = '';
        ventaSabadoInput.value = '';
    }
}