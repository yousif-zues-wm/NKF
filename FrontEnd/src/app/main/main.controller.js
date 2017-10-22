(function() {
  'use strict';

  angular
    .module('ohax')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log) {
    var vm = this;
    var hidemF;
    var derpF;
    var schol;
    var carS;
    var dentalS;
    var fams = 1;


    $scope.derpF = false
    $scope.hidemF = false
    $scope.carS = false
    $scope.dentalS = false
    $scope.schol = false
    $scope.doctor =0
    $scope.rentmortgage = 0
    $scope.phonebill = 0
    $scope.gasbill = 0
    $scope.electricbill = 0
    $scope.waterbill = 0
    $scope.payment = 0
    $scope.gasoil = 0
    $scope.insurance = 0
    $scope.repairs = 0
    $scope.doctor= 0
    $scope.medicines = 0
    $scope.hospital=  0
    $scope.linsurance = 0
    $scope.minsurance= 0
    $scope.total = 0
    $scope.nums = 0
    $scope.contentNums = 0
    $scope.getHouseMonthlyCosts =0
    $scope.totalIncome = 0;

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
    // create new HTML elements with angular
    $scope.getHouseMonthlyCosts = function(){
        // $log.log('ass')
        // $scope.total = 0;
        $scope.total = $scope.doctor  +  $scope.rentmortgage + $scope.phonebill + $scope.gasbill + $scope.electricbill + $scope.waterbill + $scope.payment + $scope.gasoil + $scope.insurance + $scope.repairs + $scope.doctor +   $scope.medicines + $scope.hospital + $scope.linsurance + $scope.minsurance
    }

  }
})();
