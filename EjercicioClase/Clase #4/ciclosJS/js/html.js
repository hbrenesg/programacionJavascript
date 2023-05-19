export function div(parent, atributos = {}) {
    var div = document.createElement('div');
    parent.appendChild(div);

    for (const key in atributos) {
        div[key] = atributos[key];
    }
}

export function input(parent, atributos = {}) {
    var input = document.createElement('input');
    parent.appendChild(input);

    for (const key in atributos) {
        input[key] = atributos[key];
    }
}

export function createElement(type, parent, atributos) {
    var element = document.createElement(type);
    parent.appendChild(element);

    for (const key in atributos) {
        element[key] = atributos[key];
    }
    return element;
}