import { Controller } from "../controller/controller.js";
import { ThemesView } from "./themesView.js";

export class ThemesController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ThemesView(parent, this.themeSelected.bind(this));
        this.view.setSelectedTheme(this.gameManager.theme);
    }

    themeSelected(theme) {
        this.gameManager.setTheme(theme);
    }

}