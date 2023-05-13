window.addEventListener('load', main);

function main() {

    var numero1 = document.getElementById('numero1');
    var numero2 = document.getElementById('numero2');
    var clearBtn = document.getElementById('clearBtn');
    var sumarBtn = document.getElementById('sumarBtn');
    var restarBtn = document.getElementById('restarBtn');
    var multiplicarBtn = document.getElementById('multiplicarBtn');
    var dividirBtn = document.getElementById('dividirBtn');
    var resultadoP = document.getElementById('resultadoP');
    var resultado = 0;

    clearBtn.onclick = function () {
        limpiarCampos();
    }
    sumarBtn.onclick = function () {
        if (validarCamposVacios(numero1.value, numero2.value)) {
            resultado = sumarDosNumeros(Number(numero1.value), Number(numero2.value));
            resultadoP.innerText = `Resultado de la suma es: ${resultado}`;
        }
    }
    restarBtn.onclick = function () {
        if (validarCamposVacios(numero1.value, numero2.value)) {
            resultado = restarDosNumeros(numero1.value, numero2.value);
            resultadoP.innerText = `Resultado de la resta es: ${resultado}`;
        }
    }
    multiplicarBtn.onclick = function () {
        if (validarCamposVacios(numero1.value, numero2.value)) {
            resultado = multiplicarDosNumeros(numero1.value, numero2.value);
            resultadoP.innerText = `Resultado de la multiplicación es: ${resultado}`;
        }
    }
    dividirBtn.onclick = function () {
        if (validarCamposVacios(numero1.value, numero2.value)) {
            resultado = dividirDosNumero(numero1.value, numero2.value);
            resultadoP.innerText = `Resultado de la división es: ${resultado}`;
        }
    }


    function validarCamposVacios(numero1, numero2) {
        if (numero1 != '' && numero2 != '') {
            return true;
        }
        alert('No se permite campos vacios');
        return false;
    }

    function sumarDosNumeros(numero1, numero2) {
        return numero1 + numero2;
    }

    function restarDosNumeros(numero1, numero2) {
        return numero1 - numero2;
    }

    function multiplicarDosNumeros(numero1, numero2) {
        return numero1 * numero2;
    }

    function dividirDosNumero(numero1, numero2) {
        return numero1 / numero2;
    }

    function limpiarCampos() {
        numero1.value = '';
        numero2.value = '';
        resultadoP.innerText = '';
    }
}