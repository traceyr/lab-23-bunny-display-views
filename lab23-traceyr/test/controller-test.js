'use strict';
/*global angular angular:true*/
/*eslint no-undef: "error"*/

describe('testing controllers used in routing', function() {
  beforeEach(() => {
    angular.mock.module('lab23');
    angular.mock.inject(($controller) => {
      this.homeController = new $controller('HomeController');
      this.fullsizeController = new $controller('FullsizeController');
    });
  });

  it('home controller should create a list of images', () => {
    expect(this.homeController.images.length > 0).toEqual(true);
    expect(this.homeController.images.length).toEqual(4);
  });

  it('fullsize controller should create a list of images', () => {
    expect(this.fullsizeController.images.length > 0).toEqual(true);
    expect(this.fullsizeController.images.length).toEqual(4);
  });

  it('fullsize controller should test for a valid id', () => {
    expect(this.fullsizeController.isValidId('ted')).toEqual(false);
    expect(this.fullsizeController.isValidId(3)).toEqual(true);
  });
});
