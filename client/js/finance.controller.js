"use strict";

var app = angular.module('app',['ngRoute']);
app.controller('FinanceTable', [
		'$scope',
		'$http',
		'ngDialog',
		// 'Utilities',
		'$cookies',
		financeController
]);

function financeController(
	$scope,
	$http,
	ngDialog,
	// Utilities,
	$cookies
	) {

  
	// monkey patch .every function if it doesn't exist.
	if (!Array.prototype.every)
	{
	   Array.prototype.every = function(fun /*, thisp*/)
	   {
	      var len = this.length;
	      if (typeof fun != "function")
	      throw new TypeError();
	      
	      var thisp = arguments[1];
	      for (var i = 0; i < len; i++)
	      {
	         if (i in this && !fun.call(thisp, this[i], i, this))
	         return false;
	      }
	      return true;
	   };
	}

}

app.filter('html', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
});
