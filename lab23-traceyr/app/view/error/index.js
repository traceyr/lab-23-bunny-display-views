'use strict';
require('./error.scss');

const angular = require('angular');
const lab23 = angular.module('lab23');

lab23.controller('ErrorController', ['$rootScope', function($rootScope){
  this.errorMessage = $rootScope.errorMessage;
}]);
