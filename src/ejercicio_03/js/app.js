(function() {
  const app = angular.module('universidadApp', []);

  app.controller('listadoCtrl', ['$scope', function($scope) {

    $scope.listadoDeNombres = [
      'Fernando Zamora',
      'Luis García',
      'Rosenda Martinez'
    ];
    $scope.listadoProfesores = [ {
      nombre: 'Fernando Zamora',
      edad: 45,
      materia: 'SKDF'
    }, {
      nombre: 'Luis Garcia',
      edad: 34,
      materia: 'POO'
    }, {
      nombre: 'Rosenda Martinez',
      edad: 25,
      materia: 'HHM'
    } ];
    $scope.listadoPersonas = [
    {
        "celular": "+1 (869) 587-3060",
        "telefono": "+1 (978) 549-2288",
        "sexo": "mujer",
        "nombre": "Lupe Avery",
        "edad": 36,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef85673770111c428a65e"
    },
    {
        "celular": "+1 (863) 415-3847",
        "telefono": "+1 (901) 536-3841",
        "sexo": "mujer",
        "nombre": "Carmella Foreman",
        "edad": 21,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef85678b3c579e2e211d7"
    },
    {
        "celular": "+1 (937) 554-3697",
        "telefono": "+1 (838) 541-2703",
        "sexo": "hombre",
        "nombre": "Clay Stafford",
        "edad": 29,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8569c51b6036e833bd1"
    },
    {
        "celular": "+1 (895) 537-3660",
        "telefono": "+1 (826) 519-2026",
        "sexo": "hombre",
        "nombre": "Fleming Conway",
        "edad": 31,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef85674c82d488cab7610"
    },
    {
        "celular": "+1 (830) 484-2633",
        "telefono": "+1 (917) 425-2482",
        "sexo": "mujer",
        "nombre": "Frankie Bender",
        "edad": 22,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856af625825dd6e35d5"
    },
    {
        "celular": "+1 (802) 495-3269",
        "telefono": "+1 (827) 482-3445",
        "sexo": "hombre",
        "nombre": "Ball Hawkins",
        "edad": 38,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856f1c37acd20449747"
    },
    {
        "celular": "+1 (830) 413-2745",
        "telefono": "+1 (999) 516-2553",
        "sexo": "hombre",
        "nombre": "Robinson Alexander",
        "edad": 23,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856037c533c13af5944"
    },
    {
        "celular": "+1 (906) 519-2111",
        "telefono": "+1 (823) 484-3728",
        "sexo": "mujer",
        "nombre": "Maureen Franco",
        "edad": 39,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856c0efd02a633a43d9"
    },
    {
        "celular": "+1 (944) 600-2680",
        "telefono": "+1 (874) 582-3432",
        "sexo": "mujer",
        "nombre": "Greta Mcintosh",
        "edad": 30,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856a4f55969b04aa2a6"
    },
    {
        "celular": "+1 (829) 597-2500",
        "telefono": "+1 (808) 440-2255",
        "sexo": "hombre",
        "nombre": "Perez Barnett",
        "edad": 39,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856429b7ed1a44dd481"
    },
    {
        "celular": "+1 (947) 478-3686",
        "telefono": "+1 (912) 594-3702",
        "sexo": "mujer",
        "nombre": "Corine Tyler",
        "edad": 25,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef85683bf5c875d5ae31e"
    },
    {
        "celular": "+1 (882) 407-3743",
        "telefono": "+1 (866) 530-2503",
        "sexo": "mujer",
        "nombre": "Cassandra Cohen",
        "edad": 33,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8566b0fe601e2dff88b"
    },
    {
        "celular": "+1 (859) 464-2443",
        "telefono": "+1 (827) 512-2310",
        "sexo": "hombre",
        "nombre": "Kaufman Salas",
        "edad": 30,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef85645273e003e19a43a"
    },
    {
        "celular": "+1 (988) 535-3060",
        "telefono": "+1 (835) 451-3057",
        "sexo": "hombre",
        "nombre": "Haney Frazier",
        "edad": 26,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856ce99994d86245ccd"
    },
    {
        "celular": "+1 (978) 508-2174",
        "telefono": "+1 (858) 424-2763",
        "sexo": "hombre",
        "nombre": "Cervantes Garcia",
        "edad": 30,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8565906a91102663a57"
    },
    {
        "celular": "+1 (998) 476-2598",
        "telefono": "+1 (896) 429-2088",
        "sexo": "hombre",
        "nombre": "Boyle Huff",
        "edad": 27,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8569b21308e3a5484e1"
    },
    {
        "celular": "+1 (949) 562-3222",
        "telefono": "+1 (917) 446-2290",
        "sexo": "male",
        "nombre": "Snider Webster",
        "edad": 38,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856dd816d9ffe9a4911"
    },
    {
        "celular": "+1 (809) 533-3762",
        "telefono": "+1 (804) 590-2287",
        "sexo": "male",
        "nombre": "Barrett Young",
        "edad": 27,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856d8c98ac1f07c3782"
    },
    {
        "celular": "+1 (836) 518-2267",
        "telefono": "+1 (867) 423-2267",
        "sexo": "mujer",
        "nombre": "Althea Burton",
        "edad": 40,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8565121ecb3669142ed"
    },
    {
        "celular": "+1 (989) 553-2154",
        "telefono": "+1 (976) 523-2715",
        "sexo": "mujer",
        "nombre": "Rose Maxwell",
        "edad": 27,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856c5f670ed3099eb45"
    },
    {
        "celular": "+1 (854) 511-3840",
        "telefono": "+1 (806) 547-2031",
        "sexo": "male",
        "nombre": "Huffman Warren",
        "edad": 22,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856de0eacc54716651a"
    },
    {
        "celular": "+1 (801) 492-2471",
        "telefono": "+1 (826) 567-3865",
        "sexo": "mujer",
        "nombre": "Nona Craig",
        "edad": 26,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856f964ec0f3d6e4df5"
    },
    {
        "celular": "+1 (836) 438-2134",
        "telefono": "+1 (869) 492-2289",
        "sexo": "male",
        "nombre": "Douglas Finch",
        "edad": 29,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef85623017e8c66009022"
    },
    {
        "celular": "+1 (883) 458-3405",
        "telefono": "+1 (814) 503-3156",
        "sexo": "male",
        "nombre": "Molina Gross",
        "edad": 36,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8563dfa245e9492653e"
    },
    {
        "celular": "+1 (964) 546-2879",
        "telefono": "+1 (989) 548-3793",
        "sexo": "mujer",
        "nombre": "Carly Carr",
        "edad": 20,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856b7d430286167454a"
    },
    {
        "celular": "+1 (938) 567-2891",
        "telefono": "+1 (936) 579-3277",
        "sexo": "mujer",
        "nombre": "Rosalie Hatfield",
        "edad": 33,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856a970babd59b4de60"
    },
    {
        "celular": "+1 (880) 482-3198",
        "telefono": "+1 (818) 444-2313",
        "sexo": "mujer",
        "nombre": "Tia Merrill",
        "edad": 21,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856d78ffc061f5ca525"
    },
    {
        "celular": "+1 (836) 472-2981",
        "telefono": "+1 (962) 450-2309",
        "sexo": "male",
        "nombre": "Mcintosh Richmond",
        "edad": 36,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8563b4e3ef8d69d4227"
    },
    {
        "celular": "+1 (811) 530-2946",
        "telefono": "+1 (918) 419-2251",
        "sexo": "mujer",
        "nombre": "Audra Stephenson",
        "edad": 29,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef8565eb576d98533c00d"
    },
    {
        "celular": "+1 (801) 522-2998",
        "telefono": "+1 (893) 598-2098",
        "sexo": "mujer",
        "nombre": "Rosalind Fuller",
        "edad": 22,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856a5384df4f08dea2b"
    },
    {
        "celular": "+1 (983) 536-2546",
        "telefono": "+1 (926) 455-3497",
        "sexo": "male",
        "nombre": "Pugh Ortega",
        "edad": 38,
        "picture": "https://img.pokemondb.net/artwork/large/charmeleon.jpg",
        "_id": "5c6ef856916e6203517cff4c"
    }
];

  }]);
})();
