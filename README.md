# igvf-client
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 1.0.0
- Generator version: 7.6.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import igvf_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import igvf_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import igvf_client
from igvf_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.igvf.org
# See configuration.py for a list of all supported configuration parameters.
configuration = igvf_client.Configuration(
    host = "https://api.data.igvf.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = igvf_client.Configuration(
    access_key = os.environ["IGVF_ACCESS_KEY"],
    secret_access_key = os.environ["IGVF_SECRET_ACCESS_KEY"]
)


# Enter a context with an instance of the API client
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.IgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    status = 'status_example' # str | Filter by status (optional)
    user = 'user_example' # str | Filter by user (optional)
    access_key_id = 'access_key_id_example' # str | Filter by access_key_id (optional)
    secret_access_key_hash = 'secret_access_key_hash_example' # str | Filter by secret_access_key_hash (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the AccessKey collection.
        api_response = api_instance.access_keys(query=query, limit=limit, sort=sort, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, status=status, user=user, access_key_id=access_key_id, secret_access_key_hash=secret_access_key_hash, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->access_keys:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling IgvfApi->access_keys: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.data.igvf.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*IgvfApi* | [**access_keys**](docs/IgvfApi.md#access_keys) | **GET** /access-keys/@@listing | List items in the AccessKey collection.
*IgvfApi* | [**alignment_files**](docs/IgvfApi.md#alignment_files) | **GET** /alignment-files/@@listing | List items in the AlignmentFile collection.
*IgvfApi* | [**analysis_sets**](docs/IgvfApi.md#analysis_sets) | **GET** /analysis-sets/@@listing | List items in the AnalysisSet collection.
*IgvfApi* | [**analysis_step_versions**](docs/IgvfApi.md#analysis_step_versions) | **GET** /analysis-step-versions/@@listing | List items in the AnalysisStepVersion collection.
*IgvfApi* | [**analysis_steps**](docs/IgvfApi.md#analysis_steps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.
*IgvfApi* | [**assay_terms**](docs/IgvfApi.md#assay_terms) | **GET** /assay-terms/@@listing | List items in the AssayTerm collection.
*IgvfApi* | [**auxiliary_sets**](docs/IgvfApi.md#auxiliary_sets) | **GET** /auxiliary-sets/@@listing | List items in the AuxiliarySet collection.
*IgvfApi* | [**awards**](docs/IgvfApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.
*IgvfApi* | [**batch_download**](docs/IgvfApi.md#batch_download) | **GET** /batch-download | List files to download based on search query. All results are returned.
*IgvfApi* | [**biomarkers**](docs/IgvfApi.md#biomarkers) | **GET** /biomarkers/@@listing | List items in the Biomarker collection.
*IgvfApi* | [**configuration_files**](docs/IgvfApi.md#configuration_files) | **GET** /configuration-files/@@listing | List items in the ConfigurationFile collection.
*IgvfApi* | [**construct_library_sets**](docs/IgvfApi.md#construct_library_sets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.
*IgvfApi* | [**crispr_modifications**](docs/IgvfApi.md#crispr_modifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.
*IgvfApi* | [**curated_sets**](docs/IgvfApi.md#curated_sets) | **GET** /curated-sets/@@listing | List items in the CuratedSet collection.
*IgvfApi* | [**degron_modifications**](docs/IgvfApi.md#degron_modifications) | **GET** /degron-modifications/@@listing | List items in the DegronModification collection.
*IgvfApi* | [**documents**](docs/IgvfApi.md#documents) | **GET** /documents/@@listing | List items in the Document collection.
*IgvfApi* | [**download**](docs/IgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
*IgvfApi* | [**genes**](docs/IgvfApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.
*IgvfApi* | [**genome_browser_annotation_files**](docs/IgvfApi.md#genome_browser_annotation_files) | **GET** /genome-browser-annotation-files/@@listing | List items in the GenomeBrowserAnnotationFile collection.
*IgvfApi* | [**get_by_id**](docs/IgvfApi.md#get_by_id) | **GET** /{resource_id} | Get item information
*IgvfApi* | [**human_donors**](docs/IgvfApi.md#human_donors) | **GET** /human-donors/@@listing | List items in the HumanDonor collection.
*IgvfApi* | [**image_files**](docs/IgvfApi.md#image_files) | **GET** /image-files/@@listing | List items in the ImageFile collection.
*IgvfApi* | [**images**](docs/IgvfApi.md#images) | **GET** /images/@@listing | List items in the Image collection.
*IgvfApi* | [**in_vitro_systems**](docs/IgvfApi.md#in_vitro_systems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.
*IgvfApi* | [**institutional_certificates**](docs/IgvfApi.md#institutional_certificates) | **GET** /institutional-certificates/@@listing | List items in the InstitutionalCertificate collection.
*IgvfApi* | [**labs**](docs/IgvfApi.md#labs) | **GET** /labs/@@listing | List items in the Lab collection.
*IgvfApi* | [**matrix_files**](docs/IgvfApi.md#matrix_files) | **GET** /matrix-files/@@listing | List items in the MatrixFile collection.
*IgvfApi* | [**measurement_sets**](docs/IgvfApi.md#measurement_sets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.
*IgvfApi* | [**model_files**](docs/IgvfApi.md#model_files) | **GET** /model-files/@@listing | List items in the ModelFile collection.
*IgvfApi* | [**model_sets**](docs/IgvfApi.md#model_sets) | **GET** /model-sets/@@listing | List items in the ModelSet collection.
*IgvfApi* | [**multiplexed_samples**](docs/IgvfApi.md#multiplexed_samples) | **GET** /multiplexed-samples/@@listing | List items in the MultiplexedSample collection.
*IgvfApi* | [**open_reading_frames**](docs/IgvfApi.md#open_reading_frames) | **GET** /open-reading-frames/@@listing | List items in the OpenReadingFrame collection.
*IgvfApi* | [**pages**](docs/IgvfApi.md#pages) | **GET** /pages/@@listing | List items in the Page collection.
*IgvfApi* | [**phenotype_terms**](docs/IgvfApi.md#phenotype_terms) | **GET** /phenotype-terms/@@listing | List items in the PhenotypeTerm collection.
*IgvfApi* | [**phenotypic_features**](docs/IgvfApi.md#phenotypic_features) | **GET** /phenotypic-features/@@listing | List items in the PhenotypicFeature collection.
*IgvfApi* | [**platform_terms**](docs/IgvfApi.md#platform_terms) | **GET** /platform-terms/@@listing | List items in the PlatformTerm collection.
*IgvfApi* | [**prediction_sets**](docs/IgvfApi.md#prediction_sets) | **GET** /prediction-sets/@@listing | List items in the PredictionSet collection.
*IgvfApi* | [**primary_cells**](docs/IgvfApi.md#primary_cells) | **GET** /primary-cells/@@listing | List items in the PrimaryCell collection.
*IgvfApi* | [**publications**](docs/IgvfApi.md#publications) | **GET** /publications/@@listing | List items in the Publication collection.
*IgvfApi* | [**reference_files**](docs/IgvfApi.md#reference_files) | **GET** /reference-files/@@listing | List items in the ReferenceFile collection.
*IgvfApi* | [**report**](docs/IgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
*IgvfApi* | [**rodent_donors**](docs/IgvfApi.md#rodent_donors) | **GET** /rodent-donors/@@listing | List items in the RodentDonor collection.
*IgvfApi* | [**sample_terms**](docs/IgvfApi.md#sample_terms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.
*IgvfApi* | [**schema_for_item_type**](docs/IgvfApi.md#schema_for_item_type) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
*IgvfApi* | [**schemas**](docs/IgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
*IgvfApi* | [**search**](docs/IgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project
*IgvfApi* | [**sequence_files**](docs/IgvfApi.md#sequence_files) | **GET** /sequence-files/@@listing | List items in the SequenceFile collection.
*IgvfApi* | [**signal_files**](docs/IgvfApi.md#signal_files) | **GET** /signal-files/@@listing | List items in the SignalFile collection.
*IgvfApi* | [**software**](docs/IgvfApi.md#software) | **GET** /software/@@listing | List items in the Software collection.
*IgvfApi* | [**software_versions**](docs/IgvfApi.md#software_versions) | **GET** /software-versions/@@listing | List items in the SoftwareVersion collection.
*IgvfApi* | [**sources**](docs/IgvfApi.md#sources) | **GET** /sources/@@listing | List items in the Source collection.
*IgvfApi* | [**tabular_files**](docs/IgvfApi.md#tabular_files) | **GET** /tabular-files/@@listing | List items in the TabularFile collection.
*IgvfApi* | [**technical_samples**](docs/IgvfApi.md#technical_samples) | **GET** /technical-samples/@@listing | List items in the TechnicalSample collection.
*IgvfApi* | [**tissues**](docs/IgvfApi.md#tissues) | **GET** /tissues/@@listing | List items in the Tissue collection.
*IgvfApi* | [**treatments**](docs/IgvfApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.
*IgvfApi* | [**users**](docs/IgvfApi.md#users) | **GET** /users/@@listing | List items in the User collection.
*IgvfApi* | [**whole_organisms**](docs/IgvfApi.md#whole_organisms) | **GET** /whole-organisms/@@listing | List items in the WholeOrganism collection.
*IgvfApi* | [**workflows**](docs/IgvfApi.md#workflows) | **GET** /workflows/@@listing | List items in the Workflow collection.


## Documentation For Models

 - [AccessKey](docs/AccessKey.md)
 - [AccessKeyResults](docs/AccessKeyResults.md)
 - [AlignmentFile](docs/AlignmentFile.md)
 - [AlignmentFileResults](docs/AlignmentFileResults.md)
 - [AnalysisSet](docs/AnalysisSet.md)
 - [AnalysisSetResults](docs/AnalysisSetResults.md)
 - [AnalysisStep](docs/AnalysisStep.md)
 - [AnalysisStepResults](docs/AnalysisStepResults.md)
 - [AnalysisStepVersion](docs/AnalysisStepVersion.md)
 - [AnalysisStepVersionResults](docs/AnalysisStepVersionResults.md)
 - [AssayTerm](docs/AssayTerm.md)
 - [AssayTermResults](docs/AssayTermResults.md)
 - [Attachment](docs/Attachment.md)
 - [Attachment1](docs/Attachment1.md)
 - [Attachment2](docs/Attachment2.md)
 - [Attachment3](docs/Attachment3.md)
 - [AuxiliarySet](docs/AuxiliarySet.md)
 - [AuxiliarySetResults](docs/AuxiliarySetResults.md)
 - [Award](docs/Award.md)
 - [AwardResults](docs/AwardResults.md)
 - [Biomarker](docs/Biomarker.md)
 - [BiomarkerResults](docs/BiomarkerResults.md)
 - [ConfigurationFile](docs/ConfigurationFile.md)
 - [ConfigurationFileResults](docs/ConfigurationFileResults.md)
 - [ConstructLibrarySet](docs/ConstructLibrarySet.md)
 - [ConstructLibrarySetResults](docs/ConstructLibrarySetResults.md)
 - [CrisprModification](docs/CrisprModification.md)
 - [CrisprModificationResults](docs/CrisprModificationResults.md)
 - [CuratedSet](docs/CuratedSet.md)
 - [CuratedSetResults](docs/CuratedSetResults.md)
 - [DegronModification](docs/DegronModification.md)
 - [DegronModificationResults](docs/DegronModificationResults.md)
 - [Document](docs/Document.md)
 - [DocumentResults](docs/DocumentResults.md)
 - [Gene](docs/Gene.md)
 - [GeneLocation](docs/GeneLocation.md)
 - [GeneLocation1](docs/GeneLocation1.md)
 - [GeneResults](docs/GeneResults.md)
 - [GenomeBrowserAnnotationFile](docs/GenomeBrowserAnnotationFile.md)
 - [GenomeBrowserAnnotationFileResults](docs/GenomeBrowserAnnotationFileResults.md)
 - [HumanDonor](docs/HumanDonor.md)
 - [HumanDonorResults](docs/HumanDonorResults.md)
 - [Image](docs/Image.md)
 - [ImageFile](docs/ImageFile.md)
 - [ImageFileResults](docs/ImageFileResults.md)
 - [ImageResults](docs/ImageResults.md)
 - [InVitroSystem](docs/InVitroSystem.md)
 - [InVitroSystemResults](docs/InVitroSystemResults.md)
 - [InstitutionalCertificate](docs/InstitutionalCertificate.md)
 - [InstitutionalCertificateResults](docs/InstitutionalCertificateResults.md)
 - [Item](docs/Item.md)
 - [ItemType](docs/ItemType.md)
 - [Lab](docs/Lab.md)
 - [LabResults](docs/LabResults.md)
 - [Limit](docs/Limit.md)
 - [Locus](docs/Locus.md)
 - [Locus1](docs/Locus1.md)
 - [MatrixFile](docs/MatrixFile.md)
 - [MatrixFileResults](docs/MatrixFileResults.md)
 - [MeasurementSet](docs/MeasurementSet.md)
 - [MeasurementSetResults](docs/MeasurementSetResults.md)
 - [ModelFile](docs/ModelFile.md)
 - [ModelFileResults](docs/ModelFileResults.md)
 - [ModelSet](docs/ModelSet.md)
 - [ModelSetResults](docs/ModelSetResults.md)
 - [MultiplexedSample](docs/MultiplexedSample.md)
 - [MultiplexedSampleResults](docs/MultiplexedSampleResults.md)
 - [NoResultsResponse](docs/NoResultsResponse.md)
 - [NoResultsResponseColumnsValue](docs/NoResultsResponseColumnsValue.md)
 - [NoResultsResponseFacetGroupsInner](docs/NoResultsResponseFacetGroupsInner.md)
 - [NoResultsResponseFacetsInner](docs/NoResultsResponseFacetsInner.md)
 - [NoResultsResponseFacetsInnerTermsInner](docs/NoResultsResponseFacetsInnerTermsInner.md)
 - [NoResultsResponseFiltersInner](docs/NoResultsResponseFiltersInner.md)
 - [NoResultsResponseSortValue](docs/NoResultsResponseSortValue.md)
 - [OpenReadingFrame](docs/OpenReadingFrame.md)
 - [OpenReadingFrameResults](docs/OpenReadingFrameResults.md)
 - [Page](docs/Page.md)
 - [PageLayout](docs/PageLayout.md)
 - [PageLayout1](docs/PageLayout1.md)
 - [PageLayoutComponents](docs/PageLayoutComponents.md)
 - [PageLayoutComponents1](docs/PageLayoutComponents1.md)
 - [PageResults](docs/PageResults.md)
 - [PhenotypeTerm](docs/PhenotypeTerm.md)
 - [PhenotypeTermResults](docs/PhenotypeTermResults.md)
 - [PhenotypicFeature](docs/PhenotypicFeature.md)
 - [PhenotypicFeatureResults](docs/PhenotypicFeatureResults.md)
 - [PlatformTerm](docs/PlatformTerm.md)
 - [PlatformTermResults](docs/PlatformTermResults.md)
 - [PredictionSet](docs/PredictionSet.md)
 - [PredictionSetResults](docs/PredictionSetResults.md)
 - [PrimaryCell](docs/PrimaryCell.md)
 - [PrimaryCellResults](docs/PrimaryCellResults.md)
 - [Publication](docs/Publication.md)
 - [PublicationResults](docs/PublicationResults.md)
 - [ReferenceFile](docs/ReferenceFile.md)
 - [ReferenceFileResults](docs/ReferenceFileResults.md)
 - [RelatedDonor](docs/RelatedDonor.md)
 - [RodentDonor](docs/RodentDonor.md)
 - [RodentDonorResults](docs/RodentDonorResults.md)
 - [SampleTerm](docs/SampleTerm.md)
 - [SampleTermResults](docs/SampleTermResults.md)
 - [SearchFacet](docs/SearchFacet.md)
 - [SearchResultItem](docs/SearchResultItem.md)
 - [SearchResults](docs/SearchResults.md)
 - [SequenceFile](docs/SequenceFile.md)
 - [SequenceFileResults](docs/SequenceFileResults.md)
 - [SignalFile](docs/SignalFile.md)
 - [SignalFileResults](docs/SignalFileResults.md)
 - [Software](docs/Software.md)
 - [SoftwareResults](docs/SoftwareResults.md)
 - [SoftwareVersion](docs/SoftwareVersion.md)
 - [SoftwareVersionResults](docs/SoftwareVersionResults.md)
 - [Source](docs/Source.md)
 - [SourceResults](docs/SourceResults.md)
 - [TabularFile](docs/TabularFile.md)
 - [TabularFileResults](docs/TabularFileResults.md)
 - [TechnicalSample](docs/TechnicalSample.md)
 - [TechnicalSampleResults](docs/TechnicalSampleResults.md)
 - [Tile](docs/Tile.md)
 - [Tile1](docs/Tile1.md)
 - [Tissue](docs/Tissue.md)
 - [TissueResults](docs/TissueResults.md)
 - [Treatment](docs/Treatment.md)
 - [TreatmentResults](docs/TreatmentResults.md)
 - [User](docs/User.md)
 - [UserResults](docs/UserResults.md)
 - [WholeOrganism](docs/WholeOrganism.md)
 - [WholeOrganismResults](docs/WholeOrganismResults.md)
 - [Workflow](docs/Workflow.md)
 - [WorkflowResults](docs/WorkflowResults.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication


## Author




