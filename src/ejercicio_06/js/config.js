app.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'inicioCtrl'
    })
    .when('/profesores', {
      templateUrl: 'partials/profesores.html',
      controller: 'profesoresCtrl'
    })
    .when('/characters', {
      templateUrl: 'partials/characters.html',
      controller: 'charactersCtrl'
    })
    .when('/character/:id', {
      templateUrl: 'partials/character.html',
      controller: 'characterCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

});
