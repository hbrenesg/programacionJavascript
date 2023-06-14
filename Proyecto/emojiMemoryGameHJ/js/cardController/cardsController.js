import { Controller } from "../controller/controller.js";
import { CardsService } from "./cardsService.js";
import { CardsView } from "./cardsView.js";
import { Card } from "./card.js";

export class CardsController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new CardsView(parent);
        this.service = new CardsService();
        this.cards = []; // model
    }
}