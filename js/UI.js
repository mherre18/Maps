class UI {
    constructor() {

        this.api = new API();

        //markers = layergroup
        this.markers = new L.LayerGroup();

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

               //console.log(data);
               const result = data.answerJson;
   
               this.showPins(result);
            })
    }

    showPins(data) {

       //console.log(data);
        // clean markers
        //this.markers.clearLayers();
        
        data.forEach(data => {
        const { latitud_y } = data;

        console.log(latitud_y);

         //latitud_y.compacta = function(){
           //  for(var i = 0; i < this.length; i++){
             //    if(this[i] === undefined){
               //      this.splice(i , 1);
                // }
            // }
         //}
         // latitud_y.compacta();  
          //console.log(latitud_y);
        
        //  const marker = new L.marker([
            //  parseFloat(latitud_y.latitude),
            //  parseFloat(latitud_y.longitude)
         // ]);
         //  this.markers.addLayer(marker);
     })

       // this.markers.addTo(this.map);
  } 
}