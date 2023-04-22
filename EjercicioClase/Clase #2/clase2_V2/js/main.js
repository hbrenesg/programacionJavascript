window.onload = function () {
    var precios = [];
    console.log(precios);

    var articulosSlt = document.getElementById('articulosSlt');
    var agregarArticuloBtn = document.getElementById('agregarArticuloBtn');
    var limpiarBtn = document.getElementById('limpiarBtn');
    var precioBruto = 0;
    var precioNeto = 0;
    var preciosContainer = document.getElementById('preciosContainer');
    var totalP = document.getElementById('totalP');

    //Función de cuando se de onclick
    agregarArticuloBtn.onclick = function () {
        agregarArticulo();
    }

    limpiarBtn.onclick = function () {
        limpiar();
    }

    function agregarArticulo() {
        // console.dir(articulosSlt);
        // console.dir(articulosSlt.selectedIndex);
        // console.log(articulosSlt.children[articulosSlt.selectedIndex].textContent);

        var selectedIndex = articulosSlt.selectedIndex;
        var text = articulosSlt.children[selectedIndex].text;

        var precio = Number(articulosSlt.value);
        precios.push(precio);

        var precioP = document.createElement('p');
        precioP.innerHTML = precio;
        preciosContainer.appendChild(precioP);

        calcularPrecio();
    }

    function porCadaPrecio(precio) {
        precioBruto += precio;
        //console.log(precio);
    }

    function calcularPrecio() {

        precios.forEach(porCadaPrecio);

        var impuestoACobrar = (precioBruto) * (13 / 100);
        precioNeto = precioBruto + impuestoACobrar;
        //Imprimiendo el resultado en el H5
        totalP.innerHTML = `El precio final es: ${precioNeto}`;
        precioBruto = 0;
    }

    function limpiar() {
        preciosContainer.innerHTML = '';
        precios = [];
        totalP.innerHTML = '';
        precioBruto = 0;
    }

}