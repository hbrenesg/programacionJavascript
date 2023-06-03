export function div(parent, atributos = {}) {
    return createElement('div', parent, atributos);
}

export function h1(parent, atributos = {}) {
    return createElement('h1', parent, atributos);
}
export function input(parent, atributos = {}) {
    return createElement('input', parent, atributos);

}
export function form(parent, atributos = {}) {
    return createElement('form', parent, atributos);
}

export function table(parent, atributos = {}) {
    return createElement('table', parent, atributos);
}
export function th(parent, atributos = {}) {
    return createElement('th', parent, atributos);
}
export function tr(parent, atributos = {}) {
    return createElement('tr', parent, atributos);
}

export function td(parent, atributos = {}) {
    return createElement('td', parent, atributos);
}

export function button(parent, atributos = {}) {
    return createElement('button', parent, atributos);
}

export function select(parent, atributos = {}) {
    return createElement('select', parent, atributos);
}

export function option(parent, atributos = {}) {
    return createElement('option', parent, atributos);
}

export function p(parent, atributos = {}) {
    return createElement('p', parent, atributos);
}

function createElement(type, parent, atributos) {
    var element = document.createElement(type);
    parent.appendChild(element);


    for (const key in atributos) {
        element[key] = atributos[key]
    }
    return element;
}