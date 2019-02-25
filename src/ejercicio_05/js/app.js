(function() {
  const app = angular.module('app', []);

  app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.profesores = [];

    $http.get('js/profesores.json')
      .success((res) => $scope.profesores = res);

  }]);
})();
