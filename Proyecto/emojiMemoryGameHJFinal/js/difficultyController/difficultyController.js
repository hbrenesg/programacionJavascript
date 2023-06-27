import { Controller } from "../controller/controller.js";
import { DifficultyService } from "./difficultyService.js";
import { DifficultyView } from "./difficultyView.js";
import { Difficulty } from "./difficulty.js";

export class DifficultyController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new DifficultyView(parent, this.difficultySelected.bind(this));
        this.service = new DifficultyService();
        this.view.setSelectedDifficulty(this.gameManager.difficulty);
    }

    difficultySelected(difficulty) {
        this.gameManager.setDifficulty(difficulty);
    }
}