//Initialisation de la carte, centrage sur l'Australie
var map = L.map('mapid').setView([-38.746,148.228], 6);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
//Affichage du tracé GPX d'exemple grâce à leaflet-omnivore
omnivore.gpx('trajet.gpx').addTo(map);
//Ajout d'un repère et d'une popup qui s'ouvre toute seule
var repere1 = L.marker([-38.746,148.228]).addTo(map)
  .bindPopup('<h1>Titre de la popup</h1> Suite de la popup')
  .openPopup();
//Association d'un évènement au repère
repere1.on('click', function(e) {
  //Code à executer lors du clic sur le repère
  alert("Repère cliqué");
});
