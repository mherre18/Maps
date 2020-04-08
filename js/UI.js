class UI {
    constructor() {

        this.api = new API();

        //markers = layergroup
        this.markers = new L.layerGroup();

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
       // L.marker([6.2237119999999999, -75.597740999999999]).addTo(this.map);
       //console.log(data);
        // clean markers
        this.markers.clearLayers();
        
        data.forEach(data => {
        const { latitud_y, direcci_n, nombre_del_sitio } = data;

            if(latitud_y === undefined || latitud_y === null) {
               console.log('No adress');
            } else {
                
                console.log(latitud_y);

                const popUpOptions = L.popup()
                .setContent(`<p>Calle: ${direcci_n}</p>
                             <p><b>Nombre:</b> ${nombre_del_sitio}</p>   
                `);

                const marker = new L.marker([latitud_y.latitude, latitud_y.longitude]).addTo(this.map).bindPopup(popUpOptions);
                  //  parseFloat(latitud_y.latitude),
                   // parseFloat(latitud_y.longitude)
               // ]);

               // this.markers.addLayer(marker);
               // console.log(this.markers);
            }
        

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

      //this.markers.addTo(this.map);
      
  } 
}