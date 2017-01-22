//Initialisation de la carte, centrage sur l'Australie
var map = L.map('mapid').setView([-38.746,148.228], 6);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
//Affichage du tracé GPX d'exemple grâce à leaflet-omnivore
omnivore.gpx('trajet.gpx').addTo(map);
//Ajout d'un repère et d'une popup qui s'ouvre toute seule
var repere1 = L.marker([-38.746,148.228]).addTo(map)


//Code AngularJS
angular.module('Australie', [])
  .controller('PhotosController', ['$scope',function($scope) {
    var diapo = this;
    //Initialement, la diapo est fermée
    diapo.isOpen = true;
    //Initialisation à 0 de l'indice de la photo lue
    diapo.selectedPic=0;
    //Initialisation de la liste des photos
    diapo.photos = [
      {src:"IMG_0001.jpg", legende:"Blablabla", jour:1},
      {src:"IMG_0002.jpg", legende:"Blablabla", jour:1},
      {src:"IMG_0003.jpg", legende:"Blablabla", jour:2}
    ];
    //Permet de passer à la photo suivante
    diapo.nextPic=function(){
      if(diapo.selectedPic<diapo.photos.length-1){
        diapo.selectedPic++;
      }
    }
    //Permet de revenir à la photo précédente
    diapo.prevPic=function(){
      if(diapo.selectedPic>0){
        diapo.selectedPic--;
      }
    }
    //Permet d'ouvrir la diapo
    diapo.open=function(){
      diapo.isOpen = true;
    }
    //Permet de fermer la diapo
    diapo.close=function(){
      diapo.isOpen = false;
    }
    //Gestion des clicks sur les repères
    repere1.on('click', function(e) {
      //Code à executer lors du clic sur le repère 1 :
      diapo.open();
      $scope.$apply();
    });
}]);
