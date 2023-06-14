import { CardsController } from "./cardController/cardsController.js";
import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, MENU_STATE, PLAY_STATE, SCORES_STATE } from "./libs/constants.js";
import { MenuController } from "./menuController/menuController.js";

export class GameManager {
    constructor() {
        this.currentController = null;
        this.backBtn = document.getElementById('backBtn');
        this.contentContainer = document.getElementById('contentContainer');
        this.changeTo(MENU_STATE);

        this.backBtn.onclick = this.onBackBtn.bind(this);
    }

    changeTo(state) {
        if (this.currentController != null) {
            this.currentController.clean();
        }
        switch (state) {
            case MENU_STATE:
                this.currentController = new MenuController(this, this.contentContainer);
                break;

            case LOGIN_STATE:

                break;

            case PLAY_STATE:
                this.currentController = new CardsController(this, this.contentContainer);
                break;

            case SCORES_STATE:

                break;

            case DIFFICULTY_STATE:

                break;

            case CREDITS_STATE:

                break;

            default:
                break;
        }
    }

    onBackBtn() {
        this.changeTo(MENU_STATE);
    }
}