export function createElement(type, parent, atributos = {}) {
    var element = document.createElement(type);
    parent.appendChild(element);

    for (const key in atributos) {
        element[key] = atributos[key];
    }
    return element;
}