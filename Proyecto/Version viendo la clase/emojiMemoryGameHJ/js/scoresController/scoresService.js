export class ScoresService {
    constructor(callback) {
        this.callback = callback;
        this.getScores();
    }

    getScores() {
        var url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/scores';
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.readyState === 4 && request.status === 200) {
                var responseText = request.responseText;
                var data = JSON.parse(responseText);
                this.callback(data);
            }
        }
        request.send();
    }
}