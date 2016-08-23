'use strict';

const angular = require('angular');
const lab23 = angular.module('lab23');

lab23.controller('ThumbnailController', ['$rootScope', ThumbnailController]);

function ThumbnailController($rootScope){
  this.images = $rootScope.imageData;
}
