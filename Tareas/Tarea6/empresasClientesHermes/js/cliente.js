export class Cliente {
    constructor(nombre = '', apellido = '', email = '', fondos = 0, mensualidad = 0) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.fondos = fondos;
        this.mensualidad = mensualidad;
    }

    cobrarMensualidad() {
        if (this.validarCantidadDeFondos()) {
            this.fondos -= this.mensualidad;
        }
    }

    validarCantidadDeFondos() {
        return this.fondos >= this.mensualidad
    }

    validarEmail(email) {
        return this.email === email;
    }
}