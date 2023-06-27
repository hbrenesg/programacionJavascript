import { THEME_FACES, THEME_FLAGS, THEME_FOOD } from "../libs/constants.js";
import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class ThemesView extends View {
    constructor(parent, callback) {
        super(parent);
        this.callback = callback;
        this.container.className = 'themes-controller';
        createElement('p', this.container, { className: 'game-title', innerHTML: 'THEMES' });
        this.facesBtn = createElement('div', this.container, { innerHTML: 'FACES', className: 'game-button', onclick: this.onFacesBtn.bind(this) });
        this.flagsBtn = createElement('div', this.container, { innerHTML: 'FLAGS', className: 'game-button', onclick: this.onFlagsBtn.bind(this) });
        this.foodBtn = createElement('div', this.container, { innerHTML: 'FOOD', className: 'game-button', onclick: this.onFoodsBtn.bind(this) });
    }

    onFacesBtn() {
        this.callback(THEME_FACES);
        this.setSelectedTheme(THEME_FACES);
    }

    onFlagsBtn() {
        this.callback(THEME_FLAGS);
        this.setSelectedTheme(THEME_FLAGS);
    }

    onFoodsBtn() {
        this.callback(THEME_FOOD);
        this.setSelectedTheme(THEME_FOOD);
    }

    setSelectedTheme(theme) {
        this.facesBtn.classList.remove('game-button-selected');
        this.flagsBtn.classList.remove('game-button-selected');
        this.foodBtn.classList.remove('game-button-selected');

        switch (theme) {
            case THEME_FACES:
                this.facesBtn.classList.toggle('game-button-selected');
                break;

            case THEME_FLAGS:
                this.flagsBtn.classList.toggle('game-button-selected');
                break;

            case THEME_FOOD:
                this.foodBtn.classList.toggle('game-button-selected');
                break;

            default:
                break;
        }
    }
}