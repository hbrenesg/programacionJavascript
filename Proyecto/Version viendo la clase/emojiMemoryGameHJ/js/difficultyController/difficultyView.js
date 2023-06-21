import { DIFFICULTY_HIGH, DIFFICULTY_LOW, DIFFICULTY_MED } from "../libs/constants.js";
import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class DifficultyView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'difficulty-controller';
        var title = createElement('p', this.container, { innerHTML: 'DIFFICULTY' });
        this.lowBtn = createElement('div', this.container, { innerHTML: 'LOW', className: 'game-button', onclick: this.onLowBtn.bind(this) });
        this.medBtn = createElement('div', this.container, { innerHTML: 'MEDIUM', className: 'game-button', onclick: this.onMedBtn.bind(this) });
        this.highBtn = createElement('div', this.container, { innerHTML: 'HIGH', className: 'game-button', onclick: this.onHighBtn.bind(this) });
    }

    onLowBtn() {
        this.callback(DIFFICULTY_LOW);
    }

    onMedBtn() {
        this.callback(DIFFICULTY_MED);
    }

    onHighBtn() {
        this.callback(DIFFICULTY_HIGH);
    }
}