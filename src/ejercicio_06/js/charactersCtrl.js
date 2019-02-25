app.controller('charactersCtrl', ['$scope', '$http', 'MarvelService', function($scope, $http, MarvelService) {
  const { api_url, ts, api_key, hash } = MarvelService;
  const resource = 'characters';

  $scope.setActive('mCharacters');
  $scope.characters = [];
  $scope.position = 5;

  $http.get(`${api_url}${resource}?ts=${ts}&apikey=${api_key}&hash=${hash}`)
    .success(res => {
      $scope.characters = res.data.results;
    });

  $scope.siguientes = function() {
    if ($scope.characters.length > $scope.position) {
      $scope.position += 5;
    }
  };

  $scope.anteriores = function() {
    if ($scope.position > 5) {
      $scope.position -= 5;
    }
  };

}]);

app.filter('id', function() {
  return function(id) {
    return `· ${id} ·`;
  };
});
