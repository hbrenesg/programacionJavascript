window.onload = function () {

    var precioNeto = 0;
    var precioBruto = 0;
    const IMPUESTO = 13;

    var precioInput = document.getElementById('precioInput');
    var agregarPrecioBtn = document.getElementById('agregarPrecioBtn');
    var limpiarBtn = document.getElementById('limpiarBtn');
    var preciosContainer = document.getElementById('preciosContainer');
    var resultadoP = document.getElementById('resultadoP');
    var precios = [];

    agregarPrecioBtn.onclick = function () {
        agregarPrecio();
    }

    limpiarBtn.onclick = function () {
        limpiar();
    }

    function agregarPrecio() {
        var precio = Number(precioInput.value);
        precios.push(precio);
        precioInput.value = '';

        var precioP = document.createElement('p');
        precioP.innerHTML = precio;
        preciosContainer.appendChild(precioP);

        calcularPrecio();
    }

    function porCadaPrecio(precio) {
        precioBruto = precioBruto + precio;
    }

    function calcularPrecio() {

        precios.forEach(porCadaPrecio);

        var impuestoACobrar = precioBruto * (IMPUESTO / 100);
        precioNeto = precioBruto + impuestoACobrar;
        resultadoP.innerHTML = `Total: ${precioNeto}`;
        precioBruto = 0;
    }

    function limpiar() {
        precioBruto = 0;
        preciosContainer.innerHTML = '';
        precios = [];
        resultadoP.innerHTML = '';
    }
}

