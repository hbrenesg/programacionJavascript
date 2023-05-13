export function div(parent, atributos = {}) {
    var div = document.createElement('div');
    parent.appendChild(div);

    for (const key in atributos) {
        div[key] = atributos[key];
    }
}