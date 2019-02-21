const app = angular.module('universidadApp', []);

const profesorData = {
  nombre: 'alan hernandez lopez',
  bio: 'Mi nombre es Benito Pablo Juárez García, de nacionalidad Mexicano. Soy un indígena zapoteco nacido en San Pablo Guelatao, Oaxaca, el 21 de marzo de 1806. Por mi propia iniciativa y empeño pude iniciar mi preparación académica y culminarla con éxito.',
  edad: 28,
  foto: 'https://cdn2.unrealengine.com/Diesel%2Fproduct%2Fsmboriginal%2FSMB_About_02-1000x840-4d95fde35b35805a703e6ad8316b58a811033166.png'
};

app.controller('profesorCtrl', function($scope) {

  $scope.profesor = profesorData;
  $scope.profesorEditado = {};
  $scope.mostrarCamposDeEdicion = false;

  $scope.editarProfesor = function() {
    angular.copy($scope.profesor, $scope.profesorEditado);
    $scope.mostrarCamposDeEdicion = true;
  };

  $scope.acualizarDatosProfesor = function() {
    angular.copy($scope.profesorEditado, $scope.profesor);
    $scope.mostrarCamposDeEdicion = false;
  };

  $scope.cancelarEdicionDeProfesor = function() {
    $scope.profesorEditado = {};
    $scope.mostrarCamposDeEdicion = false;
  };

});
