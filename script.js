/***  little hack starts here
L.Map = L.Map.extend({
    openPopup: function(popup) {
        //        this.closePopup();  // just comment this
        this._popup = popup;

        return this.addLayer(popup).fire('popupopen', {
            popup: this._popup
        });
    }
});  end of hack ***/

//Initialisation de la carte, centrage sur l'Australie
var map = L.map('mapid0').setView([2.72,51.68], 3);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);

//Repères
var markerConv = L.marker([33.962, -23.997]).addTo(map)
    .bindPopup('<a href="Convoyage/convoyage.html">Convoyage Canaries - Açores</a>')
    .openPopup();
var markerArau = L.marker([45.430, 4.414]).addTo(map)
    .bindPopup('<a href="Arau/arau.html">Arauquana</a>')
    .openPopup();
var markerConv = L.marker([-38.891, 149.062]).addTo(map)
    .bindPopup('<a href="Australie/australie.html">Australie</a>')
    .openPopup();
