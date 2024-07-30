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
    instance = new IgvfProjectApi.DegronModification();
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

  describe('DegronModification', function() {
    it('should create an instance of DegronModification', function() {
      // uncomment below and update the code to test DegronModification
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be.a(IgvfProjectApi.DegronModification);
    });

    it('should have the property releaseTimestamp (base name: "release_timestamp")', function() {
      // uncomment below and update the code to test the property releaseTimestamp
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property sources (base name: "sources")', function() {
      // uncomment below and update the code to test the property sources
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property lotId (base name: "lot_id")', function() {
      // uncomment below and update the code to test the property lotId
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property lab (base name: "lab")', function() {
      // uncomment below and update the code to test the property lab
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property award (base name: "award")', function() {
      // uncomment below and update the code to test the property award
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property schemaVersion (base name: "schema_version")', function() {
      // uncomment below and update the code to test the property schemaVersion
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property creationTimestamp (base name: "creation_timestamp")', function() {
      // uncomment below and update the code to test the property creationTimestamp
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property submittedBy (base name: "submitted_by")', function() {
      // uncomment below and update the code to test the property submittedBy
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property submitterComment (base name: "submitter_comment")', function() {
      // uncomment below and update the code to test the property submitterComment
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property activated (base name: "activated")', function() {
      // uncomment below and update the code to test the property activated
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property activatingAgentTermId (base name: "activating_agent_term_id")', function() {
      // uncomment below and update the code to test the property activatingAgentTermId
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property activatingAgentTermName (base name: "activating_agent_term_name")', function() {
      // uncomment below and update the code to test the property activatingAgentTermName
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property modality (base name: "modality")', function() {
      // uncomment below and update the code to test the property modality
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property degronSystem (base name: "degron_system")', function() {
      // uncomment below and update the code to test the property degronSystem
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property taggedProteins (base name: "tagged_proteins")', function() {
      // uncomment below and update the code to test the property taggedProteins
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

    it('should have the property biosamplesModified (base name: "biosamples_modified")', function() {
      // uncomment below and update the code to test the property biosamplesModified
      //var instance = new IgvfProjectApi.DegronModification();
      //expect(instance).to.be();
    });

  });

}));
