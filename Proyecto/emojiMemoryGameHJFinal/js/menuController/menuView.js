import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, PLAY_STATE, SCORES_STATE } from "../libs/constants.js";
import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class MenuView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'menu-controller';
        var title = createElement('p', this.container, { className: 'game-title', className: 'game-title', innerHTML: 'MENU' });
        this.loginBtn = createElement('div', this.container, { innerHTML: 'LOGIN', className: 'game-button', onclick: this.onLoginBtn.bind(this) });
        this.playBtn = createElement('div', this.container, { innerHTML: 'PLAY', className: 'game-button', onclick: this.onPlayBtn.bind(this) });
        this.scoresBtn = createElement('div', this.container, { innerHTML: 'SCORES', className: 'game-button', onclick: this.onScoresBtn.bind(this) });
        this.difficultyBtn = createElement('div', this.container, { innerHTML: 'DIFFICULTY', className: 'game-button', onclick: this.onDifficultyBtn.bind(this) });
        this.creditsBtn = createElement('div', this.container, { innerHTML: 'CREDITS', className: 'game-button', onclick: this.onCreditsBtn.bind(this) });
    }

    onLoginBtn() {
        this.callback(LOGIN_STATE);
    }

    onPlayBtn() {
        this.callback(PLAY_STATE);
    }

    onScoresBtn() {
        this.callback(SCORES_STATE);
    }

    onDifficultyBtn() {
        this.callback(DIFFICULTY_STATE);
    }

    onCreditsBtn() {
        this.callback(CREDITS_STATE);
    }
}