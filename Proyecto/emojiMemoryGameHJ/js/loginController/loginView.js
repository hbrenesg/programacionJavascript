import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class LoginView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'login-controller';
        var title = createElement('p', this.container, { innerHTML: 'LOGIN' });
    }
}