/**
 * IGVF Project API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.IgvfProjectApi);
  }
}(this, function(expect, IgvfProjectApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new IgvfProjectApi.Tile();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Tile', function() {
    it('should create an instance of Tile', function() {
      // uncomment below and update the code to test Tile
      //var instance = new IgvfProjectApi.Tile();
      //expect(instance).to.be.a(IgvfProjectApi.Tile);
    });

    it('should have the property tileId (base name: "tile_id")', function() {
      // uncomment below and update the code to test the property tileId
      //var instance = new IgvfProjectApi.Tile();
      //expect(instance).to.be();
    });

    it('should have the property tileStart (base name: "tile_start")', function() {
      // uncomment below and update the code to test the property tileStart
      //var instance = new IgvfProjectApi.Tile();
      //expect(instance).to.be();
    });

    it('should have the property tileEnd (base name: "tile_end")', function() {
      // uncomment below and update the code to test the property tileEnd
      //var instance = new IgvfProjectApi.Tile();
      //expect(instance).to.be();
    });

  });

}));
