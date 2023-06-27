import { Controller } from "../controller/controller.js";
import { PlayView } from "./playView.js";
import { Card } from "./card.js";
import { PlayService } from "./playService.js";

export class PlayController extends Controller {
    constructor(gameManager, parent) {
        super(gameManager);
        this.view = new PlayView(parent, this.onCardSelected.bind(this), this.reset.bind(this));
        this.service = new PlayService(this.gameManager.difficulty, this.gameManager.theme, this.showCards.bind(this));
        this.cards = []; // model
        this.cardView1 = null;
        this.cardView2 = null;
        this.time = 0;
        this.clicks = 0;
        this.cardsSelectedTimer = null;
        this.gameTimer = null;
        this.isGameComplete = false;
    }

    onCardSelected(cardView) {
        if (cardView.card.isDiscovered) {
            return;
        }

        if (this.cardView1 === null) {
            this.cardView1 = cardView;
            this.cardView1.showShowing();
            this.updateClicks();
        } else if (this.cardView2 === null && this.cardView1 !== cardView) {
            this.cardView2 = cardView;
            this.cardView2.showShowing();
            this.cardsSelectedTimer = window.setTimeout(() => {
                this.clearCardsSelected();
            }, 1000);
            this.updateClicks();
        }

        if (this.cardView1 !== null && this.cardView2 !== null) {
            if (this.cardView1.card.id === this.cardView2.card.id) {
                this.cardView1.card.isDiscovered = true;
                this.cardView2.card.isDiscovered = true;
                this.cardView1.showDiscovered();
                this.cardView2.showDiscovered();
                this.clearCardsSelected();

                this.checkGameComplete();
                if (this.isGameComplete) {
                    this.stopTime();
                    if (confirm('Do you want to keep the score?')) {
                        this.service.sendScore(this.clicks, this.time, this.gameManager.username);
                    }
                }
            }
        }
    }

    clearCardsSelected() {
        if (!this.cardView1.card.isDiscovered) {
            this.cardView1.showHidden();
            this.cardView2.showHidden();
        }
        this.cardView1 = null;
        this.cardView2 = null;
        window.clearTimeout(this.cardsSelectedTimer);
        this.cardsSelectedTimer = null;
    }

    showCards(cards) {
        this.cards = cards;
        this.view.showCards(cards);
        this.view.updateHubText(0, 0);
        this.gameTimer = window.setInterval(() => {
            this.updateTime();
        }, 1000)
    }

    updateClicks() {
        this.clicks += 1;
        this.view.updateHubText(this.clicks, this.time);
    }

    updateTime() {
        this.time += 1;
        this.view.updateHubText(this.clicks, this.time);
    }

    stopTime() {
        window.clearTimeout(this.gameTimer);
        this.gameTimer = null;
    }

    checkGameComplete() {
        this.isGameComplete = true;
        this.cards.forEach(card => {
            if (card.isDiscovered === false) {
                this.isGameComplete = false;
            }
        });
    }

    reset() {
        this.stopTime();
        this.clicks = 0;
        this.time = 0;
        this.view.updateHubText(this.clicks, this.time);
        this.service.getData();
    }
}