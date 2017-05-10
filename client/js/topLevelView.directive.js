angular.module('app')
  .directive('landingPage', [landingPageController]);

function landingPageController(Table, Constants) {
  return {
    restrict   : 'E',
    templateUrl: 'views/dna.html',
    controller : [
      '$rootScope',
      '$scope',
      LandingPageController
    ],
    controllerAs: 'landingPage',
  };
}

function LandingPageController(
  $rootScope,
  $scope
  ) { 
  
  vm = this;

}

