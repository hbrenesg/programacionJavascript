import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";
import { ScoreView } from "./scoreView.js";

export class ScoresView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'scores-controller';
        this.titleContainer = createElement('div', this.container, { className: 'scores-controller-tittleContainer' });
        this.scoresContainer = createElement('div', this.container, { className: 'scores-controller-scoresContainer' });

        var title = createElement('p', this.titleContainer, { className: 'game-title', innerHTML: 'SCORES' });
    }

    showScores(scores) {
        this.scoresContainer.innerHTML = '';
        scores.forEach(score => {
            var scoreView = new ScoreView(this.scoresContainer, score);
        });
    }
}