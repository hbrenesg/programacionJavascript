import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class LoginView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'login-controller';
        var title = createElement('p', this.container, { innerHTML: 'LOGIN' });
        var subTitle = createElement('p', this.container, { innerHTML: 'Enter Username to Play' });
        this.usernameInput = createElement('input', this.container, { className: 'game-input', placeholder: 'username' });
        var okButton = createElement('div', this.container, { className: 'game-button', innerHTML: 'OK', onclick: this.onOkButton.bind(this) });
    }

    onOkButton() {
        var username = this.usernameInput.value;
        if (username !== '') {
            this.callback(username);
        }
    }
}