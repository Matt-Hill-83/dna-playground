angular.module('app')
  .directive('landingPage', [landingPageController]);

function landingPageController(Table, Constants) {
  return {
    restrict   : 'E',
    templateUrl: 'views/dna.html',
    controller : [
      '$filter',
      '$rootScope',
      '$scope',
      '$q',
      '$http',
      LandingPageController
    ],
    controllerAs: 'landingPage',
  };
}

function LandingPageController(
  $filter,
  $rootScope,
  $scope,
  $q,
  $http
  ) { 
  
  vm = this;

}

