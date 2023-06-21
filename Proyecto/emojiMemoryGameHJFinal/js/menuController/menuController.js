import { Controller } from "../controller/controller.js";
import { MenuService } from "./menuService.js";
import { MenuView } from "./menuView.js";

export class MenuController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new MenuView(parent, this.changeTo.bind(this));
        this.service = new MenuService();
    }

    changeTo(state) {
        this.gameManager.changeTo(state);
    }
}