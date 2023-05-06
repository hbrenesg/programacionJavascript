window.onload = function () {

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
        //Esto me muestra todo lo que es en js el objeto articulosSlt
        // console.dir(articulosSlt);

        //Esto me muestra el value del objeto que está seleccionado
        // console.log(articulosSlt.value);


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