'use strict';

const angular = require('angular');
const lab23 = angular.module('lab23');

lab23.controller('HomeController', ['$rootScope', HomeController]);

function HomeController($rootScope){
  this.images = $rootScope.imageData;
}
