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
    id   : "price",
    type : "range",
    min  : 0,
    max  : 10,
    value: 2
  };

  var lineWidthPicker = document.getElementById("line-width");
  lineWidthPicker.addEventListener("input", function() {
      // lineWidth.innerHTML = lineWidthPicker.value;
    setLineWidth(lineWidthPicker.value);
  }, false); 

  var dna = init(input);

  // var lineWidth       = document.getElementById("result");


  ///////////////

  function init(input) {
    var testDiv1      = document.getElementById('matt_1');
    var dnaGraph      = document.getElementById('dna-graph');
    var colorControls = document.getElementById('color-controls');

    var dnaGraphContainer = document.getElementById('dna-graph-container');

    var Dna = require("drawrnajs");
    var dna = new Dna({
        el          : null,
        testEl1     : testDiv1,
        dnaGraphDiv : dnaGraph,
        optsPanelDiv: colorControls,
        seq         : input[0],
        dotbr       : input[1],
        layout      : "naview",
        seqpanel    : true,
        optspanel   : true,
        resindex    : true
    });

    console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
    console.log('dna: ');
    console.log(dna);
    console.log(dna.optns.struct.attributes.links.models[0].attributes);
    console.log('|------------------------------------------------------------------------------------------------|')

    dna.render();

    // Set outer div height after page is rendered.
    var dnaGraphHeight             = "900px";
    dnaGraphContainer.style.height = dnaGraphHeight;
    dnaGraph.style.height          = dnaGraphHeight;

    return dna;
  }

  function setLineWidth(width) {

    console.log('|++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++|');
    console.log('width: ');
    console.log(width);
    console.log(parseInt(width));
    console.log('|------------------------------------------------------------------------------------------------|')
    
    debugger;
    // dna.optns.struct.attributes.links.models[0].attributes.color = "red";
    dna.optns.struct.attributes.links.models.map((item)=> {
        item.attributes.color  = "red";
        item.attributes.weight = parseInt(width);
    });
  }


}

