import { Controller } from "../controller/controller.js";
import { ScoresService } from "./scoresService.js";
import { ScoresView } from "./scoresView.js";
import { Score } from "./score.js";

export class ScoresController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new ScoresView(parent);
        this.service = new ScoresService();
        this.scores = []; // model
    }
}