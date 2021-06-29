'use strict';
var app = angular.module('app', ['ngSanitize']);

app.filter('onlyLinks', () =>
	   input => {
	       var urlPattern = /(https?|ftp):\/\/[\w-]+(\.[\w-]+)+([\w.,@?!^=%&amp;:\/~+#-]*[\w@?!^=%&amp;\/~+#-])?/g;
	       if (input)
		   return input.match(urlPattern);	   
	   }
);

app.controller('openAllLinks', ($scope, $window) => {
    $scope.open = () => {
  	var a = angular.element(document.getElementsByClassName('tiso'));
  	angular.forEach(a, link => $window.open(link.href, '_blank')); 
    };
});
