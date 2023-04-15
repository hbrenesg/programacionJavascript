window.onload = function () {
    //Obtener los controles desde HTML
    var precioIn = document.getElementById('precioIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoH = document.getElementById('resultadoH');

    //Declaración de variables
    const IMPUESTO = 13;
    var precioNeto = 0;
    var precioBruto = 0;

    //Imprimi el html del control
    console.log(calcularBtn);
    //Para ver las propiedades del boton
    console.dir(calcularBtn);

    //Inicializción de variables
    precioBruto = 100;

    //Algoritmo 
    var impuestoACobrar = precioBruto * (IMPUESTO / 100);
    precioNeto = precioBruto + impuestoACobrar;

    //Imprimiendo el resultado
    //console.log(precioNeto);

    //Función de cuando se de onclick
    calcularBtn.onclick = function () {
        precioBruto = Number(precioIn.value);

        //Algoritmo 
        var impuestoACobrar = precioBruto * (IMPUESTO / 100);
        precioNeto = precioBruto + impuestoACobrar;

        //Imprimiendo el resultado en el H5
        resultadoH.innerHTML = `El precio final es: ${precioNeto}`;
        window.alert(`El precio final es: ${precioNeto}`);
    }
}