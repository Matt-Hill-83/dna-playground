angular.module('app')
  .directive('landingPage', [landingPageController]);

function landingPageController(Table, Constants) {
  return {
    restrict    : 'E',
    templateUrl : 'views/dna.html',
    controller  : ['$rootScope', '$scope', LandingPageController],
    controllerAs: 'landingPage',
  };
}

function LandingPageController($rootScope, $scope) {
  
  vm = this;

  init();

  ///////////////

  function init() {
    var mainDiv = document.getElementById('snippetDiv');
    var Rna     = require("drawrnajs");


    // var input = [
    //     "CAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWA",
    //     "..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...))))).."
    // ];



    var input = [
        "TTGGGGGGACTGGGGCTCCCATTCGTTGCCTTTATAAATCCTTGCAAGCCAATTAACAGGTTGGTGAGGG GCTTGGGTGAAAAGGTGCTTAAGACTCCGT",
        "...(((((.(...).)))))........(((((.....((..(.((((((..(((.((...)).)))..)))))).).)))))))..............."
    ];


    var app = new Rna({
        el       : mainDiv,
        seq      : input[0],
        dotbr    : input[1],
        layout   : "naview",
        seqpanel : true,
        optspanel: true,
        resindex : true
    })


    console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
    console.log('app: ');
    console.log(app);
    console.log(app.optns.struct.attributes.links.models[0].attributes);
    console.log('|------------------------------------------------------------------------------------------------|')

    app.optns.struct.attributes.links.models[0].attributes.color = "purple";
    app.optns.struct.attributes.links.models.map((item)=> {
        item.attributes.color = "purple";
        item.attributes.weight = 1;
    });

    app.render();
    

  }

}

