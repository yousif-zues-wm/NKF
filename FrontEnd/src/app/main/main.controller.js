(function() {
  'use strict';

  angular
    .module('ohax')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;
    var hidemF;
    var derpF;
    var schol;
    var carS;
    var dentalS;


    $scope.derpF = false
    $scope.hidemF = false
    $scope.carS = false
    $scope.dentalS = false
    $scope.schol = false

    $scope.show = function(){
       $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
    }

    $scope.derp = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.derpF = derpF == true ? derpF = false : derpF = true
    }
    $scope.scholShow = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.schol = schol == true ? schol = false : schol = true
    }
    $scope.carShow = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.carS = carS == true ? carS = false : carS = true
    }
    $scope.dentalShow = function(){
      $scope.hidemF = hidemF == true ? hidemF = false : hidemF = true
      $scope.dentalS = dentalS == true ? dentalS = false : dentalS = true
    }

  }
})();
