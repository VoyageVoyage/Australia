//Initialisation de la carte, centrage sur l'Australie
var map = L.map('mapid').setView([-38.746,148.228], 6);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
//Affichage du tracé GPX d'exemple grâce à leaflet-omnivore
omnivore.gpx('trajet.gpx').addTo(map);
//Ajout d'un repère et d'une popup qui s'ouvre toute seule
var repere1 = L.marker([-38.746,148.228]).addTo(map)

//Liste des repères
var reperes = [
  {x:-38.746, y:148.228},
  {x:-38.946, y:148.228},
  {x:-39.146, y:148.428}
]

//Code AngularJS
angular.module('Australie', [])
  .controller('PhotosController', ['$scope',function($scope) {
    var diapo = this;
    //Initialement, la diapo est fermée
    diapo.isOpen = false;
    //Initialisation à 0 de l'indice de la photo lue
    diapo.selectedPic=0;
    //Initialisation de la liste des photos, par ordre d'apparition
    // /!\ La liste doit être triée par numéro de repère croissant
    diapo.photos = [
      {src:"IMG_0001.jpg", legende:"Blablabla 1", r:0},
      {src:"IMG_0002.jpg", legende:"Blablabla 2", r:1},
      {src:"IMG_0003.jpg", legende:"Blablabla 3", r:1},
      {src:"IMG_0004.jpg", legende:"Blablabla 4", r:1},
      {src:"IMG_0005.jpg", legende:"Blablabla 5", r:2},
      {src:"IMG_0006.jpg", legende:"Blablabla 6", r:2},
      {src:"IMG_0007.jpg", legende:"Blablabla 7", r:2},
      {src:"IMG_0008.jpg", legende:"Blablabla 8", r:2},
      {src:"IMG_0009.jpg", legende:"Blablabla 9", r:2}
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
    //Permet d'ouvrir la diapo associée au repère n°i
    diapo.open=function(i){
      diapo.isOpen = true;
      diapo.photosLength = diapo.photos.length;
      //On fait défiler les photos et on s'arrête dès qu'on trouve la première qui correspond au repère n°i
      var k=0;
      while(k<diapo.photosLength){
        if(diapo.photos[k].r==i){
          //Dès qu'on trouve la première photo, on la choisi pour devenir la photo courante
          diapo.selectedPic=k;
          break;
        }
        k++;
      }
    }
    //Permet de fermer la diapo
    diapo.close=function(){
      diapo.isOpen = false;
    }
    //Initialisation des repères
    reperes.forEach(function(r,i) {
      //On ajoute le repère à la carte
      r.repere=L.marker([r.x,r.y]).addTo(map);
      //On y associe les évènements nécessaires pour l'ouverture de la diapo
      r.repere.on('click', function(e) {
        diapo.open(i);
        $scope.$apply();
      });
    });
}]);
