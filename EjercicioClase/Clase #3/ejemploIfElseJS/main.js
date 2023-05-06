window.addEventListener('load', main, false);

function main() {

    var ingresar = (3 == 3);
    var num1 = 3;
    var num2 = '3';

    ingresar = (num1 == num2); //esto es true
    ingresar = (num1 === num2); //esto es false

    if (ingresar) {
        // console.log('Hacer trabajo 1');
    } else {
        // console.log('Hacer trabajo 2');
    }


    function imprimirEnConsola() {
        console.log('HOLA');
    }

    function imprimirConParametro(mensaje) {
        console.log(mensaje);
    }

    // imprimirEnConsola();
    // imprimirConParametro('HOLA MUNDO!');


    function imprimirConParametroCambiario(mensaje = 'NO HAY MENSAJE') {
        console.log(mensaje);
    }

    // imprimirConParametroCambiario();
    // imprimirConParametroCambiario('SI HAY MENSAJE');

    var total = 0;
    //console.log(total);
    //Nan = Non as number
    function sumarDosNumeros(num1 = 0, num2 = 0) {
        var total = num1 + num2;
        //console.log(total);
        total = 20;
    }

    sumarDosNumeros(4);
    // sumarDosNumeros(30, 40);
    // sumarDosNumeros(30, '40');
    //console.log(total);


    var num1 = 30;
    var num2 = 40;
    ß
}