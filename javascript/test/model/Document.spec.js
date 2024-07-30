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
    instance = new IgvfProjectApi.Document();
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

  describe('Document', function() {
    it('should create an instance of Document', function() {
      // uncomment below and update the code to test Document
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be.a(IgvfProjectApi.Document);
    });

    it('should have the property releaseTimestamp (base name: "release_timestamp")', function() {
      // uncomment below and update the code to test the property releaseTimestamp
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property lab (base name: "lab")', function() {
      // uncomment below and update the code to test the property lab
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property award (base name: "award")', function() {
      // uncomment below and update the code to test the property award
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property attachment (base name: "attachment")', function() {
      // uncomment below and update the code to test the property attachment
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property schemaVersion (base name: "schema_version")', function() {
      // uncomment below and update the code to test the property schemaVersion
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property creationTimestamp (base name: "creation_timestamp")', function() {
      // uncomment below and update the code to test the property creationTimestamp
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property submittedBy (base name: "submitted_by")', function() {
      // uncomment below and update the code to test the property submittedBy
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property submitterComment (base name: "submitter_comment")', function() {
      // uncomment below and update the code to test the property submitterComment
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property documentType (base name: "document_type")', function() {
      // uncomment below and update the code to test the property documentType
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property characterizationMethod (base name: "characterization_method")', function() {
      // uncomment below and update the code to test the property characterizationMethod
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property urls (base name: "urls")', function() {
      // uncomment below and update the code to test the property urls
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new IgvfProjectApi.Document();
      //expect(instance).to.be();
    });

  });

}));
