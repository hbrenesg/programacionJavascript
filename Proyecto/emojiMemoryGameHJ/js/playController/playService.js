export class PlayService {
    constructor(difficulty, callback) {
        this.callback = callback;
        this.url = 'https://us-central1-cenfoprojectsbackend.cloudfunctions.net/app/cards/' + difficulty + '/type/food';
        this.getData();
    }

    getData() {
        var request = new XMLHttpRequest();
        request.open('GET', this.url);
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

    sendScore(clicks, time) {

    }
}