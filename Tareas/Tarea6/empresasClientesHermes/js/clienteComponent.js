import { div, p } from './html.js'
export class ClienteComponent {
    constructor(parent, cliente, cobrarCallback, updateCallback, eliminarCallback) {
        this.parent = parent;
        this.cliente = cliente;
        this.cobrarCallback = cobrarCallback;
        this.updateCallback = updateCallback;
        this.eliminarCallback = eliminarCallback;
        var clienteContainer = div(this.parent, { className: 'clienteContainer' });
        var datosContainer = div(clienteContainer, { className: 'datosContainer' });
        var buttonsContainer = div(clienteContainer, { className: 'buttonsContainer' });
        p(datosContainer, { className: 'datosContainer_p', innerHTML: `<b>Nombre:</b> ${this.cliente.nombre} ${this.cliente.apellido}` });
        p(datosContainer, { className: 'datosContainer_p', innerHTML: `<b>email:</b> ${this.cliente.email}` });
        p(datosContainer, { className: 'datosContainer_p', innerHTML: `<b>Mesualidad:</b> ${this.cliente.mensualidad}` });
        p(datosContainer, { className: 'datosContainer_p', innerHTML: `<b>Fondos:</b> ${this.cliente.fondos}` });
        var button = div(buttonsContainer, { className: 'buttonsContainer_button', innerHTML: 'Cobrar', onclick: this.onCobrarBtn.bind(this) });
        button.cliente = this.cliente;
        button = div(buttonsContainer, { className: 'buttonsContainer_button', innerHTML: 'Update', onclick: this.onUpdateBtn.bind(this) });
        button.cliente = this.cliente;
        button = div(buttonsContainer, { className: 'buttonsContainer_button', innerHTML: 'Eliminar', onclick: this.onEliminarBtn.bind(this) });
        button.cliente = this.cliente;
    }

    onCobrarBtn() {
        this.cobrarCallback(this.cliente);
    }

    onUpdateBtn() {
        this.updateCallback(this.cliente);
    }

    onEliminarBtn() {
        this.eliminarCallback(this.cliente);
    }
}