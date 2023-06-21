import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class ScoresView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'scores-controller';
        this.titleContainer = createElement('div', this.container, { className: 'score-controller-tittleContainer' });
        this.scoresContainer = createElement('div', this.container, { className: 'score-controller-cardsContainer' });

        var title = createElement('p', this.titleContainer, { innerHTML: 'SCORES' });
    }

    showScores(scores) {
        this.scoresContainer.innerHTML = '';
        scores.forEach(score => {
            createElement('p', this.scoresContainer, { innerHTML: score.username + ': Clicks: ' + score.clicks + ', Time: ' + score.time + ', Score: ' + score.score });
        });
    }
}