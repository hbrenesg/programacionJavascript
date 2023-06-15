import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class PlayView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'play-controller';
        var title = createElement('p', this.container, { innerHTML: 'CARDS' });
    }

    showCards(cards) {
        console.log(cards);
        cards.forEach(card => {
            createElement('p', this.container, { innerHTML: card.icon, className: 'play-controller-card' });
        });
    }
}