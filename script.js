//Initialisation de la carte, centrage sur l'Australie
var map = L.map('mapid').setView([2.72,51.68], 3);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);

var kangaIcon = L.icon({
				iconUrl: 'kanga.png',
			//	shadowUrl: 'imagesJCS/marker-shadow.png',

				iconSize:     [40, 53], // size of the icon
			//	shadowSize:   [41, 41], // size of the shadow
				iconAnchor:   [20, 53], // point of the icon which will correspond to marker's location
			//	shadowAnchor: [11, 41],  // the same for the shadow
				popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
				});
var horseIcon = L.icon({
				iconUrl: 'horse.png',
			//	shadowUrl: 'imagesJCS/marker-shadow.png',

				iconSize:     [40, 53], // size of the icon
			//	shadowSize:   [41, 41], // size of the shadow
				iconAnchor:   [20, 53], // point of the icon which will correspond to marker's location
			//	shadowAnchor: [11, 41],  // the same for the shadow
				popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
				});
var boatIcon = L.icon({
				iconUrl: 'boat.png',
			//	shadowUrl: 'imagesJCS/marker-shadow.png',

				iconSize:     [40, 53], // size of the icon
			//	shadowSize:   [41, 41], // size of the shadow
				iconAnchor:   [20, 53], // point of the icon which will correspond to marker's location
			//	shadowAnchor: [11, 41],  // the same for the shadow
				popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
				});


    //Code AngularJS
    angular.module('Australie', [])
      .controller('PhotosController', ['$scope','$window',function($scope,$window) {
        var diapo = this;
        //Initialement, la diapo est fermée
        diapo.isOpen = false;
        //Initialisation à 0 de l'indice de la photo lue
        diapo.selectedPic=0;
        //Liste des repères
        diapo.reperes = [
          {x: 33.962, y:-23.997, t:"Convoyage Canaries - Açores",icon:{icon:boatIcon}},
          {x: 45.430, y: 4.414, t:"Arauquana",icon:{icon:horseIcon}},
          {x:-38.891, y: 149.062, t:"Australie",icon:{icon:kangaIcon}}
        ];
        //Initialisation de la liste des photos, par ordre d'apparition
        // /!\ La liste doit être triée par numéro de repère croissant
        diapo.photos = [
          {src:"IMG_0001.jpg",legende:"Novembre 2016"},
          {src:"IMG_9062.jpg",legende:"Novembre 2016"},
          {src:"IMG_9070.jpg",legende:"Novembre 2016"},
          {src:"IMG_9110.jpg",legende:"Novembre 2016"},
          {src:"IMG_9196.jpg",legende:"Décembre 2016"},
          {src:"IMG_9208.jpg",legende:"Décembre 2016"},
          {src:"IMG_9214.jpg",legende:"Décembre 2016"},
          {src:"IMG_9246.jpg",legende:"Décembre 2016"},
          {src:"IMG_9252.jpg",legende:"Décembre 2016"},
          {src:"IMG_9301.jpg",legende:"Janvier 2017"},
          {src:"IMG_9303.jpg",legende:"Janvier 2017"},
          {src:"IMG_9302.jpg",legende:"Janvier 2017"},
          {src:"IMG_9608.jpg",legende:"Janvier 2017"},
          {src:"IMG_9611.jpg",legende:"Janvier 2017"},
          {src:"IMG_9661.jpg",legende:"Janvier 2017"},
          {src:"IMG_9677.jpg",legende:"Janvier 2017"},
          {src:"IMG_9680.jpg",legende:"Janvier 2017"},
          {src:"IMG_9682.jpg",legende:"Janvier 2017"},
          {src:"IMG_9697.jpg",legende:"Janvier 2017"},
          {src:"IMG_9709.jpg",legende:"Janvier 2017"},
          {src:"IMG_9714.jpg",legende:"Janvier 2017"}
        ];
        //Permet de passer à la photo suivante
        diapo.nextPic=function(){
          if(diapo.selectedPic<diapo.photos.length-1){
            diapo.selectedPic++;
          }
        }
        //Permet de savoir si la photo a un successeur
        diapo.hasNext=function(){
          if(diapo.selectedPic<diapo.photos.length-1){
            return diapo.photos[diapo.selectedPic].r==diapo.photos[diapo.selectedPic+1].r;
          }
          return false;
        }
        //Permet de revenir à la photo précédente
        diapo.prevPic=function(){
          if(diapo.selectedPic>0){
            diapo.selectedPic--;
          }
        }
        //Permet de savoir si la photo a un prédécesseur
        diapo.hasPrev=function(){
          if(diapo.selectedPic>0){
            return diapo.photos[diapo.selectedPic].r==diapo.photos[diapo.selectedPic-1].r;
          }
          return false;
        }
        //Permet d'ouvrir la diapo associée au repère n°i
        diapo.open=function(i){
          if(i==2){
            $window.location.href="Australie/australie.html";
            return;
          }
          if(i==0){
            $window.location.href="https://webeleves.emse.fr/~clementine.decarlan/";
            return;
          }
          diapo.isOpen = true;
          diapo.photosLength = diapo.photos.length;
          //On fait défiler les photos et on s'arrête dès qu'on trouve la première qui correspond au repère n°i
          var k=0;
          while(k<diapo.photosLength){
            if(diapo.photos[k].r==(i+1)){
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
        diapo.reperes.forEach(function(r,i) {
          //On ajoute le repère à la carte
          r.repere=L.marker([r.x,r.y],r.icon).addTo(map);

          //On y associe les évènements nécessaires pour l'ouverture de la diapo
          r.repere.on('click', function(e) {
            diapo.open(i);
            $scope.$apply();
          });
        });
    }]);
