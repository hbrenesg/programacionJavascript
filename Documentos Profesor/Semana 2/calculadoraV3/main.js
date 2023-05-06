window.onload = function () {

    var precioNeto = 0;
    var precioBruto = 0;
    const IMPUESTO = 13;

    var articulosSlt = document.getElementById('articulosSlt');
    var agregarArticuloBtn = document.getElementById('agregarArticuloBtn');
    var limpiarBtn = document.getElementById('limpiarBtn');
    var preciosContainer = document.getElementById('preciosContainer');
    var totalP = document.getElementById('totalP');
    var precios = [];

    agregarArticuloBtn.onclick = function () {
        agregarArticulo();
    }

    limpiarBtn.onclick = function () {
        limpiar();
    }

    function agregarArticulo() {

        var selectedIndex = articulosSlt.selectedIndex;
        var selectedArticuloOption = articulosSlt.children[selectedIndex];
        var optionText = selectedArticuloOption.text;

        var precio = Number(articulosSlt.value);
        precios.push(precio);

        var precioP = document.createElement('p');
        precioP.innerHTML = optionText;
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
        totalP.innerHTML = `Total: ${precioNeto}`;
        precioBruto = 0;
    }

    function limpiar() {
        precioBruto = 0;
        preciosContainer.innerHTML = '';
        precios = [];
        totalP.innerHTML = 'Total: 0';
    }
}

