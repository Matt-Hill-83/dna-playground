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

  var input = [
      "TTGGGGGGACTGGGGCTCCCATTCGTTGCCTTTATAAATCCTTGCAAGCCAATTAACAGGTTGGTGAGGGGCTTGGGTGAAAAGGTGCTTAAGACTCCGT",
      "...(((((.(...).)))))........(((((.....((..(.((((((..(((.((...)).)))..)))))).).)))))))..............."
  ];

    var input = [
        "CAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWA",
        "..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...))))).."
    ];


  init(input);

  ///////////////

  function init(input) {
    // var mainDiv  = document.getElementById('snippetDiv');
    var testDiv1          = document.getElementById('matt_1');
    var dnaGraph          = document.getElementById('dna-graph');
    var dnaGraphContainer = document.getElementById('dna-graph-container');
    var colorControls     = document.getElementById('color-controls');

    var Dna = require("drawrnajs");
    var dna = new Dna({
        el              : null,
        testEl1         : testDiv1,
        dnaGraphDiv         : dnaGraph,
        optsPanelDiv: colorControls,
        seq             : input[0],
        dotbr           : input[1],
        layout          : "naview",
        seqpanel        : true,
        optspanel       : true,
        resindex        : true
    });


    console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
    console.log('dna: ');
    console.log(dna);
    console.log(dna.optns.struct.attributes.links.models[0].attributes);
    console.log('|------------------------------------------------------------------------------------------------|')



    dna.optns.struct.attributes.links.models[0].attributes.color = "purple";
    dna.optns.struct.attributes.links.models.map((item)=> {
        item.attributes.color = "purple";
        item.attributes.weight = 1;
    });

    var test = dna.render();

    // Set outer div height after page is rendered.
    var dnaGraphHeight             = "900px";
    dnaGraphContainer.style.height = dnaGraphHeight;
    dnaGraph.style.height          = dnaGraphHeight;
  }

}

