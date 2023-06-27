import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";
import { CardView } from "./cardView.js";

export class PlayView extends View {
    constructor(parent, cardClickCallback, resetCallback) {
        super(parent);
        this.cardClickCallback = cardClickCallback;
        this.resetCallback = resetCallback;
        this.container.className = 'play-controller';
        this.titleContainer = createElement('div', this.container, { className: 'play-controller-tittleContainer' });
        this.hudContainer = createElement('div', this.container, { className: 'play-controller-hudContainer' });
        this.cardsContainer = createElement('div', this.container, { className: 'play-controller-cardsContainer' });

        var title = createElement('p', this.titleContainer, { className: 'game-title', innerHTML: 'Card Memory Game' });
        this.hubText = createElement('p', this.hudContainer, {});
        var resetBtn = createElement('div', this.hudContainer, { className: 'play-controller-reset-button', innerHTML: 'Reset', onclick: this.onResetBtn.bind(this) })
    }

    showCards(cards) {
        this.cardsContainer.innerHTML = '';
        cards.forEach(card => {
            var cardView = new CardView(this.cardsContainer, card, this.cardClickCallback);
        });
    }

    onResetBtn() {
        this.resetCallback();
    }

    updateHubText(clicks, time) {
        this.hubText.innerHTML = `Clicks: ${clicks} Time: ${time}`;
    }
}