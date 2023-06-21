import { createElement } from "../libs/html.js";

export class View {
    constructor(parent) {
        this.parent = parent;
        this.container = createElement('div', parent, {});
    }

    clean() {
        this.parent.removeChild(this.container);
    }
}