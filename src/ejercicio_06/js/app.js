const app = angular.module('app', [ 'ngRoute' ]);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.menuSuperior = 'partials/menu.html';

  $scope.setActive = function(option) {
    $scope.mInicio = '';
    $scope.mAlumnos = '';
    $scope.mProfesores = '';

    $scope[option] = 'active';
  };

}]);
