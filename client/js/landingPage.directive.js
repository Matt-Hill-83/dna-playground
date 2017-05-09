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
      'Utilities',
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
  $http,
  Utilities
  ) { 
  
  vm = this;

}

