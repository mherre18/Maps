class UI {
    constructor() {

        this.api = new API();

        this.map = this.startMap();
    }


startMap() {
    const map = L.map('map').setView([4.5709, -74.2973], 6);

    const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

        return map;
    }

    showPlaces() {
        this.api.getData()
            .then(data => {

               // console.log(data);
                const result = data.answerJson.data;

                this.showPins(result);
            })
    }

    showPins(data) {
        console.log(data);
    }
}