window.onload = function () {
    //Esto es crear un nuevo arreglo
    var precios = [];
    console.log(precios);

    var precioInput = document.getElementById('precioInput');
    var agregarBtn = document.getElementById('agregarBtn');
    //var calcularBtn = document.getElementById('calcularBtn');
    var limpiarBtn = document.getElementById('limpiarBtn');
    var precioBruto = 0;
    var precioNeto = 0;
    var preciosContainer = document.getElementById('preciosContainer');
    var resultadoP = document.getElementById('resultadoP');

    //Función de cuando se de onclick
    agregarBtn.onclick = function () {
        agregarPrecio();
    }

    // calcularBtn.onclick = function () {
    //     calcularPrecio();
    // }

    limpiarBtn.onclick = function () {
        limpiar();
    }

    function agregarPrecio() {
        var precio = Number(precioInput.value);
        precios.push(precio);
        precioInput.value = '';
        //console.log(precios);

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
        resultadoP.innerHTML = `El precio final es: ${precioNeto}`;
        precioBruto = 0;
    }

    function limpiar() {
        preciosContainer.innerHTML = '';
        precios = [];
        resultadoP.innerHTML = '';
        precioBruto = 0;
    }

}