import { createElement } from "../libs/html.js";
import { View } from "../view/view.js";

export class CreditsView extends View {
    constructor(parent) {
        super(parent);
        this.container.className = 'credits-controller';
        var title = createElement('p', this.container, { className: 'game-title', innerHTML: 'CREDITS' });
        var description = createElement('p', this.container, {
            className: 'credits-controller-description', innerHTML: 'Proyecto elaborado por: Hermes José Brenes González.' +
                '<br><br><br>UNIVERSIDAD CENFOTEC <br><br><br>Curso: Programación con Javascript. <br><br><br>Profesor: Esteban Padilla Sanchez'
        });
    }
}