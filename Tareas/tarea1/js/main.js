window.onload = function () {
    //Obtener los controles desde HTML
    var idProducto = document.getElementById('idProducto');
    var agregarBtn = document.getElementById('agregarBtn');
    var facturarBtn = document.getElementById('facturarBtn')
    var precioProducto1 = document.getElementById('precioProducto1');
    var precioProducto2 = document.getElementById('precioProducto2');
    var precioProducto3 = document.getElementById('precioProducto3');
    var productosAgregadosH = document.getElementById('productosAgregadosH');
    var resultadoH = document.getElementById('resultadoH');

    //Declaración de variables
    const IMPUESTO = 13;
    var subTotal = 0;
    var precioNeto = 0;

    //Función de cuando se de onclick
    agregarBtn.onclick = function () {
        var idProductoTemp = parseFloat(idProducto.value);
        if (idProductoTemp > 0 && idProductoTemp < 4) {
            switch (idProductoTemp) {
                case 1:
                    subTotal += parseFloat(precioProducto1.innerText);
                    productosAgregadosH.innerHTML += 'Coca Cola 2 Litros ';
                    break;
                case 2:
                    subTotal += parseFloat(precioProducto2.innerText);
                    productosAgregadosH.innerHTML += 'Papi Ondas Tosty ';
                    break;
                case 3:
                    subTotal += parseFloat(precioProducto3.innerText);
                    productosAgregadosH.innerHTML += 'Bolsa de hielo ';
                    break;
            }
        }
        idProducto.value = '';
    }

    facturarBtn.onclick = function () {
        //Algoritmo 
        var impuestoACobrar = subTotal * (IMPUESTO / 100);
        precioNeto = subTotal + impuestoACobrar;

        //Imprimiendo el resultado en el H5
        resultadoH.innerHTML = `El precio final es: ${precioNeto}`;

    }
}