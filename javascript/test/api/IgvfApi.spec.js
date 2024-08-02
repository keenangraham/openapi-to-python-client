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
    instance = new IgvfProjectApi.IgvfApi();
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

  describe('IgvfApi', function() {
    describe('accessKeys', function() {
      it('should call accessKeys successfully', function(done) {
        //uncomment below and update the code to test accessKeys
        //instance.accessKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('alignmentFiles', function() {
      it('should call alignmentFiles successfully', function(done) {
        //uncomment below and update the code to test alignmentFiles
        //instance.alignmentFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analysisSets', function() {
      it('should call analysisSets successfully', function(done) {
        //uncomment below and update the code to test analysisSets
        //instance.analysisSets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analysisStepVersions', function() {
      it('should call analysisStepVersions successfully', function(done) {
        //uncomment below and update the code to test analysisStepVersions
        //instance.analysisStepVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('analysisSteps', function() {
      it('should call analysisSteps successfully', function(done) {
        //uncomment below and update the code to test analysisSteps
        //instance.analysisSteps(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assayTerms', function() {
      it('should call assayTerms successfully', function(done) {
        //uncomment below and update the code to test assayTerms
        //instance.assayTerms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('auxiliarySets', function() {
      it('should call auxiliarySets successfully', function(done) {
        //uncomment below and update the code to test auxiliarySets
        //instance.auxiliarySets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('awards', function() {
      it('should call awards successfully', function(done) {
        //uncomment below and update the code to test awards
        //instance.awards(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('batchDownload', function() {
      it('should call batchDownload successfully', function(done) {
        //uncomment below and update the code to test batchDownload
        //instance.batchDownload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('biomarkers', function() {
      it('should call biomarkers successfully', function(done) {
        //uncomment below and update the code to test biomarkers
        //instance.biomarkers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configurationFiles', function() {
      it('should call configurationFiles successfully', function(done) {
        //uncomment below and update the code to test configurationFiles
        //instance.configurationFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('constructLibrarySets', function() {
      it('should call constructLibrarySets successfully', function(done) {
        //uncomment below and update the code to test constructLibrarySets
        //instance.constructLibrarySets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('crisprModifications', function() {
      it('should call crisprModifications successfully', function(done) {
        //uncomment below and update the code to test crisprModifications
        //instance.crisprModifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('curatedSets', function() {
      it('should call curatedSets successfully', function(done) {
        //uncomment below and update the code to test curatedSets
        //instance.curatedSets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('degronModifications', function() {
      it('should call degronModifications successfully', function(done) {
        //uncomment below and update the code to test degronModifications
        //instance.degronModifications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('documents', function() {
      it('should call documents successfully', function(done) {
        //uncomment below and update the code to test documents
        //instance.documents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('download', function() {
      it('should call download successfully', function(done) {
        //uncomment below and update the code to test download
        //instance.download(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('genes', function() {
      it('should call genes successfully', function(done) {
        //uncomment below and update the code to test genes
        //instance.genes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('genomeBrowserAnnotationFiles', function() {
      it('should call genomeBrowserAnnotationFiles successfully', function(done) {
        //uncomment below and update the code to test genomeBrowserAnnotationFiles
        //instance.genomeBrowserAnnotationFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getById', function() {
      it('should call getById successfully', function(done) {
        //uncomment below and update the code to test getById
        //instance.getById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('humanDonors', function() {
      it('should call humanDonors successfully', function(done) {
        //uncomment below and update the code to test humanDonors
        //instance.humanDonors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('imageFiles', function() {
      it('should call imageFiles successfully', function(done) {
        //uncomment below and update the code to test imageFiles
        //instance.imageFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('images', function() {
      it('should call images successfully', function(done) {
        //uncomment below and update the code to test images
        //instance.images(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inVitroSystems', function() {
      it('should call inVitroSystems successfully', function(done) {
        //uncomment below and update the code to test inVitroSystems
        //instance.inVitroSystems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('institutionalCertificates', function() {
      it('should call institutionalCertificates successfully', function(done) {
        //uncomment below and update the code to test institutionalCertificates
        //instance.institutionalCertificates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('labs', function() {
      it('should call labs successfully', function(done) {
        //uncomment below and update the code to test labs
        //instance.labs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('matrixFiles', function() {
      it('should call matrixFiles successfully', function(done) {
        //uncomment below and update the code to test matrixFiles
        //instance.matrixFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('measurementSets', function() {
      it('should call measurementSets successfully', function(done) {
        //uncomment below and update the code to test measurementSets
        //instance.measurementSets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modelFiles', function() {
      it('should call modelFiles successfully', function(done) {
        //uncomment below and update the code to test modelFiles
        //instance.modelFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modelSets', function() {
      it('should call modelSets successfully', function(done) {
        //uncomment below and update the code to test modelSets
        //instance.modelSets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('multiplexedSamples', function() {
      it('should call multiplexedSamples successfully', function(done) {
        //uncomment below and update the code to test multiplexedSamples
        //instance.multiplexedSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('openReadingFrames', function() {
      it('should call openReadingFrames successfully', function(done) {
        //uncomment below and update the code to test openReadingFrames
        //instance.openReadingFrames(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pages', function() {
      it('should call pages successfully', function(done) {
        //uncomment below and update the code to test pages
        //instance.pages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phenotypeTerms', function() {
      it('should call phenotypeTerms successfully', function(done) {
        //uncomment below and update the code to test phenotypeTerms
        //instance.phenotypeTerms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('phenotypicFeatures', function() {
      it('should call phenotypicFeatures successfully', function(done) {
        //uncomment below and update the code to test phenotypicFeatures
        //instance.phenotypicFeatures(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('platformTerms', function() {
      it('should call platformTerms successfully', function(done) {
        //uncomment below and update the code to test platformTerms
        //instance.platformTerms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('predictionSets', function() {
      it('should call predictionSets successfully', function(done) {
        //uncomment below and update the code to test predictionSets
        //instance.predictionSets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('primaryCells', function() {
      it('should call primaryCells successfully', function(done) {
        //uncomment below and update the code to test primaryCells
        //instance.primaryCells(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publications', function() {
      it('should call publications successfully', function(done) {
        //uncomment below and update the code to test publications
        //instance.publications(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceFiles', function() {
      it('should call referenceFiles successfully', function(done) {
        //uncomment below and update the code to test referenceFiles
        //instance.referenceFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('report', function() {
      it('should call report successfully', function(done) {
        //uncomment below and update the code to test report
        //instance.report(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rodentDonors', function() {
      it('should call rodentDonors successfully', function(done) {
        //uncomment below and update the code to test rodentDonors
        //instance.rodentDonors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sampleTerms', function() {
      it('should call sampleTerms successfully', function(done) {
        //uncomment below and update the code to test sampleTerms
        //instance.sampleTerms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schemaForItemType', function() {
      it('should call schemaForItemType successfully', function(done) {
        //uncomment below and update the code to test schemaForItemType
        //instance.schemaForItemType(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('schemas', function() {
      it('should call schemas successfully', function(done) {
        //uncomment below and update the code to test schemas
        //instance.schemas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('search', function() {
      it('should call search successfully', function(done) {
        //uncomment below and update the code to test search
        //instance.search(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sequenceFiles', function() {
      it('should call sequenceFiles successfully', function(done) {
        //uncomment below and update the code to test sequenceFiles
        //instance.sequenceFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signalFiles', function() {
      it('should call signalFiles successfully', function(done) {
        //uncomment below and update the code to test signalFiles
        //instance.signalFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('software', function() {
      it('should call software successfully', function(done) {
        //uncomment below and update the code to test software
        //instance.software(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('softwareVersions', function() {
      it('should call softwareVersions successfully', function(done) {
        //uncomment below and update the code to test softwareVersions
        //instance.softwareVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sources', function() {
      it('should call sources successfully', function(done) {
        //uncomment below and update the code to test sources
        //instance.sources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tabularFiles', function() {
      it('should call tabularFiles successfully', function(done) {
        //uncomment below and update the code to test tabularFiles
        //instance.tabularFiles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('technicalSamples', function() {
      it('should call technicalSamples successfully', function(done) {
        //uncomment below and update the code to test technicalSamples
        //instance.technicalSamples(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('tissues', function() {
      it('should call tissues successfully', function(done) {
        //uncomment below and update the code to test tissues
        //instance.tissues(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('treatments', function() {
      it('should call treatments successfully', function(done) {
        //uncomment below and update the code to test treatments
        //instance.treatments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('users', function() {
      it('should call users successfully', function(done) {
        //uncomment below and update the code to test users
        //instance.users(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wholeOrganisms', function() {
      it('should call wholeOrganisms successfully', function(done) {
        //uncomment below and update the code to test wholeOrganisms
        //instance.wholeOrganisms(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workflows', function() {
      it('should call workflows successfully', function(done) {
        //uncomment below and update the code to test workflows
        //instance.workflows(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));