app.controller('characterCtrl', [
  '$scope',
  '$routeParams',
  'MarvelService',
  function($scope, $routeParams, MarvelService) {

    $scope.character = {};
    $scope.characterId = $routeParams.id;

    MarvelService
      .getCharacter($scope.characterId)
      .then(response => {
        const data = response.data.results[0];
        const { path, extension } = data.thumbnail;

        $scope.character = data;
        $scope.characterImage = `${path}/portrait_xlarge.${extension}`;
      })
      .catch(err => {
        window.location = '#/characters';
      });
}]);
