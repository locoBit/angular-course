(function() {
  const app = angular.module('universidadApp', []);

  app.controller('listadoCtrl', ['$scope', function($scope) {

    $scope.paises = [
      { id: 'COL', name: 'Colombia' },
      { id: 'NOR', name: 'Norway' },
      { id: 'EST', name: 'Estonia' }
    ];
    $scope.paisSeleccionado = 'COL';

  }]);
})();
