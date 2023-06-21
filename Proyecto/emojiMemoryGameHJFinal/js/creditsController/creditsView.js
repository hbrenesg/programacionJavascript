import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class CreditsView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'credits-controller';
        var title = createElement('p', this.container, { className: 'game-title', innerHTML: 'CREDITS' });
    }
}