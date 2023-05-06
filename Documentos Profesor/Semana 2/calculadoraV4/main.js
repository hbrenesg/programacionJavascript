window.onload = function () {

    var articulosSlt = document.getElementById('articulosSlt');
    var agregarArticuloBtn = document.getElementById('agregarArticuloBtn');
    var limpiarBtn = document.getElementById('limpiarBtn');
    var preciosContainer = document.getElementById('preciosContainer');
    var totalP = document.getElementById('totalP');

    const IMPUESTO = 13;
    var precioNeto = 0;
    var precioBruto = 0;
    var preciosDeArticulos = [];
    var nombresDeArticulos = [];
    var preciosDeArticulosSeleccionados = [];

    preciosDeArticulos.push(1250.25);
    nombresDeArticulos.push('CocaCola');
    preciosDeArticulos.push(500.5);
    nombresDeArticulos.push('Picaritas');
    preciosDeArticulos.push(1000.75);
    nombresDeArticulos.push('Chocoleta');
    preciosDeArticulos.push(1300);
    nombresDeArticulos.push('Fanta Kolita');

    nombresDeArticulos.push('Arroz', 'Frijoles', 'Mortadela');
    preciosDeArticulos.push(1800, 1900, 2500);

    agregarArticuloBtn.onclick = function () {
        agregarArticulo();
    }

    limpiarBtn.onclick = function () {
        limpiar();
    }

    //Llenar el articulosSlt
    function llenarArticulosSlt() {
        articulosSlt.innerHTML = '';
        nombresDeArticulos.forEach(function (nombreDeArticulo, index) {
            console.log(index);
            var articuloOpcion = document.createElement('option');
            articuloOpcion.innerHTML = `${nombresDeArticulos[index]}, ₡${preciosDeArticulos[index]}`;
            articuloOpcion.value = index;
            articulosSlt.appendChild(articuloOpcion);
        });
    }

    llenarArticulosSlt();

    //Funciones de logica
    function porCadaPrecioDeArticuloSeleccionado(precio) {
        precioBruto = precioBruto + precio;
    }

    function calcularPrecio() {

        preciosDeArticulosSeleccionados.forEach(porCadaPrecioDeArticuloSeleccionado);

        var impuestoACobrar = precioBruto * (IMPUESTO / 100);
        precioNeto = precioBruto + impuestoACobrar;
        totalP.innerHTML = `Total: ${precioNeto.toFixed(2)}`;
        precioBruto = 0;
    }

    //Eventos de Botones
    function agregarArticulo() {

        var indiceDelArticulo = Number(articulosSlt.value)
        var precio = preciosDeArticulos[indiceDelArticulo];

        preciosDeArticulosSeleccionados.push(precio);

        var precioP = document.createElement('p');
        precioP.innerHTML = `${nombresDeArticulos[indiceDelArticulo]}, ₡${preciosDeArticulos[indiceDelArticulo]}`;;
        preciosContainer.appendChild(precioP);

        calcularPrecio();
    }

    function limpiar() {
        precioBruto = 0;
        preciosContainer.innerHTML = '';
        preciosDeArticulosSeleccionados = [];
        totalP.innerHTML = 'Total: 0';
    }
}

