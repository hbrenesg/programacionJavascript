export class Controller {
    constructor(gameManager) {
        this.gameManager = gameManager;
        this.view = null;
        this.service = null;
    }

    clean() {
        this.view.clean();
    }
}