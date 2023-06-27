import { Score } from "./score.js";

export class ScoresService {
    constructor(callback) {
        this.callback = callback;
        this.getScores();
    }

    // getScores() {
    //     var url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores';
    //     var request = new XMLHttpRequest();
    //     request.open('GET', url);
    //     request.onload = () => {
    //         if (request.readyState === 4 && request.status === 200) {
    //             var responseText = request.responseText;
    //             var data = JSON.parse(responseText);
    //             var scores = [];
    //             data.forEach(scoreData => {
    //                 var score = new Score(scoreData.clicks, scoreData.score, scoreData.time, scoreData.username);
    //                 scores.push(score);
    //             });
    //             this.callback(scores);
    //         }
    //     }
    //     request.send();
    // }

    getScores() {
        var url = 'https://emojimemorygame-fa133-default-rtdb.firebaseio.com/data/scores.json';
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                var responseText = request.responseText;
                var data = JSON.parse(responseText);
                var scores = [];
                for (const key in data) {
                    const scoreData = data[key];
                    var score = new Score(scoreData.clicks, scoreData.score, scoreData.time, scoreData.username);
                    scores.push(score);
                }
                this.callback(scores);
            }
        }
        request.send();
    }

}