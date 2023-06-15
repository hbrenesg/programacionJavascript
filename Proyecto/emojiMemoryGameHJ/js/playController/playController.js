import { Controller } from "../controller/controller.js";
import { PlayView } from "./playView.js";
import { Card } from "./card.js";
import { PlayService } from "./playService.js";

export class PlayController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new PlayView(parent);
        this.service = new PlayService(this.gameManager.difficulty, this.showCards.bind(this));
        this.cards = []; // model
    }

    showCards(cards) {
        this.view.showCards(cards);
    }
}