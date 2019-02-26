app.controller('charactersCtrl', [
  '$scope',
  '$http',
  'MarvelService',
  function($scope, $http, MarvelService) {

    $scope.setActive('mCharacters');
    $scope.characters = [];
    $scope.position = 5;

    MarvelService
      .getCharacters()
      .then(data => {
        $scope.characters = data.data.results;
      })
      .catch(err => console.log(err));

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
