import { PlayController } from "./playController/playController.js";
import { CREDITS_STATE, DIFFICULTY_STATE, LOGIN_STATE, MENU_STATE, PLAY_STATE, SCORES_STATE } from "./libs/constants.js";
import { MenuController } from "./menuController/menuController.js";
import { CreditsController } from "./creditsController/creditsController.js";
import { DifficultyController } from "./difficultyController/difficultyController.js";
import { LoginController } from "./loginController/loginController.js";
import { ScoresController } from "./scoresController/scoresController.js";

export class GameManager {
    constructor() {
        this.difficulty = 2;
        this.currentController = null;
        this.backBtn = document.getElementById('backBtn');
        this.contentContainer = document.getElementById('contentContainer');
        this.loadUsername();
        this.changeTo(MENU_STATE);

        this.backBtn.onclick = this.onBackBtn.bind(this);
    }

    changeTo(state) {
        if (this.currentController != null) {
            this.currentController.clean();
        }
        this.currentController = null
        this.backBtn.classList.remove('hidden');
        switch (state) {
            case MENU_STATE:
                this.backBtn.classList.add('hidden');
                this.currentController = new MenuController(this, this.contentContainer);
                break;

            case LOGIN_STATE:
                this.currentController = new LoginController(this, this.contentContainer);
                break;

            case PLAY_STATE:
                if (this.isUserNameRegister()) {
                    this.currentController = new PlayController(this, this.contentContainer);
                } else {
                    alert('Please enter username before playing');
                    this.changeTo(LOGIN_STATE);
                }
                break;

            case SCORES_STATE:
                this.currentController = new ScoresController(this, this.contentContainer);
                break;

            case DIFFICULTY_STATE:
                this.currentController = new DifficultyController(this, this.contentContainer);
                break;

            case CREDITS_STATE:
                this.currentController = new CreditsController(this, this.contentContainer);
                break;

            default:
                break;
        }
    }

    onBackBtn() {
        this.changeTo(MENU_STATE);
    }

    registerUsername(username) {
        this.username = username;
        this.changeTo(MENU_STATE);
        localStorage.setItem('username', username);
    }

    loadUsername() {
        if (localStorage.getItem('username')) {
            this.username = localStorage.getItem('username');
        }
    }

    isUserNameRegister() {
        return localStorage.getItem('username');
    }
}