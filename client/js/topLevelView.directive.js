angular.module('app')
  .directive('landingPage', [landingPageController]);

function landingPageController(Table, Constants) {
  return {
    restrict    : 'E',
    templateUrl : 'views/dna.html',
    controller  : ['$rootScope', '$scope', LandingPageController],
    controllerAs: 'dnaPlayground',
  };
}

function LandingPageController($rootScope, $scope) {
  var input = [
      "CAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWACAGCACGACACUAGCAGUCAGUGUCAGACUGCAWA",
      "..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...))))).."
  ];

  vm = this;

  vm.lineSizePicker = {
    id   :"price",
    type :"range",
    min  :0,
    max  :10,
    value: 2
  };

  var lineWidthPicker = document.getElementById("line-width");
      res = document.getElementById("result");

  lineWidthPicker.addEventListener("input", function() {
      res.innerHTML = lineWidthPicker.value;



  }, false); 

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

    var width = 3;
    setLineWidth(width, dna);

    dna.render();

    // Set outer div height after page is rendered.
    var dnaGraphHeight             = "900px";
    dnaGraphContainer.style.height = dnaGraphHeight;
    dnaGraph.style.height          = dnaGraphHeight;
  }

  function setLineWidth(width, dna) {
    console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
    console.log('dna: ');
    console.log(dna);
    console.log(dna.optns.struct.attributes.links.models[0].attributes);
    console.log('|------------------------------------------------------------------------------------------------|')



    dna.optns.struct.attributes.links.models[0].attributes.color = "purple";
    dna.optns.struct.attributes.links.models.map((item)=> {
        item.attributes.color  = "purple";
        item.attributes.weight = width;
    });

  }


}

