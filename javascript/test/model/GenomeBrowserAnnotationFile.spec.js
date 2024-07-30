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
    instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
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

  describe('GenomeBrowserAnnotationFile', function() {
    it('should create an instance of GenomeBrowserAnnotationFile', function() {
      // uncomment below and update the code to test GenomeBrowserAnnotationFile
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be.a(IgvfProjectApi.GenomeBrowserAnnotationFile);
    });

    it('should have the property assembly (base name: "assembly")', function() {
      // uncomment below and update the code to test the property assembly
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property releaseTimestamp (base name: "release_timestamp")', function() {
      // uncomment below and update the code to test the property releaseTimestamp
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property fileFormatType (base name: "file_format_type")', function() {
      // uncomment below and update the code to test the property fileFormatType
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property transcriptomeAnnotation (base name: "transcriptome_annotation")', function() {
      // uncomment below and update the code to test the property transcriptomeAnnotation
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property lab (base name: "lab")', function() {
      // uncomment below and update the code to test the property lab
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property award (base name: "award")', function() {
      // uncomment below and update the code to test the property award
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property accession (base name: "accession")', function() {
      // uncomment below and update the code to test the property accession
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property alternateAccessions (base name: "alternate_accessions")', function() {
      // uncomment below and update the code to test the property alternateAccessions
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property collections (base name: "collections")', function() {
      // uncomment below and update the code to test the property collections
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property revokeDetail (base name: "revoke_detail")', function() {
      // uncomment below and update the code to test the property revokeDetail
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property schemaVersion (base name: "schema_version")', function() {
      // uncomment below and update the code to test the property schemaVersion
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property creationTimestamp (base name: "creation_timestamp")', function() {
      // uncomment below and update the code to test the property creationTimestamp
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property submittedBy (base name: "submitted_by")', function() {
      // uncomment below and update the code to test the property submittedBy
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property submitterComment (base name: "submitter_comment")', function() {
      // uncomment below and update the code to test the property submitterComment
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property analysisStepVersion (base name: "analysis_step_version")', function() {
      // uncomment below and update the code to test the property analysisStepVersion
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property contentMd5sum (base name: "content_md5sum")', function() {
      // uncomment below and update the code to test the property contentMd5sum
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "content_type")', function() {
      // uncomment below and update the code to test the property contentType
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property dbxrefs (base name: "dbxrefs")', function() {
      // uncomment below and update the code to test the property dbxrefs
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property derivedFrom (base name: "derived_from")', function() {
      // uncomment below and update the code to test the property derivedFrom
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property fileFormat (base name: "file_format")', function() {
      // uncomment below and update the code to test the property fileFormat
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property fileFormatSpecifications (base name: "file_format_specifications")', function() {
      // uncomment below and update the code to test the property fileFormatSpecifications
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property fileSet (base name: "file_set")', function() {
      // uncomment below and update the code to test the property fileSet
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "file_size")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property md5sum (base name: "md5sum")', function() {
      // uncomment below and update the code to test the property md5sum
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property submittedFileName (base name: "submitted_file_name")', function() {
      // uncomment below and update the code to test the property submittedFileName
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property uploadStatus (base name: "upload_status")', function() {
      // uncomment below and update the code to test the property uploadStatus
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property validationErrorDetail (base name: "validation_error_detail")', function() {
      // uncomment below and update the code to test the property validationErrorDetail
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property integratedIn (base name: "integrated_in")', function() {
      // uncomment below and update the code to test the property integratedIn
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property inputFileFor (base name: "input_file_for")', function() {
      // uncomment below and update the code to test the property inputFileFor
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property geneListFor (base name: "gene_list_for")', function() {
      // uncomment below and update the code to test the property geneListFor
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property lociListFor (base name: "loci_list_for")', function() {
      // uncomment below and update the code to test the property lociListFor
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property href (base name: "href")', function() {
      // uncomment below and update the code to test the property href
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property s3Uri (base name: "s3_uri")', function() {
      // uncomment below and update the code to test the property s3Uri
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

    it('should have the property uploadCredentials (base name: "upload_credentials")', function() {
      // uncomment below and update the code to test the property uploadCredentials
      //var instance = new IgvfProjectApi.GenomeBrowserAnnotationFile();
      //expect(instance).to.be();
    });

  });

}));
