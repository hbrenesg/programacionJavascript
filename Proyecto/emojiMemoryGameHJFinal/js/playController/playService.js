export class PlayService {
    constructor(difficulty, theme, callback) {
        this.callback = callback;
        this.difficulty = difficulty;
        this.theme = theme;
        this.getData();
    }

    getData() {
        var url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/' + this.difficulty + '/type/' + this.theme;
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                //console.dir(request);
                //console.dir(request.responseText);
                var responseText = request.responseText;
                var data = JSON.parse(responseText);
                //console.log(data.cards);
                this.callback(data.cards);
            }
        }
        request.send();
    }

    sendScore(clicks, time, username) {
        var url = 'https://emojimemorygame-fa133-default-rtdb.firebaseio.com/data/scores.json';
        var score = { 'clicks': clicks, 'score': (clicks + time), 'time': time, 'username': username };
        var request = new XMLHttpRequest();
        request.open('POST', url);
        request.send(JSON.stringify(score));
    }
}