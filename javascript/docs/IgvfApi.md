# IgvfProjectApi.IgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accessKeys**](IgvfApi.md#accessKeys) | **GET** /access-keys/@@listing | List items in the AccessKey collection.
[**alignmentFiles**](IgvfApi.md#alignmentFiles) | **GET** /alignment-files/@@listing | List items in the AlignmentFile collection.
[**analysisSets**](IgvfApi.md#analysisSets) | **GET** /analysis-sets/@@listing | List items in the AnalysisSet collection.
[**analysisStepVersions**](IgvfApi.md#analysisStepVersions) | **GET** /analysis-step-versions/@@listing | List items in the AnalysisStepVersion collection.
[**analysisSteps**](IgvfApi.md#analysisSteps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.
[**assayTerms**](IgvfApi.md#assayTerms) | **GET** /assay-terms/@@listing | List items in the AssayTerm collection.
[**auxiliarySets**](IgvfApi.md#auxiliarySets) | **GET** /auxiliary-sets/@@listing | List items in the AuxiliarySet collection.
[**awards**](IgvfApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.
[**batchDownload**](IgvfApi.md#batchDownload) | **GET** /batch-download | List files to download based on search query. All results are returned.
[**biomarkers**](IgvfApi.md#biomarkers) | **GET** /biomarkers/@@listing | List items in the Biomarker collection.
[**configurationFiles**](IgvfApi.md#configurationFiles) | **GET** /configuration-files/@@listing | List items in the ConfigurationFile collection.
[**constructLibrarySets**](IgvfApi.md#constructLibrarySets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.
[**crisprModifications**](IgvfApi.md#crisprModifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.
[**curatedSets**](IgvfApi.md#curatedSets) | **GET** /curated-sets/@@listing | List items in the CuratedSet collection.
[**degronModifications**](IgvfApi.md#degronModifications) | **GET** /degron-modifications/@@listing | List items in the DegronModification collection.
[**documents**](IgvfApi.md#documents) | **GET** /documents/@@listing | List items in the Document collection.
[**download**](IgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
[**genes**](IgvfApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.
[**genomeBrowserAnnotationFiles**](IgvfApi.md#genomeBrowserAnnotationFiles) | **GET** /genome-browser-annotation-files/@@listing | List items in the GenomeBrowserAnnotationFile collection.
[**getById**](IgvfApi.md#getById) | **GET** /{resource_id} | Get item information
[**humanDonors**](IgvfApi.md#humanDonors) | **GET** /human-donors/@@listing | List items in the HumanDonor collection.
[**imageFiles**](IgvfApi.md#imageFiles) | **GET** /image-files/@@listing | List items in the ImageFile collection.
[**images**](IgvfApi.md#images) | **GET** /images/@@listing | List items in the Image collection.
[**inVitroSystems**](IgvfApi.md#inVitroSystems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.
[**institutionalCertificates**](IgvfApi.md#institutionalCertificates) | **GET** /institutional-certificates/@@listing | List items in the InstitutionalCertificate collection.
[**labs**](IgvfApi.md#labs) | **GET** /labs/@@listing | List items in the Lab collection.
[**matrixFiles**](IgvfApi.md#matrixFiles) | **GET** /matrix-files/@@listing | List items in the MatrixFile collection.
[**measurementSets**](IgvfApi.md#measurementSets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.
[**modelFiles**](IgvfApi.md#modelFiles) | **GET** /model-files/@@listing | List items in the ModelFile collection.
[**modelSets**](IgvfApi.md#modelSets) | **GET** /model-sets/@@listing | List items in the ModelSet collection.
[**multiplexedSamples**](IgvfApi.md#multiplexedSamples) | **GET** /multiplexed-samples/@@listing | List items in the MultiplexedSample collection.
[**openReadingFrames**](IgvfApi.md#openReadingFrames) | **GET** /open-reading-frames/@@listing | List items in the OpenReadingFrame collection.
[**pages**](IgvfApi.md#pages) | **GET** /pages/@@listing | List items in the Page collection.
[**phenotypeTerms**](IgvfApi.md#phenotypeTerms) | **GET** /phenotype-terms/@@listing | List items in the PhenotypeTerm collection.
[**phenotypicFeatures**](IgvfApi.md#phenotypicFeatures) | **GET** /phenotypic-features/@@listing | List items in the PhenotypicFeature collection.
[**platformTerms**](IgvfApi.md#platformTerms) | **GET** /platform-terms/@@listing | List items in the PlatformTerm collection.
[**predictionSets**](IgvfApi.md#predictionSets) | **GET** /prediction-sets/@@listing | List items in the PredictionSet collection.
[**primaryCells**](IgvfApi.md#primaryCells) | **GET** /primary-cells/@@listing | List items in the PrimaryCell collection.
[**publications**](IgvfApi.md#publications) | **GET** /publications/@@listing | List items in the Publication collection.
[**referenceFiles**](IgvfApi.md#referenceFiles) | **GET** /reference-files/@@listing | List items in the ReferenceFile collection.
[**report**](IgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
[**rodentDonors**](IgvfApi.md#rodentDonors) | **GET** /rodent-donors/@@listing | List items in the RodentDonor collection.
[**sampleTerms**](IgvfApi.md#sampleTerms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.
[**schemaForItemType**](IgvfApi.md#schemaForItemType) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
[**schemas**](IgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
[**search**](IgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project.
[**sequenceFiles**](IgvfApi.md#sequenceFiles) | **GET** /sequence-files/@@listing | List items in the SequenceFile collection.
[**signalFiles**](IgvfApi.md#signalFiles) | **GET** /signal-files/@@listing | List items in the SignalFile collection.
[**software**](IgvfApi.md#software) | **GET** /software/@@listing | List items in the Software collection.
[**softwareVersions**](IgvfApi.md#softwareVersions) | **GET** /software-versions/@@listing | List items in the SoftwareVersion collection.
[**sources**](IgvfApi.md#sources) | **GET** /sources/@@listing | List items in the Source collection.
[**tabularFiles**](IgvfApi.md#tabularFiles) | **GET** /tabular-files/@@listing | List items in the TabularFile collection.
[**technicalSamples**](IgvfApi.md#technicalSamples) | **GET** /technical-samples/@@listing | List items in the TechnicalSample collection.
[**tissues**](IgvfApi.md#tissues) | **GET** /tissues/@@listing | List items in the Tissue collection.
[**treatments**](IgvfApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.
[**users**](IgvfApi.md#users) | **GET** /users/@@listing | List items in the User collection.
[**wholeOrganisms**](IgvfApi.md#wholeOrganisms) | **GET** /whole-organisms/@@listing | List items in the WholeOrganism collection.
[**workflows**](IgvfApi.md#workflows) | **GET** /workflows/@@listing | List items in the Workflow collection.



## accessKeys

> AccessKeyResults accessKeys(frame, opts)

List items in the AccessKey collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accessKeyId': ["null"], // [String] | Filter by access_key_id
  'aliases': ["null"], // [String] | Filter by aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'notes': ["null"], // [String] | Filter by notes
  'secretAccessKeyHash': ["null"], // [String] | Filter by secret_access_key_hash
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'user': ["null"], // [String] | Filter by user
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.accessKeys(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accessKeyId** | [**[String]**](String.md)| Filter by access_key_id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **secretAccessKeyHash** | [**[String]**](String.md)| Filter by secret_access_key_hash | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **user** | [**[String]**](String.md)| Filter by user | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**AccessKeyResults**](AccessKeyResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## alignmentFiles

> AlignmentFileResults alignmentFiles(frame, opts)

List items in the AlignmentFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'anvilUrl': ["null"], // [String] | Filter by anvil_url
  'assembly': ["null"], // [String] | Filter by assembly
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentSummary': ["null"], // [String] | Filter by content_summary
  'contentType': ["null"], // [String] | Filter by content_type
  'controlledAccess': [null], // [Boolean] | Filter by controlled_access
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'filtered': [null], // [Boolean] | Filter by filtered
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'redacted': [null], // [Boolean] | Filter by redacted
  'referenceFiles': ["null"], // [String] | Filter by reference_files
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'transcriptomeAnnotation': ["null"], // [String] | Filter by transcriptome_annotation
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.alignmentFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **anvilUrl** | [**[String]**](String.md)| Filter by anvil_url | [optional] 
 **assembly** | [**[String]**](String.md)| Filter by assembly | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentSummary** | [**[String]**](String.md)| Filter by content_summary | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **controlledAccess** | [**[Boolean]**](Boolean.md)| Filter by controlled_access | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **filtered** | [**[Boolean]**](Boolean.md)| Filter by filtered | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **redacted** | [**[Boolean]**](Boolean.md)| Filter by redacted | [optional] 
 **referenceFiles** | [**[String]**](String.md)| Filter by reference_files | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **transcriptomeAnnotation** | [**[String]**](String.md)| Filter by transcriptome_annotation | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**AlignmentFileResults**](AlignmentFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analysisSets

> AnalysisSetResults analysisSets(frame, opts)

List items in the AnalysisSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'assayTitles': ["null"], // [String] | Filter by assay_titles
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardContactPiId': ["null"], // [String] | Filter by award.contact_pi.@id
  'awardContactPiTitle': ["null"], // [String] | Filter by award.contact_pi.title
  'awardTitle': ["null"], // [String] | Filter by award.title
  'collections': ["null"], // [String] | Filter by collections
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'donorsId': ["null"], // [String] | Filter by donors.@id
  'donorsAccession': ["null"], // [String] | Filter by donors.accession
  'donorsAliases': ["null"], // [String] | Filter by donors.aliases
  'donorsSex': ["null"], // [String] | Filter by donors.sex
  'donorsStatus': ["null"], // [String] | Filter by donors.status
  'donorsTaxa': ["null"], // [String] | Filter by donors.taxa
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesCreationTimestamp': ["null"], // [String] | Filter by files.creation_timestamp
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesFileSize': [null], // [Number] | Filter by files.file_size
  'filesHref': ["null"], // [String] | Filter by files.href
  'filesS3Uri': ["null"], // [String] | Filter by files.s3_uri
  'filesSequencingPlatform': ["null"], // [String] | Filter by files.sequencing_platform
  'filesSubmittedFileName': ["null"], // [String] | Filter by files.submitted_file_name
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'inputFileSetsId': ["null"], // [String] | Filter by input_file_sets.@id
  'inputFileSetsAccession': ["null"], // [String] | Filter by input_file_sets.accession
  'inputFileSetsAliases': ["null"], // [String] | Filter by input_file_sets.aliases
  'inputFileSetsFileSetType': ["null"], // [String] | Filter by input_file_sets.file_set_type
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'samplesId': ["null"], // [String] | Filter by samples.@id
  'samplesAccession': ["null"], // [String] | Filter by samples.accession
  'samplesAliases': ["null"], // [String] | Filter by samples.aliases
  'samplesCellFateChangeTreatments': ["null"], // [String] | Filter by samples.cell_fate_change_treatments
  'samplesClassifications': ["null"], // [String] | Filter by samples.classifications
  'samplesConstructLibrarySets': ["null"], // [String] | Filter by samples.construct_library_sets
  'samplesDiseaseTermsId': ["null"], // [String] | Filter by samples.disease_terms.@id
  'samplesDiseaseTermsTermName': ["null"], // [String] | Filter by samples.disease_terms.term_name
  'samplesModifications': ["null"], // [String] | Filter by samples.modifications
  'samplesSampleTermsId': ["null"], // [String] | Filter by samples.sample_terms.@id
  'samplesSampleTermsAliases': ["null"], // [String] | Filter by samples.sample_terms.aliases
  'samplesSampleTermsStatus': ["null"], // [String] | Filter by samples.sample_terms.status
  'samplesSampleTermsSummary': ["null"], // [String] | Filter by samples.sample_terms.summary
  'samplesSampleTermsTermName': ["null"], // [String] | Filter by samples.sample_terms.term_name
  'samplesStatus': ["null"], // [String] | Filter by samples.status
  'samplesSummary': ["null"], // [String] | Filter by samples.summary
  'samplesTargetedSampleTermId': ["null"], // [String] | Filter by samples.targeted_sample_term.@id
  'samplesTargetedSampleTermTermName': ["null"], // [String] | Filter by samples.targeted_sample_term.term_name
  'samplesTaxa': ["null"], // [String] | Filter by samples.taxa
  'samplesTreatments': ["null"], // [String] | Filter by samples.treatments
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.analysisSets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **assayTitles** | [**[String]**](String.md)| Filter by assay_titles | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardContactPiId** | [**[String]**](String.md)| Filter by award.contact_pi.@id | [optional] 
 **awardContactPiTitle** | [**[String]**](String.md)| Filter by award.contact_pi.title | [optional] 
 **awardTitle** | [**[String]**](String.md)| Filter by award.title | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donorsId** | [**[String]**](String.md)| Filter by donors.@id | [optional] 
 **donorsAccession** | [**[String]**](String.md)| Filter by donors.accession | [optional] 
 **donorsAliases** | [**[String]**](String.md)| Filter by donors.aliases | [optional] 
 **donorsSex** | [**[String]**](String.md)| Filter by donors.sex | [optional] 
 **donorsStatus** | [**[String]**](String.md)| Filter by donors.status | [optional] 
 **donorsTaxa** | [**[String]**](String.md)| Filter by donors.taxa | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesCreationTimestamp** | [**[String]**](String.md)| Filter by files.creation_timestamp | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesFileSize** | [**[Number]**](Number.md)| Filter by files.file_size | [optional] 
 **filesHref** | [**[String]**](String.md)| Filter by files.href | [optional] 
 **filesS3Uri** | [**[String]**](String.md)| Filter by files.s3_uri | [optional] 
 **filesSequencingPlatform** | [**[String]**](String.md)| Filter by files.sequencing_platform | [optional] 
 **filesSubmittedFileName** | [**[String]**](String.md)| Filter by files.submitted_file_name | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **inputFileSetsId** | [**[String]**](String.md)| Filter by input_file_sets.@id | [optional] 
 **inputFileSetsAccession** | [**[String]**](String.md)| Filter by input_file_sets.accession | [optional] 
 **inputFileSetsAliases** | [**[String]**](String.md)| Filter by input_file_sets.aliases | [optional] 
 **inputFileSetsFileSetType** | [**[String]**](String.md)| Filter by input_file_sets.file_set_type | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **samplesId** | [**[String]**](String.md)| Filter by samples.@id | [optional] 
 **samplesAccession** | [**[String]**](String.md)| Filter by samples.accession | [optional] 
 **samplesAliases** | [**[String]**](String.md)| Filter by samples.aliases | [optional] 
 **samplesCellFateChangeTreatments** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samplesClassifications** | [**[String]**](String.md)| Filter by samples.classifications | [optional] 
 **samplesConstructLibrarySets** | [**[String]**](String.md)| Filter by samples.construct_library_sets | [optional] 
 **samplesDiseaseTermsId** | [**[String]**](String.md)| Filter by samples.disease_terms.@id | [optional] 
 **samplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by samples.disease_terms.term_name | [optional] 
 **samplesModifications** | [**[String]**](String.md)| Filter by samples.modifications | [optional] 
 **samplesSampleTermsId** | [**[String]**](String.md)| Filter by samples.sample_terms.@id | [optional] 
 **samplesSampleTermsAliases** | [**[String]**](String.md)| Filter by samples.sample_terms.aliases | [optional] 
 **samplesSampleTermsStatus** | [**[String]**](String.md)| Filter by samples.sample_terms.status | [optional] 
 **samplesSampleTermsSummary** | [**[String]**](String.md)| Filter by samples.sample_terms.summary | [optional] 
 **samplesSampleTermsTermName** | [**[String]**](String.md)| Filter by samples.sample_terms.term_name | [optional] 
 **samplesStatus** | [**[String]**](String.md)| Filter by samples.status | [optional] 
 **samplesSummary** | [**[String]**](String.md)| Filter by samples.summary | [optional] 
 **samplesTargetedSampleTermId** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samplesTargetedSampleTermTermName** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samplesTaxa** | [**[String]**](String.md)| Filter by samples.taxa | [optional] 
 **samplesTreatments** | [**[String]**](String.md)| Filter by samples.treatments | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**AnalysisSetResults**](AnalysisSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analysisStepVersions

> AnalysisStepVersionResults analysisStepVersions(frame, opts)

List items in the AnalysisStepVersion collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'analysisStepId': ["null"], // [String] | Filter by analysis_step.@id
  'analysisStepName': ["null"], // [String] | Filter by analysis_step.name
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'softwareVersionsId': ["null"], // [String] | Filter by software_versions.@id
  'softwareVersionsName': ["null"], // [String] | Filter by software_versions.name
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.analysisStepVersions(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **analysisStepId** | [**[String]**](String.md)| Filter by analysis_step.@id | [optional] 
 **analysisStepName** | [**[String]**](String.md)| Filter by analysis_step.name | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **softwareVersionsId** | [**[String]**](String.md)| Filter by software_versions.@id | [optional] 
 **softwareVersionsName** | [**[String]**](String.md)| Filter by software_versions.name | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**AnalysisStepVersionResults**](AnalysisStepVersionResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analysisSteps

> AnalysisStepResults analysisSteps(frame, opts)

List items in the AnalysisStep collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'analysisStepTypes': ["null"], // [String] | Filter by analysis_step_types
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'inputContentTypes': ["null"], // [String] | Filter by input_content_types
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'outputContentTypes': ["null"], // [String] | Filter by output_content_types
  'parentsId': ["null"], // [String] | Filter by parents.@id
  'parentsTitle': ["null"], // [String] | Filter by parents.title
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'stepLabel': ["null"], // [String] | Filter by step_label
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'uuid': ["null"], // [String] | Filter by uuid
  'workflowId': ["null"], // [String] | Filter by workflow.@id
  'workflowAccession': ["null"] // [String] | Filter by workflow.accession
};
apiInstance.analysisSteps(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **analysisStepTypes** | [**[String]**](String.md)| Filter by analysis_step_types | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **inputContentTypes** | [**[String]**](String.md)| Filter by input_content_types | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **outputContentTypes** | [**[String]**](String.md)| Filter by output_content_types | [optional] 
 **parentsId** | [**[String]**](String.md)| Filter by parents.@id | [optional] 
 **parentsTitle** | [**[String]**](String.md)| Filter by parents.title | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **stepLabel** | [**[String]**](String.md)| Filter by step_label | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **workflowId** | [**[String]**](String.md)| Filter by workflow.@id | [optional] 
 **workflowAccession** | [**[String]**](String.md)| Filter by workflow.accession | [optional] 

### Return type

[**AnalysisStepResults**](AnalysisStepResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assayTerms

> AssayTermResults assayTerms(frame, opts)

List items in the AssayTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'ancestors': ["null"], // [String] | Filter by ancestors
  'assaySlims': ["null"], // [String] | Filter by assay_slims
  'categorySlims': ["null"], // [String] | Filter by category_slims
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'deprecatedNtrTerms': ["null"], // [String] | Filter by deprecated_ntr_terms
  'description': ["null"], // [String] | Filter by description
  'isA': ["null"], // [String] | Filter by is_a
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'objectiveSlims': ["null"], // [String] | Filter by objective_slims
  'ontology': ["null"], // [String] | Filter by ontology
  'preferredAssayTitles': ["null"], // [String] | Filter by preferred_assay_titles
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'synonyms': ["null"], // [String] | Filter by synonyms
  'termId': ["null"], // [String] | Filter by term_id
  'termName': ["null"], // [String] | Filter by term_name
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.assayTerms(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **ancestors** | [**[String]**](String.md)| Filter by ancestors | [optional] 
 **assaySlims** | [**[String]**](String.md)| Filter by assay_slims | [optional] 
 **categorySlims** | [**[String]**](String.md)| Filter by category_slims | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **deprecatedNtrTerms** | [**[String]**](String.md)| Filter by deprecated_ntr_terms | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **isA** | [**[String]**](String.md)| Filter by is_a | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **objectiveSlims** | [**[String]**](String.md)| Filter by objective_slims | [optional] 
 **ontology** | [**[String]**](String.md)| Filter by ontology | [optional] 
 **preferredAssayTitles** | [**[String]**](String.md)| Filter by preferred_assay_titles | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **synonyms** | [**[String]**](String.md)| Filter by synonyms | [optional] 
 **termId** | [**[String]**](String.md)| Filter by term_id | [optional] 
 **termName** | [**[String]**](String.md)| Filter by term_name | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**AssayTermResults**](AssayTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## auxiliarySets

> AuxiliarySetResults auxiliarySets(frame, opts)

List items in the AuxiliarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardContactPiId': ["null"], // [String] | Filter by award.contact_pi.@id
  'awardContactPiTitle': ["null"], // [String] | Filter by award.contact_pi.title
  'awardTitle': ["null"], // [String] | Filter by award.title
  'collections': ["null"], // [String] | Filter by collections
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'donorsId': ["null"], // [String] | Filter by donors.@id
  'donorsAccession': ["null"], // [String] | Filter by donors.accession
  'donorsAliases': ["null"], // [String] | Filter by donors.aliases
  'donorsSex': ["null"], // [String] | Filter by donors.sex
  'donorsStatus': ["null"], // [String] | Filter by donors.status
  'donorsTaxa': ["null"], // [String] | Filter by donors.taxa
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesCreationTimestamp': ["null"], // [String] | Filter by files.creation_timestamp
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesFileSize': [null], // [Number] | Filter by files.file_size
  'filesHref': ["null"], // [String] | Filter by files.href
  'filesS3Uri': ["null"], // [String] | Filter by files.s3_uri
  'filesSequencingPlatform': ["null"], // [String] | Filter by files.sequencing_platform
  'filesSubmittedFileName': ["null"], // [String] | Filter by files.submitted_file_name
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'libraryConstructionPlatform': ["null"], // [String] | Filter by library_construction_platform
  'measurementSetsId': ["null"], // [String] | Filter by measurement_sets.@id
  'measurementSetsAccession': ["null"], // [String] | Filter by measurement_sets.accession
  'measurementSetsAliases': ["null"], // [String] | Filter by measurement_sets.aliases
  'measurementSetsPreferredAssayTitle': ["null"], // [String] | Filter by measurement_sets.preferred_assay_title
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'samplesId': ["null"], // [String] | Filter by samples.@id
  'samplesAccession': ["null"], // [String] | Filter by samples.accession
  'samplesAliases': ["null"], // [String] | Filter by samples.aliases
  'samplesCellFateChangeTreatments': ["null"], // [String] | Filter by samples.cell_fate_change_treatments
  'samplesClassifications': ["null"], // [String] | Filter by samples.classifications
  'samplesConstructLibrarySets': ["null"], // [String] | Filter by samples.construct_library_sets
  'samplesDiseaseTermsId': ["null"], // [String] | Filter by samples.disease_terms.@id
  'samplesDiseaseTermsTermName': ["null"], // [String] | Filter by samples.disease_terms.term_name
  'samplesModifications': ["null"], // [String] | Filter by samples.modifications
  'samplesSampleTermsId': ["null"], // [String] | Filter by samples.sample_terms.@id
  'samplesSampleTermsAliases': ["null"], // [String] | Filter by samples.sample_terms.aliases
  'samplesSampleTermsStatus': ["null"], // [String] | Filter by samples.sample_terms.status
  'samplesSampleTermsSummary': ["null"], // [String] | Filter by samples.sample_terms.summary
  'samplesSampleTermsTermName': ["null"], // [String] | Filter by samples.sample_terms.term_name
  'samplesStatus': ["null"], // [String] | Filter by samples.status
  'samplesSummary': ["null"], // [String] | Filter by samples.summary
  'samplesTargetedSampleTermId': ["null"], // [String] | Filter by samples.targeted_sample_term.@id
  'samplesTargetedSampleTermTermName': ["null"], // [String] | Filter by samples.targeted_sample_term.term_name
  'samplesTaxa': ["null"], // [String] | Filter by samples.taxa
  'samplesTreatments': ["null"], // [String] | Filter by samples.treatments
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.auxiliarySets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardContactPiId** | [**[String]**](String.md)| Filter by award.contact_pi.@id | [optional] 
 **awardContactPiTitle** | [**[String]**](String.md)| Filter by award.contact_pi.title | [optional] 
 **awardTitle** | [**[String]**](String.md)| Filter by award.title | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donorsId** | [**[String]**](String.md)| Filter by donors.@id | [optional] 
 **donorsAccession** | [**[String]**](String.md)| Filter by donors.accession | [optional] 
 **donorsAliases** | [**[String]**](String.md)| Filter by donors.aliases | [optional] 
 **donorsSex** | [**[String]**](String.md)| Filter by donors.sex | [optional] 
 **donorsStatus** | [**[String]**](String.md)| Filter by donors.status | [optional] 
 **donorsTaxa** | [**[String]**](String.md)| Filter by donors.taxa | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesCreationTimestamp** | [**[String]**](String.md)| Filter by files.creation_timestamp | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesFileSize** | [**[Number]**](Number.md)| Filter by files.file_size | [optional] 
 **filesHref** | [**[String]**](String.md)| Filter by files.href | [optional] 
 **filesS3Uri** | [**[String]**](String.md)| Filter by files.s3_uri | [optional] 
 **filesSequencingPlatform** | [**[String]**](String.md)| Filter by files.sequencing_platform | [optional] 
 **filesSubmittedFileName** | [**[String]**](String.md)| Filter by files.submitted_file_name | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **libraryConstructionPlatform** | [**[String]**](String.md)| Filter by library_construction_platform | [optional] 
 **measurementSetsId** | [**[String]**](String.md)| Filter by measurement_sets.@id | [optional] 
 **measurementSetsAccession** | [**[String]**](String.md)| Filter by measurement_sets.accession | [optional] 
 **measurementSetsAliases** | [**[String]**](String.md)| Filter by measurement_sets.aliases | [optional] 
 **measurementSetsPreferredAssayTitle** | [**[String]**](String.md)| Filter by measurement_sets.preferred_assay_title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **samplesId** | [**[String]**](String.md)| Filter by samples.@id | [optional] 
 **samplesAccession** | [**[String]**](String.md)| Filter by samples.accession | [optional] 
 **samplesAliases** | [**[String]**](String.md)| Filter by samples.aliases | [optional] 
 **samplesCellFateChangeTreatments** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samplesClassifications** | [**[String]**](String.md)| Filter by samples.classifications | [optional] 
 **samplesConstructLibrarySets** | [**[String]**](String.md)| Filter by samples.construct_library_sets | [optional] 
 **samplesDiseaseTermsId** | [**[String]**](String.md)| Filter by samples.disease_terms.@id | [optional] 
 **samplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by samples.disease_terms.term_name | [optional] 
 **samplesModifications** | [**[String]**](String.md)| Filter by samples.modifications | [optional] 
 **samplesSampleTermsId** | [**[String]**](String.md)| Filter by samples.sample_terms.@id | [optional] 
 **samplesSampleTermsAliases** | [**[String]**](String.md)| Filter by samples.sample_terms.aliases | [optional] 
 **samplesSampleTermsStatus** | [**[String]**](String.md)| Filter by samples.sample_terms.status | [optional] 
 **samplesSampleTermsSummary** | [**[String]**](String.md)| Filter by samples.sample_terms.summary | [optional] 
 **samplesSampleTermsTermName** | [**[String]**](String.md)| Filter by samples.sample_terms.term_name | [optional] 
 **samplesStatus** | [**[String]**](String.md)| Filter by samples.status | [optional] 
 **samplesSummary** | [**[String]**](String.md)| Filter by samples.summary | [optional] 
 **samplesTargetedSampleTermId** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samplesTargetedSampleTermTermName** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samplesTaxa** | [**[String]**](String.md)| Filter by samples.taxa | [optional] 
 **samplesTreatments** | [**[String]**](String.md)| Filter by samples.treatments | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**AuxiliarySetResults**](AuxiliarySetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## awards

> AwardResults awards(frame, opts)

List items in the Award collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'component': ["null"], // [String] | Filter by component
  'contactPi': ["null"], // [String] | Filter by contact_pi
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'endDate': ["null"], // [String] | Filter by end_date
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'pis': ["null"], // [String] | Filter by pis
  'project': ["null"], // [String] | Filter by project
  'startDate': ["null"], // [String] | Filter by start_date
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'viewingGroup': ["null"] // [String] | Filter by viewing_group
};
apiInstance.awards(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **component** | [**[String]**](String.md)| Filter by component | [optional] 
 **contactPi** | [**[String]**](String.md)| Filter by contact_pi | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **endDate** | [**[String]**](String.md)| Filter by end_date | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **pis** | [**[String]**](String.md)| Filter by pis | [optional] 
 **project** | [**[String]**](String.md)| Filter by project | [optional] 
 **startDate** | [**[String]**](String.md)| Filter by start_date | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **viewingGroup** | [**[String]**](String.md)| Filter by viewing_group | [optional] 

### Return type

[**AwardResults**](AwardResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## batchDownload

> String batchDownload(type, opts)

List files to download based on search query. All results are returned.

Generates TSV of files contained in FileSets in search results.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let type = ["null"]; // [String] | Type of objects to return. Can be repeated for multiple types.
let opts = {
  'query': "query_example", // String | Query string for searching.
  'fieldFilters': {key: null} // Object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields.
};
apiInstance.batchDownload(type, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**[String]**](String.md)| Type of objects to return. Can be repeated for multiple types. | 
 **query** | **String**| Query string for searching. | [optional] 
 **fieldFilters** | [**Object**](.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

**String**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/tab-separated-values, application/json


## biomarkers

> BiomarkerResults biomarkers(frame, opts)

List items in the Biomarker collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardName': ["null"], // [String] | Filter by award.name
  'biomarkerFor': ["null"], // [String] | Filter by biomarker_for
  'classification': ["null"], // [String] | Filter by classification
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'gene': ["null"], // [String] | Filter by gene
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'name': ["null"], // [String] | Filter by name
  'nameQuantification': ["null"], // [String] | Filter by name_quantification
  'notes': ["null"], // [String] | Filter by notes
  'quantification': ["null"], // [String] | Filter by quantification
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'synonyms': ["null"], // [String] | Filter by synonyms
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.biomarkers(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardName** | [**[String]**](String.md)| Filter by award.name | [optional] 
 **biomarkerFor** | [**[String]**](String.md)| Filter by biomarker_for | [optional] 
 **classification** | [**[String]**](String.md)| Filter by classification | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **gene** | [**[String]**](String.md)| Filter by gene | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **nameQuantification** | [**[String]**](String.md)| Filter by name_quantification | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **quantification** | [**[String]**](String.md)| Filter by quantification | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **synonyms** | [**[String]**](String.md)| Filter by synonyms | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**BiomarkerResults**](BiomarkerResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## configurationFiles

> ConfigurationFileResults configurationFiles(frame, opts)

List items in the ConfigurationFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'seqspecOf': ["null"], // [String] | Filter by seqspec_of
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.configurationFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **seqspecOf** | [**[String]**](String.md)| Filter by seqspec_of | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**ConfigurationFileResults**](ConfigurationFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## constructLibrarySets

> ConstructLibrarySetResults constructLibrarySets(frame, opts)

List items in the ConstructLibrarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'appliedToSamplesId': ["null"], // [String] | Filter by applied_to_samples.@id
  'appliedToSamplesAccession': ["null"], // [String] | Filter by applied_to_samples.accession
  'appliedToSamplesAliases': ["null"], // [String] | Filter by applied_to_samples.aliases
  'appliedToSamplesDiseaseTermsId': ["null"], // [String] | Filter by applied_to_samples.disease_terms.@id
  'appliedToSamplesDiseaseTermsTermName': ["null"], // [String] | Filter by applied_to_samples.disease_terms.term_name
  'appliedToSamplesSampleTermsId': ["null"], // [String] | Filter by applied_to_samples.sample_terms.@id
  'appliedToSamplesSampleTermsTermName': ["null"], // [String] | Filter by applied_to_samples.sample_terms.term_name
  'appliedToSamplesStatus': ["null"], // [String] | Filter by applied_to_samples.status
  'appliedToSamplesSummary': ["null"], // [String] | Filter by applied_to_samples.summary
  'associatedPhenotypesId': ["null"], // [String] | Filter by associated_phenotypes.@id
  'associatedPhenotypesTermId': ["null"], // [String] | Filter by associated_phenotypes.term_id
  'associatedPhenotypesTermName': ["null"], // [String] | Filter by associated_phenotypes.term_name
  'averageGuideCoverage': [null], // [Number] | Filter by average_guide_coverage
  'averageInsertSize': [null], // [Number] | Filter by average_insert_size
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'exon': ["null"], // [String] | Filter by exon
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'guideType': ["null"], // [String] | Filter by guide_type
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'integratedContentFiles': ["null"], // [String] | Filter by integrated_content_files
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'largeScaleGeneListId': ["null"], // [String] | Filter by large_scale_gene_list.@id
  'largeScaleGeneListAccession': ["null"], // [String] | Filter by large_scale_gene_list.accession
  'largeScaleGeneListAliases': ["null"], // [String] | Filter by large_scale_gene_list.aliases
  'largeScaleLociListId': ["null"], // [String] | Filter by large_scale_loci_list.@id
  'largeScaleLociListAccession': ["null"], // [String] | Filter by large_scale_loci_list.accession
  'largeScaleLociListAliases': ["null"], // [String] | Filter by large_scale_loci_list.aliases
  'lotId': ["null"], // [String] | Filter by lot_id
  'lowerBoundGuideCoverage': [null], // [Number] | Filter by lower_bound_guide_coverage
  'lowerBoundInsertSize': [null], // [Number] | Filter by lower_bound_insert_size
  'notes': ["null"], // [String] | Filter by notes
  'orfListId': ["null"], // [String] | Filter by orf_list.@id
  'orfListAliases': ["null"], // [String] | Filter by orf_list.aliases
  'orfListGene': ["null"], // [String] | Filter by orf_list.gene
  'orfListOrfId': ["null"], // [String] | Filter by orf_list.orf_id
  'productId': ["null"], // [String] | Filter by product_id
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'scope': ["null"], // [String] | Filter by scope
  'selectionCriteria': ["null"], // [String] | Filter by selection_criteria
  'smallScaleGeneListId': ["null"], // [String] | Filter by small_scale_gene_list.@id
  'smallScaleGeneListGeneid': ["null"], // [String] | Filter by small_scale_gene_list.geneid
  'smallScaleGeneListName': ["null"], // [String] | Filter by small_scale_gene_list.name
  'smallScaleGeneListSymbol': ["null"], // [String] | Filter by small_scale_gene_list.symbol
  'smallScaleGeneListSynonyms': ["null"], // [String] | Filter by small_scale_gene_list.synonyms
  'smallScaleLociList': [new IgvfProjectApi.Locus()], // [Locus] | Filter by small_scale_loci_list
  'sources': ["null"], // [String] | Filter by sources
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'targeton': ["null"], // [String] | Filter by targeton
  'tilingModality': ["null"], // [String] | Filter by tiling_modality
  'upperBoundGuideCoverage': [null], // [Number] | Filter by upper_bound_guide_coverage
  'upperBoundInsertSize': [null], // [Number] | Filter by upper_bound_insert_size
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.constructLibrarySets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **appliedToSamplesId** | [**[String]**](String.md)| Filter by applied_to_samples.@id | [optional] 
 **appliedToSamplesAccession** | [**[String]**](String.md)| Filter by applied_to_samples.accession | [optional] 
 **appliedToSamplesAliases** | [**[String]**](String.md)| Filter by applied_to_samples.aliases | [optional] 
 **appliedToSamplesDiseaseTermsId** | [**[String]**](String.md)| Filter by applied_to_samples.disease_terms.@id | [optional] 
 **appliedToSamplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by applied_to_samples.disease_terms.term_name | [optional] 
 **appliedToSamplesSampleTermsId** | [**[String]**](String.md)| Filter by applied_to_samples.sample_terms.@id | [optional] 
 **appliedToSamplesSampleTermsTermName** | [**[String]**](String.md)| Filter by applied_to_samples.sample_terms.term_name | [optional] 
 **appliedToSamplesStatus** | [**[String]**](String.md)| Filter by applied_to_samples.status | [optional] 
 **appliedToSamplesSummary** | [**[String]**](String.md)| Filter by applied_to_samples.summary | [optional] 
 **associatedPhenotypesId** | [**[String]**](String.md)| Filter by associated_phenotypes.@id | [optional] 
 **associatedPhenotypesTermId** | [**[String]**](String.md)| Filter by associated_phenotypes.term_id | [optional] 
 **associatedPhenotypesTermName** | [**[String]**](String.md)| Filter by associated_phenotypes.term_name | [optional] 
 **averageGuideCoverage** | [**[Number]**](Number.md)| Filter by average_guide_coverage | [optional] 
 **averageInsertSize** | [**[Number]**](Number.md)| Filter by average_insert_size | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **exon** | [**[String]**](String.md)| Filter by exon | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **guideType** | [**[String]**](String.md)| Filter by guide_type | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **integratedContentFiles** | [**[String]**](String.md)| Filter by integrated_content_files | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **largeScaleGeneListId** | [**[String]**](String.md)| Filter by large_scale_gene_list.@id | [optional] 
 **largeScaleGeneListAccession** | [**[String]**](String.md)| Filter by large_scale_gene_list.accession | [optional] 
 **largeScaleGeneListAliases** | [**[String]**](String.md)| Filter by large_scale_gene_list.aliases | [optional] 
 **largeScaleLociListId** | [**[String]**](String.md)| Filter by large_scale_loci_list.@id | [optional] 
 **largeScaleLociListAccession** | [**[String]**](String.md)| Filter by large_scale_loci_list.accession | [optional] 
 **largeScaleLociListAliases** | [**[String]**](String.md)| Filter by large_scale_loci_list.aliases | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **lowerBoundGuideCoverage** | [**[Number]**](Number.md)| Filter by lower_bound_guide_coverage | [optional] 
 **lowerBoundInsertSize** | [**[Number]**](Number.md)| Filter by lower_bound_insert_size | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **orfListId** | [**[String]**](String.md)| Filter by orf_list.@id | [optional] 
 **orfListAliases** | [**[String]**](String.md)| Filter by orf_list.aliases | [optional] 
 **orfListGene** | [**[String]**](String.md)| Filter by orf_list.gene | [optional] 
 **orfListOrfId** | [**[String]**](String.md)| Filter by orf_list.orf_id | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **scope** | [**[String]**](String.md)| Filter by scope | [optional] 
 **selectionCriteria** | [**[String]**](String.md)| Filter by selection_criteria | [optional] 
 **smallScaleGeneListId** | [**[String]**](String.md)| Filter by small_scale_gene_list.@id | [optional] 
 **smallScaleGeneListGeneid** | [**[String]**](String.md)| Filter by small_scale_gene_list.geneid | [optional] 
 **smallScaleGeneListName** | [**[String]**](String.md)| Filter by small_scale_gene_list.name | [optional] 
 **smallScaleGeneListSymbol** | [**[String]**](String.md)| Filter by small_scale_gene_list.symbol | [optional] 
 **smallScaleGeneListSynonyms** | [**[String]**](String.md)| Filter by small_scale_gene_list.synonyms | [optional] 
 **smallScaleLociList** | [**[Locus]**](Locus.md)| Filter by small_scale_loci_list | [optional] 
 **sources** | [**[String]**](String.md)| Filter by sources | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **targeton** | [**[String]**](String.md)| Filter by targeton | [optional] 
 **tilingModality** | [**[String]**](String.md)| Filter by tiling_modality | [optional] 
 **upperBoundGuideCoverage** | [**[Number]**](Number.md)| Filter by upper_bound_guide_coverage | [optional] 
 **upperBoundInsertSize** | [**[Number]**](Number.md)| Filter by upper_bound_insert_size | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**ConstructLibrarySetResults**](ConstructLibrarySetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## crisprModifications

> CrisprModificationResults crisprModifications(frame, opts)

List items in the CrisprModification collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'activated': [null], // [Boolean] | Filter by activated
  'activatingAgentTermId': ["null"], // [String] | Filter by activating_agent_term_id
  'activatingAgentTermName': ["null"], // [String] | Filter by activating_agent_term_name
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biosamplesModified': ["null"], // [String] | Filter by biosamples_modified
  'cas': ["null"], // [String] | Filter by cas
  'casSpecies': ["null"], // [String] | Filter by cas_species
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fusedDomain': ["null"], // [String] | Filter by fused_domain
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'modality': ["null"], // [String] | Filter by modality
  'notes': ["null"], // [String] | Filter by notes
  'productId': ["null"], // [String] | Filter by product_id
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'sources': ["null"], // [String] | Filter by sources
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taggedProtein': ["null"], // [String] | Filter by tagged_protein
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.crisprModifications(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **activated** | [**[Boolean]**](Boolean.md)| Filter by activated | [optional] 
 **activatingAgentTermId** | [**[String]**](String.md)| Filter by activating_agent_term_id | [optional] 
 **activatingAgentTermName** | [**[String]**](String.md)| Filter by activating_agent_term_name | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biosamplesModified** | [**[String]**](String.md)| Filter by biosamples_modified | [optional] 
 **cas** | [**[String]**](String.md)| Filter by cas | [optional] 
 **casSpecies** | [**[String]**](String.md)| Filter by cas_species | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fusedDomain** | [**[String]**](String.md)| Filter by fused_domain | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **modality** | [**[String]**](String.md)| Filter by modality | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **sources** | [**[String]**](String.md)| Filter by sources | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taggedProtein** | [**[String]**](String.md)| Filter by tagged_protein | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**CrisprModificationResults**](CrisprModificationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## curatedSets

> CuratedSetResults curatedSets(frame, opts)

List items in the CuratedSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'assemblies': ["null"], // [String] | Filter by assemblies
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardContactPiId': ["null"], // [String] | Filter by award.contact_pi.@id
  'awardContactPiTitle': ["null"], // [String] | Filter by award.contact_pi.title
  'awardTitle': ["null"], // [String] | Filter by award.title
  'collections': ["null"], // [String] | Filter by collections
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'donorsId': ["null"], // [String] | Filter by donors.@id
  'donorsAccession': ["null"], // [String] | Filter by donors.accession
  'donorsAliases': ["null"], // [String] | Filter by donors.aliases
  'donorsSex': ["null"], // [String] | Filter by donors.sex
  'donorsStatus': ["null"], // [String] | Filter by donors.status
  'donorsTaxa': ["null"], // [String] | Filter by donors.taxa
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesCreationTimestamp': ["null"], // [String] | Filter by files.creation_timestamp
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesFileSize': [null], // [Number] | Filter by files.file_size
  'filesHref': ["null"], // [String] | Filter by files.href
  'filesS3Uri': ["null"], // [String] | Filter by files.s3_uri
  'filesSequencingPlatform': ["null"], // [String] | Filter by files.sequencing_platform
  'filesSubmittedFileName': ["null"], // [String] | Filter by files.submitted_file_name
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'samplesId': ["null"], // [String] | Filter by samples.@id
  'samplesAccession': ["null"], // [String] | Filter by samples.accession
  'samplesAliases': ["null"], // [String] | Filter by samples.aliases
  'samplesCellFateChangeTreatments': ["null"], // [String] | Filter by samples.cell_fate_change_treatments
  'samplesClassifications': ["null"], // [String] | Filter by samples.classifications
  'samplesConstructLibrarySets': ["null"], // [String] | Filter by samples.construct_library_sets
  'samplesDiseaseTermsId': ["null"], // [String] | Filter by samples.disease_terms.@id
  'samplesDiseaseTermsTermName': ["null"], // [String] | Filter by samples.disease_terms.term_name
  'samplesModifications': ["null"], // [String] | Filter by samples.modifications
  'samplesSampleTermsId': ["null"], // [String] | Filter by samples.sample_terms.@id
  'samplesSampleTermsAliases': ["null"], // [String] | Filter by samples.sample_terms.aliases
  'samplesSampleTermsStatus': ["null"], // [String] | Filter by samples.sample_terms.status
  'samplesSampleTermsSummary': ["null"], // [String] | Filter by samples.sample_terms.summary
  'samplesSampleTermsTermName': ["null"], // [String] | Filter by samples.sample_terms.term_name
  'samplesStatus': ["null"], // [String] | Filter by samples.status
  'samplesSummary': ["null"], // [String] | Filter by samples.summary
  'samplesTargetedSampleTermId': ["null"], // [String] | Filter by samples.targeted_sample_term.@id
  'samplesTargetedSampleTermTermName': ["null"], // [String] | Filter by samples.targeted_sample_term.term_name
  'samplesTaxa': ["null"], // [String] | Filter by samples.taxa
  'samplesTreatments': ["null"], // [String] | Filter by samples.treatments
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'transcriptomeAnnotations': ["null"], // [String] | Filter by transcriptome_annotations
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.curatedSets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **assemblies** | [**[String]**](String.md)| Filter by assemblies | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardContactPiId** | [**[String]**](String.md)| Filter by award.contact_pi.@id | [optional] 
 **awardContactPiTitle** | [**[String]**](String.md)| Filter by award.contact_pi.title | [optional] 
 **awardTitle** | [**[String]**](String.md)| Filter by award.title | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donorsId** | [**[String]**](String.md)| Filter by donors.@id | [optional] 
 **donorsAccession** | [**[String]**](String.md)| Filter by donors.accession | [optional] 
 **donorsAliases** | [**[String]**](String.md)| Filter by donors.aliases | [optional] 
 **donorsSex** | [**[String]**](String.md)| Filter by donors.sex | [optional] 
 **donorsStatus** | [**[String]**](String.md)| Filter by donors.status | [optional] 
 **donorsTaxa** | [**[String]**](String.md)| Filter by donors.taxa | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesCreationTimestamp** | [**[String]**](String.md)| Filter by files.creation_timestamp | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesFileSize** | [**[Number]**](Number.md)| Filter by files.file_size | [optional] 
 **filesHref** | [**[String]**](String.md)| Filter by files.href | [optional] 
 **filesS3Uri** | [**[String]**](String.md)| Filter by files.s3_uri | [optional] 
 **filesSequencingPlatform** | [**[String]**](String.md)| Filter by files.sequencing_platform | [optional] 
 **filesSubmittedFileName** | [**[String]**](String.md)| Filter by files.submitted_file_name | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **samplesId** | [**[String]**](String.md)| Filter by samples.@id | [optional] 
 **samplesAccession** | [**[String]**](String.md)| Filter by samples.accession | [optional] 
 **samplesAliases** | [**[String]**](String.md)| Filter by samples.aliases | [optional] 
 **samplesCellFateChangeTreatments** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samplesClassifications** | [**[String]**](String.md)| Filter by samples.classifications | [optional] 
 **samplesConstructLibrarySets** | [**[String]**](String.md)| Filter by samples.construct_library_sets | [optional] 
 **samplesDiseaseTermsId** | [**[String]**](String.md)| Filter by samples.disease_terms.@id | [optional] 
 **samplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by samples.disease_terms.term_name | [optional] 
 **samplesModifications** | [**[String]**](String.md)| Filter by samples.modifications | [optional] 
 **samplesSampleTermsId** | [**[String]**](String.md)| Filter by samples.sample_terms.@id | [optional] 
 **samplesSampleTermsAliases** | [**[String]**](String.md)| Filter by samples.sample_terms.aliases | [optional] 
 **samplesSampleTermsStatus** | [**[String]**](String.md)| Filter by samples.sample_terms.status | [optional] 
 **samplesSampleTermsSummary** | [**[String]**](String.md)| Filter by samples.sample_terms.summary | [optional] 
 **samplesSampleTermsTermName** | [**[String]**](String.md)| Filter by samples.sample_terms.term_name | [optional] 
 **samplesStatus** | [**[String]**](String.md)| Filter by samples.status | [optional] 
 **samplesSummary** | [**[String]**](String.md)| Filter by samples.summary | [optional] 
 **samplesTargetedSampleTermId** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samplesTargetedSampleTermTermName** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samplesTaxa** | [**[String]**](String.md)| Filter by samples.taxa | [optional] 
 **samplesTreatments** | [**[String]**](String.md)| Filter by samples.treatments | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **transcriptomeAnnotations** | [**[String]**](String.md)| Filter by transcriptome_annotations | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**CuratedSetResults**](CuratedSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## degronModifications

> DegronModificationResults degronModifications(frame, opts)

List items in the DegronModification collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'activated': [null], // [Boolean] | Filter by activated
  'activatingAgentTermId': ["null"], // [String] | Filter by activating_agent_term_id
  'activatingAgentTermName': ["null"], // [String] | Filter by activating_agent_term_name
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biosamplesModified': ["null"], // [String] | Filter by biosamples_modified
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'degronSystem': ["null"], // [String] | Filter by degron_system
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'modality': ["null"], // [String] | Filter by modality
  'notes': ["null"], // [String] | Filter by notes
  'productId': ["null"], // [String] | Filter by product_id
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'sources': ["null"], // [String] | Filter by sources
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taggedProteins': ["null"], // [String] | Filter by tagged_proteins
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.degronModifications(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **activated** | [**[Boolean]**](Boolean.md)| Filter by activated | [optional] 
 **activatingAgentTermId** | [**[String]**](String.md)| Filter by activating_agent_term_id | [optional] 
 **activatingAgentTermName** | [**[String]**](String.md)| Filter by activating_agent_term_name | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biosamplesModified** | [**[String]**](String.md)| Filter by biosamples_modified | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **degronSystem** | [**[String]**](String.md)| Filter by degron_system | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **modality** | [**[String]**](String.md)| Filter by modality | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **sources** | [**[String]**](String.md)| Filter by sources | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taggedProteins** | [**[String]**](String.md)| Filter by tagged_proteins | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**DegronModificationResults**](DegronModificationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## documents

> DocumentResults documents(frame, opts)

List items in the Document collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'characterizationMethod': ["null"], // [String] | Filter by characterization_method
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'documentType': ["null"], // [String] | Filter by document_type
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'urls': ["null"], // [String] | Filter by urls
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.documents(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **characterizationMethod** | [**[String]**](String.md)| Filter by characterization_method | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documentType** | [**[String]**](String.md)| Filter by document_type | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **urls** | [**[String]**](String.md)| Filter by urls | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**DocumentResults**](DocumentResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## download

> File download(fileId)

Download file.

Returns underlying file associated with file metadata

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let fileId = "fileId_example"; // String | The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03).
apiInstance.download(fileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| The unique identifier for the file to download, e.g. @id (/tabular-files/IGVFFI8092FZKL/), accession (IGVFFI8092FZKL), or UUID (fdbdc159-e5b9-40a8-b788-3f72c9886b03). | 

### Return type

**File**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## genes

> GeneResults genes(frame, opts)

List items in the Gene collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'geneid': ["null"], // [String] | Filter by geneid
  'geneidWithVersion': ["null"], // [String] | Filter by geneid_with_version
  'locations': [new IgvfProjectApi.GeneLocation()], // [GeneLocation] | Filter by locations
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'symbol': ["null"], // [String] | Filter by symbol
  'synonyms': ["null"], // [String] | Filter by synonyms
  'taxa': ["null"], // [String] | Filter by taxa
  'title': ["null"], // [String] | Filter by title
  'transcriptomeAnnotation': ["null"], // [String] | Filter by transcriptome_annotation
  'uuid': ["null"], // [String] | Filter by uuid
  'versionNumber': ["null"] // [String] | Filter by version_number
};
apiInstance.genes(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **geneid** | [**[String]**](String.md)| Filter by geneid | [optional] 
 **geneidWithVersion** | [**[String]**](String.md)| Filter by geneid_with_version | [optional] 
 **locations** | [**[GeneLocation]**](GeneLocation.md)| Filter by locations | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **symbol** | [**[String]**](String.md)| Filter by symbol | [optional] 
 **synonyms** | [**[String]**](String.md)| Filter by synonyms | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **transcriptomeAnnotation** | [**[String]**](String.md)| Filter by transcriptome_annotation | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **versionNumber** | [**[String]**](String.md)| Filter by version_number | [optional] 

### Return type

[**GeneResults**](GeneResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## genomeBrowserAnnotationFiles

> GenomeBrowserAnnotationFileResults genomeBrowserAnnotationFiles(frame, opts)

List items in the GenomeBrowserAnnotationFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'assembly': ["null"], // [String] | Filter by assembly
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileFormatType': ["null"], // [String] | Filter by file_format_type
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'transcriptomeAnnotation': ["null"], // [String] | Filter by transcriptome_annotation
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.genomeBrowserAnnotationFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **assembly** | [**[String]**](String.md)| Filter by assembly | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileFormatType** | [**[String]**](String.md)| Filter by file_format_type | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **transcriptomeAnnotation** | [**[String]**](String.md)| Filter by transcriptome_annotation | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**GenomeBrowserAnnotationFileResults**](GenomeBrowserAnnotationFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getById

> Item getById(resourceId, frame)

Get item information

Retrieve detailed information about a specific item using its @id or uuid.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let resourceId = "/sequence-files/IGVFFI1165AJSO/"; // String | The unique identifier for the resource i.e. @id (`/sequence-files/IGVFFI1165AJSO/`), accession (`IGVFFI1165AJSO`) or UUID (`fffcd64e-af02-4675-8953-7352459ee06a`).
let frame = "frame_example"; // String | Constant value. Do not set.
apiInstance.getById(resourceId, frame, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceId** | **String**| The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;). | 
 **frame** | **String**| Constant value. Do not set. | 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## humanDonors

> HumanDonorResults humanDonors(frame, opts)

List items in the HumanDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'ethnicities': ["null"], // [String] | Filter by ethnicities
  'humanDonorIdentifiers': ["null"], // [String] | Filter by human_donor_identifiers
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'phenotypicFeaturesId': ["null"], // [String] | Filter by phenotypic_features.@id
  'phenotypicFeaturesFeatureId': ["null"], // [String] | Filter by phenotypic_features.feature.@id
  'phenotypicFeaturesFeatureTermId': ["null"], // [String] | Filter by phenotypic_features.feature.term_id
  'phenotypicFeaturesFeatureTermName': ["null"], // [String] | Filter by phenotypic_features.feature.term_name
  'phenotypicFeaturesObservationDate': ["null"], // [String] | Filter by phenotypic_features.observation_date
  'phenotypicFeaturesQuantityUnits': ["null"], // [String] | Filter by phenotypic_features.quantity_units
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'relatedDonorsDonorId': ["null"], // [String] | Filter by related_donors.donor.@id
  'relatedDonorsDonorAccession': ["null"], // [String] | Filter by related_donors.donor.accession
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sex': ["null"], // [String] | Filter by sex
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.humanDonors(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **ethnicities** | [**[String]**](String.md)| Filter by ethnicities | [optional] 
 **humanDonorIdentifiers** | [**[String]**](String.md)| Filter by human_donor_identifiers | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **phenotypicFeaturesId** | [**[String]**](String.md)| Filter by phenotypic_features.@id | [optional] 
 **phenotypicFeaturesFeatureId** | [**[String]**](String.md)| Filter by phenotypic_features.feature.@id | [optional] 
 **phenotypicFeaturesFeatureTermId** | [**[String]**](String.md)| Filter by phenotypic_features.feature.term_id | [optional] 
 **phenotypicFeaturesFeatureTermName** | [**[String]**](String.md)| Filter by phenotypic_features.feature.term_name | [optional] 
 **phenotypicFeaturesObservationDate** | [**[String]**](String.md)| Filter by phenotypic_features.observation_date | [optional] 
 **phenotypicFeaturesQuantityUnits** | [**[String]**](String.md)| Filter by phenotypic_features.quantity_units | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **relatedDonorsDonorId** | [**[String]**](String.md)| Filter by related_donors.donor.@id | [optional] 
 **relatedDonorsDonorAccession** | [**[String]**](String.md)| Filter by related_donors.donor.accession | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sex** | [**[String]**](String.md)| Filter by sex | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**HumanDonorResults**](HumanDonorResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## imageFiles

> ImageFileResults imageFiles(frame, opts)

List items in the ImageFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.imageFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**ImageFileResults**](ImageFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## images

> ImageResults images(frame, opts)

List items in the Image collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'caption': ["null"], // [String] | Filter by caption
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'downloadUrl': ["null"], // [String] | Filter by download_url
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'thumbNail': ["null"], // [String] | Filter by thumb_nail
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.images(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **caption** | [**[String]**](String.md)| Filter by caption | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **downloadUrl** | [**[String]**](String.md)| Filter by download_url | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **thumbNail** | [**[String]**](String.md)| Filter by thumb_nail | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**ImageResults**](ImageResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## inVitroSystems

> InVitroSystemResults inVitroSystems(frame, opts)

List items in the InVitroSystem collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'age': ["null"], // [String] | Filter by age
  'ageUnits': ["null"], // [String] | Filter by age_units
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biomarkers': ["null"], // [String] | Filter by biomarkers
  'cellFateChangeProtocol': ["null"], // [String] | Filter by cell_fate_change_protocol
  'cellFateChangeTreatmentsId': ["null"], // [String] | Filter by cell_fate_change_treatments.@id
  'cellFateChangeTreatmentsPurpose': ["null"], // [String] | Filter by cell_fate_change_treatments.purpose
  'cellFateChangeTreatmentsStatus': ["null"], // [String] | Filter by cell_fate_change_treatments.status
  'cellFateChangeTreatmentsSummary': ["null"], // [String] | Filter by cell_fate_change_treatments.summary
  'cellFateChangeTreatmentsTreatmentType': ["null"], // [String] | Filter by cell_fate_change_treatments.treatment_type
  'cellularSubPool': ["null"], // [String] | Filter by cellular_sub_pool
  'classifications': ["null"], // [String] | Filter by classifications
  'collections': ["null"], // [String] | Filter by collections
  'constructLibrarySets': ["null"], // [String] | Filter by construct_library_sets
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dateObtained': ["null"], // [String] | Filter by date_obtained
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'demultiplexedFrom': ["null"], // [String] | Filter by demultiplexed_from
  'demultiplexedTo': ["null"], // [String] | Filter by demultiplexed_to
  'description': ["null"], // [String] | Filter by description
  'diseaseTermsId': ["null"], // [String] | Filter by disease_terms.@id
  'diseaseTermsTermName': ["null"], // [String] | Filter by disease_terms.term_name
  'documents': ["null"], // [String] | Filter by documents
  'donors': ["null"], // [String] | Filter by donors
  'embryonic': [null], // [Boolean] | Filter by embryonic
  'fileSetsId': ["null"], // [String] | Filter by file_sets.@id
  'fileSetsAccession': ["null"], // [String] | Filter by file_sets.accession
  'fileSetsAliases': ["null"], // [String] | Filter by file_sets.aliases
  'fileSetsAssayTermTermName': ["null"], // [String] | Filter by file_sets.assay_term.term_name
  'fileSetsLabTitle': ["null"], // [String] | Filter by file_sets.lab.title
  'fileSetsStatus': ["null"], // [String] | Filter by file_sets.status
  'fileSetsSummary': ["null"], // [String] | Filter by file_sets.summary
  'growthMedium': ["null"], // [String] | Filter by growth_medium
  'institutionalCertificatesId': ["null"], // [String] | Filter by institutional_certificates.@id
  'institutionalCertificatesCertificateIdentifier': ["null"], // [String] | Filter by institutional_certificates.certificate_identifier
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'lowerBoundAge': [null], // [Number] | Filter by lower_bound_age
  'lowerBoundAgeInHours': [null], // [Number] | Filter by lower_bound_age_in_hours
  'modificationsId': ["null"], // [String] | Filter by modifications.@id
  'modificationsStatus': ["null"], // [String] | Filter by modifications.status
  'modificationsSummary': ["null"], // [String] | Filter by modifications.summary
  'moi': [null], // [Number] | Filter by moi
  'multiplexedInId': ["null"], // [String] | Filter by multiplexed_in.@id
  'multiplexedInAccession': ["null"], // [String] | Filter by multiplexed_in.accession
  'notes': ["null"], // [String] | Filter by notes
  'nucleicAcidDelivery': ["null"], // [String] | Filter by nucleic_acid_delivery
  'originOf': ["null"], // [String] | Filter by origin_of
  'originatedFromId': ["null"], // [String] | Filter by originated_from.@id
  'originatedFromAccession': ["null"], // [String] | Filter by originated_from.accession
  'partOf': ["null"], // [String] | Filter by part_of
  'parts': ["null"], // [String] | Filter by parts
  'passageNumber': [null], // [Number] | Filter by passage_number
  'pooledFrom': ["null"], // [String] | Filter by pooled_from
  'pooledIn': ["null"], // [String] | Filter by pooled_in
  'productId': ["null"], // [String] | Filter by product_id
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sampleTermsId': ["null"], // [String] | Filter by sample_terms.@id
  'sampleTermsTermName': ["null"], // [String] | Filter by sample_terms.term_name
  'sex': ["null"], // [String] | Filter by sex
  'sortedFractions': ["null"], // [String] | Filter by sorted_fractions
  'sortedFromId': ["null"], // [String] | Filter by sorted_from.@id
  'sortedFromAccession': ["null"], // [String] | Filter by sorted_from.accession
  'sortedFromDetail': ["null"], // [String] | Filter by sorted_from_detail
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'startingAmount': [null], // [Number] | Filter by starting_amount
  'startingAmountUnits': ["null"], // [String] | Filter by starting_amount_units
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'targetedSampleTerm': ["null"], // [String] | Filter by targeted_sample_term
  'taxa': ["null"], // [String] | Filter by taxa
  'timePostChange': [null], // [Number] | Filter by time_post_change
  'timePostChangeUnits': ["null"], // [String] | Filter by time_post_change_units
  'timePostLibraryDelivery': [null], // [Number] | Filter by time_post_library_delivery
  'timePostLibraryDeliveryUnits': ["null"], // [String] | Filter by time_post_library_delivery_units
  'treatmentsId': ["null"], // [String] | Filter by treatments.@id
  'treatmentsPurpose': ["null"], // [String] | Filter by treatments.purpose
  'treatmentsStatus': ["null"], // [String] | Filter by treatments.status
  'treatmentsSummary': ["null"], // [String] | Filter by treatments.summary
  'treatmentsTreatmentType': ["null"], // [String] | Filter by treatments.treatment_type
  'upperBoundAge': [null], // [Number] | Filter by upper_bound_age
  'upperBoundAgeInHours': [null], // [Number] | Filter by upper_bound_age_in_hours
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.inVitroSystems(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **age** | [**[String]**](String.md)| Filter by age | [optional] 
 **ageUnits** | [**[String]**](String.md)| Filter by age_units | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biomarkers** | [**[String]**](String.md)| Filter by biomarkers | [optional] 
 **cellFateChangeProtocol** | [**[String]**](String.md)| Filter by cell_fate_change_protocol | [optional] 
 **cellFateChangeTreatmentsId** | [**[String]**](String.md)| Filter by cell_fate_change_treatments.@id | [optional] 
 **cellFateChangeTreatmentsPurpose** | [**[String]**](String.md)| Filter by cell_fate_change_treatments.purpose | [optional] 
 **cellFateChangeTreatmentsStatus** | [**[String]**](String.md)| Filter by cell_fate_change_treatments.status | [optional] 
 **cellFateChangeTreatmentsSummary** | [**[String]**](String.md)| Filter by cell_fate_change_treatments.summary | [optional] 
 **cellFateChangeTreatmentsTreatmentType** | [**[String]**](String.md)| Filter by cell_fate_change_treatments.treatment_type | [optional] 
 **cellularSubPool** | [**[String]**](String.md)| Filter by cellular_sub_pool | [optional] 
 **classifications** | [**[String]**](String.md)| Filter by classifications | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **constructLibrarySets** | [**[String]**](String.md)| Filter by construct_library_sets | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dateObtained** | [**[String]**](String.md)| Filter by date_obtained | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **demultiplexedFrom** | [**[String]**](String.md)| Filter by demultiplexed_from | [optional] 
 **demultiplexedTo** | [**[String]**](String.md)| Filter by demultiplexed_to | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **diseaseTermsId** | [**[String]**](String.md)| Filter by disease_terms.@id | [optional] 
 **diseaseTermsTermName** | [**[String]**](String.md)| Filter by disease_terms.term_name | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donors** | [**[String]**](String.md)| Filter by donors | [optional] 
 **embryonic** | [**[Boolean]**](Boolean.md)| Filter by embryonic | [optional] 
 **fileSetsId** | [**[String]**](String.md)| Filter by file_sets.@id | [optional] 
 **fileSetsAccession** | [**[String]**](String.md)| Filter by file_sets.accession | [optional] 
 **fileSetsAliases** | [**[String]**](String.md)| Filter by file_sets.aliases | [optional] 
 **fileSetsAssayTermTermName** | [**[String]**](String.md)| Filter by file_sets.assay_term.term_name | [optional] 
 **fileSetsLabTitle** | [**[String]**](String.md)| Filter by file_sets.lab.title | [optional] 
 **fileSetsStatus** | [**[String]**](String.md)| Filter by file_sets.status | [optional] 
 **fileSetsSummary** | [**[String]**](String.md)| Filter by file_sets.summary | [optional] 
 **growthMedium** | [**[String]**](String.md)| Filter by growth_medium | [optional] 
 **institutionalCertificatesId** | [**[String]**](String.md)| Filter by institutional_certificates.@id | [optional] 
 **institutionalCertificatesCertificateIdentifier** | [**[String]**](String.md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **lowerBoundAge** | [**[Number]**](Number.md)| Filter by lower_bound_age | [optional] 
 **lowerBoundAgeInHours** | [**[Number]**](Number.md)| Filter by lower_bound_age_in_hours | [optional] 
 **modificationsId** | [**[String]**](String.md)| Filter by modifications.@id | [optional] 
 **modificationsStatus** | [**[String]**](String.md)| Filter by modifications.status | [optional] 
 **modificationsSummary** | [**[String]**](String.md)| Filter by modifications.summary | [optional] 
 **moi** | [**[Number]**](Number.md)| Filter by moi | [optional] 
 **multiplexedInId** | [**[String]**](String.md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexedInAccession** | [**[String]**](String.md)| Filter by multiplexed_in.accession | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **nucleicAcidDelivery** | [**[String]**](String.md)| Filter by nucleic_acid_delivery | [optional] 
 **originOf** | [**[String]**](String.md)| Filter by origin_of | [optional] 
 **originatedFromId** | [**[String]**](String.md)| Filter by originated_from.@id | [optional] 
 **originatedFromAccession** | [**[String]**](String.md)| Filter by originated_from.accession | [optional] 
 **partOf** | [**[String]**](String.md)| Filter by part_of | [optional] 
 **parts** | [**[String]**](String.md)| Filter by parts | [optional] 
 **passageNumber** | [**[Number]**](Number.md)| Filter by passage_number | [optional] 
 **pooledFrom** | [**[String]**](String.md)| Filter by pooled_from | [optional] 
 **pooledIn** | [**[String]**](String.md)| Filter by pooled_in | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sampleTermsId** | [**[String]**](String.md)| Filter by sample_terms.@id | [optional] 
 **sampleTermsTermName** | [**[String]**](String.md)| Filter by sample_terms.term_name | [optional] 
 **sex** | [**[String]**](String.md)| Filter by sex | [optional] 
 **sortedFractions** | [**[String]**](String.md)| Filter by sorted_fractions | [optional] 
 **sortedFromId** | [**[String]**](String.md)| Filter by sorted_from.@id | [optional] 
 **sortedFromAccession** | [**[String]**](String.md)| Filter by sorted_from.accession | [optional] 
 **sortedFromDetail** | [**[String]**](String.md)| Filter by sorted_from_detail | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **startingAmount** | [**[Number]**](Number.md)| Filter by starting_amount | [optional] 
 **startingAmountUnits** | [**[String]**](String.md)| Filter by starting_amount_units | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **targetedSampleTerm** | [**[String]**](String.md)| Filter by targeted_sample_term | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **timePostChange** | [**[Number]**](Number.md)| Filter by time_post_change | [optional] 
 **timePostChangeUnits** | [**[String]**](String.md)| Filter by time_post_change_units | [optional] 
 **timePostLibraryDelivery** | [**[Number]**](Number.md)| Filter by time_post_library_delivery | [optional] 
 **timePostLibraryDeliveryUnits** | [**[String]**](String.md)| Filter by time_post_library_delivery_units | [optional] 
 **treatmentsId** | [**[String]**](String.md)| Filter by treatments.@id | [optional] 
 **treatmentsPurpose** | [**[String]**](String.md)| Filter by treatments.purpose | [optional] 
 **treatmentsStatus** | [**[String]**](String.md)| Filter by treatments.status | [optional] 
 **treatmentsSummary** | [**[String]**](String.md)| Filter by treatments.summary | [optional] 
 **treatmentsTreatmentType** | [**[String]**](String.md)| Filter by treatments.treatment_type | [optional] 
 **upperBoundAge** | [**[Number]**](Number.md)| Filter by upper_bound_age | [optional] 
 **upperBoundAgeInHours** | [**[Number]**](Number.md)| Filter by upper_bound_age_in_hours | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**InVitroSystemResults**](InVitroSystemResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## institutionalCertificates

> InstitutionalCertificateResults institutionalCertificates(frame, opts)

List items in the InstitutionalCertificate collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'certificateIdentifier': ["null"], // [String] | Filter by certificate_identifier
  'controlledAccess': [null], // [Boolean] | Filter by controlled_access
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dataUseLimitation': ["null"], // [String] | Filter by data_use_limitation
  'dataUseLimitationModifiers': ["null"], // [String] | Filter by data_use_limitation_modifiers
  'description': ["null"], // [String] | Filter by description
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'samples': ["null"], // [String] | Filter by samples
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'urls': ["null"], // [String] | Filter by urls
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.institutionalCertificates(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **certificateIdentifier** | [**[String]**](String.md)| Filter by certificate_identifier | [optional] 
 **controlledAccess** | [**[Boolean]**](Boolean.md)| Filter by controlled_access | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dataUseLimitation** | [**[String]**](String.md)| Filter by data_use_limitation | [optional] 
 **dataUseLimitationModifiers** | [**[String]**](String.md)| Filter by data_use_limitation_modifiers | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **samples** | [**[String]**](String.md)| Filter by samples | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **urls** | [**[String]**](String.md)| Filter by urls | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**InstitutionalCertificateResults**](InstitutionalCertificateResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## labs

> LabResults labs(frame, opts)

List items in the Lab collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardsId': ["null"], // [String] | Filter by awards.@id
  'awardsComponent': ["null"], // [String] | Filter by awards.component
  'awardsName': ["null"], // [String] | Filter by awards.name
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'instituteLabel': ["null"], // [String] | Filter by institute_label
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'pi': ["null"], // [String] | Filter by pi
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.labs(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardsId** | [**[String]**](String.md)| Filter by awards.@id | [optional] 
 **awardsComponent** | [**[String]**](String.md)| Filter by awards.component | [optional] 
 **awardsName** | [**[String]**](String.md)| Filter by awards.name | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **instituteLabel** | [**[String]**](String.md)| Filter by institute_label | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **pi** | [**[String]**](String.md)| Filter by pi | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**LabResults**](LabResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## matrixFiles

> MatrixFileResults matrixFiles(frame, opts)

List items in the MatrixFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentSummary': ["null"], // [String] | Filter by content_summary
  'contentType': ["null"], // [String] | Filter by content_type
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'dimension1': ["null"], // [String] | Filter by dimension1
  'dimension2': ["null"], // [String] | Filter by dimension2
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'referenceFiles': ["null"], // [String] | Filter by reference_files
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.matrixFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentSummary** | [**[String]**](String.md)| Filter by content_summary | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **dimension1** | [**[String]**](String.md)| Filter by dimension1 | [optional] 
 **dimension2** | [**[String]**](String.md)| Filter by dimension2 | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **referenceFiles** | [**[String]**](String.md)| Filter by reference_files | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**MatrixFileResults**](MatrixFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## measurementSets

> MeasurementSetResults measurementSets(frame, opts)

List items in the MeasurementSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'assayTermId': ["null"], // [String] | Filter by assay_term.@id
  'assayTermTermName': ["null"], // [String] | Filter by assay_term.term_name
  'auxiliarySetsId': ["null"], // [String] | Filter by auxiliary_sets.@id
  'auxiliarySetsAccession': ["null"], // [String] | Filter by auxiliary_sets.accession
  'auxiliarySetsAliases': ["null"], // [String] | Filter by auxiliary_sets.aliases
  'auxiliarySetsFileSetType': ["null"], // [String] | Filter by auxiliary_sets.file_set_type
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardContactPiId': ["null"], // [String] | Filter by award.contact_pi.@id
  'awardContactPiTitle': ["null"], // [String] | Filter by award.contact_pi.title
  'awardTitle': ["null"], // [String] | Filter by award.title
  'collections': ["null"], // [String] | Filter by collections
  'controlFileSetsId': ["null"], // [String] | Filter by control_file_sets.@id
  'controlFileSetsAccession': ["null"], // [String] | Filter by control_file_sets.accession
  'controlFileSetsAliases': ["null"], // [String] | Filter by control_file_sets.aliases
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'donorsId': ["null"], // [String] | Filter by donors.@id
  'donorsAccession': ["null"], // [String] | Filter by donors.accession
  'donorsAliases': ["null"], // [String] | Filter by donors.aliases
  'donorsSex': ["null"], // [String] | Filter by donors.sex
  'donorsStatus': ["null"], // [String] | Filter by donors.status
  'donorsTaxa': ["null"], // [String] | Filter by donors.taxa
  'externalImageUrl': ["null"], // [String] | Filter by external_image_url
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesCreationTimestamp': ["null"], // [String] | Filter by files.creation_timestamp
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesFileSize': [null], // [Number] | Filter by files.file_size
  'filesHref': ["null"], // [String] | Filter by files.href
  'filesS3Uri': ["null"], // [String] | Filter by files.s3_uri
  'filesSequencingPlatformId': ["null"], // [String] | Filter by files.sequencing_platform.@id
  'filesSequencingPlatformTermName': ["null"], // [String] | Filter by files.sequencing_platform.term_name
  'filesSubmittedFileName': ["null"], // [String] | Filter by files.submitted_file_name
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'libraryConstructionPlatformId': ["null"], // [String] | Filter by library_construction_platform.@id
  'libraryConstructionPlatformTermName': ["null"], // [String] | Filter by library_construction_platform.term_name
  'multiomeSize': [null], // [Number] | Filter by multiome_size
  'notes': ["null"], // [String] | Filter by notes
  'preferredAssayTitle': ["null"], // [String] | Filter by preferred_assay_title
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'relatedMultiomeDatasetsId': ["null"], // [String] | Filter by related_multiome_datasets.@id
  'relatedMultiomeDatasetsAccession': ["null"], // [String] | Filter by related_multiome_datasets.accession
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'samplesId': ["null"], // [String] | Filter by samples.@id
  'samplesAccession': ["null"], // [String] | Filter by samples.accession
  'samplesAliases': ["null"], // [String] | Filter by samples.aliases
  'samplesCellFateChangeTreatmentsId': ["null"], // [String] | Filter by samples.cell_fate_change_treatments.@id
  'samplesCellFateChangeTreatmentsPurpose': ["null"], // [String] | Filter by samples.cell_fate_change_treatments.purpose
  'samplesCellFateChangeTreatmentsSummary': ["null"], // [String] | Filter by samples.cell_fate_change_treatments.summary
  'samplesCellFateChangeTreatmentsTreatmentType': ["null"], // [String] | Filter by samples.cell_fate_change_treatments.treatment_type
  'samplesClassifications': ["null"], // [String] | Filter by samples.classifications
  'samplesConstructLibrarySetsId': ["null"], // [String] | Filter by samples.construct_library_sets.@id
  'samplesConstructLibrarySetsAccession': ["null"], // [String] | Filter by samples.construct_library_sets.accession
  'samplesConstructLibrarySetsFileSetType': ["null"], // [String] | Filter by samples.construct_library_sets.file_set_type
  'samplesConstructLibrarySetsSmallScaleGeneListId': ["null"], // [String] | Filter by samples.construct_library_sets.small_scale_gene_list.@id
  'samplesConstructLibrarySetsSmallScaleGeneListGeneid': ["null"], // [String] | Filter by samples.construct_library_sets.small_scale_gene_list.geneid
  'samplesConstructLibrarySetsSmallScaleGeneListName': ["null"], // [String] | Filter by samples.construct_library_sets.small_scale_gene_list.name
  'samplesConstructLibrarySetsSmallScaleGeneListSummary': ["null"], // [String] | Filter by samples.construct_library_sets.small_scale_gene_list.summary
  'samplesConstructLibrarySetsSmallScaleGeneListSymbol': ["null"], // [String] | Filter by samples.construct_library_sets.small_scale_gene_list.symbol
  'samplesConstructLibrarySetsSummary': ["null"], // [String] | Filter by samples.construct_library_sets.summary
  'samplesDiseaseTermsId': ["null"], // [String] | Filter by samples.disease_terms.@id
  'samplesDiseaseTermsTermName': ["null"], // [String] | Filter by samples.disease_terms.term_name
  'samplesModificationsId': ["null"], // [String] | Filter by samples.modifications.@id
  'samplesSampleTermsId': ["null"], // [String] | Filter by samples.sample_terms.@id
  'samplesSampleTermsAliases': ["null"], // [String] | Filter by samples.sample_terms.aliases
  'samplesSampleTermsStatus': ["null"], // [String] | Filter by samples.sample_terms.status
  'samplesSampleTermsSummary': ["null"], // [String] | Filter by samples.sample_terms.summary
  'samplesSampleTermsTermName': ["null"], // [String] | Filter by samples.sample_terms.term_name
  'samplesStatus': ["null"], // [String] | Filter by samples.status
  'samplesSummary': ["null"], // [String] | Filter by samples.summary
  'samplesTargetedSampleTermId': ["null"], // [String] | Filter by samples.targeted_sample_term.@id
  'samplesTargetedSampleTermTermName': ["null"], // [String] | Filter by samples.targeted_sample_term.term_name
  'samplesTaxa': ["null"], // [String] | Filter by samples.taxa
  'samplesTreatmentsId': ["null"], // [String] | Filter by samples.treatments.@id
  'samplesTreatmentsPurpose': ["null"], // [String] | Filter by samples.treatments.purpose
  'samplesTreatmentsSummary': ["null"], // [String] | Filter by samples.treatments.summary
  'samplesTreatmentsTreatmentType': ["null"], // [String] | Filter by samples.treatments.treatment_type
  'sequencingLibraryTypes': ["null"], // [String] | Filter by sequencing_library_types
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'targetedGenesId': ["null"], // [String] | Filter by targeted_genes.@id
  'targetedGenesGeneid': ["null"], // [String] | Filter by targeted_genes.geneid
  'targetedGenesName': ["null"], // [String] | Filter by targeted_genes.name
  'targetedGenesSymbol': ["null"], // [String] | Filter by targeted_genes.symbol
  'targetedGenesSynonyms': ["null"], // [String] | Filter by targeted_genes.synonyms
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.measurementSets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **assayTermId** | [**[String]**](String.md)| Filter by assay_term.@id | [optional] 
 **assayTermTermName** | [**[String]**](String.md)| Filter by assay_term.term_name | [optional] 
 **auxiliarySetsId** | [**[String]**](String.md)| Filter by auxiliary_sets.@id | [optional] 
 **auxiliarySetsAccession** | [**[String]**](String.md)| Filter by auxiliary_sets.accession | [optional] 
 **auxiliarySetsAliases** | [**[String]**](String.md)| Filter by auxiliary_sets.aliases | [optional] 
 **auxiliarySetsFileSetType** | [**[String]**](String.md)| Filter by auxiliary_sets.file_set_type | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardContactPiId** | [**[String]**](String.md)| Filter by award.contact_pi.@id | [optional] 
 **awardContactPiTitle** | [**[String]**](String.md)| Filter by award.contact_pi.title | [optional] 
 **awardTitle** | [**[String]**](String.md)| Filter by award.title | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlFileSetsId** | [**[String]**](String.md)| Filter by control_file_sets.@id | [optional] 
 **controlFileSetsAccession** | [**[String]**](String.md)| Filter by control_file_sets.accession | [optional] 
 **controlFileSetsAliases** | [**[String]**](String.md)| Filter by control_file_sets.aliases | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donorsId** | [**[String]**](String.md)| Filter by donors.@id | [optional] 
 **donorsAccession** | [**[String]**](String.md)| Filter by donors.accession | [optional] 
 **donorsAliases** | [**[String]**](String.md)| Filter by donors.aliases | [optional] 
 **donorsSex** | [**[String]**](String.md)| Filter by donors.sex | [optional] 
 **donorsStatus** | [**[String]**](String.md)| Filter by donors.status | [optional] 
 **donorsTaxa** | [**[String]**](String.md)| Filter by donors.taxa | [optional] 
 **externalImageUrl** | [**[String]**](String.md)| Filter by external_image_url | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesCreationTimestamp** | [**[String]**](String.md)| Filter by files.creation_timestamp | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesFileSize** | [**[Number]**](Number.md)| Filter by files.file_size | [optional] 
 **filesHref** | [**[String]**](String.md)| Filter by files.href | [optional] 
 **filesS3Uri** | [**[String]**](String.md)| Filter by files.s3_uri | [optional] 
 **filesSequencingPlatformId** | [**[String]**](String.md)| Filter by files.sequencing_platform.@id | [optional] 
 **filesSequencingPlatformTermName** | [**[String]**](String.md)| Filter by files.sequencing_platform.term_name | [optional] 
 **filesSubmittedFileName** | [**[String]**](String.md)| Filter by files.submitted_file_name | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **libraryConstructionPlatformId** | [**[String]**](String.md)| Filter by library_construction_platform.@id | [optional] 
 **libraryConstructionPlatformTermName** | [**[String]**](String.md)| Filter by library_construction_platform.term_name | [optional] 
 **multiomeSize** | [**[Number]**](Number.md)| Filter by multiome_size | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **preferredAssayTitle** | [**[String]**](String.md)| Filter by preferred_assay_title | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **relatedMultiomeDatasetsId** | [**[String]**](String.md)| Filter by related_multiome_datasets.@id | [optional] 
 **relatedMultiomeDatasetsAccession** | [**[String]**](String.md)| Filter by related_multiome_datasets.accession | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **samplesId** | [**[String]**](String.md)| Filter by samples.@id | [optional] 
 **samplesAccession** | [**[String]**](String.md)| Filter by samples.accession | [optional] 
 **samplesAliases** | [**[String]**](String.md)| Filter by samples.aliases | [optional] 
 **samplesCellFateChangeTreatmentsId** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments.@id | [optional] 
 **samplesCellFateChangeTreatmentsPurpose** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments.purpose | [optional] 
 **samplesCellFateChangeTreatmentsSummary** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments.summary | [optional] 
 **samplesCellFateChangeTreatmentsTreatmentType** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments.treatment_type | [optional] 
 **samplesClassifications** | [**[String]**](String.md)| Filter by samples.classifications | [optional] 
 **samplesConstructLibrarySetsId** | [**[String]**](String.md)| Filter by samples.construct_library_sets.@id | [optional] 
 **samplesConstructLibrarySetsAccession** | [**[String]**](String.md)| Filter by samples.construct_library_sets.accession | [optional] 
 **samplesConstructLibrarySetsFileSetType** | [**[String]**](String.md)| Filter by samples.construct_library_sets.file_set_type | [optional] 
 **samplesConstructLibrarySetsSmallScaleGeneListId** | [**[String]**](String.md)| Filter by samples.construct_library_sets.small_scale_gene_list.@id | [optional] 
 **samplesConstructLibrarySetsSmallScaleGeneListGeneid** | [**[String]**](String.md)| Filter by samples.construct_library_sets.small_scale_gene_list.geneid | [optional] 
 **samplesConstructLibrarySetsSmallScaleGeneListName** | [**[String]**](String.md)| Filter by samples.construct_library_sets.small_scale_gene_list.name | [optional] 
 **samplesConstructLibrarySetsSmallScaleGeneListSummary** | [**[String]**](String.md)| Filter by samples.construct_library_sets.small_scale_gene_list.summary | [optional] 
 **samplesConstructLibrarySetsSmallScaleGeneListSymbol** | [**[String]**](String.md)| Filter by samples.construct_library_sets.small_scale_gene_list.symbol | [optional] 
 **samplesConstructLibrarySetsSummary** | [**[String]**](String.md)| Filter by samples.construct_library_sets.summary | [optional] 
 **samplesDiseaseTermsId** | [**[String]**](String.md)| Filter by samples.disease_terms.@id | [optional] 
 **samplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by samples.disease_terms.term_name | [optional] 
 **samplesModificationsId** | [**[String]**](String.md)| Filter by samples.modifications.@id | [optional] 
 **samplesSampleTermsId** | [**[String]**](String.md)| Filter by samples.sample_terms.@id | [optional] 
 **samplesSampleTermsAliases** | [**[String]**](String.md)| Filter by samples.sample_terms.aliases | [optional] 
 **samplesSampleTermsStatus** | [**[String]**](String.md)| Filter by samples.sample_terms.status | [optional] 
 **samplesSampleTermsSummary** | [**[String]**](String.md)| Filter by samples.sample_terms.summary | [optional] 
 **samplesSampleTermsTermName** | [**[String]**](String.md)| Filter by samples.sample_terms.term_name | [optional] 
 **samplesStatus** | [**[String]**](String.md)| Filter by samples.status | [optional] 
 **samplesSummary** | [**[String]**](String.md)| Filter by samples.summary | [optional] 
 **samplesTargetedSampleTermId** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samplesTargetedSampleTermTermName** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samplesTaxa** | [**[String]**](String.md)| Filter by samples.taxa | [optional] 
 **samplesTreatmentsId** | [**[String]**](String.md)| Filter by samples.treatments.@id | [optional] 
 **samplesTreatmentsPurpose** | [**[String]**](String.md)| Filter by samples.treatments.purpose | [optional] 
 **samplesTreatmentsSummary** | [**[String]**](String.md)| Filter by samples.treatments.summary | [optional] 
 **samplesTreatmentsTreatmentType** | [**[String]**](String.md)| Filter by samples.treatments.treatment_type | [optional] 
 **sequencingLibraryTypes** | [**[String]**](String.md)| Filter by sequencing_library_types | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **targetedGenesId** | [**[String]**](String.md)| Filter by targeted_genes.@id | [optional] 
 **targetedGenesGeneid** | [**[String]**](String.md)| Filter by targeted_genes.geneid | [optional] 
 **targetedGenesName** | [**[String]**](String.md)| Filter by targeted_genes.name | [optional] 
 **targetedGenesSymbol** | [**[String]**](String.md)| Filter by targeted_genes.symbol | [optional] 
 **targetedGenesSynonyms** | [**[String]**](String.md)| Filter by targeted_genes.synonyms | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**MeasurementSetResults**](MeasurementSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modelFiles

> ModelFileResults modelFiles(frame, opts)

List items in the ModelFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'anvilUrl': ["null"], // [String] | Filter by anvil_url
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'controlledAccess': [null], // [Boolean] | Filter by controlled_access
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.modelFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **anvilUrl** | [**[String]**](String.md)| Filter by anvil_url | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **controlledAccess** | [**[Boolean]**](Boolean.md)| Filter by controlled_access | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**ModelFileResults**](ModelFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modelSets

> ModelSetResults modelSets(frame, opts)

List items in the ModelSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'assessedGenes': ["null"], // [String] | Filter by assessed_genes
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardContactPiId': ["null"], // [String] | Filter by award.contact_pi.@id
  'awardContactPiTitle': ["null"], // [String] | Filter by award.contact_pi.title
  'awardTitle': ["null"], // [String] | Filter by award.title
  'collections': ["null"], // [String] | Filter by collections
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'donorsId': ["null"], // [String] | Filter by donors.@id
  'donorsAccession': ["null"], // [String] | Filter by donors.accession
  'donorsAliases': ["null"], // [String] | Filter by donors.aliases
  'donorsSex': ["null"], // [String] | Filter by donors.sex
  'donorsStatus': ["null"], // [String] | Filter by donors.status
  'donorsTaxa': ["null"], // [String] | Filter by donors.taxa
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesCreationTimestamp': ["null"], // [String] | Filter by files.creation_timestamp
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesFileSize': [null], // [Number] | Filter by files.file_size
  'filesHref': ["null"], // [String] | Filter by files.href
  'filesS3Uri': ["null"], // [String] | Filter by files.s3_uri
  'filesSequencingPlatform': ["null"], // [String] | Filter by files.sequencing_platform
  'filesSubmittedFileName': ["null"], // [String] | Filter by files.submitted_file_name
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'inputFileSetsId': ["null"], // [String] | Filter by input_file_sets.@id
  'inputFileSetsAccession': ["null"], // [String] | Filter by input_file_sets.accession
  'inputFileSetsAliases': ["null"], // [String] | Filter by input_file_sets.aliases
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'modelName': ["null"], // [String] | Filter by model_name
  'modelVersion': ["null"], // [String] | Filter by model_version
  'modelZooLocation': ["null"], // [String] | Filter by model_zoo_location
  'notes': ["null"], // [String] | Filter by notes
  'predictionObjects': ["null"], // [String] | Filter by prediction_objects
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'samplesId': ["null"], // [String] | Filter by samples.@id
  'samplesAccession': ["null"], // [String] | Filter by samples.accession
  'samplesAliases': ["null"], // [String] | Filter by samples.aliases
  'samplesCellFateChangeTreatments': ["null"], // [String] | Filter by samples.cell_fate_change_treatments
  'samplesClassifications': ["null"], // [String] | Filter by samples.classifications
  'samplesConstructLibrarySets': ["null"], // [String] | Filter by samples.construct_library_sets
  'samplesDiseaseTermsId': ["null"], // [String] | Filter by samples.disease_terms.@id
  'samplesDiseaseTermsTermName': ["null"], // [String] | Filter by samples.disease_terms.term_name
  'samplesModifications': ["null"], // [String] | Filter by samples.modifications
  'samplesSampleTermsId': ["null"], // [String] | Filter by samples.sample_terms.@id
  'samplesSampleTermsAliases': ["null"], // [String] | Filter by samples.sample_terms.aliases
  'samplesSampleTermsStatus': ["null"], // [String] | Filter by samples.sample_terms.status
  'samplesSampleTermsSummary': ["null"], // [String] | Filter by samples.sample_terms.summary
  'samplesSampleTermsTermName': ["null"], // [String] | Filter by samples.sample_terms.term_name
  'samplesStatus': ["null"], // [String] | Filter by samples.status
  'samplesSummary': ["null"], // [String] | Filter by samples.summary
  'samplesTargetedSampleTermId': ["null"], // [String] | Filter by samples.targeted_sample_term.@id
  'samplesTargetedSampleTermTermName': ["null"], // [String] | Filter by samples.targeted_sample_term.term_name
  'samplesTaxa': ["null"], // [String] | Filter by samples.taxa
  'samplesTreatments': ["null"], // [String] | Filter by samples.treatments
  'softwareVersion': ["null"], // [String] | Filter by software_version
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.modelSets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **assessedGenes** | [**[String]**](String.md)| Filter by assessed_genes | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardContactPiId** | [**[String]**](String.md)| Filter by award.contact_pi.@id | [optional] 
 **awardContactPiTitle** | [**[String]**](String.md)| Filter by award.contact_pi.title | [optional] 
 **awardTitle** | [**[String]**](String.md)| Filter by award.title | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donorsId** | [**[String]**](String.md)| Filter by donors.@id | [optional] 
 **donorsAccession** | [**[String]**](String.md)| Filter by donors.accession | [optional] 
 **donorsAliases** | [**[String]**](String.md)| Filter by donors.aliases | [optional] 
 **donorsSex** | [**[String]**](String.md)| Filter by donors.sex | [optional] 
 **donorsStatus** | [**[String]**](String.md)| Filter by donors.status | [optional] 
 **donorsTaxa** | [**[String]**](String.md)| Filter by donors.taxa | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesCreationTimestamp** | [**[String]**](String.md)| Filter by files.creation_timestamp | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesFileSize** | [**[Number]**](Number.md)| Filter by files.file_size | [optional] 
 **filesHref** | [**[String]**](String.md)| Filter by files.href | [optional] 
 **filesS3Uri** | [**[String]**](String.md)| Filter by files.s3_uri | [optional] 
 **filesSequencingPlatform** | [**[String]**](String.md)| Filter by files.sequencing_platform | [optional] 
 **filesSubmittedFileName** | [**[String]**](String.md)| Filter by files.submitted_file_name | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **inputFileSetsId** | [**[String]**](String.md)| Filter by input_file_sets.@id | [optional] 
 **inputFileSetsAccession** | [**[String]**](String.md)| Filter by input_file_sets.accession | [optional] 
 **inputFileSetsAliases** | [**[String]**](String.md)| Filter by input_file_sets.aliases | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **modelName** | [**[String]**](String.md)| Filter by model_name | [optional] 
 **modelVersion** | [**[String]**](String.md)| Filter by model_version | [optional] 
 **modelZooLocation** | [**[String]**](String.md)| Filter by model_zoo_location | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **predictionObjects** | [**[String]**](String.md)| Filter by prediction_objects | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **samplesId** | [**[String]**](String.md)| Filter by samples.@id | [optional] 
 **samplesAccession** | [**[String]**](String.md)| Filter by samples.accession | [optional] 
 **samplesAliases** | [**[String]**](String.md)| Filter by samples.aliases | [optional] 
 **samplesCellFateChangeTreatments** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samplesClassifications** | [**[String]**](String.md)| Filter by samples.classifications | [optional] 
 **samplesConstructLibrarySets** | [**[String]**](String.md)| Filter by samples.construct_library_sets | [optional] 
 **samplesDiseaseTermsId** | [**[String]**](String.md)| Filter by samples.disease_terms.@id | [optional] 
 **samplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by samples.disease_terms.term_name | [optional] 
 **samplesModifications** | [**[String]**](String.md)| Filter by samples.modifications | [optional] 
 **samplesSampleTermsId** | [**[String]**](String.md)| Filter by samples.sample_terms.@id | [optional] 
 **samplesSampleTermsAliases** | [**[String]**](String.md)| Filter by samples.sample_terms.aliases | [optional] 
 **samplesSampleTermsStatus** | [**[String]**](String.md)| Filter by samples.sample_terms.status | [optional] 
 **samplesSampleTermsSummary** | [**[String]**](String.md)| Filter by samples.sample_terms.summary | [optional] 
 **samplesSampleTermsTermName** | [**[String]**](String.md)| Filter by samples.sample_terms.term_name | [optional] 
 **samplesStatus** | [**[String]**](String.md)| Filter by samples.status | [optional] 
 **samplesSummary** | [**[String]**](String.md)| Filter by samples.summary | [optional] 
 **samplesTargetedSampleTermId** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samplesTargetedSampleTermTermName** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samplesTaxa** | [**[String]**](String.md)| Filter by samples.taxa | [optional] 
 **samplesTreatments** | [**[String]**](String.md)| Filter by samples.treatments | [optional] 
 **softwareVersion** | [**[String]**](String.md)| Filter by software_version | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**ModelSetResults**](ModelSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## multiplexedSamples

> MultiplexedSampleResults multiplexedSamples(frame, opts)

List items in the MultiplexedSample collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'barcodeSampleMap': ["null"], // [String] | Filter by barcode_sample_map
  'biomarkers': ["null"], // [String] | Filter by biomarkers
  'cellularSubPool': ["null"], // [String] | Filter by cellular_sub_pool
  'classifications': ["null"], // [String] | Filter by classifications
  'collections': ["null"], // [String] | Filter by collections
  'constructLibrarySetsId': ["null"], // [String] | Filter by construct_library_sets.@id
  'constructLibrarySetsAccession': ["null"], // [String] | Filter by construct_library_sets.accession
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dateObtained': ["null"], // [String] | Filter by date_obtained
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'diseaseTermsId': ["null"], // [String] | Filter by disease_terms.@id
  'diseaseTermsTermName': ["null"], // [String] | Filter by disease_terms.term_name
  'documents': ["null"], // [String] | Filter by documents
  'donors': ["null"], // [String] | Filter by donors
  'fileSetsId': ["null"], // [String] | Filter by file_sets.@id
  'fileSetsAccession': ["null"], // [String] | Filter by file_sets.accession
  'fileSetsAliases': ["null"], // [String] | Filter by file_sets.aliases
  'fileSetsAssayTermTermName': ["null"], // [String] | Filter by file_sets.assay_term.term_name
  'fileSetsLabTitle': ["null"], // [String] | Filter by file_sets.lab.title
  'fileSetsStatus': ["null"], // [String] | Filter by file_sets.status
  'fileSetsSummary': ["null"], // [String] | Filter by file_sets.summary
  'institutionalCertificates': ["null"], // [String] | Filter by institutional_certificates
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'modificationsId': ["null"], // [String] | Filter by modifications.@id
  'modificationsStatus': ["null"], // [String] | Filter by modifications.status
  'modificationsSummary': ["null"], // [String] | Filter by modifications.summary
  'moi': [null], // [Number] | Filter by moi
  'multiplexedInId': ["null"], // [String] | Filter by multiplexed_in.@id
  'multiplexedInAccession': ["null"], // [String] | Filter by multiplexed_in.accession
  'multiplexedSamplesId': ["null"], // [String] | Filter by multiplexed_samples.@id
  'multiplexedSamplesAccession': ["null"], // [String] | Filter by multiplexed_samples.accession
  'multiplexedSamplesConstructLibrarySets': ["null"], // [String] | Filter by multiplexed_samples.construct_library_sets
  'multiplexedSamplesDiseaseTermsId': ["null"], // [String] | Filter by multiplexed_samples.disease_terms.@id
  'multiplexedSamplesDiseaseTermsTermName': ["null"], // [String] | Filter by multiplexed_samples.disease_terms.term_name
  'multiplexedSamplesDonorsId': ["null"], // [String] | Filter by multiplexed_samples.donors.@id
  'multiplexedSamplesDonorsAccession': ["null"], // [String] | Filter by multiplexed_samples.donors.accession
  'multiplexedSamplesSampleTermsId': ["null"], // [String] | Filter by multiplexed_samples.sample_terms.@id
  'multiplexedSamplesSampleTermsTermName': ["null"], // [String] | Filter by multiplexed_samples.sample_terms.term_name
  'multiplexedSamplesStatus': ["null"], // [String] | Filter by multiplexed_samples.status
  'multiplexedSamplesSummary': ["null"], // [String] | Filter by multiplexed_samples.summary
  'notes': ["null"], // [String] | Filter by notes
  'nucleicAcidDelivery': ["null"], // [String] | Filter by nucleic_acid_delivery
  'originOf': ["null"], // [String] | Filter by origin_of
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sampleTermsId': ["null"], // [String] | Filter by sample_terms.@id
  'sampleTermsTermName': ["null"], // [String] | Filter by sample_terms.term_name
  'sortedFractions': ["null"], // [String] | Filter by sorted_fractions
  'sortedFromId': ["null"], // [String] | Filter by sorted_from.@id
  'sortedFromAccession': ["null"], // [String] | Filter by sorted_from.accession
  'sortedFromDetail': ["null"], // [String] | Filter by sorted_from_detail
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'startingAmount': [null], // [Number] | Filter by starting_amount
  'startingAmountUnits': ["null"], // [String] | Filter by starting_amount_units
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'timePostLibraryDelivery': [null], // [Number] | Filter by time_post_library_delivery
  'timePostLibraryDeliveryUnits': ["null"], // [String] | Filter by time_post_library_delivery_units
  'treatmentsId': ["null"], // [String] | Filter by treatments.@id
  'treatmentsPurpose': ["null"], // [String] | Filter by treatments.purpose
  'treatmentsStatus': ["null"], // [String] | Filter by treatments.status
  'treatmentsSummary': ["null"], // [String] | Filter by treatments.summary
  'treatmentsTreatmentType': ["null"], // [String] | Filter by treatments.treatment_type
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.multiplexedSamples(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **barcodeSampleMap** | [**[String]**](String.md)| Filter by barcode_sample_map | [optional] 
 **biomarkers** | [**[String]**](String.md)| Filter by biomarkers | [optional] 
 **cellularSubPool** | [**[String]**](String.md)| Filter by cellular_sub_pool | [optional] 
 **classifications** | [**[String]**](String.md)| Filter by classifications | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **constructLibrarySetsId** | [**[String]**](String.md)| Filter by construct_library_sets.@id | [optional] 
 **constructLibrarySetsAccession** | [**[String]**](String.md)| Filter by construct_library_sets.accession | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dateObtained** | [**[String]**](String.md)| Filter by date_obtained | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **diseaseTermsId** | [**[String]**](String.md)| Filter by disease_terms.@id | [optional] 
 **diseaseTermsTermName** | [**[String]**](String.md)| Filter by disease_terms.term_name | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donors** | [**[String]**](String.md)| Filter by donors | [optional] 
 **fileSetsId** | [**[String]**](String.md)| Filter by file_sets.@id | [optional] 
 **fileSetsAccession** | [**[String]**](String.md)| Filter by file_sets.accession | [optional] 
 **fileSetsAliases** | [**[String]**](String.md)| Filter by file_sets.aliases | [optional] 
 **fileSetsAssayTermTermName** | [**[String]**](String.md)| Filter by file_sets.assay_term.term_name | [optional] 
 **fileSetsLabTitle** | [**[String]**](String.md)| Filter by file_sets.lab.title | [optional] 
 **fileSetsStatus** | [**[String]**](String.md)| Filter by file_sets.status | [optional] 
 **fileSetsSummary** | [**[String]**](String.md)| Filter by file_sets.summary | [optional] 
 **institutionalCertificates** | [**[String]**](String.md)| Filter by institutional_certificates | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **modificationsId** | [**[String]**](String.md)| Filter by modifications.@id | [optional] 
 **modificationsStatus** | [**[String]**](String.md)| Filter by modifications.status | [optional] 
 **modificationsSummary** | [**[String]**](String.md)| Filter by modifications.summary | [optional] 
 **moi** | [**[Number]**](Number.md)| Filter by moi | [optional] 
 **multiplexedInId** | [**[String]**](String.md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexedInAccession** | [**[String]**](String.md)| Filter by multiplexed_in.accession | [optional] 
 **multiplexedSamplesId** | [**[String]**](String.md)| Filter by multiplexed_samples.@id | [optional] 
 **multiplexedSamplesAccession** | [**[String]**](String.md)| Filter by multiplexed_samples.accession | [optional] 
 **multiplexedSamplesConstructLibrarySets** | [**[String]**](String.md)| Filter by multiplexed_samples.construct_library_sets | [optional] 
 **multiplexedSamplesDiseaseTermsId** | [**[String]**](String.md)| Filter by multiplexed_samples.disease_terms.@id | [optional] 
 **multiplexedSamplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by multiplexed_samples.disease_terms.term_name | [optional] 
 **multiplexedSamplesDonorsId** | [**[String]**](String.md)| Filter by multiplexed_samples.donors.@id | [optional] 
 **multiplexedSamplesDonorsAccession** | [**[String]**](String.md)| Filter by multiplexed_samples.donors.accession | [optional] 
 **multiplexedSamplesSampleTermsId** | [**[String]**](String.md)| Filter by multiplexed_samples.sample_terms.@id | [optional] 
 **multiplexedSamplesSampleTermsTermName** | [**[String]**](String.md)| Filter by multiplexed_samples.sample_terms.term_name | [optional] 
 **multiplexedSamplesStatus** | [**[String]**](String.md)| Filter by multiplexed_samples.status | [optional] 
 **multiplexedSamplesSummary** | [**[String]**](String.md)| Filter by multiplexed_samples.summary | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **nucleicAcidDelivery** | [**[String]**](String.md)| Filter by nucleic_acid_delivery | [optional] 
 **originOf** | [**[String]**](String.md)| Filter by origin_of | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sampleTermsId** | [**[String]**](String.md)| Filter by sample_terms.@id | [optional] 
 **sampleTermsTermName** | [**[String]**](String.md)| Filter by sample_terms.term_name | [optional] 
 **sortedFractions** | [**[String]**](String.md)| Filter by sorted_fractions | [optional] 
 **sortedFromId** | [**[String]**](String.md)| Filter by sorted_from.@id | [optional] 
 **sortedFromAccession** | [**[String]**](String.md)| Filter by sorted_from.accession | [optional] 
 **sortedFromDetail** | [**[String]**](String.md)| Filter by sorted_from_detail | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **startingAmount** | [**[Number]**](Number.md)| Filter by starting_amount | [optional] 
 **startingAmountUnits** | [**[String]**](String.md)| Filter by starting_amount_units | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **timePostLibraryDelivery** | [**[Number]**](Number.md)| Filter by time_post_library_delivery | [optional] 
 **timePostLibraryDeliveryUnits** | [**[String]**](String.md)| Filter by time_post_library_delivery_units | [optional] 
 **treatmentsId** | [**[String]**](String.md)| Filter by treatments.@id | [optional] 
 **treatmentsPurpose** | [**[String]**](String.md)| Filter by treatments.purpose | [optional] 
 **treatmentsStatus** | [**[String]**](String.md)| Filter by treatments.status | [optional] 
 **treatmentsSummary** | [**[String]**](String.md)| Filter by treatments.summary | [optional] 
 **treatmentsTreatmentType** | [**[String]**](String.md)| Filter by treatments.treatment_type | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**MultiplexedSampleResults**](MultiplexedSampleResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openReadingFrames

> OpenReadingFrameResults openReadingFrames(frame, opts)

List items in the OpenReadingFrame collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'award': ["null"], // [String] | Filter by award
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'geneId': ["null"], // [String] | Filter by gene.@id
  'geneGeneid': ["null"], // [String] | Filter by gene.geneid
  'geneSymbol': ["null"], // [String] | Filter by gene.symbol
  'lab': ["null"], // [String] | Filter by lab
  'notes': ["null"], // [String] | Filter by notes
  'orfId': ["null"], // [String] | Filter by orf_id
  'pctCoverageOrf': [null], // [Number] | Filter by pct_coverage_orf
  'pctCoverageProtein': [null], // [Number] | Filter by pct_coverage_protein
  'pctIdenticalProtein': [null], // [Number] | Filter by pct_identical_protein
  'proteinId': ["null"], // [String] | Filter by protein_id
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedBy': ["null"], // [String] | Filter by submitted_by
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.openReadingFrames(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **award** | [**[String]**](String.md)| Filter by award | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **geneId** | [**[String]**](String.md)| Filter by gene.@id | [optional] 
 **geneGeneid** | [**[String]**](String.md)| Filter by gene.geneid | [optional] 
 **geneSymbol** | [**[String]**](String.md)| Filter by gene.symbol | [optional] 
 **lab** | [**[String]**](String.md)| Filter by lab | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **orfId** | [**[String]**](String.md)| Filter by orf_id | [optional] 
 **pctCoverageOrf** | [**[Number]**](Number.md)| Filter by pct_coverage_orf | [optional] 
 **pctCoverageProtein** | [**[Number]**](Number.md)| Filter by pct_coverage_protein | [optional] 
 **pctIdenticalProtein** | [**[Number]**](Number.md)| Filter by pct_identical_protein | [optional] 
 **proteinId** | [**[String]**](String.md)| Filter by protein_id | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedBy** | [**[String]**](String.md)| Filter by submitted_by | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**OpenReadingFrameResults**](OpenReadingFrameResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pages

> PageResults pages(frame, opts)

List items in the Page collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'award': ["null"], // [String] | Filter by award
  'canonicalUri': ["null"], // [String] | Filter by canonical_uri
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'lab': ["null"], // [String] | Filter by lab
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'parent': ["null"], // [String] | Filter by parent
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.pages(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **award** | [**[String]**](String.md)| Filter by award | [optional] 
 **canonicalUri** | [**[String]**](String.md)| Filter by canonical_uri | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **lab** | [**[String]**](String.md)| Filter by lab | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **parent** | [**[String]**](String.md)| Filter by parent | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**PageResults**](PageResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## phenotypeTerms

> PhenotypeTermResults phenotypeTerms(frame, opts)

List items in the PhenotypeTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'ancestors': ["null"], // [String] | Filter by ancestors
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'deprecatedNtrTerms': ["null"], // [String] | Filter by deprecated_ntr_terms
  'description': ["null"], // [String] | Filter by description
  'isA': ["null"], // [String] | Filter by is_a
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'ontology': ["null"], // [String] | Filter by ontology
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'synonyms': ["null"], // [String] | Filter by synonyms
  'termId': ["null"], // [String] | Filter by term_id
  'termName': ["null"], // [String] | Filter by term_name
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.phenotypeTerms(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **ancestors** | [**[String]**](String.md)| Filter by ancestors | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **deprecatedNtrTerms** | [**[String]**](String.md)| Filter by deprecated_ntr_terms | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **isA** | [**[String]**](String.md)| Filter by is_a | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **ontology** | [**[String]**](String.md)| Filter by ontology | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **synonyms** | [**[String]**](String.md)| Filter by synonyms | [optional] 
 **termId** | [**[String]**](String.md)| Filter by term_id | [optional] 
 **termName** | [**[String]**](String.md)| Filter by term_name | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**PhenotypeTermResults**](PhenotypeTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## phenotypicFeatures

> PhenotypicFeatureResults phenotypicFeatures(frame, opts)

List items in the PhenotypicFeature collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'featureId': ["null"], // [String] | Filter by feature.@id
  'featureTermId': ["null"], // [String] | Filter by feature.term_id
  'featureTermName': ["null"], // [String] | Filter by feature.term_name
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'observationDate': ["null"], // [String] | Filter by observation_date
  'quantity': [null], // [Number] | Filter by quantity
  'quantityUnits': ["null"], // [String] | Filter by quantity_units
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.phenotypicFeatures(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **featureId** | [**[String]**](String.md)| Filter by feature.@id | [optional] 
 **featureTermId** | [**[String]**](String.md)| Filter by feature.term_id | [optional] 
 **featureTermName** | [**[String]**](String.md)| Filter by feature.term_name | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **observationDate** | [**[String]**](String.md)| Filter by observation_date | [optional] 
 **quantity** | [**[Number]**](Number.md)| Filter by quantity | [optional] 
 **quantityUnits** | [**[String]**](String.md)| Filter by quantity_units | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**PhenotypicFeatureResults**](PhenotypicFeatureResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## platformTerms

> PlatformTermResults platformTerms(frame, opts)

List items in the PlatformTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'ancestors': ["null"], // [String] | Filter by ancestors
  'company': ["null"], // [String] | Filter by company
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'deprecatedNtrTerms': ["null"], // [String] | Filter by deprecated_ntr_terms
  'description': ["null"], // [String] | Filter by description
  'isA': ["null"], // [String] | Filter by is_a
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'ontology': ["null"], // [String] | Filter by ontology
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'sequencingKits': ["null"], // [String] | Filter by sequencing_kits
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'synonyms': ["null"], // [String] | Filter by synonyms
  'termId': ["null"], // [String] | Filter by term_id
  'termName': ["null"], // [String] | Filter by term_name
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.platformTerms(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **ancestors** | [**[String]**](String.md)| Filter by ancestors | [optional] 
 **company** | [**[String]**](String.md)| Filter by company | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **deprecatedNtrTerms** | [**[String]**](String.md)| Filter by deprecated_ntr_terms | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **isA** | [**[String]**](String.md)| Filter by is_a | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **ontology** | [**[String]**](String.md)| Filter by ontology | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **sequencingKits** | [**[String]**](String.md)| Filter by sequencing_kits | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **synonyms** | [**[String]**](String.md)| Filter by synonyms | [optional] 
 **termId** | [**[String]**](String.md)| Filter by term_id | [optional] 
 **termName** | [**[String]**](String.md)| Filter by term_name | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**PlatformTermResults**](PlatformTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## predictionSets

> PredictionSetResults predictionSets(frame, opts)

List items in the PredictionSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'awardContactPiId': ["null"], // [String] | Filter by award.contact_pi.@id
  'awardContactPiTitle': ["null"], // [String] | Filter by award.contact_pi.title
  'awardTitle': ["null"], // [String] | Filter by award.title
  'collections': ["null"], // [String] | Filter by collections
  'controlForId': ["null"], // [String] | Filter by control_for.@id
  'controlForAccession': ["null"], // [String] | Filter by control_for.accession
  'controlForAliases': ["null"], // [String] | Filter by control_for.aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'donorsId': ["null"], // [String] | Filter by donors.@id
  'donorsAccession': ["null"], // [String] | Filter by donors.accession
  'donorsAliases': ["null"], // [String] | Filter by donors.aliases
  'donorsSex': ["null"], // [String] | Filter by donors.sex
  'donorsStatus': ["null"], // [String] | Filter by donors.status
  'donorsTaxa': ["null"], // [String] | Filter by donors.taxa
  'fileSetType': ["null"], // [String] | Filter by file_set_type
  'filesId': ["null"], // [String] | Filter by files.@id
  'filesAccession': ["null"], // [String] | Filter by files.accession
  'filesAliases': ["null"], // [String] | Filter by files.aliases
  'filesContentType': ["null"], // [String] | Filter by files.content_type
  'filesCreationTimestamp': ["null"], // [String] | Filter by files.creation_timestamp
  'filesFileFormat': ["null"], // [String] | Filter by files.file_format
  'filesFileSize': [null], // [Number] | Filter by files.file_size
  'filesHref': ["null"], // [String] | Filter by files.href
  'filesS3Uri': ["null"], // [String] | Filter by files.s3_uri
  'filesSequencingPlatform': ["null"], // [String] | Filter by files.sequencing_platform
  'filesSubmittedFileName': ["null"], // [String] | Filter by files.submitted_file_name
  'filesUploadStatus': ["null"], // [String] | Filter by files.upload_status
  'inputFileSetFor': ["null"], // [String] | Filter by input_file_set_for
  'inputFileSets': ["null"], // [String] | Filter by input_file_sets
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'largeScaleGeneListId': ["null"], // [String] | Filter by large_scale_gene_list.@id
  'largeScaleGeneListAccession': ["null"], // [String] | Filter by large_scale_gene_list.accession
  'largeScaleGeneListAliases': ["null"], // [String] | Filter by large_scale_gene_list.aliases
  'largeScaleLociListId': ["null"], // [String] | Filter by large_scale_loci_list.@id
  'largeScaleLociListAccession': ["null"], // [String] | Filter by large_scale_loci_list.accession
  'largeScaleLociListAliases': ["null"], // [String] | Filter by large_scale_loci_list.aliases
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'samplesId': ["null"], // [String] | Filter by samples.@id
  'samplesAccession': ["null"], // [String] | Filter by samples.accession
  'samplesAliases': ["null"], // [String] | Filter by samples.aliases
  'samplesCellFateChangeTreatments': ["null"], // [String] | Filter by samples.cell_fate_change_treatments
  'samplesClassifications': ["null"], // [String] | Filter by samples.classifications
  'samplesConstructLibrarySetsId': ["null"], // [String] | Filter by samples.construct_library_sets.@id
  'samplesConstructLibrarySetsAccession': ["null"], // [String] | Filter by samples.construct_library_sets.accession
  'samplesConstructLibrarySetsSummary': ["null"], // [String] | Filter by samples.construct_library_sets.summary
  'samplesDiseaseTermsId': ["null"], // [String] | Filter by samples.disease_terms.@id
  'samplesDiseaseTermsTermName': ["null"], // [String] | Filter by samples.disease_terms.term_name
  'samplesModifications': ["null"], // [String] | Filter by samples.modifications
  'samplesSampleTermsId': ["null"], // [String] | Filter by samples.sample_terms.@id
  'samplesSampleTermsAliases': ["null"], // [String] | Filter by samples.sample_terms.aliases
  'samplesSampleTermsStatus': ["null"], // [String] | Filter by samples.sample_terms.status
  'samplesSampleTermsSummary': ["null"], // [String] | Filter by samples.sample_terms.summary
  'samplesSampleTermsTermName': ["null"], // [String] | Filter by samples.sample_terms.term_name
  'samplesStatus': ["null"], // [String] | Filter by samples.status
  'samplesSummary': ["null"], // [String] | Filter by samples.summary
  'samplesTargetedSampleTermId': ["null"], // [String] | Filter by samples.targeted_sample_term.@id
  'samplesTargetedSampleTermTermName': ["null"], // [String] | Filter by samples.targeted_sample_term.term_name
  'samplesTaxa': ["null"], // [String] | Filter by samples.taxa
  'samplesTreatments': ["null"], // [String] | Filter by samples.treatments
  'scope': ["null"], // [String] | Filter by scope
  'smallScaleGeneListId': ["null"], // [String] | Filter by small_scale_gene_list.@id
  'smallScaleGeneListGeneid': ["null"], // [String] | Filter by small_scale_gene_list.geneid
  'smallScaleGeneListName': ["null"], // [String] | Filter by small_scale_gene_list.name
  'smallScaleGeneListSymbol': ["null"], // [String] | Filter by small_scale_gene_list.symbol
  'smallScaleGeneListSynonyms': ["null"], // [String] | Filter by small_scale_gene_list.synonyms
  'smallScaleLociList': [new IgvfProjectApi.Locus()], // [Locus] | Filter by small_scale_loci_list
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFilesTimestamp': ["null"], // [String] | Filter by submitted_files_timestamp
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.predictionSets(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **awardContactPiId** | [**[String]**](String.md)| Filter by award.contact_pi.@id | [optional] 
 **awardContactPiTitle** | [**[String]**](String.md)| Filter by award.contact_pi.title | [optional] 
 **awardTitle** | [**[String]**](String.md)| Filter by award.title | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **controlForId** | [**[String]**](String.md)| Filter by control_for.@id | [optional] 
 **controlForAccession** | [**[String]**](String.md)| Filter by control_for.accession | [optional] 
 **controlForAliases** | [**[String]**](String.md)| Filter by control_for.aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donorsId** | [**[String]**](String.md)| Filter by donors.@id | [optional] 
 **donorsAccession** | [**[String]**](String.md)| Filter by donors.accession | [optional] 
 **donorsAliases** | [**[String]**](String.md)| Filter by donors.aliases | [optional] 
 **donorsSex** | [**[String]**](String.md)| Filter by donors.sex | [optional] 
 **donorsStatus** | [**[String]**](String.md)| Filter by donors.status | [optional] 
 **donorsTaxa** | [**[String]**](String.md)| Filter by donors.taxa | [optional] 
 **fileSetType** | [**[String]**](String.md)| Filter by file_set_type | [optional] 
 **filesId** | [**[String]**](String.md)| Filter by files.@id | [optional] 
 **filesAccession** | [**[String]**](String.md)| Filter by files.accession | [optional] 
 **filesAliases** | [**[String]**](String.md)| Filter by files.aliases | [optional] 
 **filesContentType** | [**[String]**](String.md)| Filter by files.content_type | [optional] 
 **filesCreationTimestamp** | [**[String]**](String.md)| Filter by files.creation_timestamp | [optional] 
 **filesFileFormat** | [**[String]**](String.md)| Filter by files.file_format | [optional] 
 **filesFileSize** | [**[Number]**](Number.md)| Filter by files.file_size | [optional] 
 **filesHref** | [**[String]**](String.md)| Filter by files.href | [optional] 
 **filesS3Uri** | [**[String]**](String.md)| Filter by files.s3_uri | [optional] 
 **filesSequencingPlatform** | [**[String]**](String.md)| Filter by files.sequencing_platform | [optional] 
 **filesSubmittedFileName** | [**[String]**](String.md)| Filter by files.submitted_file_name | [optional] 
 **filesUploadStatus** | [**[String]**](String.md)| Filter by files.upload_status | [optional] 
 **inputFileSetFor** | [**[String]**](String.md)| Filter by input_file_set_for | [optional] 
 **inputFileSets** | [**[String]**](String.md)| Filter by input_file_sets | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **largeScaleGeneListId** | [**[String]**](String.md)| Filter by large_scale_gene_list.@id | [optional] 
 **largeScaleGeneListAccession** | [**[String]**](String.md)| Filter by large_scale_gene_list.accession | [optional] 
 **largeScaleGeneListAliases** | [**[String]**](String.md)| Filter by large_scale_gene_list.aliases | [optional] 
 **largeScaleLociListId** | [**[String]**](String.md)| Filter by large_scale_loci_list.@id | [optional] 
 **largeScaleLociListAccession** | [**[String]**](String.md)| Filter by large_scale_loci_list.accession | [optional] 
 **largeScaleLociListAliases** | [**[String]**](String.md)| Filter by large_scale_loci_list.aliases | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **samplesId** | [**[String]**](String.md)| Filter by samples.@id | [optional] 
 **samplesAccession** | [**[String]**](String.md)| Filter by samples.accession | [optional] 
 **samplesAliases** | [**[String]**](String.md)| Filter by samples.aliases | [optional] 
 **samplesCellFateChangeTreatments** | [**[String]**](String.md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samplesClassifications** | [**[String]**](String.md)| Filter by samples.classifications | [optional] 
 **samplesConstructLibrarySetsId** | [**[String]**](String.md)| Filter by samples.construct_library_sets.@id | [optional] 
 **samplesConstructLibrarySetsAccession** | [**[String]**](String.md)| Filter by samples.construct_library_sets.accession | [optional] 
 **samplesConstructLibrarySetsSummary** | [**[String]**](String.md)| Filter by samples.construct_library_sets.summary | [optional] 
 **samplesDiseaseTermsId** | [**[String]**](String.md)| Filter by samples.disease_terms.@id | [optional] 
 **samplesDiseaseTermsTermName** | [**[String]**](String.md)| Filter by samples.disease_terms.term_name | [optional] 
 **samplesModifications** | [**[String]**](String.md)| Filter by samples.modifications | [optional] 
 **samplesSampleTermsId** | [**[String]**](String.md)| Filter by samples.sample_terms.@id | [optional] 
 **samplesSampleTermsAliases** | [**[String]**](String.md)| Filter by samples.sample_terms.aliases | [optional] 
 **samplesSampleTermsStatus** | [**[String]**](String.md)| Filter by samples.sample_terms.status | [optional] 
 **samplesSampleTermsSummary** | [**[String]**](String.md)| Filter by samples.sample_terms.summary | [optional] 
 **samplesSampleTermsTermName** | [**[String]**](String.md)| Filter by samples.sample_terms.term_name | [optional] 
 **samplesStatus** | [**[String]**](String.md)| Filter by samples.status | [optional] 
 **samplesSummary** | [**[String]**](String.md)| Filter by samples.summary | [optional] 
 **samplesTargetedSampleTermId** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samplesTargetedSampleTermTermName** | [**[String]**](String.md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samplesTaxa** | [**[String]**](String.md)| Filter by samples.taxa | [optional] 
 **samplesTreatments** | [**[String]**](String.md)| Filter by samples.treatments | [optional] 
 **scope** | [**[String]**](String.md)| Filter by scope | [optional] 
 **smallScaleGeneListId** | [**[String]**](String.md)| Filter by small_scale_gene_list.@id | [optional] 
 **smallScaleGeneListGeneid** | [**[String]**](String.md)| Filter by small_scale_gene_list.geneid | [optional] 
 **smallScaleGeneListName** | [**[String]**](String.md)| Filter by small_scale_gene_list.name | [optional] 
 **smallScaleGeneListSymbol** | [**[String]**](String.md)| Filter by small_scale_gene_list.symbol | [optional] 
 **smallScaleGeneListSynonyms** | [**[String]**](String.md)| Filter by small_scale_gene_list.synonyms | [optional] 
 **smallScaleLociList** | [**[Locus]**](Locus.md)| Filter by small_scale_loci_list | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFilesTimestamp** | [**[String]**](String.md)| Filter by submitted_files_timestamp | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**PredictionSetResults**](PredictionSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## primaryCells

> PrimaryCellResults primaryCells(frame, opts)

List items in the PrimaryCell collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'age': ["null"], // [String] | Filter by age
  'ageUnits': ["null"], // [String] | Filter by age_units
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biomarkers': ["null"], // [String] | Filter by biomarkers
  'cellularSubPool': ["null"], // [String] | Filter by cellular_sub_pool
  'classifications': ["null"], // [String] | Filter by classifications
  'collections': ["null"], // [String] | Filter by collections
  'constructLibrarySets': ["null"], // [String] | Filter by construct_library_sets
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dateObtained': ["null"], // [String] | Filter by date_obtained
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'diseaseTermsId': ["null"], // [String] | Filter by disease_terms.@id
  'diseaseTermsTermName': ["null"], // [String] | Filter by disease_terms.term_name
  'documents': ["null"], // [String] | Filter by documents
  'donors': ["null"], // [String] | Filter by donors
  'embryonic': [null], // [Boolean] | Filter by embryonic
  'fileSetsId': ["null"], // [String] | Filter by file_sets.@id
  'fileSetsAccession': ["null"], // [String] | Filter by file_sets.accession
  'fileSetsAliases': ["null"], // [String] | Filter by file_sets.aliases
  'fileSetsAssayTermTermName': ["null"], // [String] | Filter by file_sets.assay_term.term_name
  'fileSetsLabTitle': ["null"], // [String] | Filter by file_sets.lab.title
  'fileSetsStatus': ["null"], // [String] | Filter by file_sets.status
  'fileSetsSummary': ["null"], // [String] | Filter by file_sets.summary
  'institutionalCertificatesId': ["null"], // [String] | Filter by institutional_certificates.@id
  'institutionalCertificatesCertificateIdentifier': ["null"], // [String] | Filter by institutional_certificates.certificate_identifier
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'lowerBoundAge': [null], // [Number] | Filter by lower_bound_age
  'lowerBoundAgeInHours': [null], // [Number] | Filter by lower_bound_age_in_hours
  'modificationsId': ["null"], // [String] | Filter by modifications.@id
  'modificationsStatus': ["null"], // [String] | Filter by modifications.status
  'modificationsSummary': ["null"], // [String] | Filter by modifications.summary
  'moi': [null], // [Number] | Filter by moi
  'multiplexedInId': ["null"], // [String] | Filter by multiplexed_in.@id
  'multiplexedInAccession': ["null"], // [String] | Filter by multiplexed_in.accession
  'notes': ["null"], // [String] | Filter by notes
  'nucleicAcidDelivery': ["null"], // [String] | Filter by nucleic_acid_delivery
  'originOf': ["null"], // [String] | Filter by origin_of
  'originatedFrom': ["null"], // [String] | Filter by originated_from
  'partOf': ["null"], // [String] | Filter by part_of
  'parts': ["null"], // [String] | Filter by parts
  'passageNumber': [null], // [Number] | Filter by passage_number
  'pooledFrom': ["null"], // [String] | Filter by pooled_from
  'pooledIn': ["null"], // [String] | Filter by pooled_in
  'productId': ["null"], // [String] | Filter by product_id
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sampleTermsId': ["null"], // [String] | Filter by sample_terms.@id
  'sampleTermsTermName': ["null"], // [String] | Filter by sample_terms.term_name
  'sex': ["null"], // [String] | Filter by sex
  'sortedFractions': ["null"], // [String] | Filter by sorted_fractions
  'sortedFromId': ["null"], // [String] | Filter by sorted_from.@id
  'sortedFromAccession': ["null"], // [String] | Filter by sorted_from.accession
  'sortedFromDetail': ["null"], // [String] | Filter by sorted_from_detail
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'startingAmount': [null], // [Number] | Filter by starting_amount
  'startingAmountUnits': ["null"], // [String] | Filter by starting_amount_units
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'timePostLibraryDelivery': [null], // [Number] | Filter by time_post_library_delivery
  'timePostLibraryDeliveryUnits': ["null"], // [String] | Filter by time_post_library_delivery_units
  'treatmentsId': ["null"], // [String] | Filter by treatments.@id
  'treatmentsPurpose': ["null"], // [String] | Filter by treatments.purpose
  'treatmentsStatus': ["null"], // [String] | Filter by treatments.status
  'treatmentsSummary': ["null"], // [String] | Filter by treatments.summary
  'treatmentsTreatmentType': ["null"], // [String] | Filter by treatments.treatment_type
  'upperBoundAge': [null], // [Number] | Filter by upper_bound_age
  'upperBoundAgeInHours': [null], // [Number] | Filter by upper_bound_age_in_hours
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.primaryCells(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **age** | [**[String]**](String.md)| Filter by age | [optional] 
 **ageUnits** | [**[String]**](String.md)| Filter by age_units | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biomarkers** | [**[String]**](String.md)| Filter by biomarkers | [optional] 
 **cellularSubPool** | [**[String]**](String.md)| Filter by cellular_sub_pool | [optional] 
 **classifications** | [**[String]**](String.md)| Filter by classifications | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **constructLibrarySets** | [**[String]**](String.md)| Filter by construct_library_sets | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dateObtained** | [**[String]**](String.md)| Filter by date_obtained | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **diseaseTermsId** | [**[String]**](String.md)| Filter by disease_terms.@id | [optional] 
 **diseaseTermsTermName** | [**[String]**](String.md)| Filter by disease_terms.term_name | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donors** | [**[String]**](String.md)| Filter by donors | [optional] 
 **embryonic** | [**[Boolean]**](Boolean.md)| Filter by embryonic | [optional] 
 **fileSetsId** | [**[String]**](String.md)| Filter by file_sets.@id | [optional] 
 **fileSetsAccession** | [**[String]**](String.md)| Filter by file_sets.accession | [optional] 
 **fileSetsAliases** | [**[String]**](String.md)| Filter by file_sets.aliases | [optional] 
 **fileSetsAssayTermTermName** | [**[String]**](String.md)| Filter by file_sets.assay_term.term_name | [optional] 
 **fileSetsLabTitle** | [**[String]**](String.md)| Filter by file_sets.lab.title | [optional] 
 **fileSetsStatus** | [**[String]**](String.md)| Filter by file_sets.status | [optional] 
 **fileSetsSummary** | [**[String]**](String.md)| Filter by file_sets.summary | [optional] 
 **institutionalCertificatesId** | [**[String]**](String.md)| Filter by institutional_certificates.@id | [optional] 
 **institutionalCertificatesCertificateIdentifier** | [**[String]**](String.md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **lowerBoundAge** | [**[Number]**](Number.md)| Filter by lower_bound_age | [optional] 
 **lowerBoundAgeInHours** | [**[Number]**](Number.md)| Filter by lower_bound_age_in_hours | [optional] 
 **modificationsId** | [**[String]**](String.md)| Filter by modifications.@id | [optional] 
 **modificationsStatus** | [**[String]**](String.md)| Filter by modifications.status | [optional] 
 **modificationsSummary** | [**[String]**](String.md)| Filter by modifications.summary | [optional] 
 **moi** | [**[Number]**](Number.md)| Filter by moi | [optional] 
 **multiplexedInId** | [**[String]**](String.md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexedInAccession** | [**[String]**](String.md)| Filter by multiplexed_in.accession | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **nucleicAcidDelivery** | [**[String]**](String.md)| Filter by nucleic_acid_delivery | [optional] 
 **originOf** | [**[String]**](String.md)| Filter by origin_of | [optional] 
 **originatedFrom** | [**[String]**](String.md)| Filter by originated_from | [optional] 
 **partOf** | [**[String]**](String.md)| Filter by part_of | [optional] 
 **parts** | [**[String]**](String.md)| Filter by parts | [optional] 
 **passageNumber** | [**[Number]**](Number.md)| Filter by passage_number | [optional] 
 **pooledFrom** | [**[String]**](String.md)| Filter by pooled_from | [optional] 
 **pooledIn** | [**[String]**](String.md)| Filter by pooled_in | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sampleTermsId** | [**[String]**](String.md)| Filter by sample_terms.@id | [optional] 
 **sampleTermsTermName** | [**[String]**](String.md)| Filter by sample_terms.term_name | [optional] 
 **sex** | [**[String]**](String.md)| Filter by sex | [optional] 
 **sortedFractions** | [**[String]**](String.md)| Filter by sorted_fractions | [optional] 
 **sortedFromId** | [**[String]**](String.md)| Filter by sorted_from.@id | [optional] 
 **sortedFromAccession** | [**[String]**](String.md)| Filter by sorted_from.accession | [optional] 
 **sortedFromDetail** | [**[String]**](String.md)| Filter by sorted_from_detail | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **startingAmount** | [**[Number]**](Number.md)| Filter by starting_amount | [optional] 
 **startingAmountUnits** | [**[String]**](String.md)| Filter by starting_amount_units | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **timePostLibraryDelivery** | [**[Number]**](Number.md)| Filter by time_post_library_delivery | [optional] 
 **timePostLibraryDeliveryUnits** | [**[String]**](String.md)| Filter by time_post_library_delivery_units | [optional] 
 **treatmentsId** | [**[String]**](String.md)| Filter by treatments.@id | [optional] 
 **treatmentsPurpose** | [**[String]**](String.md)| Filter by treatments.purpose | [optional] 
 **treatmentsStatus** | [**[String]**](String.md)| Filter by treatments.status | [optional] 
 **treatmentsSummary** | [**[String]**](String.md)| Filter by treatments.summary | [optional] 
 **treatmentsTreatmentType** | [**[String]**](String.md)| Filter by treatments.treatment_type | [optional] 
 **upperBoundAge** | [**[Number]**](Number.md)| Filter by upper_bound_age | [optional] 
 **upperBoundAgeInHours** | [**[Number]**](Number.md)| Filter by upper_bound_age_in_hours | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**PrimaryCellResults**](PrimaryCellResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## publications

> PublicationResults publications(frame, opts)

List items in the Publication collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  '_abstract': ["null"], // [String] | Filter by abstract
  'aliases': ["null"], // [String] | Filter by aliases
  'authors': ["null"], // [String] | Filter by authors
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'datePublished': ["null"], // [String] | Filter by date_published
  'dateRevised': ["null"], // [String] | Filter by date_revised
  'description': ["null"], // [String] | Filter by description
  'donors': ["null"], // [String] | Filter by donors
  'fileSets': ["null"], // [String] | Filter by file_sets
  'issue': ["null"], // [String] | Filter by issue
  'journal': ["null"], // [String] | Filter by journal
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'notes': ["null"], // [String] | Filter by notes
  'page': ["null"], // [String] | Filter by page
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publicationYear': [null], // [Number] | Filter by publication_year
  'publishedBy': ["null"], // [String] | Filter by published_by
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'samples': ["null"], // [String] | Filter by samples
  'software': ["null"], // [String] | Filter by software
  'softwareVersions': ["null"], // [String] | Filter by software_versions
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'uuid': ["null"], // [String] | Filter by uuid
  'volume': ["null"], // [String] | Filter by volume
  'workflows': ["null"] // [String] | Filter by workflows
};
apiInstance.publications(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **_abstract** | [**[String]**](String.md)| Filter by abstract | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **authors** | [**[String]**](String.md)| Filter by authors | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **datePublished** | [**[String]**](String.md)| Filter by date_published | [optional] 
 **dateRevised** | [**[String]**](String.md)| Filter by date_revised | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **donors** | [**[String]**](String.md)| Filter by donors | [optional] 
 **fileSets** | [**[String]**](String.md)| Filter by file_sets | [optional] 
 **issue** | [**[String]**](String.md)| Filter by issue | [optional] 
 **journal** | [**[String]**](String.md)| Filter by journal | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **page** | [**[String]**](String.md)| Filter by page | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publicationYear** | [**[Number]**](Number.md)| Filter by publication_year | [optional] 
 **publishedBy** | [**[String]**](String.md)| Filter by published_by | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **samples** | [**[String]**](String.md)| Filter by samples | [optional] 
 **software** | [**[String]**](String.md)| Filter by software | [optional] 
 **softwareVersions** | [**[String]**](String.md)| Filter by software_versions | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **volume** | [**[String]**](String.md)| Filter by volume | [optional] 
 **workflows** | [**[String]**](String.md)| Filter by workflows | [optional] 

### Return type

[**PublicationResults**](PublicationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## referenceFiles

> ReferenceFileResults referenceFiles(frame, opts)

List items in the ReferenceFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'anvilUrl': ["null"], // [String] | Filter by anvil_url
  'assembly': ["null"], // [String] | Filter by assembly
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'controlledAccess': [null], // [Boolean] | Filter by controlled_access
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'external': [null], // [Boolean] | Filter by external
  'externalId': ["null"], // [String] | Filter by external_id
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileFormatType': ["null"], // [String] | Filter by file_format_type
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'sourceUrl': ["null"], // [String] | Filter by source_url
  'sources': ["null"], // [String] | Filter by sources
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'transcriptomeAnnotation': ["null"], // [String] | Filter by transcriptome_annotation
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.referenceFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **anvilUrl** | [**[String]**](String.md)| Filter by anvil_url | [optional] 
 **assembly** | [**[String]**](String.md)| Filter by assembly | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **controlledAccess** | [**[Boolean]**](Boolean.md)| Filter by controlled_access | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **external** | [**[Boolean]**](Boolean.md)| Filter by external | [optional] 
 **externalId** | [**[String]**](String.md)| Filter by external_id | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileFormatType** | [**[String]**](String.md)| Filter by file_format_type | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **sourceUrl** | [**[String]**](String.md)| Filter by source_url | [optional] 
 **sources** | [**[String]**](String.md)| Filter by sources | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **transcriptomeAnnotation** | [**[String]**](String.md)| Filter by transcriptome_annotation | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**ReferenceFileResults**](ReferenceFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## report

> String report(opts)

Generate a report based on search query. All results are returned.

Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let opts = {
  'query': "query_example", // String | Query string for searching.
  'type': ["null"], // [String] | Filter by item type.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Does not work with limit=all.
  'fieldFilters': {key: null}, // Object | Any field from any item type can be used as a filter. Use '!' at end of field name for negation and 'lt:', 'lte:', 'gt:', 'gte:' with value for range queries on numeric fields. Examples: {'status!': 'in progress', 'file_size': 'gte:30000'}
  'include_fields': ["null"], // [String] | Fields to include in the response. Can be repeated for multiple fields.
  'frame': "frame_example" // String | Object with links, or object with some links embedded.
};
apiInstance.report(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Query string for searching. | [optional] 
 **type** | [**[String]**](String.md)| Filter by item type. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Does not work with limit&#x3D;all. | [optional] 
 **fieldFilters** | [**Object**](.md)| Any field from any item type can be used as a filter. Use &#39;!&#39; at end of field name for negation and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; with value for range queries on numeric fields. Examples: {&#39;status!&#39;: &#39;in progress&#39;, &#39;file_size&#39;: &#39;gte:30000&#39;} | [optional] 
 **include_fields** | [**[String]**](String.md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 
 **frame** | **String**| Object with links, or object with some links embedded. | [optional] 

### Return type

**String**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/tab-separated-values, application/json


## rodentDonors

> RodentDonorResults rodentDonors(frame, opts)

List items in the RodentDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'genotype': ["null"], // [String] | Filter by genotype
  'individualRodent': [null], // [Boolean] | Filter by individual_rodent
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'notes': ["null"], // [String] | Filter by notes
  'phenotypicFeaturesId': ["null"], // [String] | Filter by phenotypic_features.@id
  'phenotypicFeaturesFeatureId': ["null"], // [String] | Filter by phenotypic_features.feature.@id
  'phenotypicFeaturesFeatureTermId': ["null"], // [String] | Filter by phenotypic_features.feature.term_id
  'phenotypicFeaturesFeatureTermName': ["null"], // [String] | Filter by phenotypic_features.feature.term_name
  'phenotypicFeaturesObservationDate': ["null"], // [String] | Filter by phenotypic_features.observation_date
  'phenotypicFeaturesQuantityUnits': ["null"], // [String] | Filter by phenotypic_features.quantity_units
  'productId': ["null"], // [String] | Filter by product_id
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'rodentIdentifier': ["null"], // [String] | Filter by rodent_identifier
  'sex': ["null"], // [String] | Filter by sex
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'status': ["null"], // [String] | Filter by status
  'strain': ["null"], // [String] | Filter by strain
  'strainBackground': ["null"], // [String] | Filter by strain_background
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.rodentDonors(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **genotype** | [**[String]**](String.md)| Filter by genotype | [optional] 
 **individualRodent** | [**[Boolean]**](Boolean.md)| Filter by individual_rodent | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **phenotypicFeaturesId** | [**[String]**](String.md)| Filter by phenotypic_features.@id | [optional] 
 **phenotypicFeaturesFeatureId** | [**[String]**](String.md)| Filter by phenotypic_features.feature.@id | [optional] 
 **phenotypicFeaturesFeatureTermId** | [**[String]**](String.md)| Filter by phenotypic_features.feature.term_id | [optional] 
 **phenotypicFeaturesFeatureTermName** | [**[String]**](String.md)| Filter by phenotypic_features.feature.term_name | [optional] 
 **phenotypicFeaturesObservationDate** | [**[String]**](String.md)| Filter by phenotypic_features.observation_date | [optional] 
 **phenotypicFeaturesQuantityUnits** | [**[String]**](String.md)| Filter by phenotypic_features.quantity_units | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **rodentIdentifier** | [**[String]**](String.md)| Filter by rodent_identifier | [optional] 
 **sex** | [**[String]**](String.md)| Filter by sex | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **strain** | [**[String]**](String.md)| Filter by strain | [optional] 
 **strainBackground** | [**[String]**](String.md)| Filter by strain_background | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**RodentDonorResults**](RodentDonorResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sampleTerms

> SampleTermResults sampleTerms(frame, opts)

List items in the SampleTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'ancestors': ["null"], // [String] | Filter by ancestors
  'cellSlims': ["null"], // [String] | Filter by cell_slims
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'deprecatedNtrTerms': ["null"], // [String] | Filter by deprecated_ntr_terms
  'description': ["null"], // [String] | Filter by description
  'developmentalSlims': ["null"], // [String] | Filter by developmental_slims
  'isA': ["null"], // [String] | Filter by is_a
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'ontology': ["null"], // [String] | Filter by ontology
  'organSlims': ["null"], // [String] | Filter by organ_slims
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'synonyms': ["null"], // [String] | Filter by synonyms
  'systemSlims': ["null"], // [String] | Filter by system_slims
  'termId': ["null"], // [String] | Filter by term_id
  'termName': ["null"], // [String] | Filter by term_name
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.sampleTerms(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **ancestors** | [**[String]**](String.md)| Filter by ancestors | [optional] 
 **cellSlims** | [**[String]**](String.md)| Filter by cell_slims | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **deprecatedNtrTerms** | [**[String]**](String.md)| Filter by deprecated_ntr_terms | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **developmentalSlims** | [**[String]**](String.md)| Filter by developmental_slims | [optional] 
 **isA** | [**[String]**](String.md)| Filter by is_a | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **ontology** | [**[String]**](String.md)| Filter by ontology | [optional] 
 **organSlims** | [**[String]**](String.md)| Filter by organ_slims | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **synonyms** | [**[String]**](String.md)| Filter by synonyms | [optional] 
 **systemSlims** | [**[String]**](String.md)| Filter by system_slims | [optional] 
 **termId** | [**[String]**](String.md)| Filter by term_id | [optional] 
 **termName** | [**[String]**](String.md)| Filter by term_name | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**SampleTermResults**](SampleTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## schemaForItemType

> Object schemaForItemType(itemType)

Retrieve JSON schema for item type

Returns JSON schemas of all the item types defined in IGVF

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let itemType = new IgvfProjectApi.ItemType(); // ItemType | The name of the item type
apiInstance.schemaForItemType(itemType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemType** | [**ItemType**](.md)| The name of the item type | 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## schemas

> Object schemas()

Retrieve JSON schemas for all item types

Returns JSON schemas of all the item types defined in IGVF

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
apiInstance.schemas((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## search

> SearchResults search(frame, opts)

Search for items in the IGVF Project.

Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "query_example", // String | Query string for searching.
  'type': ["null"], // [String] | Filter by item type.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Does not work with limit=all.
  'fieldFilters': {key: null} // Object | Any field from any item type can be used as a filter. Use '!' at end of field name for negation and 'lt:', 'lte:', 'gt:', 'gte:' with value for range queries on numeric fields. Examples: {'status!': 'in progress', 'file_size': 'gte:30000'}
};
apiInstance.search(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **type** | [**[String]**](String.md)| Filter by item type. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Does not work with limit&#x3D;all. | [optional] 
 **fieldFilters** | [**Object**](.md)| Any field from any item type can be used as a filter. Use &#39;!&#39; at end of field name for negation and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; with value for range queries on numeric fields. Examples: {&#39;status!&#39;: &#39;in progress&#39;, &#39;file_size&#39;: &#39;gte:30000&#39;} | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sequenceFiles

> SequenceFileResults sequenceFiles(frame, opts)

List items in the SequenceFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'anvilUrl': ["null"], // [String] | Filter by anvil_url
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'controlledAccess': [null], // [Boolean] | Filter by controlled_access
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'flowcellId': ["null"], // [String] | Filter by flowcell_id
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'illuminaReadType': ["null"], // [String] | Filter by illumina_read_type
  'index': ["null"], // [String] | Filter by index
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lane': [null], // [Number] | Filter by lane
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'maximumReadLength': [null], // [Number] | Filter by maximum_read_length
  'md5sum': ["null"], // [String] | Filter by md5sum
  'meanReadLength': [null], // [Number] | Filter by mean_read_length
  'minimumReadLength': [null], // [Number] | Filter by minimum_read_length
  'notes': ["null"], // [String] | Filter by notes
  'readCount': [null], // [Number] | Filter by read_count
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'seqspecs': ["null"], // [String] | Filter by seqspecs
  'sequencingKit': ["null"], // [String] | Filter by sequencing_kit
  'sequencingPlatform': ["null"], // [String] | Filter by sequencing_platform
  'sequencingRun': [null], // [Number] | Filter by sequencing_run
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.sequenceFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **anvilUrl** | [**[String]**](String.md)| Filter by anvil_url | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **controlledAccess** | [**[Boolean]**](Boolean.md)| Filter by controlled_access | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **flowcellId** | [**[String]**](String.md)| Filter by flowcell_id | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **illuminaReadType** | [**[String]**](String.md)| Filter by illumina_read_type | [optional] 
 **index** | [**[String]**](String.md)| Filter by index | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lane** | [**[Number]**](Number.md)| Filter by lane | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **maximumReadLength** | [**[Number]**](Number.md)| Filter by maximum_read_length | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **meanReadLength** | [**[Number]**](Number.md)| Filter by mean_read_length | [optional] 
 **minimumReadLength** | [**[Number]**](Number.md)| Filter by minimum_read_length | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **readCount** | [**[Number]**](Number.md)| Filter by read_count | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **seqspecs** | [**[String]**](String.md)| Filter by seqspecs | [optional] 
 **sequencingKit** | [**[String]**](String.md)| Filter by sequencing_kit | [optional] 
 **sequencingPlatform** | [**[String]**](String.md)| Filter by sequencing_platform | [optional] 
 **sequencingRun** | [**[Number]**](Number.md)| Filter by sequencing_run | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**SequenceFileResults**](SequenceFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## signalFiles

> SignalFileResults signalFiles(frame, opts)

List items in the SignalFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'assembly': ["null"], // [String] | Filter by assembly
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentSummary': ["null"], // [String] | Filter by content_summary
  'contentType': ["null"], // [String] | Filter by content_type
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'filtered': [null], // [Boolean] | Filter by filtered
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'normalized': [null], // [Boolean] | Filter by normalized
  'notes': ["null"], // [String] | Filter by notes
  'referenceFiles': ["null"], // [String] | Filter by reference_files
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'startViewPosition': ["null"], // [String] | Filter by start_view_position
  'status': ["null"], // [String] | Filter by status
  'strandSpecificity': ["null"], // [String] | Filter by strand_specificity
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'transcriptomeAnnotation': ["null"], // [String] | Filter by transcriptome_annotation
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.signalFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **assembly** | [**[String]**](String.md)| Filter by assembly | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentSummary** | [**[String]**](String.md)| Filter by content_summary | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **filtered** | [**[Boolean]**](Boolean.md)| Filter by filtered | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **normalized** | [**[Boolean]**](Boolean.md)| Filter by normalized | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **referenceFiles** | [**[String]**](String.md)| Filter by reference_files | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **startViewPosition** | [**[String]**](String.md)| Filter by start_view_position | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **strandSpecificity** | [**[String]**](String.md)| Filter by strand_specificity | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **transcriptomeAnnotation** | [**[String]**](String.md)| Filter by transcriptome_annotation | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**SignalFileResults**](SignalFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## software

> SoftwareResults software(frame, opts)

List items in the Software collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'sourceUrl': ["null"], // [String] | Filter by source_url
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'usedBy': ["null"], // [String] | Filter by used_by
  'uuid': ["null"], // [String] | Filter by uuid
  'versions': ["null"] // [String] | Filter by versions
};
apiInstance.software(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **sourceUrl** | [**[String]**](String.md)| Filter by source_url | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **usedBy** | [**[String]**](String.md)| Filter by used_by | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **versions** | [**[String]**](String.md)| Filter by versions | [optional] 

### Return type

[**SoftwareResults**](SoftwareResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## softwareVersions

> SoftwareVersionResults softwareVersions(frame, opts)

List items in the SoftwareVersion collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'downloadId': ["null"], // [String] | Filter by download_id
  'downloadedUrl': ["null"], // [String] | Filter by downloaded_url
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'softwareId': ["null"], // [String] | Filter by software.@id
  'softwareTitle': ["null"], // [String] | Filter by software.title
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uuid': ["null"], // [String] | Filter by uuid
  'version': ["null"] // [String] | Filter by version
};
apiInstance.softwareVersions(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **downloadId** | [**[String]**](String.md)| Filter by download_id | [optional] 
 **downloadedUrl** | [**[String]**](String.md)| Filter by downloaded_url | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **softwareId** | [**[String]**](String.md)| Filter by software.@id | [optional] 
 **softwareTitle** | [**[String]**](String.md)| Filter by software.title | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **version** | [**[String]**](String.md)| Filter by version | [optional] 

### Return type

[**SoftwareVersionResults**](SoftwareVersionResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sources

> SourceResults sources(frame, opts)

List items in the Source collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.sources(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**SourceResults**](SourceResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tabularFiles

> TabularFileResults tabularFiles(frame, opts)

List items in the TabularFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisStepVersion': ["null"], // [String] | Filter by analysis_step_version
  'anvilUrl': ["null"], // [String] | Filter by anvil_url
  'assembly': ["null"], // [String] | Filter by assembly
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'contentMd5sum': ["null"], // [String] | Filter by content_md5sum
  'contentType': ["null"], // [String] | Filter by content_type
  'controlledAccess': [null], // [Boolean] | Filter by controlled_access
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'derivedFrom': ["null"], // [String] | Filter by derived_from
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileFormat': ["null"], // [String] | Filter by file_format
  'fileFormatSpecifications': ["null"], // [String] | Filter by file_format_specifications
  'fileFormatType': ["null"], // [String] | Filter by file_format_type
  'fileSet': ["null"], // [String] | Filter by file_set
  'fileSize': [null], // [Number] | Filter by file_size
  'geneListFor': ["null"], // [String] | Filter by gene_list_for
  'href': ["null"], // [String] | Filter by href
  'inputFileFor': ["null"], // [String] | Filter by input_file_for
  'integratedIn': ["null"], // [String] | Filter by integrated_in
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lociListFor': ["null"], // [String] | Filter by loci_list_for
  'md5sum': ["null"], // [String] | Filter by md5sum
  'notes': ["null"], // [String] | Filter by notes
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  's3Uri': ["null"], // [String] | Filter by s3_uri
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submittedFileName': ["null"], // [String] | Filter by submitted_file_name
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'transcriptomeAnnotation': ["null"], // [String] | Filter by transcriptome_annotation
  'uploadStatus': ["null"], // [String] | Filter by upload_status
  'uuid': ["null"], // [String] | Filter by uuid
  'validationErrorDetail': ["null"] // [String] | Filter by validation_error_detail
};
apiInstance.tabularFiles(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisStepVersion** | [**[String]**](String.md)| Filter by analysis_step_version | [optional] 
 **anvilUrl** | [**[String]**](String.md)| Filter by anvil_url | [optional] 
 **assembly** | [**[String]**](String.md)| Filter by assembly | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **contentMd5sum** | [**[String]**](String.md)| Filter by content_md5sum | [optional] 
 **contentType** | [**[String]**](String.md)| Filter by content_type | [optional] 
 **controlledAccess** | [**[Boolean]**](Boolean.md)| Filter by controlled_access | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **derivedFrom** | [**[String]**](String.md)| Filter by derived_from | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileFormat** | [**[String]**](String.md)| Filter by file_format | [optional] 
 **fileFormatSpecifications** | [**[String]**](String.md)| Filter by file_format_specifications | [optional] 
 **fileFormatType** | [**[String]**](String.md)| Filter by file_format_type | [optional] 
 **fileSet** | [**[String]**](String.md)| Filter by file_set | [optional] 
 **fileSize** | [**[Number]**](Number.md)| Filter by file_size | [optional] 
 **geneListFor** | [**[String]**](String.md)| Filter by gene_list_for | [optional] 
 **href** | [**[String]**](String.md)| Filter by href | [optional] 
 **inputFileFor** | [**[String]**](String.md)| Filter by input_file_for | [optional] 
 **integratedIn** | [**[String]**](String.md)| Filter by integrated_in | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lociListFor** | [**[String]**](String.md)| Filter by loci_list_for | [optional] 
 **md5sum** | [**[String]**](String.md)| Filter by md5sum | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **s3Uri** | [**[String]**](String.md)| Filter by s3_uri | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submittedFileName** | [**[String]**](String.md)| Filter by submitted_file_name | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **transcriptomeAnnotation** | [**[String]**](String.md)| Filter by transcriptome_annotation | [optional] 
 **uploadStatus** | [**[String]**](String.md)| Filter by upload_status | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **validationErrorDetail** | [**[String]**](String.md)| Filter by validation_error_detail | [optional] 

### Return type

[**TabularFileResults**](TabularFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## technicalSamples

> TechnicalSampleResults technicalSamples(frame, opts)

List items in the TechnicalSample collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'classifications': ["null"], // [String] | Filter by classifications
  'collections': ["null"], // [String] | Filter by collections
  'constructLibrarySets': ["null"], // [String] | Filter by construct_library_sets
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dateObtained': ["null"], // [String] | Filter by date_obtained
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'fileSetsId': ["null"], // [String] | Filter by file_sets.@id
  'fileSetsAccession': ["null"], // [String] | Filter by file_sets.accession
  'fileSetsAliases': ["null"], // [String] | Filter by file_sets.aliases
  'fileSetsAssayTermTermName': ["null"], // [String] | Filter by file_sets.assay_term.term_name
  'fileSetsLabTitle': ["null"], // [String] | Filter by file_sets.lab.title
  'fileSetsStatus': ["null"], // [String] | Filter by file_sets.status
  'fileSetsSummary': ["null"], // [String] | Filter by file_sets.summary
  'institutionalCertificates': ["null"], // [String] | Filter by institutional_certificates
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'moi': [null], // [Number] | Filter by moi
  'multiplexedInId': ["null"], // [String] | Filter by multiplexed_in.@id
  'multiplexedInAccession': ["null"], // [String] | Filter by multiplexed_in.accession
  'notes': ["null"], // [String] | Filter by notes
  'nucleicAcidDelivery': ["null"], // [String] | Filter by nucleic_acid_delivery
  'originOf': ["null"], // [String] | Filter by origin_of
  'productId': ["null"], // [String] | Filter by product_id
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sampleMaterial': ["null"], // [String] | Filter by sample_material
  'sampleTermsId': ["null"], // [String] | Filter by sample_terms.@id
  'sampleTermsTermName': ["null"], // [String] | Filter by sample_terms.term_name
  'sortedFractions': ["null"], // [String] | Filter by sorted_fractions
  'sortedFromId': ["null"], // [String] | Filter by sorted_from.@id
  'sortedFromAccession': ["null"], // [String] | Filter by sorted_from.accession
  'sortedFromDetail': ["null"], // [String] | Filter by sorted_from_detail
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'startingAmount': [null], // [Number] | Filter by starting_amount
  'startingAmountUnits': ["null"], // [String] | Filter by starting_amount_units
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'timePostLibraryDelivery': [null], // [Number] | Filter by time_post_library_delivery
  'timePostLibraryDeliveryUnits': ["null"], // [String] | Filter by time_post_library_delivery_units
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.technicalSamples(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **classifications** | [**[String]**](String.md)| Filter by classifications | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **constructLibrarySets** | [**[String]**](String.md)| Filter by construct_library_sets | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dateObtained** | [**[String]**](String.md)| Filter by date_obtained | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **fileSetsId** | [**[String]**](String.md)| Filter by file_sets.@id | [optional] 
 **fileSetsAccession** | [**[String]**](String.md)| Filter by file_sets.accession | [optional] 
 **fileSetsAliases** | [**[String]**](String.md)| Filter by file_sets.aliases | [optional] 
 **fileSetsAssayTermTermName** | [**[String]**](String.md)| Filter by file_sets.assay_term.term_name | [optional] 
 **fileSetsLabTitle** | [**[String]**](String.md)| Filter by file_sets.lab.title | [optional] 
 **fileSetsStatus** | [**[String]**](String.md)| Filter by file_sets.status | [optional] 
 **fileSetsSummary** | [**[String]**](String.md)| Filter by file_sets.summary | [optional] 
 **institutionalCertificates** | [**[String]**](String.md)| Filter by institutional_certificates | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **moi** | [**[Number]**](Number.md)| Filter by moi | [optional] 
 **multiplexedInId** | [**[String]**](String.md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexedInAccession** | [**[String]**](String.md)| Filter by multiplexed_in.accession | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **nucleicAcidDelivery** | [**[String]**](String.md)| Filter by nucleic_acid_delivery | [optional] 
 **originOf** | [**[String]**](String.md)| Filter by origin_of | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sampleMaterial** | [**[String]**](String.md)| Filter by sample_material | [optional] 
 **sampleTermsId** | [**[String]**](String.md)| Filter by sample_terms.@id | [optional] 
 **sampleTermsTermName** | [**[String]**](String.md)| Filter by sample_terms.term_name | [optional] 
 **sortedFractions** | [**[String]**](String.md)| Filter by sorted_fractions | [optional] 
 **sortedFromId** | [**[String]**](String.md)| Filter by sorted_from.@id | [optional] 
 **sortedFromAccession** | [**[String]**](String.md)| Filter by sorted_from.accession | [optional] 
 **sortedFromDetail** | [**[String]**](String.md)| Filter by sorted_from_detail | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **startingAmount** | [**[Number]**](Number.md)| Filter by starting_amount | [optional] 
 **startingAmountUnits** | [**[String]**](String.md)| Filter by starting_amount_units | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **timePostLibraryDelivery** | [**[Number]**](Number.md)| Filter by time_post_library_delivery | [optional] 
 **timePostLibraryDeliveryUnits** | [**[String]**](String.md)| Filter by time_post_library_delivery_units | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**TechnicalSampleResults**](TechnicalSampleResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## tissues

> TissueResults tissues(frame, opts)

List items in the Tissue collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'age': ["null"], // [String] | Filter by age
  'ageUnits': ["null"], // [String] | Filter by age_units
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biomarkers': ["null"], // [String] | Filter by biomarkers
  'ccfId': ["null"], // [String] | Filter by ccf_id
  'cellularSubPool': ["null"], // [String] | Filter by cellular_sub_pool
  'classifications': ["null"], // [String] | Filter by classifications
  'collections': ["null"], // [String] | Filter by collections
  'constructLibrarySets': ["null"], // [String] | Filter by construct_library_sets
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dateObtained': ["null"], // [String] | Filter by date_obtained
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'diseaseTermsId': ["null"], // [String] | Filter by disease_terms.@id
  'diseaseTermsTermName': ["null"], // [String] | Filter by disease_terms.term_name
  'documents': ["null"], // [String] | Filter by documents
  'donors': ["null"], // [String] | Filter by donors
  'embryonic': [null], // [Boolean] | Filter by embryonic
  'fileSetsId': ["null"], // [String] | Filter by file_sets.@id
  'fileSetsAccession': ["null"], // [String] | Filter by file_sets.accession
  'fileSetsAliases': ["null"], // [String] | Filter by file_sets.aliases
  'fileSetsAssayTermTermName': ["null"], // [String] | Filter by file_sets.assay_term.term_name
  'fileSetsLabTitle': ["null"], // [String] | Filter by file_sets.lab.title
  'fileSetsStatus': ["null"], // [String] | Filter by file_sets.status
  'fileSetsSummary': ["null"], // [String] | Filter by file_sets.summary
  'institutionalCertificatesId': ["null"], // [String] | Filter by institutional_certificates.@id
  'institutionalCertificatesCertificateIdentifier': ["null"], // [String] | Filter by institutional_certificates.certificate_identifier
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'lowerBoundAge': [null], // [Number] | Filter by lower_bound_age
  'lowerBoundAgeInHours': [null], // [Number] | Filter by lower_bound_age_in_hours
  'modificationsId': ["null"], // [String] | Filter by modifications.@id
  'modificationsStatus': ["null"], // [String] | Filter by modifications.status
  'modificationsSummary': ["null"], // [String] | Filter by modifications.summary
  'moi': [null], // [Number] | Filter by moi
  'multiplexedInId': ["null"], // [String] | Filter by multiplexed_in.@id
  'multiplexedInAccession': ["null"], // [String] | Filter by multiplexed_in.accession
  'notes': ["null"], // [String] | Filter by notes
  'nucleicAcidDelivery': ["null"], // [String] | Filter by nucleic_acid_delivery
  'originOf': ["null"], // [String] | Filter by origin_of
  'originatedFrom': ["null"], // [String] | Filter by originated_from
  'partOf': ["null"], // [String] | Filter by part_of
  'parts': ["null"], // [String] | Filter by parts
  'pmi': [null], // [Number] | Filter by pmi
  'pmiUnits': ["null"], // [String] | Filter by pmi_units
  'pooledFrom': ["null"], // [String] | Filter by pooled_from
  'pooledIn': ["null"], // [String] | Filter by pooled_in
  'preservationMethod': ["null"], // [String] | Filter by preservation_method
  'productId': ["null"], // [String] | Filter by product_id
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sampleTermsId': ["null"], // [String] | Filter by sample_terms.@id
  'sampleTermsTermName': ["null"], // [String] | Filter by sample_terms.term_name
  'sex': ["null"], // [String] | Filter by sex
  'sortedFractions': ["null"], // [String] | Filter by sorted_fractions
  'sortedFromId': ["null"], // [String] | Filter by sorted_from.@id
  'sortedFromAccession': ["null"], // [String] | Filter by sorted_from.accession
  'sortedFromDetail': ["null"], // [String] | Filter by sorted_from_detail
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'startingAmount': [null], // [Number] | Filter by starting_amount
  'startingAmountUnits': ["null"], // [String] | Filter by starting_amount_units
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'timePostLibraryDelivery': [null], // [Number] | Filter by time_post_library_delivery
  'timePostLibraryDeliveryUnits': ["null"], // [String] | Filter by time_post_library_delivery_units
  'treatmentsId': ["null"], // [String] | Filter by treatments.@id
  'treatmentsPurpose': ["null"], // [String] | Filter by treatments.purpose
  'treatmentsStatus': ["null"], // [String] | Filter by treatments.status
  'treatmentsSummary': ["null"], // [String] | Filter by treatments.summary
  'treatmentsTreatmentType': ["null"], // [String] | Filter by treatments.treatment_type
  'upperBoundAge': [null], // [Number] | Filter by upper_bound_age
  'upperBoundAgeInHours': [null], // [Number] | Filter by upper_bound_age_in_hours
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.tissues(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **age** | [**[String]**](String.md)| Filter by age | [optional] 
 **ageUnits** | [**[String]**](String.md)| Filter by age_units | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biomarkers** | [**[String]**](String.md)| Filter by biomarkers | [optional] 
 **ccfId** | [**[String]**](String.md)| Filter by ccf_id | [optional] 
 **cellularSubPool** | [**[String]**](String.md)| Filter by cellular_sub_pool | [optional] 
 **classifications** | [**[String]**](String.md)| Filter by classifications | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **constructLibrarySets** | [**[String]**](String.md)| Filter by construct_library_sets | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dateObtained** | [**[String]**](String.md)| Filter by date_obtained | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **diseaseTermsId** | [**[String]**](String.md)| Filter by disease_terms.@id | [optional] 
 **diseaseTermsTermName** | [**[String]**](String.md)| Filter by disease_terms.term_name | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donors** | [**[String]**](String.md)| Filter by donors | [optional] 
 **embryonic** | [**[Boolean]**](Boolean.md)| Filter by embryonic | [optional] 
 **fileSetsId** | [**[String]**](String.md)| Filter by file_sets.@id | [optional] 
 **fileSetsAccession** | [**[String]**](String.md)| Filter by file_sets.accession | [optional] 
 **fileSetsAliases** | [**[String]**](String.md)| Filter by file_sets.aliases | [optional] 
 **fileSetsAssayTermTermName** | [**[String]**](String.md)| Filter by file_sets.assay_term.term_name | [optional] 
 **fileSetsLabTitle** | [**[String]**](String.md)| Filter by file_sets.lab.title | [optional] 
 **fileSetsStatus** | [**[String]**](String.md)| Filter by file_sets.status | [optional] 
 **fileSetsSummary** | [**[String]**](String.md)| Filter by file_sets.summary | [optional] 
 **institutionalCertificatesId** | [**[String]**](String.md)| Filter by institutional_certificates.@id | [optional] 
 **institutionalCertificatesCertificateIdentifier** | [**[String]**](String.md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **lowerBoundAge** | [**[Number]**](Number.md)| Filter by lower_bound_age | [optional] 
 **lowerBoundAgeInHours** | [**[Number]**](Number.md)| Filter by lower_bound_age_in_hours | [optional] 
 **modificationsId** | [**[String]**](String.md)| Filter by modifications.@id | [optional] 
 **modificationsStatus** | [**[String]**](String.md)| Filter by modifications.status | [optional] 
 **modificationsSummary** | [**[String]**](String.md)| Filter by modifications.summary | [optional] 
 **moi** | [**[Number]**](Number.md)| Filter by moi | [optional] 
 **multiplexedInId** | [**[String]**](String.md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexedInAccession** | [**[String]**](String.md)| Filter by multiplexed_in.accession | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **nucleicAcidDelivery** | [**[String]**](String.md)| Filter by nucleic_acid_delivery | [optional] 
 **originOf** | [**[String]**](String.md)| Filter by origin_of | [optional] 
 **originatedFrom** | [**[String]**](String.md)| Filter by originated_from | [optional] 
 **partOf** | [**[String]**](String.md)| Filter by part_of | [optional] 
 **parts** | [**[String]**](String.md)| Filter by parts | [optional] 
 **pmi** | [**[Number]**](Number.md)| Filter by pmi | [optional] 
 **pmiUnits** | [**[String]**](String.md)| Filter by pmi_units | [optional] 
 **pooledFrom** | [**[String]**](String.md)| Filter by pooled_from | [optional] 
 **pooledIn** | [**[String]**](String.md)| Filter by pooled_in | [optional] 
 **preservationMethod** | [**[String]**](String.md)| Filter by preservation_method | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sampleTermsId** | [**[String]**](String.md)| Filter by sample_terms.@id | [optional] 
 **sampleTermsTermName** | [**[String]**](String.md)| Filter by sample_terms.term_name | [optional] 
 **sex** | [**[String]**](String.md)| Filter by sex | [optional] 
 **sortedFractions** | [**[String]**](String.md)| Filter by sorted_fractions | [optional] 
 **sortedFromId** | [**[String]**](String.md)| Filter by sorted_from.@id | [optional] 
 **sortedFromAccession** | [**[String]**](String.md)| Filter by sorted_from.accession | [optional] 
 **sortedFromDetail** | [**[String]**](String.md)| Filter by sorted_from_detail | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **startingAmount** | [**[Number]**](Number.md)| Filter by starting_amount | [optional] 
 **startingAmountUnits** | [**[String]**](String.md)| Filter by starting_amount_units | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **timePostLibraryDelivery** | [**[Number]**](Number.md)| Filter by time_post_library_delivery | [optional] 
 **timePostLibraryDeliveryUnits** | [**[String]**](String.md)| Filter by time_post_library_delivery_units | [optional] 
 **treatmentsId** | [**[String]**](String.md)| Filter by treatments.@id | [optional] 
 **treatmentsPurpose** | [**[String]**](String.md)| Filter by treatments.purpose | [optional] 
 **treatmentsStatus** | [**[String]**](String.md)| Filter by treatments.status | [optional] 
 **treatmentsSummary** | [**[String]**](String.md)| Filter by treatments.summary | [optional] 
 **treatmentsTreatmentType** | [**[String]**](String.md)| Filter by treatments.treatment_type | [optional] 
 **upperBoundAge** | [**[Number]**](Number.md)| Filter by upper_bound_age | [optional] 
 **upperBoundAgeInHours** | [**[Number]**](Number.md)| Filter by upper_bound_age_in_hours | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**TissueResults**](TissueResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## treatments

> TreatmentResults treatments(frame, opts)

List items in the Treatment collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'amount': [null], // [Number] | Filter by amount
  'amountUnits': ["null"], // [String] | Filter by amount_units
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biosamplesTreated': ["null"], // [String] | Filter by biosamples_treated
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'depletion': [null], // [Boolean] | Filter by depletion
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'duration': [null], // [Number] | Filter by duration
  'durationUnits': ["null"], // [String] | Filter by duration_units
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'notes': ["null"], // [String] | Filter by notes
  'pH': [null], // [Number] | Filter by pH
  'postTreatmentTime': [null], // [Number] | Filter by post_treatment_time
  'postTreatmentTimeUnits': ["null"], // [String] | Filter by post_treatment_time_units
  'productId': ["null"], // [String] | Filter by product_id
  'purpose': ["null"], // [String] | Filter by purpose
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'temperature': [null], // [Number] | Filter by temperature
  'temperatureUnits': ["null"], // [String] | Filter by temperature_units
  'treatmentTermId': ["null"], // [String] | Filter by treatment_term_id
  'treatmentTermName': ["null"], // [String] | Filter by treatment_term_name
  'treatmentType': ["null"], // [String] | Filter by treatment_type
  'uuid': ["null"] // [String] | Filter by uuid
};
apiInstance.treatments(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **amount** | [**[Number]**](Number.md)| Filter by amount | [optional] 
 **amountUnits** | [**[String]**](String.md)| Filter by amount_units | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biosamplesTreated** | [**[String]**](String.md)| Filter by biosamples_treated | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **depletion** | [**[Boolean]**](Boolean.md)| Filter by depletion | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **duration** | [**[Number]**](Number.md)| Filter by duration | [optional] 
 **durationUnits** | [**[String]**](String.md)| Filter by duration_units | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **pH** | [**[Number]**](Number.md)| Filter by pH | [optional] 
 **postTreatmentTime** | [**[Number]**](Number.md)| Filter by post_treatment_time | [optional] 
 **postTreatmentTimeUnits** | [**[String]**](String.md)| Filter by post_treatment_time_units | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **purpose** | [**[String]**](String.md)| Filter by purpose | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **temperature** | [**[Number]**](Number.md)| Filter by temperature | [optional] 
 **temperatureUnits** | [**[String]**](String.md)| Filter by temperature_units | [optional] 
 **treatmentTermId** | [**[String]**](String.md)| Filter by treatment_term_id | [optional] 
 **treatmentTermName** | [**[String]**](String.md)| Filter by treatment_term_name | [optional] 
 **treatmentType** | [**[String]**](String.md)| Filter by treatment_type | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 

### Return type

[**TreatmentResults**](TreatmentResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## users

> UserResults users(frame, opts)

List items in the User collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'aliases': ["null"], // [String] | Filter by aliases
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'email': ["null"], // [String] | Filter by email
  'firstName': ["null"], // [String] | Filter by first_name
  'groups': ["null"], // [String] | Filter by groups
  'jobTitle': ["null"], // [String] | Filter by job_title
  'lab': ["null"], // [String] | Filter by lab
  'lastName': ["null"], // [String] | Filter by last_name
  'notes': ["null"], // [String] | Filter by notes
  'status': ["null"], // [String] | Filter by status
  'submitsFor': ["null"], // [String] | Filter by submits_for
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'title': ["null"], // [String] | Filter by title
  'uuid': ["null"], // [String] | Filter by uuid
  'viewingGroups': ["null"] // [String] | Filter by viewing_groups
};
apiInstance.users(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **email** | [**[String]**](String.md)| Filter by email | [optional] 
 **firstName** | [**[String]**](String.md)| Filter by first_name | [optional] 
 **groups** | [**[String]**](String.md)| Filter by groups | [optional] 
 **jobTitle** | [**[String]**](String.md)| Filter by job_title | [optional] 
 **lab** | [**[String]**](String.md)| Filter by lab | [optional] 
 **lastName** | [**[String]**](String.md)| Filter by last_name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submitsFor** | [**[String]**](String.md)| Filter by submits_for | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **title** | [**[String]**](String.md)| Filter by title | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **viewingGroups** | [**[String]**](String.md)| Filter by viewing_groups | [optional] 

### Return type

[**UserResults**](UserResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## wholeOrganisms

> WholeOrganismResults wholeOrganisms(frame, opts)

List items in the WholeOrganism collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'age': ["null"], // [String] | Filter by age
  'ageUnits': ["null"], // [String] | Filter by age_units
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'biomarkers': ["null"], // [String] | Filter by biomarkers
  'cellularSubPool': ["null"], // [String] | Filter by cellular_sub_pool
  'classifications': ["null"], // [String] | Filter by classifications
  'collections': ["null"], // [String] | Filter by collections
  'constructLibrarySets': ["null"], // [String] | Filter by construct_library_sets
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'dateObtained': ["null"], // [String] | Filter by date_obtained
  'dbxrefs': ["null"], // [String] | Filter by dbxrefs
  'description': ["null"], // [String] | Filter by description
  'diseaseTermsId': ["null"], // [String] | Filter by disease_terms.@id
  'diseaseTermsTermName': ["null"], // [String] | Filter by disease_terms.term_name
  'documents': ["null"], // [String] | Filter by documents
  'donors': ["null"], // [String] | Filter by donors
  'embryonic': [null], // [Boolean] | Filter by embryonic
  'fileSetsId': ["null"], // [String] | Filter by file_sets.@id
  'fileSetsAccession': ["null"], // [String] | Filter by file_sets.accession
  'fileSetsAliases': ["null"], // [String] | Filter by file_sets.aliases
  'fileSetsAssayTermTermName': ["null"], // [String] | Filter by file_sets.assay_term.term_name
  'fileSetsLabTitle': ["null"], // [String] | Filter by file_sets.lab.title
  'fileSetsStatus': ["null"], // [String] | Filter by file_sets.status
  'fileSetsSummary': ["null"], // [String] | Filter by file_sets.summary
  'institutionalCertificatesId': ["null"], // [String] | Filter by institutional_certificates.@id
  'institutionalCertificatesCertificateIdentifier': ["null"], // [String] | Filter by institutional_certificates.certificate_identifier
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'lotId': ["null"], // [String] | Filter by lot_id
  'lowerBoundAge': [null], // [Number] | Filter by lower_bound_age
  'lowerBoundAgeInHours': [null], // [Number] | Filter by lower_bound_age_in_hours
  'modificationsId': ["null"], // [String] | Filter by modifications.@id
  'modificationsStatus': ["null"], // [String] | Filter by modifications.status
  'modificationsSummary': ["null"], // [String] | Filter by modifications.summary
  'moi': [null], // [Number] | Filter by moi
  'multiplexedInId': ["null"], // [String] | Filter by multiplexed_in.@id
  'multiplexedInAccession': ["null"], // [String] | Filter by multiplexed_in.accession
  'notes': ["null"], // [String] | Filter by notes
  'nucleicAcidDelivery': ["null"], // [String] | Filter by nucleic_acid_delivery
  'originOf': ["null"], // [String] | Filter by origin_of
  'originatedFrom': ["null"], // [String] | Filter by originated_from
  'partOf': ["null"], // [String] | Filter by part_of
  'parts': ["null"], // [String] | Filter by parts
  'pooledFrom': ["null"], // [String] | Filter by pooled_from
  'pooledIn': ["null"], // [String] | Filter by pooled_in
  'productId': ["null"], // [String] | Filter by product_id
  'protocols': ["null"], // [String] | Filter by protocols
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sampleTermsId': ["null"], // [String] | Filter by sample_terms.@id
  'sampleTermsTermName': ["null"], // [String] | Filter by sample_terms.term_name
  'sex': ["null"], // [String] | Filter by sex
  'sortedFractions': ["null"], // [String] | Filter by sorted_fractions
  'sortedFromId': ["null"], // [String] | Filter by sorted_from.@id
  'sortedFromAccession': ["null"], // [String] | Filter by sorted_from.accession
  'sortedFromDetail': ["null"], // [String] | Filter by sorted_from_detail
  'sourcesId': ["null"], // [String] | Filter by sources.@id
  'startingAmount': [null], // [Number] | Filter by starting_amount
  'startingAmountUnits': ["null"], // [String] | Filter by starting_amount_units
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'taxa': ["null"], // [String] | Filter by taxa
  'timePostLibraryDelivery': [null], // [Number] | Filter by time_post_library_delivery
  'timePostLibraryDeliveryUnits': ["null"], // [String] | Filter by time_post_library_delivery_units
  'treatmentsId': ["null"], // [String] | Filter by treatments.@id
  'treatmentsPurpose': ["null"], // [String] | Filter by treatments.purpose
  'treatmentsStatus': ["null"], // [String] | Filter by treatments.status
  'treatmentsSummary': ["null"], // [String] | Filter by treatments.summary
  'treatmentsTreatmentType': ["null"], // [String] | Filter by treatments.treatment_type
  'upperBoundAge': [null], // [Number] | Filter by upper_bound_age
  'upperBoundAgeInHours': [null], // [Number] | Filter by upper_bound_age_in_hours
  'url': ["null"], // [String] | Filter by url
  'uuid': ["null"], // [String] | Filter by uuid
  'virtual': [null] // [Boolean] | Filter by virtual
};
apiInstance.wholeOrganisms(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **age** | [**[String]**](String.md)| Filter by age | [optional] 
 **ageUnits** | [**[String]**](String.md)| Filter by age_units | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **biomarkers** | [**[String]**](String.md)| Filter by biomarkers | [optional] 
 **cellularSubPool** | [**[String]**](String.md)| Filter by cellular_sub_pool | [optional] 
 **classifications** | [**[String]**](String.md)| Filter by classifications | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **constructLibrarySets** | [**[String]**](String.md)| Filter by construct_library_sets | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **dateObtained** | [**[String]**](String.md)| Filter by date_obtained | [optional] 
 **dbxrefs** | [**[String]**](String.md)| Filter by dbxrefs | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **diseaseTermsId** | [**[String]**](String.md)| Filter by disease_terms.@id | [optional] 
 **diseaseTermsTermName** | [**[String]**](String.md)| Filter by disease_terms.term_name | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **donors** | [**[String]**](String.md)| Filter by donors | [optional] 
 **embryonic** | [**[Boolean]**](Boolean.md)| Filter by embryonic | [optional] 
 **fileSetsId** | [**[String]**](String.md)| Filter by file_sets.@id | [optional] 
 **fileSetsAccession** | [**[String]**](String.md)| Filter by file_sets.accession | [optional] 
 **fileSetsAliases** | [**[String]**](String.md)| Filter by file_sets.aliases | [optional] 
 **fileSetsAssayTermTermName** | [**[String]**](String.md)| Filter by file_sets.assay_term.term_name | [optional] 
 **fileSetsLabTitle** | [**[String]**](String.md)| Filter by file_sets.lab.title | [optional] 
 **fileSetsStatus** | [**[String]**](String.md)| Filter by file_sets.status | [optional] 
 **fileSetsSummary** | [**[String]**](String.md)| Filter by file_sets.summary | [optional] 
 **institutionalCertificatesId** | [**[String]**](String.md)| Filter by institutional_certificates.@id | [optional] 
 **institutionalCertificatesCertificateIdentifier** | [**[String]**](String.md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **lotId** | [**[String]**](String.md)| Filter by lot_id | [optional] 
 **lowerBoundAge** | [**[Number]**](Number.md)| Filter by lower_bound_age | [optional] 
 **lowerBoundAgeInHours** | [**[Number]**](Number.md)| Filter by lower_bound_age_in_hours | [optional] 
 **modificationsId** | [**[String]**](String.md)| Filter by modifications.@id | [optional] 
 **modificationsStatus** | [**[String]**](String.md)| Filter by modifications.status | [optional] 
 **modificationsSummary** | [**[String]**](String.md)| Filter by modifications.summary | [optional] 
 **moi** | [**[Number]**](Number.md)| Filter by moi | [optional] 
 **multiplexedInId** | [**[String]**](String.md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexedInAccession** | [**[String]**](String.md)| Filter by multiplexed_in.accession | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **nucleicAcidDelivery** | [**[String]**](String.md)| Filter by nucleic_acid_delivery | [optional] 
 **originOf** | [**[String]**](String.md)| Filter by origin_of | [optional] 
 **originatedFrom** | [**[String]**](String.md)| Filter by originated_from | [optional] 
 **partOf** | [**[String]**](String.md)| Filter by part_of | [optional] 
 **parts** | [**[String]**](String.md)| Filter by parts | [optional] 
 **pooledFrom** | [**[String]**](String.md)| Filter by pooled_from | [optional] 
 **pooledIn** | [**[String]**](String.md)| Filter by pooled_in | [optional] 
 **productId** | [**[String]**](String.md)| Filter by product_id | [optional] 
 **protocols** | [**[String]**](String.md)| Filter by protocols | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sampleTermsId** | [**[String]**](String.md)| Filter by sample_terms.@id | [optional] 
 **sampleTermsTermName** | [**[String]**](String.md)| Filter by sample_terms.term_name | [optional] 
 **sex** | [**[String]**](String.md)| Filter by sex | [optional] 
 **sortedFractions** | [**[String]**](String.md)| Filter by sorted_fractions | [optional] 
 **sortedFromId** | [**[String]**](String.md)| Filter by sorted_from.@id | [optional] 
 **sortedFromAccession** | [**[String]**](String.md)| Filter by sorted_from.accession | [optional] 
 **sortedFromDetail** | [**[String]**](String.md)| Filter by sorted_from_detail | [optional] 
 **sourcesId** | [**[String]**](String.md)| Filter by sources.@id | [optional] 
 **startingAmount** | [**[Number]**](Number.md)| Filter by starting_amount | [optional] 
 **startingAmountUnits** | [**[String]**](String.md)| Filter by starting_amount_units | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **taxa** | [**[String]**](String.md)| Filter by taxa | [optional] 
 **timePostLibraryDelivery** | [**[Number]**](Number.md)| Filter by time_post_library_delivery | [optional] 
 **timePostLibraryDeliveryUnits** | [**[String]**](String.md)| Filter by time_post_library_delivery_units | [optional] 
 **treatmentsId** | [**[String]**](String.md)| Filter by treatments.@id | [optional] 
 **treatmentsPurpose** | [**[String]**](String.md)| Filter by treatments.purpose | [optional] 
 **treatmentsStatus** | [**[String]**](String.md)| Filter by treatments.status | [optional] 
 **treatmentsSummary** | [**[String]**](String.md)| Filter by treatments.summary | [optional] 
 **treatmentsTreatmentType** | [**[String]**](String.md)| Filter by treatments.treatment_type | [optional] 
 **upperBoundAge** | [**[Number]**](Number.md)| Filter by upper_bound_age | [optional] 
 **upperBoundAgeInHours** | [**[Number]**](Number.md)| Filter by upper_bound_age_in_hours | [optional] 
 **url** | [**[String]**](String.md)| Filter by url | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **virtual** | [**[Boolean]**](Boolean.md)| Filter by virtual | [optional] 

### Return type

[**WholeOrganismResults**](WholeOrganismResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflows

> WorkflowResults workflows(frame, opts)

List items in the Workflow collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.

### Example

```javascript
import IgvfProjectApi from 'igvf_project_api';
let defaultClient = IgvfProjectApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new IgvfProjectApi.IgvfApi();
let frame = "frame_example"; // String | Constant value. Do not set.
let opts = {
  'query': "variant flowfish jurkat", // String | Query string for searching.
  'limit': new IgvfProjectApi.Limit(), // Limit | Maximum number of results to return. Default is 25. Use 'all' for all results.
  'sort': ["null"], // [String] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all.
  'id': ["null"], // [String] | Filter by @id
  'accession': ["null"], // [String] | Filter by accession
  'aliases': ["null"], // [String] | Filter by aliases
  'alternateAccessions': ["null"], // [String] | Filter by alternate_accessions
  'analysisSteps': ["null"], // [String] | Filter by analysis_steps
  'awardId': ["null"], // [String] | Filter by award.@id
  'awardComponent': ["null"], // [String] | Filter by award.component
  'collections': ["null"], // [String] | Filter by collections
  'creationTimestamp': ["null"], // [String] | Filter by creation_timestamp
  'description': ["null"], // [String] | Filter by description
  'documents': ["null"], // [String] | Filter by documents
  'labId': ["null"], // [String] | Filter by lab.@id
  'labTitle': ["null"], // [String] | Filter by lab.title
  'name': ["null"], // [String] | Filter by name
  'notes': ["null"], // [String] | Filter by notes
  'publicationIdentifiers': ["null"], // [String] | Filter by publication_identifiers
  'publications': ["null"], // [String] | Filter by publications
  'releaseTimestamp': ["null"], // [String] | Filter by release_timestamp
  'revokeDetail': ["null"], // [String] | Filter by revoke_detail
  'sourceUrl': ["null"], // [String] | Filter by source_url
  'standardsPageId': ["null"], // [String] | Filter by standards_page.@id
  'standardsPageTitle': ["null"], // [String] | Filter by standards_page.title
  'status': ["null"], // [String] | Filter by status
  'submittedById': ["null"], // [String] | Filter by submitted_by.@id
  'submittedByTitle': ["null"], // [String] | Filter by submitted_by.title
  'submitterComment': ["null"], // [String] | Filter by submitter_comment
  'summary': ["null"], // [String] | Filter by summary
  'uuid': ["null"], // [String] | Filter by uuid
  'workflowRepositories': ["null"], // [String] | Filter by workflow_repositories
  'workflowVersion': [null] // [Number] | Filter by workflow_version
};
apiInstance.workflows(frame, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frame** | **String**| Constant value. Do not set. | 
 **query** | **String**| Query string for searching. | [optional] 
 **limit** | [**Limit**](.md)| Maximum number of results to return. Default is 25. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**[String]**](String.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **id** | [**[String]**](String.md)| Filter by @id | [optional] 
 **accession** | [**[String]**](String.md)| Filter by accession | [optional] 
 **aliases** | [**[String]**](String.md)| Filter by aliases | [optional] 
 **alternateAccessions** | [**[String]**](String.md)| Filter by alternate_accessions | [optional] 
 **analysisSteps** | [**[String]**](String.md)| Filter by analysis_steps | [optional] 
 **awardId** | [**[String]**](String.md)| Filter by award.@id | [optional] 
 **awardComponent** | [**[String]**](String.md)| Filter by award.component | [optional] 
 **collections** | [**[String]**](String.md)| Filter by collections | [optional] 
 **creationTimestamp** | [**[String]**](String.md)| Filter by creation_timestamp | [optional] 
 **description** | [**[String]**](String.md)| Filter by description | [optional] 
 **documents** | [**[String]**](String.md)| Filter by documents | [optional] 
 **labId** | [**[String]**](String.md)| Filter by lab.@id | [optional] 
 **labTitle** | [**[String]**](String.md)| Filter by lab.title | [optional] 
 **name** | [**[String]**](String.md)| Filter by name | [optional] 
 **notes** | [**[String]**](String.md)| Filter by notes | [optional] 
 **publicationIdentifiers** | [**[String]**](String.md)| Filter by publication_identifiers | [optional] 
 **publications** | [**[String]**](String.md)| Filter by publications | [optional] 
 **releaseTimestamp** | [**[String]**](String.md)| Filter by release_timestamp | [optional] 
 **revokeDetail** | [**[String]**](String.md)| Filter by revoke_detail | [optional] 
 **sourceUrl** | [**[String]**](String.md)| Filter by source_url | [optional] 
 **standardsPageId** | [**[String]**](String.md)| Filter by standards_page.@id | [optional] 
 **standardsPageTitle** | [**[String]**](String.md)| Filter by standards_page.title | [optional] 
 **status** | [**[String]**](String.md)| Filter by status | [optional] 
 **submittedById** | [**[String]**](String.md)| Filter by submitted_by.@id | [optional] 
 **submittedByTitle** | [**[String]**](String.md)| Filter by submitted_by.title | [optional] 
 **submitterComment** | [**[String]**](String.md)| Filter by submitter_comment | [optional] 
 **summary** | [**[String]**](String.md)| Filter by summary | [optional] 
 **uuid** | [**[String]**](String.md)| Filter by uuid | [optional] 
 **workflowRepositories** | [**[String]**](String.md)| Filter by workflow_repositories | [optional] 
 **workflowVersion** | [**[Number]**](Number.md)| Filter by workflow_version | [optional] 

### Return type

[**WorkflowResults**](WorkflowResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

