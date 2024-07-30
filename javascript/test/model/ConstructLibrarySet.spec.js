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
    instance = new IgvfProjectApi.ConstructLibrarySet();
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

  describe('ConstructLibrarySet', function() {
    it('should create an instance of ConstructLibrarySet', function() {
      // uncomment below and update the code to test ConstructLibrarySet
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be.a(IgvfProjectApi.ConstructLibrarySet);
    });

    it('should have the property smallScaleLociList (base name: "small_scale_loci_list")', function() {
      // uncomment below and update the code to test the property smallScaleLociList
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property largeScaleLociList (base name: "large_scale_loci_list")', function() {
      // uncomment below and update the code to test the property largeScaleLociList
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property smallScaleGeneList (base name: "small_scale_gene_list")', function() {
      // uncomment below and update the code to test the property smallScaleGeneList
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property largeScaleGeneList (base name: "large_scale_gene_list")', function() {
      // uncomment below and update the code to test the property largeScaleGeneList
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property releaseTimestamp (base name: "release_timestamp")', function() {
      // uncomment below and update the code to test the property releaseTimestamp
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property publications (base name: "publications")', function() {
      // uncomment below and update the code to test the property publications
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property publicationIdentifiers (base name: "publication_identifiers")', function() {
      // uncomment below and update the code to test the property publicationIdentifiers
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property documents (base name: "documents")', function() {
      // uncomment below and update the code to test the property documents
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property sources (base name: "sources")', function() {
      // uncomment below and update the code to test the property sources
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property lotId (base name: "lot_id")', function() {
      // uncomment below and update the code to test the property lotId
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property productId (base name: "product_id")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property lab (base name: "lab")', function() {
      // uncomment below and update the code to test the property lab
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property award (base name: "award")', function() {
      // uncomment below and update the code to test the property award
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property accession (base name: "accession")', function() {
      // uncomment below and update the code to test the property accession
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property alternateAccessions (base name: "alternate_accessions")', function() {
      // uncomment below and update the code to test the property alternateAccessions
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property collections (base name: "collections")', function() {
      // uncomment below and update the code to test the property collections
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property revokeDetail (base name: "revoke_detail")', function() {
      // uncomment below and update the code to test the property revokeDetail
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property schemaVersion (base name: "schema_version")', function() {
      // uncomment below and update the code to test the property schemaVersion
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property aliases (base name: "aliases")', function() {
      // uncomment below and update the code to test the property aliases
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property creationTimestamp (base name: "creation_timestamp")', function() {
      // uncomment below and update the code to test the property creationTimestamp
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property submittedBy (base name: "submitted_by")', function() {
      // uncomment below and update the code to test the property submittedBy
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property submitterComment (base name: "submitter_comment")', function() {
      // uncomment below and update the code to test the property submitterComment
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property fileSetType (base name: "file_set_type")', function() {
      // uncomment below and update the code to test the property fileSetType
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property selectionCriteria (base name: "selection_criteria")', function() {
      // uncomment below and update the code to test the property selectionCriteria
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property integratedContentFiles (base name: "integrated_content_files")', function() {
      // uncomment below and update the code to test the property integratedContentFiles
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property associatedPhenotypes (base name: "associated_phenotypes")', function() {
      // uncomment below and update the code to test the property associatedPhenotypes
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property orfList (base name: "orf_list")', function() {
      // uncomment below and update the code to test the property orfList
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property exon (base name: "exon")', function() {
      // uncomment below and update the code to test the property exon
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property tile (base name: "tile")', function() {
      // uncomment below and update the code to test the property tile
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property guideType (base name: "guide_type")', function() {
      // uncomment below and update the code to test the property guideType
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property tilingModality (base name: "tiling_modality")', function() {
      // uncomment below and update the code to test the property tilingModality
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property averageGuideCoverage (base name: "average_guide_coverage")', function() {
      // uncomment below and update the code to test the property averageGuideCoverage
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property lowerBoundGuideCoverage (base name: "lower_bound_guide_coverage")', function() {
      // uncomment below and update the code to test the property lowerBoundGuideCoverage
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property upperBoundGuideCoverage (base name: "upper_bound_guide_coverage")', function() {
      // uncomment below and update the code to test the property upperBoundGuideCoverage
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property averageInsertSize (base name: "average_insert_size")', function() {
      // uncomment below and update the code to test the property averageInsertSize
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property lowerBoundInsertSize (base name: "lower_bound_insert_size")', function() {
      // uncomment below and update the code to test the property lowerBoundInsertSize
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property upperBoundInsertSize (base name: "upper_bound_insert_size")', function() {
      // uncomment below and update the code to test the property upperBoundInsertSize
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property targeton (base name: "targeton")', function() {
      // uncomment below and update the code to test the property targeton
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property controlFor (base name: "control_for")', function() {
      // uncomment below and update the code to test the property controlFor
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property submittedFilesTimestamp (base name: "submitted_files_timestamp")', function() {
      // uncomment below and update the code to test the property submittedFilesTimestamp
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property inputFileSetFor (base name: "input_file_set_for")', function() {
      // uncomment below and update the code to test the property inputFileSetFor
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

    it('should have the property appliedToSamples (base name: "applied_to_samples")', function() {
      // uncomment below and update the code to test the property appliedToSamples
      //var instance = new IgvfProjectApi.ConstructLibrarySet();
      //expect(instance).to.be();
    });

  });

}));
