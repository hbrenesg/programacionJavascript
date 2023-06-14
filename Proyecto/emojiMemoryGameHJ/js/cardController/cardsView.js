import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class CardsView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'cards-controller';
        var title = createElement('p', this.container, { innerHTML: 'CARDS' });
    }
}