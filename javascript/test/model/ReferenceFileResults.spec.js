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
    instance = new IgvfProjectApi.ReferenceFileResults();
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

  describe('ReferenceFileResults', function() {
    it('should create an instance of ReferenceFileResults', function() {
      // uncomment below and update the code to test ReferenceFileResults
      //var instance = new IgvfProjectApi.ReferenceFileResults();
      //expect(instance).to.be.a(IgvfProjectApi.ReferenceFileResults);
    });

    it('should have the property graph (base name: "@graph")', function() {
      // uncomment below and update the code to test the property graph
      //var instance = new IgvfProjectApi.ReferenceFileResults();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.ReferenceFileResults();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.ReferenceFileResults();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new IgvfProjectApi.ReferenceFileResults();
      //expect(instance).to.be();
    });

    it('should have the property facets (base name: "facets")', function() {
      // uncomment below and update the code to test the property facets
      //var instance = new IgvfProjectApi.ReferenceFileResults();
      //expect(instance).to.be();
    });

  });

}));