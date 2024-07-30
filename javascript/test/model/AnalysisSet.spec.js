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
    instance = new IgvfProjectApi.AnalysisSet();
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

  describe('AnalysisSet', function() {
    it('should create an instance of AnalysisSet', function() {
      // uncomment below and update the code to test AnalysisSet
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be.a(IgvfProjectApi.AnalysisSet);
    });

    it('should have the property inputFileSets (base name: "input_file_sets")', function() {
      // uncomment below and update the code to test the property inputFileSets
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property releaseTimestamp (base name: "release_timestamp")', function() {
      // uncomment below and update the code to test the property releaseTimestamp
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property publications (base name: "publications")', function() {
      // uncomment below and update the code to test the property publications
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property publicationIdentifiers (base name: "publication_identifiers")', function() {
      // uncomment below and update the code to test the property publicationIdentifiers
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property lab (base name: "lab")', function() {
      // uncomment below and update the code to test the property lab
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property award (base name: "award")', function() {
      // uncomment below and update the code to test the property award
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property accession (base name: "accession")', function() {
      // uncomment below and update the code to test the property accession
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property alternateAccessions (base name: "alternate_accessions")', function() {
      // uncomment below and update the code to test the property alternateAccessions
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property collections (base name: "collections")', function() {
      // uncomment below and update the code to test the property collections
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property revokeDetail (base name: "revoke_detail")', function() {
      // uncomment below and update the code to test the property revokeDetail
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property schemaVersion (base name: "schema_version")', function() {
      // uncomment below and update the code to test the property schemaVersion
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property creationTimestamp (base name: "creation_timestamp")', function() {
      // uncomment below and update the code to test the property creationTimestamp
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property submittedBy (base name: "submitted_by")', function() {
      // uncomment below and update the code to test the property submittedBy
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property submitterComment (base name: "submitter_comment")', function() {
      // uncomment below and update the code to test the property submitterComment
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property dbxrefs (base name: "dbxrefs")', function() {
      // uncomment below and update the code to test the property dbxrefs
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property samples (base name: "samples")', function() {
      // uncomment below and update the code to test the property samples
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property donors (base name: "donors")', function() {
      // uncomment below and update the code to test the property donors
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property fileSetType (base name: "file_set_type")', function() {
      // uncomment below and update the code to test the property fileSetType
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property controlFor (base name: "control_for")', function() {
      // uncomment below and update the code to test the property controlFor
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property submittedFilesTimestamp (base name: "submitted_files_timestamp")', function() {
      // uncomment below and update the code to test the property submittedFilesTimestamp
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property inputFileSetFor (base name: "input_file_set_for")', function() {
      // uncomment below and update the code to test the property inputFileSetFor
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

    it('should have the property assayTitles (base name: "assay_titles")', function() {
      // uncomment below and update the code to test the property assayTitles
      //var instance = new IgvfProjectApi.AnalysisSet();
      //expect(instance).to.be();
    });

  });

}));
