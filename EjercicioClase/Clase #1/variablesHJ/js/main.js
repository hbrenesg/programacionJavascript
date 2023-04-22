window.onload = function () {
    //Declarando una variable y asignando
    var numero1 = 200;
    //Inicializando la variable con un dato
    var numero2 = 400;
    var total = numero1 + numero2;
    console.log(total);

    var nombre = 'Hermes';
    var apellido = 'Brenes';
    var nombreCompleto = nombre + ' ' + apellido;

    //Plantillas literales, para contatenar
    var nombreCompleto2 = `${nombre} ${apellido}`;

    console.log(nombreCompleto2);

}