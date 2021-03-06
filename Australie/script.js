//Initialisation de la carte, centrage sur l'Australie
var map = L.map('mapid').setView([-38.746,148.228], 6);
//Téléchargement du fond de carte chez OSM
var osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
//Affichage du tracé GPX grâce à leaflet-omnivore
omnivore.gpx('Trajets/HobartPortArthur.gpx').addTo(map);
omnivore.gpx('Trajets/HobartBruny.gpx').addTo(map);
omnivore.gpx('Trajets/HobartWellington.gpx').addTo(map);
omnivore.gpx('Trajets/HobartHobartIdaBay.gpx').addTo(map);
omnivore.gpx('Trajets/IdayBaySouth.gpx').addTo(map);
omnivore.gpx('Trajets/SouthTarraleah.gpx').addTo(map);
omnivore.gpx('Trajets/TarraleahLake.gpx').addTo(map);
omnivore.gpx('Trajets/LakeRosebery.gpx').addTo(map);
omnivore.gpx('Trajets/RoseberyCradle.gpx').addTo(map);
omnivore.gpx('Trajets/CradleGowrie.gpx').addTo(map);
omnivore.gpx('Trajets/GowrieHobart.gpx').addTo(map);


//Code AngularJS
angular.module('Australie', [])
  .controller('PhotosController', ['$scope',function($scope) {
    var diapo = this;
    //Initialement, la diapo est fermée
    diapo.isOpen = false;
    //Initialisation à 0 de l'indice de la photo lue
    diapo.selectedPic=0;
    //Liste des repères
    diapo.reperes = [
      {x:-33.870, y:151.190, t:"Sydney"},
      {x:-42.883, y:147.332, t:"Hobart"},
      {x:-43.147, y:147.850, t:"Journée à Port-Arthur"},
      {x:-43.352, y:147.370, t:"Bruny Island, rando à Fluted Cape"},
      {x:-42.900, y:147.225, t:"Ascension de Mount Wellington"},
      {x:-43.444, y:146.904, t:"Départ pour le Sud, Ida Bay et Mystery Creek Cave"},
      {x:-43.611, y:146.824, t:"Cockle Creek et South Coast Track"},
      //{x:-43.462, y:146.849}, // 6 Mystery Creek Cave
      {x:-42.301, y:146.450, t:"Tarraleah"},
      {x:-42.104, y:146.142, t:"Lake St Clair, rando jusqu'à Shadow Lake"},
      {x:-41.777, y:145.535, t:"Nuit à Rosebery, balade aux chutes de Montezuma"},
      {x:-41.650, y:145.962, t:"Cradle Mountain: petite balade"},
      {x:-41.464, y:146.223, t:"Nuit à Gowrie Park"},
      {x:-41.677, y:145.941, t:"Cradle Mountain: montée au sommet"},
      {x:-42.898, y:147.333, t:"Retour à Hobart, nuit sur le lézard"}
    ];
    //Initialisation de la liste des photos, par ordre d'apparition
    // /!\ La liste doit être triée par numéro de repère croissant
    diapo.photos = [
      {src:"IMG_0276.jpg", legende:"Tribal Warrior", r:1},
      {src:"IMG_0278.jpg", legende:"Blackwattle Bay Marine", r:1},
      {src:"IMG_0279.jpg", legende:"Anzac Bridge depuis la marina", r:1},
      {src:"IMG_0281.jpg", legende:"Un bulot qui travaile dur", r:1},
      {src:"IMG_0285.jpg", legende:"Vue depuis l'appart de Jojo", r:1},
      {src:"IMG_0286.jpg", legende:"De l'autre côté", r:1},
      {src:"IMG_0290.jpg", legende:"Sydney Fish Market", r:1},
      {src:"IMG_0291.jpg", legende:"Un hérisson qui travaille dur", r:1},
      {src:"IMG_0293.jpg", legende:"Marche au bord de l'eau", r:1},
      {src:"IMG_0296.jpg", legende:"Elizabeth Bay Road", r:1},
      {src:"IMG_0298.jpg", legende:"Jolies tuiles colorées", r:1},
      {src:"IMG_0299.jpg", legende:"Jolies tuiles colorées", r:1},
      {src:"IMG_0304.jpg", legende:"Sculpture lapin-chien (une à Sydey, une à Hobart!)", r:1},
      {src:"IMG_0305.jpg", legende:"Autre sculpture", r:1},
      {src:"IMG_0310.jpg", legende:"La City", r:1},
      {src:"IMG_0312.jpg", legende:"Sydney Opera", r:1},
      {src:"IMG_0314.jpg", legende:"Sydney Opera", r:1},
      {src:"IMG_0315.jpg", legende:"La City", r:1},
      {src:"IMG_0318.jpg", legende:"Vanneau soldat", r:1},
      {src:"IMG_0320.jpg", legende:"Vue depuis l'Opera", r:1},
      {src:"IMG_0322.jpg", legende:"Mon papa et ma maman !", r:1},
      {src:"IMG_0325.jpg", legende:"L'Opera", r:1},
      {src:"IMG_0326.jpg", legende:"Harbour Bridge", r:1},
      {src:"IMG_0335.jpg", legende:"L'Opera", r:1},
      {src:"IMG_0337.jpg", legende:"Circular Quay", r:1},
      {src:"IMG_0338.jpg", legende:"L'Opera", r:1},
      {src:"IMG_0340.jpg", legende:"Les docks", r:1},
      {src:"IMG_0343.jpg", legende:"Petites maisons toutes pareilles", r:1},
      {src:"IMG_0346.jpg", legende:"Sydney Tower", r:1},
      {src:"IMG_0352.jpg", legende:"Le centre ville", r:1},
      {src:"IMG_0354.jpg", legende:"Pyrmont Bridge, le pont préféré de papa !", r:1},
      {src:"IMG_0355.jpg", legende:"La maison de Jojo (non, ce n'est pas une blague !)", r:1},
      {src:"IMG_0359.jpg", legende:"La City vue de l'eau", r:1},
      {src:"IMG_0364.jpg", legende:"Harbour Bridge vu de l'eau", r:1},
      {src:"IMG_0368.jpg", legende:"Les voiles tempêtes au départ de la Sydney Hobart", r:1},
      {src:"IMG_0371.jpg", legende:"Harbour Bridge", r:1},
      {src:"IMG_0376.jpg", legende:"La City", r:1},
      {src:"IMG_0379.jpg", legende:"Harbour Bridge", r:1},
      {src:"IMG_0380.jpg", legende:"Voiles tempêtes", r:1},
      {src:"IMG_0393.jpg", legende:"Il y a du monde sur l'eau", r:1},
      {src:"IMG_0396.jpg", legende:"Holy Cow !", r:1},
      {src:"IMG_0398.jpg", legende:"Vue sur la City", r:1},
      {src:"IMG_0401.jpg", legende:"Bateaux au départ de la Sydney-Hobart", r:1},
      {src:"IMG_0403.jpg", legende:"Bateaux au départ de la Sydney-Hobart", r:1},
      {src:"IMG_0404.jpg", legende:"Les monstres au départ", r:1},
      {src:"IMG_0405.jpg", legende:"Les monstres au départ", r:1},
      {src:"IMG_0406.jpg", legende:"Il y a foule à regarder !", r:1},
      {src:"IMG_0413.jpg", legende:"Les monstres au départ", r:1},
      {src:"IMG_0414.jpg", legende:"Les plus petits bateaux derrière", r:1},
      {src:"IMG_0415.jpg", legende:"Les plus petits bateaux derrière", r:1},
      {src:"IMG_0418.jpg", legende:"Les plus petits bateaux derrière", r:1},
      {src:"IMG_0421.jpg", legende:"Direction la sortie de la baie", r:1},
      {src:"IMG_0428.jpg", legende:"Vue sur la City", r:1},
      {src:"IMG_0430.jpg", legende:"Vue sur la City", r:1},
      {src:"IMG_0431.jpg", legende:"On est mignons non ?", r:1},
      {src:"IMG_0432.jpg", legende:"Encore plus ?", r:1},
      {src:"IMG_0434.jpg", legende:"Vue sur la City (encore et toujours)", r:1},
      {src:"IMG_0435.jpg", legende:"De plus près...", r:1},
      {src:"IMG_0442.jpg", legende:"Encore plus près...", r:1},
      {src:"IMG_0440.jpg", legende:"Kayaks dans la baie de Sydney", r:1},
      {src:"IMG_0445.jpg", legende:"Découverte des casiers en bois", r:2},
      {src:"IMG_0446.jpg", legende:"Personnages forts sympathiques", r:2},
      {src:"IMG_0447.jpg", legende:"Personnages forts sympathiques", r:2},
      {src:"IMG_0449.jpg", legende:"Bateau de pêche à Hobart", r:2},
      {src:"IMG_0450.jpg", legende:"Hobart, front de mer", r:2},
      {src:"IMG_0453.jpg", legende:"Quelques bateaux de pêche, Mount Wellington en arrière-plan", r:2},
      {src:"IMG_0456.jpg", legende:"Sculptures trop mignonnes !", r:2},
      {src:"IMG_0460.jpg", legende:"Sculptures trop mignonnes !", r:2},
      {src:"IMG_0461.jpg", legende:"Sculptures trop mignonnes !", r:2},
      {src:"IMG_0462.jpg", legende:"Sortie du port", r:2},
      {src:"IMG_0466.jpg", legende:"Poney ?!", r:2},
      {src:"IMG_0468.jpg", legende:"Mount Wellington qui surplombe la ville", r:2},
      {src:"IMG_0470.jpg", legende:"Manger ?! Cela donnait très envie à maman, hand-made !", r:2},
      {src:"IMG_0473.jpg", legende:"Librairie - friperie", r:2},
      {src:"IMG_0475.jpg", legende:"Hopes and dreams", r:2},
      {src:"IMG_0481.jpg", legende:"C'est quoi ça ? On sait pas trop mais c'est mignon", r:2},
      {src:"IMG_0483.jpg", legende:"Trop classe le véto !", r:2},
      {src:"IMG_0484.jpg", legende:"Trop classe l'oiseau !", r:2},
      {src:"IMG_0486.jpg", legende:"Post Office", r:2},
      {src:"IMG_0579.jpg", legende:"Beau batiment à Hobart", r:2},
      {src:"IMG_0488.jpg", legende:"Cache théière...", r:2},
      {src:"IMG_0491.jpg", legende:"Tasman Bridge pour arriver sur Hobart", r:2},
      {src:"IMG_0497.jpg", legende:"Jolies fleurs colorées", r:2},
      {src:"IMG_0499.jpg", legende:"Lotus Pond ! ", r:2},
      {src:"IMG_0501.jpg", legende:"Vue sur Hobart", r:2},
      {src:"IMG_0580.jpg", legende:"Salamanca Market", r:2},
      {src:"IMG_0609.jpg", legende:"Winners !", r:2},
      {src:"IMG_0615.jpg", legende:"Le lézard, bien arrivé à Hobart", r:2},
      {src:"IMG_0616.jpg", legende:"I'm a lizard !", r:2},
      {src:"IMG_0619.jpg", legende:"Division winner !", r:2},
      {src:"IMG_0633.jpg", legende:"Division winner !", r:2},
      {src:"IMG_0639.jpg", legende:"2 beaux drapeaux", r:2},
      {src:"IMG_0641.jpg", legende:"Super Skippy, super skipper !", r:2},
      {src:"IMG_0642.jpg", legende:"Musiciens de rue", r:2},
      {src:"IMG_0502.jpg", legende:"Port Arthur", r:3},
      {src:"IMG_0504.jpg", legende:"Le ciel va nous tomber sur la tête !", r:3},
      {src:"IMG_0511.jpg", legende:"Port Arthur : le pénitencier", r:3},
      {src:"IMG_0514.jpg", legende:"Le ciel va nous tomber sur la tête !", r:3},
      {src:"IMG_0521.jpg", legende:"Le site historique depuis le ferry", r:3},
      {src:"IMG_0529.jpg", legende:"Le site historique depuis le ferry", r:3},
      {src:"IMG_0533.jpg", legende:"Port Arthur", r:3},
      {src:"IMG_0537.jpg", legende:"Vue sur la baie", r:3},
      {src:"IMG_0543.jpg", legende:"Il est tout flou ... (mais il était joli)", r:3},
      {src:"IMG_0549.jpg", legende:"Sur le Ferry pour Bruny Island (cette fois-ci le ciel va vraiment nous tomber sur la tête)", r:4},
      {src:"IMG_0555.jpg", legende:"Adventure Bay", r:4},
      {src:"IMG_0556.jpg", legende:"Adventure Bay", r:4},
      {src:"IMG_0558.jpg", legende:"Adventure Bay", r:4},
      {src:"IMG_0559.jpg", legende:"Adventure Bay", r:4},
      {src:"IMG_0566.jpg", legende:"Kangourous ! (mes premiers kangourous, et la seule photo...)", r:4},
      {src:"IMG_0567.jpg", legende:"Jolie vue", r:4},
      {src:"IMG_0570.jpg", legende:"Black Swans", r:4},
      {src:"IMG_0576.jpg", legende:"Jolies boites aux lettres", r:4},
      {src:"IMG_0645.jpg", legende:"Début de l'ascension de Mount Wellington", r:5},
      {src:"IMG_0647.jpg", legende:"C'est joli !", r:5},
      {src:"IMG_0650.jpg", legende:"Mais fatigant !", r:5},
      {src:"IMG_0651.jpg", legende:"Très fatigant !", r:5},
      {src:"IMG_0652.jpg", legende:"Mais mon papa c'est le plus fort, il va y arriver !", r:5},
      {src:"IMG_0655.jpg", legende:"Ca en vaut la peine", r:5},
      {src:"IMG_0660.jpg", legende:"C'est vraiment joli", r:5},
      {src:"IMG_0661.jpg", legende:"Joli", r:5},
      {src:"IMG_0664.jpg", legende:"Joli", r:5},
      {src:"IMG_0666.jpg", legende:"Mon frère, ce héro", r:5},
      {src:"IMG_0667.jpg", legende:"Trop la classe", r:5},
      {src:"IMG_0668.jpg", legende:"Joli !", r:5},
      {src:"IMG_0690.jpg", legende:"Beaucoup trop la classe", r:5},
      {src:"IMG_0692.jpg", legende:"Encore et toujours", r:5},
      {src:"IMG_0695.jpg", legende:"Montagne de cailloux", r:5},
      {src:"IMG_0696.jpg", legende:"Vue sur Hobart depuis Wellington", r:5},
      {src:"IMG_0705.jpg", legende:"Derwent River", r:5},
      {src:"IMG_0708.jpg", legende:"On voit même Bruny Island (si je ne me trompe pas)", r:5},
      {src:"IMG_0710.jpg", legende:"Des cailloux, de l'eau et des nuages", r:5},
      {src:"IMG_0712.jpg", legende:"Vraiment joli", r:5},
      {src:"IMG_0713.jpg", legende:"Abandonnés par Nono", r:5},
      {src:"IMG_0714.jpg", legende:"Une réclamation Docteur ?", r:5},
      {src:"IMG_0715.jpg", legende:"Joli !", r:5},
      {src:"IMG_0716.jpg", legende:"Et joli ...", r:5},
      {src:"IMG_0717.jpg", legende:"Cailloux !", r:5},
      {src:"IMG_0721.jpg", legende:"Joli lézard (un vrai, pas un bateau)", r:5},
      {src:"IMG_0724.jpg", legende:"Il y en avait partout !", r:5},
      {src:"IMG_0727.jpg", legende:"Suivez les flags orange !", r:5},
      {src:"IMG_0728.jpg", legende:"Le roi du monde", r:5},
      {src:"IMG_0729.jpg", legende:"Le roi du monde", r:5},
      {src:"IMG_0731.jpg", legende:"Le roi du monde", r:5},
      {src:"IMG_0730.jpg", legende:"Là baas !", r:5},
      {src:"IMG_0734.jpg", legende:"Joli", r:5},
      {src:"IMG_0737.jpg", legende:"Joli !", r:5},
      {src:"IMG_0738.jpg", legende:"Attention aux lézards et aux chevilles", r:5},
      {src:"IMG_0741.jpg", legende:"Il est où le chemin ?", r:5},
      {src:"IMG_0743.jpg", legende:"Joli !", r:5},
      {src:"IMG_0748.jpg", legende:"Les plus beaux", r:5},
      {src:"IMG_0751.jpg", legende:"Très joli !", r:5},
      {src:"IMG_0754.jpg", legende:"Jojo qui essaie de nous trouver un campervan... sans succès !", r:5},
      {src:"IMG_0756.jpg", legende:"Joli", r:5},
      {src:"IMG_0758.jpg", legende:"C'est un chouilla inondé", r:5},
      {src:"IMG_0759.jpg", legende:"Ca a l'air d'être ventu par ici", r:5},
      {src:"IMG_0764.jpg", legende:"3 kilomètres à pieds...", r:5},
      {src:"IMG_0767.jpg", legende:"Joli", r:5},
      {src:"IMG_0771.jpg", legende:"Joli", r:5},
      {src:"IMG_0778.jpg", legende:"Le plus fort", r:5},
      {src:"IMG_0779.jpg", legende:"Descente prudente", r:5},
      {src:"IMG_0782.jpg", legende:"Patrick and Bear", r:6},
      {src:"IMG_0788.jpg", legende:"Le plus beau !", r:6},
      {src:"IMG_0791.jpg", legende:"Nos cabins", r:6},
      {src:"IMG_0790.jpg", legende:"La salle commune", r:6},
      {src:"IMG_0792.jpg", legende:"Le vieux train d'Ida Bay", r:6},
      {src:"IMG_0797.jpg", legende:"Old rail", r:6},
      {src:"IMG_0799.jpg", legende:"(Very) old car", r:6},
      {src:"IMG_0802.jpg", legende:"(Very) old car", r:6},
      {src:"IMG_0803.jpg", legende:"(Very) old train. Oui, les aiguillages fonctionnent !", r:6},
      {src:"IMG_0809.jpg", legende:"Nice old car", r:6},
      {src:"IMG_0806.jpg", legende:"Nice old car", r:6},
      {src:"IMG_0815.jpg", legende:"Triumph !", r:6},
      {src:"IMG_0823.jpg", legende:"Elle détonne un peu", r:6},
      {src:"IMG_0820.jpg", legende:"Ida Bay transit", r:6},
      {src:"IMG_0814.jpg", legende:"Take me to the beach !", r:6},
      {src:"IMG_0818.jpg", legende:"Old train", r:6},
      {src:"IMG_0825.jpg", legende:"Let's go", r:6},
      {src:"IMG_0829.jpg", legende:"Ida Bay Heritage Railway", r:6},
      // {src:"IMG_0832.jpg", legende:"Bla", r:1},
      // {src:"IMG_0833.jpg", legende:"Bla", r:1},
      {src:"IMG_0837.jpg", legende:"Le père et la (grande) fille", r:6},
      {src:"IMG_0976.jpg", legende:"Mystery Creek Cave Track : maman et ses fougères arborescentes", r:6},
      {src:"IMG_0984.jpg", legende:"Leçon de survie du Docteur", r:6},
      {src:"IMG_0979.jpg", legende:"Petite rivière à traverser", r:6},
      {src:"IMG_0981.jpg", legende:"On va essayer de ne pas tomber", r:6},
      {src:"IMG_0988.jpg", legende:"Ca parait mal barré...", r:6},
      {src:"IMG_0989.jpg", legende:"Quelle assurance...", r:6},
      {src:"IMG_0843.jpg", legende:"Cockle Creek", r:7},
      {src:"IMG_0850.jpg", legende:"Oups. Dans la voiture", r:7},
      {src:"IMG_0967.jpg", legende:"Elle est mignonne ou elle fait peur ?", r:7},
      {src:"IMG_0851.jpg", legende:"Début de la marche vers le grand Sud", r:7},
      {src:"IMG_0853.jpg", legende:"Jojo !", r:7},
      {src:"IMG_0854.jpg", legende:"Jojo (bis) !", r:7},
      {src:"IMG_0855.jpg", legende:"Vive l'Australie, tout est aménagé", r:7},
      {src:"IMG_0856.jpg", legende:"A l'entrée des parcs nationaux : lavage des chaussures", r:7},
      {src:"IMG_0857.jpg", legende:"Comme un poney !", r:7},
      {src:"IMG_0863.jpg", legende:"Certains marchent en slip...", r:7},
      {src:"IMG_0865.jpg", legende:"La végétation du Sud, avec le petit chemin qui va bien", r:7},
      {src:"IMG_0870.jpg", legende:"Plein Sud !", r:7},
      {src:"IMG_0871.jpg", legende:"D'un bon pas", r:7},
      {src:"IMG_0872.jpg", legende:"On marche...", r:7},
      {src:"IMG_0877.jpg", legende:"Encore...", r:7},
      {src:"IMG_0879.jpg", legende:"Et toujours...", r:7},
      {src:"IMG_0884.jpg", legende:"Jusqu'à...", r:7},
      {src:"IMG_0885.jpg", legende:"L'arrivée !", r:7},
      {src:"IMG_0889.jpg", legende:"Ou pas ! Mais on ne perd pas le moral", r:7},
      {src:"IMG_0893.jpg", legende:"Même si parfois, on tombe (maman surtout...)", r:7},
      {src:"IMG_0894.jpg", legende:"Nono, toujours le sourire", r:7},
      {src:"IMG_0902.jpg", legende:"Papa, toujours la grimace", r:7},
      {src:"IMG_0907.jpg", legende:"Cette fois-ci, on est arrivés !", r:7},
      {src:"IMG_0911.jpg", legende:"C'est le Sud !", r:7},
      {src:"IMG_0914.jpg", legende:"C'est ventu !", r:7},
      {src:"IMG_0920.jpg", legende:"C'est joli", r:7},
      {src:"IMG_0922.jpg", legende:"Venez nous chercher !", r:7},
      {src:"IMG_0924.jpg", legende:"Une tempête se prépare", r:7},
      {src:"IMG_0928.jpg", legende:"Cherchez l'erreur...", r:7},
      {src:"IMG_0930.jpg", legende:"Pic-nic bien mérité (relativement à l'abri du vent)", r:7},
      {src:"IMG_0935.jpg", legende:"Cockle Creek", r:7},
      {src:"IMG_0942.jpg", legende:"Aussi rouillé que ma voiture...", r:7},
      {src:"IMG_0943.jpg", legende:"Un bulot toujours content", r:7},
      {src:"IMG_0945.jpg", legende:"Idem pour la maman", r:7},
      {src:"IMG_0951.jpg", legende:"Idem pour la maman", r:7},
      {src:"IMG_0948.jpg", legende:"Et pour le grand frère...", r:7},
      {src:"IMG_0952.jpg", legende:"Cockle Creek", r:7},
      {src:"IMG_0962.jpg", legende:"Cockle Creek", r:7},
      {src:"IMG_0993.jpg", legende:"Croiser TechnoFirst - FaceOcean faisant un pit-stop pendant le Vendée Globe...", r:7},
      {src:"IMG_0997.jpg", legende:"Arrivée à Tarraleah", r:8},
      {src:"IMG_1001.jpg", legende:"Aqueducs", r:8},
      {src:"IMG_1006.jpg", legende:"Centrale hydraulique", r:8},
      {src:"IMG_1016.jpg", legende:"On passe d'un extrème à un autre : notre jolie maison...", r:8},
      {src:"IMG_1017.jpg", legende:"Aux côtés de ses copines maisons", r:8},
      {src:"IMG_1020.jpg", legende:"Grand luxe", r:8},
      {src:"IMG_1021.jpg", legende:"Salon avec cheminée", r:8},
      {src:"IMG_1025.jpg", legende:"Balade à Tarraleah : passerelle en bois au dessus de rien...", r:8},
      {src:"IMG_1028.jpg", legende:"Rivière après les chutes des Tarraleah", r:8},
      {src:"IMG_1031.jpg", legende:"Dans le pré des Highlands", r:8},
      {src:"IMG_1034.jpg", legende:"Qu'elle est mignonne !", r:8},
      {src:"IMG_1035.jpg", legende:"Beau poil et belles cornes", r:8},
      {src:"IMG_1036.jpg", legende:"Bélier dreadlocks", r:8},
      {src:"IMG_1040.jpg", legende:"Nolwenn dans son environnement naturel", r:8},
      {src:"IMG_1042.jpg", legende:"Vraiment trop mignonne", r:8},
      {src:"IMG_1046.jpg", legende:"Pratiques ces cornes", r:8},
      {src:"IMG_1048.jpg", legende:"Non Nolwenn, tu ne ressembles pas à un Hungry Wombat", r:8},
      {src:"IMG_1055.jpg", legende:"Arrivée à Lake St Clair, départ pour Shadow Lake. Courage Docteur", r:9},
      {src:"IMG_1056.jpg", legende:"Belles plantes...", r:9},
      {src:"IMG_1058.jpg", legende:"Et jolies fleurs", r:9},
      {src:"IMG_1060.jpg", legende:"Les chemins sont très bien indiqués...", r:9},
      {src:"IMG_1062.jpg", legende:"Mais on a quand même réussi à se perdre", r:9},
      {src:"IMG_1064.jpg", legende:"C'est bien Nono, pas de bourrelet !", r:9},
      {src:"IMG_1067.jpg", legende:"Le paysage du parc national", r:9},
      {src:"IMG_1070.jpg", legende:"Direction Shadow Lake", r:9},
      {src:"IMG_1073.jpg", legende:"Shadow Lake !", r:9},
      {src:"IMG_1077.jpg", legende:"Séance photos", r:9},
      {src:"IMG_1079.jpg", legende:"Les parents", r:9},
      {src:"IMG_1083.jpg", legende:"Tout le monde (presque)", r:9},
      {src:"IMG_1087.jpg", legende:"Tout le monde (presque)", r:9},
      {src:"IMG_1088.jpg", legende:"Joris se prend pour un Wombat", r:9},
      {src:"IMG_1100.jpg", legende:"Echidné", r:9},
      {src:"IMG_1101.jpg", legende:"Echidné tout mignon (mais un peu flou)", r:9},
      {src:"IMG_1102.jpg", legende:"Echidné", r:9},
      {src:"IMG_1103.jpg", legende:"Echidné", r:9},
      {src:"IMG_1108.jpg", legende:"Echidné", r:9},
      {src:"IMG_1109.jpg", legende:"Echidné", r:9},
      {src:"IMG_1114.jpg", legende:"Platypus Bay (sans Platypus)", r:9},
      {src:"IMG_1119.jpg", legende:"Lake St Clair", r:9},
      {src:"IMG_1122.jpg", legende:"Aménagement des chemins, efficace", r:9},
      {src:"IMG_1123.jpg", legende:"Photo d'un photographe, Lake St Clair", r:9},
      //{src:"IMG_1126.jpg", legende:"Bla", r:1},
      {src:"IMG_1136.jpg", legende:"En route pour de nouvelles aventures", r:9},
      {src:"IMG_1134.jpg", legende:"Pays plein de lacs", r:9},
      {src:"IMG_1146.jpg", legende:"Notre cabin du jour : Laurel !", r:10},
      {src:"IMG_1151.jpg", legende:"Je ne vous raconte pas la chaleur de la couchette du haut...", r:10},
      {src:"IMG_1155.jpg", legende:"Pont avec vue sur les chutes de Montezuma", r:10},
      {src:"IMG_1157.jpg", legende:"Montezuma Falls", r:10},
      {src:"IMG_1159.jpg", legende:"Toute l'assurance du Docteur", r:10},
      {src:"IMG_1168.jpg", legende:"Le pont au dessus du vide", r:10},
      {src:"IMG_1169.jpg", legende:"Sans les mains !", r:10},
      {src:"IMG_1176.jpg", legende:"Les chutes", r:10},
      {src:"IMG_1177.jpg", legende:"Grotte", r:10},
      {src:"IMG_1186.jpg", legende:"Chemin dans la forêt", r:10},
      {src:"IMG_1189.jpg", legende:"On est censé passer sur ce pont ?!", r:10},
      {src:"IMG_1195.jpg", legende:"Bonjour Bulot !", r:10},
      {src:"IMG_1202.jpg", legende:"Un docteur fatigué", r:10},
      {src:"IMG_1203.jpg", legende:"Mount Pellion East (je crois...)", r:10},
      {src:"IMG_1205.jpg", legende:"Il y en a partout...", r:10},
      {src:"IMG_1209.jpg", legende:"Cradle Mountain", r:10},
      {src:"IMG_1211.jpg", legende:"Jolie vue", r:10},
      {src:"IMG_1214.jpg", legende:"Très jolie vue", r:10},
      {src:"IMG_1216.jpg", legende:"C'est là où on va !", r:10},
      {src:"IMG_1224.jpg", legende:"Cradle Mountain", r:11},
      {src:"IMG_1228.jpg", legende:"Cradle Mountain", r:11},
      {src:"IMG_1231.jpg", legende:"Cradle Mountain (again)", r:11},
      {src:"IMG_1232.jpg", legende:"Cradle Mountain (and again)", r:11},
      {src:"IMG_1233.jpg", legende:"Dove Lake", r:11},
      {src:"IMG_1238.jpg", legende:"A mi-chemin de l'ascension de Marions Lookout...", r:11},
      {src:"IMG_1245.jpg", legende:"Ca monte raide", r:11},
      {src:"IMG_1251.jpg", legende:"Mais on n'abandonne pas", r:11},
      {src:"IMG_1252.jpg", legende:"Le docteur s'accroche", r:11},
      {src:"IMG_1274.jpg", legende:"Presque arrivés... mais pas tout à fait !", r:11},
      {src:"IMG_1275.jpg", legende:"Crater Lake", r:11},
      {src:"IMG_1280.jpg", legende:"Cradle Mountain", r:11},
      {src:"IMG_1285.jpg", legende:"Cradle Mountain", r:11},
      {src:"IMG_1289.jpg", legende:"Rehabilitation Area", r:11},
      {src:"IMG_1291.jpg", legende:"Un bulot à la descente", r:11},
      {src:"IMG_1292.jpg", legende:"Lake Lilla", r:11},
      {src:"IMG_1301.jpg", legende:"Grand traumatisme du Docteur", r:12},
      {src:"IMG_1302.jpg", legende:"Devinez qui dort par terre...", r:12},
      {src:"IMG_1304.jpg", legende:"Jolie vue sur les montagnes environnantes au coucher du soleil", r:12},
      {src:"IMG_1306.jpg", legende:"Ciel coloré", r:12},
      {src:"IMG_1311.jpg", legende:"Cradle Mountain : cette fois-ci, c'est parti pour l'ascension", r:13},
      {src:"IMG_1315.jpg", legende:"1ère étape : Marions Lookout", r:13},
      {src:"IMG_1317.jpg", legende:"On prend des cours", r:13},
      {src:"IMG_1318.jpg", legende:"Cradle Mountain", r:13},
      {src:"IMG_1320.jpg", legende:"On peut même boire l'eau des ruisseaux !", r:13},
      {src:"IMG_1323.jpg", legende:"Cradle Mountain", r:13},
      {src:"IMG_1325.jpg", legende:"En route !", r:13},
      {src:"IMG_1329.jpg", legende:"Vue sur le lac Dove depuis la montée", r:13},
      {src:"IMG_1330.jpg", legende:"La montée. Bon courage !", r:13},
      {src:"IMG_1331.jpg", legende:"On se retrouve en haut !", r:13},
      {src:"IMG_1332.jpg", legende:"A tout à l'heure Docteur", r:13},
      {src:"IMG_1334.jpg", legende:"Vue sur l'Overland Track de la montée", r:13},
      {src:"IMG_1335.jpg", legende:"Overland Track : direction Lac St Clair, 6 jours de marche (une autre fois peut-être...)", r:13},
      {src:"IMG_1340.jpg", legende:"C'est plus de l'escalade que de la rando", r:13},
      {src:"IMG_1341.jpg", legende:"Vous ne voyez pas ses pieds, mais oui, il est toujours en tongs !", r:13},
      {src:"IMG_1342.jpg", legende:"Tout se passe bien", r:13},
      {src:"IMG_1348.jpg", legende:"Trou de la mouche ! Souvenirs du ski", r:13},
      {src:"IMG_1349.jpg", legende:"Quelle sportive", r:13},
      {src:"IMG_1355.jpg", legende:"En haut ? Point du tout", r:13},
      {src:"IMG_1358.jpg", legende:"Jolie vue", r:13},
      {src:"IMG_1360.jpg", legende:"Mount Pellion au loin", r:13},
      {src:"IMG_1362.jpg", legende:"Cette fois-ci on est en haut !", r:13},
      {src:"IMG_1372.jpg", legende:"Petite photo malgré le fait qu'on ait perdu le gros de la troupe", r:13},
      {src:"IMG_1374.jpg", legende:"La prochaine fois on fera celui-là si tu veux maman", r:13},
      {src:"IMG_1375.jpg", legende:"Il n'y a plus qu'à redescendre, mais par où ?", r:13},
      {src:"IMG_1376.jpg", legende:"Jolie vue", r:13},
      {src:"IMG_1378.jpg", legende:"Dove Lake", r:13},
      {src:"IMG_1380.jpg", legende:"Lake Wilks et Dove Lake", r:13},
      {src:"IMG_1382.jpg", legende:"Je vous l'avais dit, toujours en tong ! (j'ai bien mon appareil photo à la main...)", r:11},
      {src:"IMG_1384.jpg", legende:"On est censé redescendre...", r:13},
      {src:"IMG_1392.jpg", legende:"Attention à ne pas tomber à cause de la fatigue", r:13},
      {src:"IMG_1398.jpg", legende:"Toujours une jolie vue", r:13},
      {src:"IMG_1400.jpg", legende:"Encore un peu d'escalade", r:13},
      {src:"IMG_1405.jpg", legende:"Fin de journée, le Docteur est fatigué", r:13},
      {src:"IMG_1407.jpg", legende:"Cradle Mountain : on y était !", r:13},
      {src:"IMG_1408.jpg", legende:"Dove Lake", r:13},
      {src:"IMG_1414.jpg", legende:"Petite baignade...", r:13},
      {src:"IMG_1417.jpg", legende:"Certains font sécher leur slip sur leur sac", r:13},
      {src:"IMG_1419.jpg", legende:"Au revoir Cradle Mountain", r:13},
      {src:"IMG_1420.jpg", legende:"Organisation dans le bateau, je crois que personne n'a bien dormi", r:14},
      {src:"IMG_1421.jpg", legende:"Sauf peut-être Nono, elle a eu droit à un Wombat !", r:14},
      {src:"IMG_1423.jpg", legende:"Dernier jour, toujours plus à l'arrache", r:14},
      {src:"IMG_1424.jpg", legende:"Petites maisons colorées sur la colline", r:14}
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
      r.repere=L.marker([r.x,r.y],{icon: new L.NumberedDivIcon({number: i+1})}).addTo(map);
      //On y associe les évènements nécessaires pour l'ouverture de la diapo
      r.repere.on('click', function(e) {
        diapo.open(i);
        $scope.$apply();
      });
    });
}]);
