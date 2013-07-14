'use strict';

// Declare app level module which depends on filters, and services
angular.module('inequalityTransitMap', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);
function CitiesCtrl($scope, $location) {

  $scope.cities = cities;
  $scope.censusPoints = censusPoints;
  // Set initial Defaults.
  $scope.currentCity = $scope.cities[0];
  $scope.currentDataPoint = $scope.censusPoints[4];
  // Override defaults if path is set.
  if ($location.$$path) {
    var path = $location.$$path.split('/');
    var cityKey = getKey($scope.cities, path[1]);
    var censusKey = getKey($scope.censusPoints, path[2]);
    $scope.currentCity = $scope.cities[cityKey];
    $scope.currentDataPoint = $scope.censusPoints[censusKey];
  }

  $scope.dataSelect = function() {
    $location.path('/' + $scope.currentCity.value + '/' + $scope.currentDataPoint.value)
    buildViz($scope);
  };
  buildViz($scope);
}
