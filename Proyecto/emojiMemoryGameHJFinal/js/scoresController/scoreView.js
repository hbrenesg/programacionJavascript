import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class ScoreView extends View {
    constructor(parent, score) {
        super(parent);
        this.score = score;
        this.container.className = 'scoreView';
        createElement('p', this.container, { innerHTML: this.score.username, className: 'scoreView-title' })
        createElement('p', this.container, { innerHTML: `Time: ${this.score.time}`, className: 'scoreView-text' })
        createElement('p', this.container, { innerHTML: `Clicks: ${this.score.clicks}`, className: 'scoreView-text' })
        createElement('p', this.container, { innerHTML: `Score: ${this.score.score}`, className: 'scoreView-text' })
    }
}