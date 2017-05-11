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
      "CAGCACGACACTAGCAGTCAGTGTCAGACTGCAWACAGCACGACACTAGCAGTCAGTGTCAGACTGCAWACAGCACGACACTAGCAGTCAGTGTCAGACTGCAWA",
      "..(((((...(((((...(((((...(((((.....)))))...))))).....(((((...(((((.....)))))...))))).....)))))...))))).."
  ];

  vm                 = this;
  vm.updateLineWidth = updateLineWidth;
  vm.lineWidth       = 3;
  vm.dna;

  vm.lineSizePicker = {
    min  : 1,
    max  : 10,
    value: 2
  };

  var sequenceDefDiv       = document.getElementById('matt_1');
  var dnaGraphDiv          = document.getElementById('dna-graph');
  var dnaGraphContainerDiv = document.getElementById('dna-graph-container');
  var optionsPanelDiv      = document.getElementById('color-controls');

  // Set outer div height after page is rendered.
  var dnaGraphHeight                = "900px";
  dnaGraphContainerDiv.style.height = dnaGraphHeight;
  dnaGraphDiv.style.height          = dnaGraphHeight;

  init(input);

  ///////////////

  function init(input) {
    var Dna = require("drawrnajs");
    vm.dna = new Dna({
        sequenceDefDiv: sequenceDefDiv,
        dnaGraphDiv   : dnaGraphDiv,
        optsPanelDiv  : optionsPanelDiv,
        seq           : input[0],
        dotbr         : input[1],
        layout        : "naview",
        seqpanel      : true,
        optspanel     : true,
        resindex      : true
    });

    var width = 10;
    setLineWidth(width);

    var options = {
      seqpanel : true, 
      optspanel: true,
      resindex : true, 
    };

    vm.dna.render(options);
  }

  function updateLineWidth() {
    setLineWidth(vm.lineWidth);
    var options = {
      seqpanel : false, 
      optspanel: false,
      resindex : false, 
    };
    vm.dna.render(options);
  }

  function setLineWidth(width) {
    console.log('setting width: ', width, 'px');

    vm.dna.optns.struct.attributes.links.models.map((item)=> {
        item.attributes.weight = width;
    });
  }

  // function renderChart() {
  //   vm.dna.struct.set("renderSwitch", !vm.dna.struct.get("renderSwitch"));    
  // }

}

