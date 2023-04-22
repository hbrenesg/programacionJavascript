window.onload = function () {
    //Obtener los controles desde HTML
    var cantidadPersonas = document.getElementById('cantidadPersonas');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoCantidadTela = document.getElementById('resultadoCantidadTela');
    var resultadoPrecio = document.getElementById('resultadoPrecio');

    //Declaración de variables
    const PRECIOXMETRO = 3550;
    const METROSXPERSONA = 3;
    var metrosPorComprar = 0;
    var costoTotal = 0;

    //Función de cuando se de onclick
    calcularBtn.onclick = function () {
        var cantidadPersonasTemp = parseFloat(cantidadPersonas.value);
        metrosPorComprar = cantidadPersonasTemp * METROSXPERSONA;
        costoTotal = metrosPorComprar * PRECIOXMETRO;

        //Imprimiendo el resultado en el H5
        resultadoCantidadTela.innerHTML = `La cantidad de tela a comprar es de: ${metrosPorComprar} metros`;
        resultadoPrecio.innerHTML = `El costo total de la tela es: ${costoTotal}`;

        cantidadPersonas.value = '';
    }
}