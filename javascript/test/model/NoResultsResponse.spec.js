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
    instance = new IgvfProjectApi.NoResultsResponse();
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

  describe('NoResultsResponse', function() {
    it('should create an instance of NoResultsResponse', function() {
      // uncomment below and update the code to test NoResultsResponse
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be.a(IgvfProjectApi.NoResultsResponse);
    });

    it('should have the property context (base name: "@context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property graph (base name: "@graph")', function() {
      // uncomment below and update the code to test the property graph
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property clearFilters (base name: "clear_filters")', function() {
      // uncomment below and update the code to test the property clearFilters
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property columns (base name: "columns")', function() {
      // uncomment below and update the code to test the property columns
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property facetGroups (base name: "facet_groups")', function() {
      // uncomment below and update the code to test the property facetGroups
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property facets (base name: "facets")', function() {
      // uncomment below and update the code to test the property facets
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property filters (base name: "filters")', function() {
      // uncomment below and update the code to test the property filters
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property notification (base name: "notification")', function() {
      // uncomment below and update the code to test the property notification
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new IgvfProjectApi.NoResultsResponse();
      //expect(instance).to.be();
    });

  });

}));
