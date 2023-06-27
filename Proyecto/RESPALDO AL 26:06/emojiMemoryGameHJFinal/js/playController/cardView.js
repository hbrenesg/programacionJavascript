import { View } from "../view/view.js";
import { createElement } from "../libs/html.js";

export class CardView extends View {
    constructor(parent, card, callback) {
        super(parent);
        this.container.className = 'cardView';
        this.container.onclick = this.onClick.bind(this);
        this.card = card;
        this.callback = callback;
        this.icon = createElement('p', this.container, {});
        this.showHidden();
    }

    onClick() {
        this.callback(this);
    }

    showHidden() {
        this.icon.innerHTML = '';
        this.container.classList.add('cardView_hidded');
        this.container.classList.remove('cardView_showing');
        this.container.classList.remove('cardView_discovered');
    }

    showShowing() {
        this.icon.innerHTML = this.card.icon;
        this.container.classList.add('cardView_showing');
        this.container.classList.remove('cardView_hidded');
        this.container.classList.remove('cardView_discovered');
    }

    showDiscovered() {
        this.container.classList.add('cardView_discovered');
        this.container.classList.remove('cardView_showing');
        this.container.classList.remove('cardView_hidded');
    }
}