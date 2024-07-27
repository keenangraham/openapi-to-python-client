# igvf_client.IgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_keys**](IgvfApi.md#access_keys) | **GET** /access-keys/@@listing | List items in the AccessKey collection.
[**alignment_files**](IgvfApi.md#alignment_files) | **GET** /alignment-files/@@listing | List items in the AlignmentFile collection.
[**analysis_sets**](IgvfApi.md#analysis_sets) | **GET** /analysis-sets/@@listing | List items in the AnalysisSet collection.
[**analysis_step_versions**](IgvfApi.md#analysis_step_versions) | **GET** /analysis-step-versions/@@listing | List items in the AnalysisStepVersion collection.
[**analysis_steps**](IgvfApi.md#analysis_steps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.
[**assay_terms**](IgvfApi.md#assay_terms) | **GET** /assay-terms/@@listing | List items in the AssayTerm collection.
[**auxiliary_sets**](IgvfApi.md#auxiliary_sets) | **GET** /auxiliary-sets/@@listing | List items in the AuxiliarySet collection.
[**awards**](IgvfApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.
[**batch_download**](IgvfApi.md#batch_download) | **GET** /batch-download | List files to download based on search query. All results are returned.
[**biomarkers**](IgvfApi.md#biomarkers) | **GET** /biomarkers/@@listing | List items in the Biomarker collection.
[**configuration_files**](IgvfApi.md#configuration_files) | **GET** /configuration-files/@@listing | List items in the ConfigurationFile collection.
[**construct_library_sets**](IgvfApi.md#construct_library_sets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.
[**crispr_modifications**](IgvfApi.md#crispr_modifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.
[**curated_sets**](IgvfApi.md#curated_sets) | **GET** /curated-sets/@@listing | List items in the CuratedSet collection.
[**degron_modifications**](IgvfApi.md#degron_modifications) | **GET** /degron-modifications/@@listing | List items in the DegronModification collection.
[**documents**](IgvfApi.md#documents) | **GET** /documents/@@listing | List items in the Document collection.
[**download**](IgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
[**genes**](IgvfApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.
[**genome_browser_annotation_files**](IgvfApi.md#genome_browser_annotation_files) | **GET** /genome-browser-annotation-files/@@listing | List items in the GenomeBrowserAnnotationFile collection.
[**get_by_id**](IgvfApi.md#get_by_id) | **GET** /{resource_id} | Get item information
[**human_donors**](IgvfApi.md#human_donors) | **GET** /human-donors/@@listing | List items in the HumanDonor collection.
[**image_files**](IgvfApi.md#image_files) | **GET** /image-files/@@listing | List items in the ImageFile collection.
[**images**](IgvfApi.md#images) | **GET** /images/@@listing | List items in the Image collection.
[**in_vitro_systems**](IgvfApi.md#in_vitro_systems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.
[**institutional_certificates**](IgvfApi.md#institutional_certificates) | **GET** /institutional-certificates/@@listing | List items in the InstitutionalCertificate collection.
[**labs**](IgvfApi.md#labs) | **GET** /labs/@@listing | List items in the Lab collection.
[**matrix_files**](IgvfApi.md#matrix_files) | **GET** /matrix-files/@@listing | List items in the MatrixFile collection.
[**measurement_sets**](IgvfApi.md#measurement_sets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.
[**model_files**](IgvfApi.md#model_files) | **GET** /model-files/@@listing | List items in the ModelFile collection.
[**model_sets**](IgvfApi.md#model_sets) | **GET** /model-sets/@@listing | List items in the ModelSet collection.
[**multiplexed_samples**](IgvfApi.md#multiplexed_samples) | **GET** /multiplexed-samples/@@listing | List items in the MultiplexedSample collection.
[**open_reading_frames**](IgvfApi.md#open_reading_frames) | **GET** /open-reading-frames/@@listing | List items in the OpenReadingFrame collection.
[**pages**](IgvfApi.md#pages) | **GET** /pages/@@listing | List items in the Page collection.
[**phenotype_terms**](IgvfApi.md#phenotype_terms) | **GET** /phenotype-terms/@@listing | List items in the PhenotypeTerm collection.
[**phenotypic_features**](IgvfApi.md#phenotypic_features) | **GET** /phenotypic-features/@@listing | List items in the PhenotypicFeature collection.
[**platform_terms**](IgvfApi.md#platform_terms) | **GET** /platform-terms/@@listing | List items in the PlatformTerm collection.
[**prediction_sets**](IgvfApi.md#prediction_sets) | **GET** /prediction-sets/@@listing | List items in the PredictionSet collection.
[**primary_cells**](IgvfApi.md#primary_cells) | **GET** /primary-cells/@@listing | List items in the PrimaryCell collection.
[**publications**](IgvfApi.md#publications) | **GET** /publications/@@listing | List items in the Publication collection.
[**reference_files**](IgvfApi.md#reference_files) | **GET** /reference-files/@@listing | List items in the ReferenceFile collection.
[**report**](IgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
[**rodent_donors**](IgvfApi.md#rodent_donors) | **GET** /rodent-donors/@@listing | List items in the RodentDonor collection.
[**sample_terms**](IgvfApi.md#sample_terms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.
[**schema_for_item_type**](IgvfApi.md#schema_for_item_type) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
[**schemas**](IgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
[**search**](IgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project
[**sequence_files**](IgvfApi.md#sequence_files) | **GET** /sequence-files/@@listing | List items in the SequenceFile collection.
[**signal_files**](IgvfApi.md#signal_files) | **GET** /signal-files/@@listing | List items in the SignalFile collection.
[**software**](IgvfApi.md#software) | **GET** /software/@@listing | List items in the Software collection.
[**software_versions**](IgvfApi.md#software_versions) | **GET** /software-versions/@@listing | List items in the SoftwareVersion collection.
[**sources**](IgvfApi.md#sources) | **GET** /sources/@@listing | List items in the Source collection.
[**tabular_files**](IgvfApi.md#tabular_files) | **GET** /tabular-files/@@listing | List items in the TabularFile collection.
[**technical_samples**](IgvfApi.md#technical_samples) | **GET** /technical-samples/@@listing | List items in the TechnicalSample collection.
[**tissues**](IgvfApi.md#tissues) | **GET** /tissues/@@listing | List items in the Tissue collection.
[**treatments**](IgvfApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.
[**users**](IgvfApi.md#users) | **GET** /users/@@listing | List items in the User collection.
[**whole_organisms**](IgvfApi.md#whole_organisms) | **GET** /whole-organisms/@@listing | List items in the WholeOrganism collection.
[**workflows**](IgvfApi.md#workflows) | **GET** /workflows/@@listing | List items in the Workflow collection.


# **access_keys**
> AccessKeyResults access_keys(query=query, limit=limit, sort=sort, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, status=status, user=user, access_key_id=access_key_id, secret_access_key_hash=secret_access_key_hash, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the AccessKey collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AccessKey items. Supports filtering on fields within AccessKey items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.access_key_results import AccessKeyResults
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
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
    except Exception as e:
        print("Exception when calling IgvfApi->access_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **user** | **str**| Filter by user | [optional] 
 **access_key_id** | **str**| Filter by access_key_id | [optional] 
 **secret_access_key_hash** | **str**| Filter by secret_access_key_hash | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AccessKeyResults**](AccessKeyResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alignment_files**
> AlignmentFileResults alignment_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, redacted=redacted, filtered=filtered, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the AlignmentFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AlignmentFile items. Supports filtering on fields within AlignmentFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.alignment_file_results import AlignmentFileResults
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
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    reference_files = ['reference_files_example'] # List[str] | Filter by reference_files (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    redacted = True # bool | Filter by redacted (optional)
    filtered = True # bool | Filter by filtered (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    content_summary = 'content_summary_example' # str | Filter by content_summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the AlignmentFile collection.
        api_response = api_instance.alignment_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, redacted=redacted, filtered=filtered, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->alignment_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->alignment_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **redacted** | **bool**| Filter by redacted | [optional] 
 **filtered** | **bool**| Filter by filtered | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **content_summary** | **str**| Filter by content_summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AlignmentFileResults**](AlignmentFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_sets**
> AnalysisSetResults analysis_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_titles=assay_titles, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, input_file_sets_id=input_file_sets_id, input_file_sets_accession=input_file_sets_accession, input_file_sets_aliases=input_file_sets_aliases, input_file_sets_file_set_type=input_file_sets_file_set_type, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the AnalysisSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisSet items. Supports filtering on fields within AnalysisSet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.analysis_set_results import AnalysisSetResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    assay_titles = ['assay_titles_example'] # List[str] | Filter by assay_titles (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_contact_pi_id = 'award_contact_pi_id_example' # str | Filter by award.contact_pi.@id (optional)
    award_contact_pi_title = 'award_contact_pi_title_example' # str | Filter by award.contact_pi.title (optional)
    award_title = 'award_title_example' # str | Filter by award.title (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    donors_id = ['donors_id_example'] # List[str] | Filter by donors.@id (optional)
    donors_accession = ['donors_accession_example'] # List[str] | Filter by donors.accession (optional)
    donors_aliases = ['donors_aliases_example'] # List[str] | Filter by donors.aliases (optional)
    donors_sex = ['donors_sex_example'] # List[str] | Filter by donors.sex (optional)
    donors_status = ['donors_status_example'] # List[str] | Filter by donors.status (optional)
    donors_taxa = ['donors_taxa_example'] # List[str] | Filter by donors.taxa (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_creation_timestamp = ['files_creation_timestamp_example'] # List[str] | Filter by files.creation_timestamp (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_file_size = [56] # List[int] | Filter by files.file_size (optional)
    files_href = ['files_href_example'] # List[str] | Filter by files.href (optional)
    files_s3_uri = ['files_s3_uri_example'] # List[str] | Filter by files.s3_uri (optional)
    files_sequencing_platform = ['files_sequencing_platform_example'] # List[str] | Filter by files.sequencing_platform (optional)
    files_submitted_file_name = ['files_submitted_file_name_example'] # List[str] | Filter by files.submitted_file_name (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    input_file_sets_id = ['input_file_sets_id_example'] # List[str] | Filter by input_file_sets.@id (optional)
    input_file_sets_accession = ['input_file_sets_accession_example'] # List[str] | Filter by input_file_sets.accession (optional)
    input_file_sets_aliases = ['input_file_sets_aliases_example'] # List[str] | Filter by input_file_sets.aliases (optional)
    input_file_sets_file_set_type = ['input_file_sets_file_set_type_example'] # List[str] | Filter by input_file_sets.file_set_type (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    samples_id = ['samples_id_example'] # List[str] | Filter by samples.@id (optional)
    samples_accession = ['samples_accession_example'] # List[str] | Filter by samples.accession (optional)
    samples_aliases = ['samples_aliases_example'] # List[str] | Filter by samples.aliases (optional)
    samples_cell_fate_change_treatments = ['samples_cell_fate_change_treatments_example'] # List[str] | Filter by samples.cell_fate_change_treatments (optional)
    samples_classifications = ['samples_classifications_example'] # List[str] | Filter by samples.classifications (optional)
    samples_construct_library_sets = ['samples_construct_library_sets_example'] # List[str] | Filter by samples.construct_library_sets (optional)
    samples_disease_terms_id = ['samples_disease_terms_id_example'] # List[str] | Filter by samples.disease_terms.@id (optional)
    samples_disease_terms_term_name = ['samples_disease_terms_term_name_example'] # List[str] | Filter by samples.disease_terms.term_name (optional)
    samples_modifications = ['samples_modifications_example'] # List[str] | Filter by samples.modifications (optional)
    samples_sample_terms_id = ['samples_sample_terms_id_example'] # List[str] | Filter by samples.sample_terms.@id (optional)
    samples_sample_terms_aliases = ['samples_sample_terms_aliases_example'] # List[str] | Filter by samples.sample_terms.aliases (optional)
    samples_sample_terms_status = ['samples_sample_terms_status_example'] # List[str] | Filter by samples.sample_terms.status (optional)
    samples_sample_terms_summary = ['samples_sample_terms_summary_example'] # List[str] | Filter by samples.sample_terms.summary (optional)
    samples_sample_terms_term_name = ['samples_sample_terms_term_name_example'] # List[str] | Filter by samples.sample_terms.term_name (optional)
    samples_status = ['samples_status_example'] # List[str] | Filter by samples.status (optional)
    samples_summary = ['samples_summary_example'] # List[str] | Filter by samples.summary (optional)
    samples_targeted_sample_term_id = ['samples_targeted_sample_term_id_example'] # List[str] | Filter by samples.targeted_sample_term.@id (optional)
    samples_targeted_sample_term_term_name = ['samples_targeted_sample_term_term_name_example'] # List[str] | Filter by samples.targeted_sample_term.term_name (optional)
    samples_taxa = ['samples_taxa_example'] # List[str] | Filter by samples.taxa (optional)
    samples_treatments = ['samples_treatments_example'] # List[str] | Filter by samples.treatments (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the AnalysisSet collection.
        api_response = api_instance.analysis_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_titles=assay_titles, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, input_file_sets_id=input_file_sets_id, input_file_sets_accession=input_file_sets_accession, input_file_sets_aliases=input_file_sets_aliases, input_file_sets_file_set_type=input_file_sets_file_set_type, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->analysis_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->analysis_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assay_titles** | [**List[str]**](List[str].md)| Filter by assay_titles | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_contact_pi_id** | **str**| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | **str**| Filter by award.contact_pi.title | [optional] 
 **award_title** | **str**| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **input_file_sets_id** | [**List[str]**](List[str].md)| Filter by input_file_sets.@id | [optional] 
 **input_file_sets_accession** | [**List[str]**](List[str].md)| Filter by input_file_sets.accession | [optional] 
 **input_file_sets_aliases** | [**List[str]**](List[str].md)| Filter by input_file_sets.aliases | [optional] 
 **input_file_sets_file_set_type** | [**List[str]**](List[str].md)| Filter by input_file_sets.file_set_type | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AnalysisSetResults**](AnalysisSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_step_versions**
> AnalysisStepVersionResults analysis_step_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, id=id, summary=summary, analysis_step_id=analysis_step_id, analysis_step_name=analysis_step_name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, software_versions_id=software_versions_id, software_versions_name=software_versions_name, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the AnalysisStepVersion collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStepVersion items. Supports filtering on fields within AnalysisStepVersion items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.analysis_step_version_results import AnalysisStepVersionResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    analysis_step_id = 'analysis_step_id_example' # str | Filter by analysis_step.@id (optional)
    analysis_step_name = 'analysis_step_name_example' # str | Filter by analysis_step.name (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    software_versions_id = ['software_versions_id_example'] # List[str] | Filter by software_versions.@id (optional)
    software_versions_name = ['software_versions_name_example'] # List[str] | Filter by software_versions.name (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the AnalysisStepVersion collection.
        api_response = api_instance.analysis_step_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, id=id, summary=summary, analysis_step_id=analysis_step_id, analysis_step_name=analysis_step_name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, software_versions_id=software_versions_id, software_versions_name=software_versions_name, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->analysis_step_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->analysis_step_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **analysis_step_id** | **str**| Filter by analysis_step.@id | [optional] 
 **analysis_step_name** | **str**| Filter by analysis_step.name | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **software_versions_id** | [**List[str]**](List[str].md)| Filter by software_versions.@id | [optional] 
 **software_versions_name** | [**List[str]**](List[str].md)| Filter by software_versions.name | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AnalysisStepVersionResults**](AnalysisStepVersionResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_steps**
> AnalysisStepResults analysis_steps(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_types=analysis_step_types, step_label=step_label, title=title, input_content_types=input_content_types, output_content_types=output_content_types, id=id, summary=summary, name=name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, parents_id=parents_id, parents_title=parents_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, workflow_id=workflow_id, workflow_accession=workflow_accession)

List items in the AnalysisStep collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AnalysisStep items. Supports filtering on fields within AnalysisStep items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.analysis_step_results import AnalysisStepResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_types = ['analysis_step_types_example'] # List[str] | Filter by analysis_step_types (optional)
    step_label = 'step_label_example' # str | Filter by step_label (optional)
    title = 'title_example' # str | Filter by title (optional)
    input_content_types = ['input_content_types_example'] # List[str] | Filter by input_content_types (optional)
    output_content_types = ['output_content_types_example'] # List[str] | Filter by output_content_types (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    parents_id = ['parents_id_example'] # List[str] | Filter by parents.@id (optional)
    parents_title = ['parents_title_example'] # List[str] | Filter by parents.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    workflow_id = 'workflow_id_example' # str | Filter by workflow.@id (optional)
    workflow_accession = 'workflow_accession_example' # str | Filter by workflow.accession (optional)

    try:
        # List items in the AnalysisStep collection.
        api_response = api_instance.analysis_steps(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_types=analysis_step_types, step_label=step_label, title=title, input_content_types=input_content_types, output_content_types=output_content_types, id=id, summary=summary, name=name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, parents_id=parents_id, parents_title=parents_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, workflow_id=workflow_id, workflow_accession=workflow_accession)
        print("The response of IgvfApi->analysis_steps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->analysis_steps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_types** | [**List[str]**](List[str].md)| Filter by analysis_step_types | [optional] 
 **step_label** | **str**| Filter by step_label | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **input_content_types** | [**List[str]**](List[str].md)| Filter by input_content_types | [optional] 
 **output_content_types** | [**List[str]**](List[str].md)| Filter by output_content_types | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **parents_id** | [**List[str]**](List[str].md)| Filter by parents.@id | [optional] 
 **parents_title** | [**List[str]**](List[str].md)| Filter by parents.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **workflow_id** | **str**| Filter by workflow.@id | [optional] 
 **workflow_accession** | **str**| Filter by workflow.accession | [optional] 

### Return type

[**AnalysisStepResults**](AnalysisStepResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assay_terms**
> AssayTermResults assay_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, preferred_assay_titles=preferred_assay_titles, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, assay_slims=assay_slims, category_slims=category_slims, objective_slims=objective_slims, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the AssayTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AssayTerm items. Supports filtering on fields within AssayTerm items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.assay_term_results import AssayTermResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    term_id = 'term_id_example' # str | Filter by term_id (optional)
    term_name = 'term_name_example' # str | Filter by term_name (optional)
    deprecated_ntr_terms = ['deprecated_ntr_terms_example'] # List[str] | Filter by deprecated_ntr_terms (optional)
    is_a = ['is_a_example'] # List[str] | Filter by is_a (optional)
    preferred_assay_titles = ['preferred_assay_titles_example'] # List[str] | Filter by preferred_assay_titles (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)
    synonyms = ['synonyms_example'] # List[str] | Filter by synonyms (optional)
    ancestors = ['ancestors_example'] # List[str] | Filter by ancestors (optional)
    ontology = 'ontology_example' # str | Filter by ontology (optional)
    assay_slims = ['assay_slims_example'] # List[str] | Filter by assay_slims (optional)
    category_slims = ['category_slims_example'] # List[str] | Filter by category_slims (optional)
    objective_slims = ['objective_slims_example'] # List[str] | Filter by objective_slims (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the AssayTerm collection.
        api_response = api_instance.assay_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, preferred_assay_titles=preferred_assay_titles, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, assay_slims=assay_slims, category_slims=category_slims, objective_slims=objective_slims, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->assay_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->assay_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **term_id** | **str**| Filter by term_id | [optional] 
 **term_name** | **str**| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **preferred_assay_titles** | [**List[str]**](List[str].md)| Filter by preferred_assay_titles | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | **str**| Filter by ontology | [optional] 
 **assay_slims** | [**List[str]**](List[str].md)| Filter by assay_slims | [optional] 
 **category_slims** | [**List[str]**](List[str].md)| Filter by category_slims | [optional] 
 **objective_slims** | [**List[str]**](List[str].md)| Filter by objective_slims | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AssayTermResults**](AssayTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auxiliary_sets**
> AuxiliarySetResults auxiliary_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, library_construction_platform=library_construction_platform, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, measurement_sets_id=measurement_sets_id, measurement_sets_accession=measurement_sets_accession, measurement_sets_aliases=measurement_sets_aliases, measurement_sets_preferred_assay_title=measurement_sets_preferred_assay_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the AuxiliarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate AuxiliarySet items. Supports filtering on fields within AuxiliarySet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.auxiliary_set_results import AuxiliarySetResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    library_construction_platform = 'library_construction_platform_example' # str | Filter by library_construction_platform (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_contact_pi_id = 'award_contact_pi_id_example' # str | Filter by award.contact_pi.@id (optional)
    award_contact_pi_title = 'award_contact_pi_title_example' # str | Filter by award.contact_pi.title (optional)
    award_title = 'award_title_example' # str | Filter by award.title (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    donors_id = ['donors_id_example'] # List[str] | Filter by donors.@id (optional)
    donors_accession = ['donors_accession_example'] # List[str] | Filter by donors.accession (optional)
    donors_aliases = ['donors_aliases_example'] # List[str] | Filter by donors.aliases (optional)
    donors_sex = ['donors_sex_example'] # List[str] | Filter by donors.sex (optional)
    donors_status = ['donors_status_example'] # List[str] | Filter by donors.status (optional)
    donors_taxa = ['donors_taxa_example'] # List[str] | Filter by donors.taxa (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_creation_timestamp = ['files_creation_timestamp_example'] # List[str] | Filter by files.creation_timestamp (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_file_size = [56] # List[int] | Filter by files.file_size (optional)
    files_href = ['files_href_example'] # List[str] | Filter by files.href (optional)
    files_s3_uri = ['files_s3_uri_example'] # List[str] | Filter by files.s3_uri (optional)
    files_sequencing_platform = ['files_sequencing_platform_example'] # List[str] | Filter by files.sequencing_platform (optional)
    files_submitted_file_name = ['files_submitted_file_name_example'] # List[str] | Filter by files.submitted_file_name (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    measurement_sets_id = ['measurement_sets_id_example'] # List[str] | Filter by measurement_sets.@id (optional)
    measurement_sets_accession = ['measurement_sets_accession_example'] # List[str] | Filter by measurement_sets.accession (optional)
    measurement_sets_aliases = ['measurement_sets_aliases_example'] # List[str] | Filter by measurement_sets.aliases (optional)
    measurement_sets_preferred_assay_title = ['measurement_sets_preferred_assay_title_example'] # List[str] | Filter by measurement_sets.preferred_assay_title (optional)
    samples_id = ['samples_id_example'] # List[str] | Filter by samples.@id (optional)
    samples_accession = ['samples_accession_example'] # List[str] | Filter by samples.accession (optional)
    samples_aliases = ['samples_aliases_example'] # List[str] | Filter by samples.aliases (optional)
    samples_cell_fate_change_treatments = ['samples_cell_fate_change_treatments_example'] # List[str] | Filter by samples.cell_fate_change_treatments (optional)
    samples_classifications = ['samples_classifications_example'] # List[str] | Filter by samples.classifications (optional)
    samples_construct_library_sets = ['samples_construct_library_sets_example'] # List[str] | Filter by samples.construct_library_sets (optional)
    samples_disease_terms_id = ['samples_disease_terms_id_example'] # List[str] | Filter by samples.disease_terms.@id (optional)
    samples_disease_terms_term_name = ['samples_disease_terms_term_name_example'] # List[str] | Filter by samples.disease_terms.term_name (optional)
    samples_modifications = ['samples_modifications_example'] # List[str] | Filter by samples.modifications (optional)
    samples_sample_terms_id = ['samples_sample_terms_id_example'] # List[str] | Filter by samples.sample_terms.@id (optional)
    samples_sample_terms_aliases = ['samples_sample_terms_aliases_example'] # List[str] | Filter by samples.sample_terms.aliases (optional)
    samples_sample_terms_status = ['samples_sample_terms_status_example'] # List[str] | Filter by samples.sample_terms.status (optional)
    samples_sample_terms_summary = ['samples_sample_terms_summary_example'] # List[str] | Filter by samples.sample_terms.summary (optional)
    samples_sample_terms_term_name = ['samples_sample_terms_term_name_example'] # List[str] | Filter by samples.sample_terms.term_name (optional)
    samples_status = ['samples_status_example'] # List[str] | Filter by samples.status (optional)
    samples_summary = ['samples_summary_example'] # List[str] | Filter by samples.summary (optional)
    samples_targeted_sample_term_id = ['samples_targeted_sample_term_id_example'] # List[str] | Filter by samples.targeted_sample_term.@id (optional)
    samples_targeted_sample_term_term_name = ['samples_targeted_sample_term_term_name_example'] # List[str] | Filter by samples.targeted_sample_term.term_name (optional)
    samples_taxa = ['samples_taxa_example'] # List[str] | Filter by samples.taxa (optional)
    samples_treatments = ['samples_treatments_example'] # List[str] | Filter by samples.treatments (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the AuxiliarySet collection.
        api_response = api_instance.auxiliary_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, library_construction_platform=library_construction_platform, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, measurement_sets_id=measurement_sets_id, measurement_sets_accession=measurement_sets_accession, measurement_sets_aliases=measurement_sets_aliases, measurement_sets_preferred_assay_title=measurement_sets_preferred_assay_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->auxiliary_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->auxiliary_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **library_construction_platform** | **str**| Filter by library_construction_platform | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_contact_pi_id** | **str**| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | **str**| Filter by award.contact_pi.title | [optional] 
 **award_title** | **str**| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **measurement_sets_id** | [**List[str]**](List[str].md)| Filter by measurement_sets.@id | [optional] 
 **measurement_sets_accession** | [**List[str]**](List[str].md)| Filter by measurement_sets.accession | [optional] 
 **measurement_sets_aliases** | [**List[str]**](List[str].md)| Filter by measurement_sets.aliases | [optional] 
 **measurement_sets_preferred_assay_title** | [**List[str]**](List[str].md)| Filter by measurement_sets.preferred_assay_title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AuxiliarySetResults**](AuxiliarySetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **awards**
> AwardResults awards(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, name=name, start_date=start_date, end_date=end_date, pis=pis, contact_pi=contact_pi, project=project, viewing_group=viewing_group, component=component, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Award collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Award items. Supports filtering on fields within Award items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.award_results import AwardResults
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
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    title = 'title_example' # str | Filter by title (optional)
    name = 'name_example' # str | Filter by name (optional)
    start_date = '2013-10-20' # date | Filter by start_date (optional)
    end_date = '2013-10-20' # date | Filter by end_date (optional)
    pis = ['pis_example'] # List[str] | Filter by pis (optional)
    contact_pi = 'contact_pi_example' # str | Filter by contact_pi (optional)
    project = 'project_example' # str | Filter by project (optional)
    viewing_group = 'viewing_group_example' # str | Filter by viewing_group (optional)
    component = 'component_example' # str | Filter by component (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Award collection.
        api_response = api_instance.awards(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, name=name, start_date=start_date, end_date=end_date, pis=pis, contact_pi=contact_pi, project=project, viewing_group=viewing_group, component=component, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->awards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->awards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **start_date** | **date**| Filter by start_date | [optional] 
 **end_date** | **date**| Filter by end_date | [optional] 
 **pis** | [**List[str]**](List[str].md)| Filter by pis | [optional] 
 **contact_pi** | **str**| Filter by contact_pi | [optional] 
 **project** | **str**| Filter by project | [optional] 
 **viewing_group** | **str**| Filter by viewing_group | [optional] 
 **component** | **str**| Filter by component | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**AwardResults**](AwardResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_download**
> str batch_download(type, query=query, field_filters=field_filters)

List files to download based on search query. All results are returned.

Generates TSV of files contained in FileSets in search results.

### Example

* Basic Authentication (basicAuth):

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
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types.
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)

    try:
        # List files to download based on search query. All results are returned.
        api_response = api_instance.batch_download(type, query=query, field_filters=field_filters)
        print("The response of IgvfApi->batch_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->batch_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **biomarkers**
> BiomarkerResults biomarkers(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, classification=classification, quantification=quantification, synonyms=synonyms, gene=gene, id=id, summary=summary, name_quantification=name_quantification, biomarker_for=biomarker_for, award_id=award_id, award_component=award_component, award_name=award_name, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Biomarker collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Biomarker items. Supports filtering on fields within Biomarker items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.biomarker_results import BiomarkerResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    classification = 'classification_example' # str | Filter by classification (optional)
    quantification = 'quantification_example' # str | Filter by quantification (optional)
    synonyms = ['synonyms_example'] # List[str] | Filter by synonyms (optional)
    gene = 'gene_example' # str | Filter by gene (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name_quantification = 'name_quantification_example' # str | Filter by name_quantification (optional)
    biomarker_for = ['biomarker_for_example'] # List[str] | Filter by biomarker_for (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_name = 'award_name_example' # str | Filter by award.name (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Biomarker collection.
        api_response = api_instance.biomarkers(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, classification=classification, quantification=quantification, synonyms=synonyms, gene=gene, id=id, summary=summary, name_quantification=name_quantification, biomarker_for=biomarker_for, award_id=award_id, award_component=award_component, award_name=award_name, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->biomarkers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->biomarkers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **classification** | **str**| Filter by classification | [optional] 
 **quantification** | **str**| Filter by quantification | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **gene** | **str**| Filter by gene | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name_quantification** | **str**| Filter by name_quantification | [optional] 
 **biomarker_for** | [**List[str]**](List[str].md)| Filter by biomarker_for | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_name** | **str**| Filter by award.name | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**BiomarkerResults**](BiomarkerResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **configuration_files**
> ConfigurationFileResults configuration_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, seqspec_of=seqspec_of, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the ConfigurationFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConfigurationFile items. Supports filtering on fields within ConfigurationFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.configuration_file_results import ConfigurationFileResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    seqspec_of = ['seqspec_of_example'] # List[str] | Filter by seqspec_of (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the ConfigurationFile collection.
        api_response = api_instance.configuration_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, seqspec_of=seqspec_of, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->configuration_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->configuration_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **seqspec_of** | [**List[str]**](List[str].md)| Filter by seqspec_of | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ConfigurationFileResults**](ConfigurationFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **construct_library_sets**
> ConstructLibrarySetResults construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, exon=exon, tile=tile, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples_id=applied_to_samples_id, applied_to_samples_accession=applied_to_samples_accession, applied_to_samples_aliases=applied_to_samples_aliases, applied_to_samples_disease_terms_id=applied_to_samples_disease_terms_id, applied_to_samples_disease_terms_term_name=applied_to_samples_disease_terms_term_name, applied_to_samples_sample_terms_id=applied_to_samples_sample_terms_id, applied_to_samples_sample_terms_term_name=applied_to_samples_sample_terms_term_name, applied_to_samples_status=applied_to_samples_status, applied_to_samples_summary=applied_to_samples_summary, associated_phenotypes_id=associated_phenotypes_id, associated_phenotypes_term_id=associated_phenotypes_term_id, associated_phenotypes_term_name=associated_phenotypes_term_name, award_id=award_id, award_component=award_component, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_file_format=files_file_format, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, large_scale_gene_list_id=large_scale_gene_list_id, large_scale_gene_list_accession=large_scale_gene_list_accession, large_scale_gene_list_aliases=large_scale_gene_list_aliases, large_scale_loci_list_id=large_scale_loci_list_id, large_scale_loci_list_accession=large_scale_loci_list_accession, large_scale_loci_list_aliases=large_scale_loci_list_aliases, orf_list_id=orf_list_id, orf_list_aliases=orf_list_aliases, orf_list_gene=orf_list_gene, orf_list_orf_id=orf_list_orf_id, small_scale_gene_list_id=small_scale_gene_list_id, small_scale_gene_list_geneid=small_scale_gene_list_geneid, small_scale_gene_list_name=small_scale_gene_list_name, small_scale_gene_list_symbol=small_scale_gene_list_symbol, small_scale_gene_list_synonyms=small_scale_gene_list_synonyms, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the ConstructLibrarySet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ConstructLibrarySet items. Supports filtering on fields within ConstructLibrarySet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.construct_library_set_results import ConstructLibrarySetResults
from igvf_client.models.locus import Locus
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
    small_scale_loci_list = [igvf_client.Locus()] # List[Locus] | Filter by small_scale_loci_list (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    scope = 'scope_example' # str | Filter by scope (optional)
    selection_criteria = ['selection_criteria_example'] # List[str] | Filter by selection_criteria (optional)
    integrated_content_files = ['integrated_content_files_example'] # List[str] | Filter by integrated_content_files (optional)
    exon = 'exon_example' # str | Filter by exon (optional)
    tile = {'key': igvf_client.Tile()} # Tile | Filter by tile (optional)
    guide_type = 'guide_type_example' # str | Filter by guide_type (optional)
    tiling_modality = 'tiling_modality_example' # str | Filter by tiling_modality (optional)
    average_guide_coverage = 3.4 # float | Filter by average_guide_coverage (optional)
    lower_bound_guide_coverage = 56 # int | Filter by lower_bound_guide_coverage (optional)
    upper_bound_guide_coverage = 56 # int | Filter by upper_bound_guide_coverage (optional)
    average_insert_size = 3.4 # float | Filter by average_insert_size (optional)
    lower_bound_insert_size = 56 # int | Filter by lower_bound_insert_size (optional)
    upper_bound_insert_size = 56 # int | Filter by upper_bound_insert_size (optional)
    targeton = 'targeton_example' # str | Filter by targeton (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    applied_to_samples_id = ['applied_to_samples_id_example'] # List[str] | Filter by applied_to_samples.@id (optional)
    applied_to_samples_accession = ['applied_to_samples_accession_example'] # List[str] | Filter by applied_to_samples.accession (optional)
    applied_to_samples_aliases = ['applied_to_samples_aliases_example'] # List[str] | Filter by applied_to_samples.aliases (optional)
    applied_to_samples_disease_terms_id = ['applied_to_samples_disease_terms_id_example'] # List[str] | Filter by applied_to_samples.disease_terms.@id (optional)
    applied_to_samples_disease_terms_term_name = ['applied_to_samples_disease_terms_term_name_example'] # List[str] | Filter by applied_to_samples.disease_terms.term_name (optional)
    applied_to_samples_sample_terms_id = ['applied_to_samples_sample_terms_id_example'] # List[str] | Filter by applied_to_samples.sample_terms.@id (optional)
    applied_to_samples_sample_terms_term_name = ['applied_to_samples_sample_terms_term_name_example'] # List[str] | Filter by applied_to_samples.sample_terms.term_name (optional)
    applied_to_samples_status = ['applied_to_samples_status_example'] # List[str] | Filter by applied_to_samples.status (optional)
    applied_to_samples_summary = ['applied_to_samples_summary_example'] # List[str] | Filter by applied_to_samples.summary (optional)
    associated_phenotypes_id = ['associated_phenotypes_id_example'] # List[str] | Filter by associated_phenotypes.@id (optional)
    associated_phenotypes_term_id = ['associated_phenotypes_term_id_example'] # List[str] | Filter by associated_phenotypes.term_id (optional)
    associated_phenotypes_term_name = ['associated_phenotypes_term_name_example'] # List[str] | Filter by associated_phenotypes.term_name (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    large_scale_gene_list_id = 'large_scale_gene_list_id_example' # str | Filter by large_scale_gene_list.@id (optional)
    large_scale_gene_list_accession = 'large_scale_gene_list_accession_example' # str | Filter by large_scale_gene_list.accession (optional)
    large_scale_gene_list_aliases = ['large_scale_gene_list_aliases_example'] # List[str] | Filter by large_scale_gene_list.aliases (optional)
    large_scale_loci_list_id = 'large_scale_loci_list_id_example' # str | Filter by large_scale_loci_list.@id (optional)
    large_scale_loci_list_accession = 'large_scale_loci_list_accession_example' # str | Filter by large_scale_loci_list.accession (optional)
    large_scale_loci_list_aliases = ['large_scale_loci_list_aliases_example'] # List[str] | Filter by large_scale_loci_list.aliases (optional)
    orf_list_id = ['orf_list_id_example'] # List[str] | Filter by orf_list.@id (optional)
    orf_list_aliases = ['orf_list_aliases_example'] # List[str] | Filter by orf_list.aliases (optional)
    orf_list_gene = ['orf_list_gene_example'] # List[str] | Filter by orf_list.gene (optional)
    orf_list_orf_id = ['orf_list_orf_id_example'] # List[str] | Filter by orf_list.orf_id (optional)
    small_scale_gene_list_id = ['small_scale_gene_list_id_example'] # List[str] | Filter by small_scale_gene_list.@id (optional)
    small_scale_gene_list_geneid = ['small_scale_gene_list_geneid_example'] # List[str] | Filter by small_scale_gene_list.geneid (optional)
    small_scale_gene_list_name = ['small_scale_gene_list_name_example'] # List[str] | Filter by small_scale_gene_list.name (optional)
    small_scale_gene_list_symbol = ['small_scale_gene_list_symbol_example'] # List[str] | Filter by small_scale_gene_list.symbol (optional)
    small_scale_gene_list_synonyms = ['small_scale_gene_list_synonyms_example'] # List[str] | Filter by small_scale_gene_list.synonyms (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the ConstructLibrarySet collection.
        api_response = api_instance.construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, exon=exon, tile=tile, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples_id=applied_to_samples_id, applied_to_samples_accession=applied_to_samples_accession, applied_to_samples_aliases=applied_to_samples_aliases, applied_to_samples_disease_terms_id=applied_to_samples_disease_terms_id, applied_to_samples_disease_terms_term_name=applied_to_samples_disease_terms_term_name, applied_to_samples_sample_terms_id=applied_to_samples_sample_terms_id, applied_to_samples_sample_terms_term_name=applied_to_samples_sample_terms_term_name, applied_to_samples_status=applied_to_samples_status, applied_to_samples_summary=applied_to_samples_summary, associated_phenotypes_id=associated_phenotypes_id, associated_phenotypes_term_id=associated_phenotypes_term_id, associated_phenotypes_term_name=associated_phenotypes_term_name, award_id=award_id, award_component=award_component, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_file_format=files_file_format, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, large_scale_gene_list_id=large_scale_gene_list_id, large_scale_gene_list_accession=large_scale_gene_list_accession, large_scale_gene_list_aliases=large_scale_gene_list_aliases, large_scale_loci_list_id=large_scale_loci_list_id, large_scale_loci_list_accession=large_scale_loci_list_accession, large_scale_loci_list_aliases=large_scale_loci_list_aliases, orf_list_id=orf_list_id, orf_list_aliases=orf_list_aliases, orf_list_gene=orf_list_gene, orf_list_orf_id=orf_list_orf_id, small_scale_gene_list_id=small_scale_gene_list_id, small_scale_gene_list_geneid=small_scale_gene_list_geneid, small_scale_gene_list_name=small_scale_gene_list_name, small_scale_gene_list_symbol=small_scale_gene_list_symbol, small_scale_gene_list_synonyms=small_scale_gene_list_synonyms, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->construct_library_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->construct_library_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **scope** | **str**| Filter by scope | [optional] 
 **selection_criteria** | [**List[str]**](List[str].md)| Filter by selection_criteria | [optional] 
 **integrated_content_files** | [**List[str]**](List[str].md)| Filter by integrated_content_files | [optional] 
 **exon** | **str**| Filter by exon | [optional] 
 **tile** | [**Tile**](Tile.md)| Filter by tile | [optional] 
 **guide_type** | **str**| Filter by guide_type | [optional] 
 **tiling_modality** | **str**| Filter by tiling_modality | [optional] 
 **average_guide_coverage** | **float**| Filter by average_guide_coverage | [optional] 
 **lower_bound_guide_coverage** | **int**| Filter by lower_bound_guide_coverage | [optional] 
 **upper_bound_guide_coverage** | **int**| Filter by upper_bound_guide_coverage | [optional] 
 **average_insert_size** | **float**| Filter by average_insert_size | [optional] 
 **lower_bound_insert_size** | **int**| Filter by lower_bound_insert_size | [optional] 
 **upper_bound_insert_size** | **int**| Filter by upper_bound_insert_size | [optional] 
 **targeton** | **str**| Filter by targeton | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **applied_to_samples_id** | [**List[str]**](List[str].md)| Filter by applied_to_samples.@id | [optional] 
 **applied_to_samples_accession** | [**List[str]**](List[str].md)| Filter by applied_to_samples.accession | [optional] 
 **applied_to_samples_aliases** | [**List[str]**](List[str].md)| Filter by applied_to_samples.aliases | [optional] 
 **applied_to_samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by applied_to_samples.disease_terms.@id | [optional] 
 **applied_to_samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by applied_to_samples.disease_terms.term_name | [optional] 
 **applied_to_samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by applied_to_samples.sample_terms.@id | [optional] 
 **applied_to_samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by applied_to_samples.sample_terms.term_name | [optional] 
 **applied_to_samples_status** | [**List[str]**](List[str].md)| Filter by applied_to_samples.status | [optional] 
 **applied_to_samples_summary** | [**List[str]**](List[str].md)| Filter by applied_to_samples.summary | [optional] 
 **associated_phenotypes_id** | [**List[str]**](List[str].md)| Filter by associated_phenotypes.@id | [optional] 
 **associated_phenotypes_term_id** | [**List[str]**](List[str].md)| Filter by associated_phenotypes.term_id | [optional] 
 **associated_phenotypes_term_name** | [**List[str]**](List[str].md)| Filter by associated_phenotypes.term_name | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **large_scale_gene_list_id** | **str**| Filter by large_scale_gene_list.@id | [optional] 
 **large_scale_gene_list_accession** | **str**| Filter by large_scale_gene_list.accession | [optional] 
 **large_scale_gene_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.aliases | [optional] 
 **large_scale_loci_list_id** | **str**| Filter by large_scale_loci_list.@id | [optional] 
 **large_scale_loci_list_accession** | **str**| Filter by large_scale_loci_list.accession | [optional] 
 **large_scale_loci_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.aliases | [optional] 
 **orf_list_id** | [**List[str]**](List[str].md)| Filter by orf_list.@id | [optional] 
 **orf_list_aliases** | [**List[str]**](List[str].md)| Filter by orf_list.aliases | [optional] 
 **orf_list_gene** | [**List[str]**](List[str].md)| Filter by orf_list.gene | [optional] 
 **orf_list_orf_id** | [**List[str]**](List[str].md)| Filter by orf_list.orf_id | [optional] 
 **small_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.@id | [optional] 
 **small_scale_gene_list_geneid** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.geneid | [optional] 
 **small_scale_gene_list_name** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.name | [optional] 
 **small_scale_gene_list_symbol** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.symbol | [optional] 
 **small_scale_gene_list_synonyms** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.synonyms | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ConstructLibrarySetResults**](ConstructLibrarySetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crispr_modifications**
> CrisprModificationResults crispr_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, cas=cas, fused_domain=fused_domain, tagged_protein=tagged_protein, cas_species=cas_species, id=id, summary=summary, biosamples_modified=biosamples_modified, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the CrisprModification collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate CrisprModification items. Supports filtering on fields within CrisprModification items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.crispr_modification_results import CrisprModificationResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    activated = True # bool | Filter by activated (optional)
    activating_agent_term_id = 'activating_agent_term_id_example' # str | Filter by activating_agent_term_id (optional)
    activating_agent_term_name = 'activating_agent_term_name_example' # str | Filter by activating_agent_term_name (optional)
    modality = 'modality_example' # str | Filter by modality (optional)
    cas = 'cas_example' # str | Filter by cas (optional)
    fused_domain = 'fused_domain_example' # str | Filter by fused_domain (optional)
    tagged_protein = 'tagged_protein_example' # str | Filter by tagged_protein (optional)
    cas_species = 'cas_species_example' # str | Filter by cas_species (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    biosamples_modified = ['biosamples_modified_example'] # List[str] | Filter by biosamples_modified (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the CrisprModification collection.
        api_response = api_instance.crispr_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, cas=cas, fused_domain=fused_domain, tagged_protein=tagged_protein, cas_species=cas_species, id=id, summary=summary, biosamples_modified=biosamples_modified, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->crispr_modifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->crispr_modifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **activated** | **bool**| Filter by activated | [optional] 
 **activating_agent_term_id** | **str**| Filter by activating_agent_term_id | [optional] 
 **activating_agent_term_name** | **str**| Filter by activating_agent_term_name | [optional] 
 **modality** | **str**| Filter by modality | [optional] 
 **cas** | **str**| Filter by cas | [optional] 
 **fused_domain** | **str**| Filter by fused_domain | [optional] 
 **tagged_protein** | **str**| Filter by tagged_protein | [optional] 
 **cas_species** | **str**| Filter by cas_species | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **biosamples_modified** | [**List[str]**](List[str].md)| Filter by biosamples_modified | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**CrisprModificationResults**](CrisprModificationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **curated_sets**
> CuratedSetResults curated_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assemblies=assemblies, transcriptome_annotations=transcriptome_annotations, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the CuratedSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate CuratedSet items. Supports filtering on fields within CuratedSet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.curated_set_results import CuratedSetResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    assemblies = ['assemblies_example'] # List[str] | Filter by assemblies (optional)
    transcriptome_annotations = ['transcriptome_annotations_example'] # List[str] | Filter by transcriptome_annotations (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_contact_pi_id = 'award_contact_pi_id_example' # str | Filter by award.contact_pi.@id (optional)
    award_contact_pi_title = 'award_contact_pi_title_example' # str | Filter by award.contact_pi.title (optional)
    award_title = 'award_title_example' # str | Filter by award.title (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    donors_id = ['donors_id_example'] # List[str] | Filter by donors.@id (optional)
    donors_accession = ['donors_accession_example'] # List[str] | Filter by donors.accession (optional)
    donors_aliases = ['donors_aliases_example'] # List[str] | Filter by donors.aliases (optional)
    donors_sex = ['donors_sex_example'] # List[str] | Filter by donors.sex (optional)
    donors_status = ['donors_status_example'] # List[str] | Filter by donors.status (optional)
    donors_taxa = ['donors_taxa_example'] # List[str] | Filter by donors.taxa (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_creation_timestamp = ['files_creation_timestamp_example'] # List[str] | Filter by files.creation_timestamp (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_file_size = [56] # List[int] | Filter by files.file_size (optional)
    files_href = ['files_href_example'] # List[str] | Filter by files.href (optional)
    files_s3_uri = ['files_s3_uri_example'] # List[str] | Filter by files.s3_uri (optional)
    files_sequencing_platform = ['files_sequencing_platform_example'] # List[str] | Filter by files.sequencing_platform (optional)
    files_submitted_file_name = ['files_submitted_file_name_example'] # List[str] | Filter by files.submitted_file_name (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    samples_id = ['samples_id_example'] # List[str] | Filter by samples.@id (optional)
    samples_accession = ['samples_accession_example'] # List[str] | Filter by samples.accession (optional)
    samples_aliases = ['samples_aliases_example'] # List[str] | Filter by samples.aliases (optional)
    samples_cell_fate_change_treatments = ['samples_cell_fate_change_treatments_example'] # List[str] | Filter by samples.cell_fate_change_treatments (optional)
    samples_classifications = ['samples_classifications_example'] # List[str] | Filter by samples.classifications (optional)
    samples_construct_library_sets = ['samples_construct_library_sets_example'] # List[str] | Filter by samples.construct_library_sets (optional)
    samples_disease_terms_id = ['samples_disease_terms_id_example'] # List[str] | Filter by samples.disease_terms.@id (optional)
    samples_disease_terms_term_name = ['samples_disease_terms_term_name_example'] # List[str] | Filter by samples.disease_terms.term_name (optional)
    samples_modifications = ['samples_modifications_example'] # List[str] | Filter by samples.modifications (optional)
    samples_sample_terms_id = ['samples_sample_terms_id_example'] # List[str] | Filter by samples.sample_terms.@id (optional)
    samples_sample_terms_aliases = ['samples_sample_terms_aliases_example'] # List[str] | Filter by samples.sample_terms.aliases (optional)
    samples_sample_terms_status = ['samples_sample_terms_status_example'] # List[str] | Filter by samples.sample_terms.status (optional)
    samples_sample_terms_summary = ['samples_sample_terms_summary_example'] # List[str] | Filter by samples.sample_terms.summary (optional)
    samples_sample_terms_term_name = ['samples_sample_terms_term_name_example'] # List[str] | Filter by samples.sample_terms.term_name (optional)
    samples_status = ['samples_status_example'] # List[str] | Filter by samples.status (optional)
    samples_summary = ['samples_summary_example'] # List[str] | Filter by samples.summary (optional)
    samples_targeted_sample_term_id = ['samples_targeted_sample_term_id_example'] # List[str] | Filter by samples.targeted_sample_term.@id (optional)
    samples_targeted_sample_term_term_name = ['samples_targeted_sample_term_term_name_example'] # List[str] | Filter by samples.targeted_sample_term.term_name (optional)
    samples_taxa = ['samples_taxa_example'] # List[str] | Filter by samples.taxa (optional)
    samples_treatments = ['samples_treatments_example'] # List[str] | Filter by samples.treatments (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the CuratedSet collection.
        api_response = api_instance.curated_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assemblies=assemblies, transcriptome_annotations=transcriptome_annotations, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->curated_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->curated_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assemblies** | [**List[str]**](List[str].md)| Filter by assemblies | [optional] 
 **transcriptome_annotations** | [**List[str]**](List[str].md)| Filter by transcriptome_annotations | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_contact_pi_id** | **str**| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | **str**| Filter by award.contact_pi.title | [optional] 
 **award_title** | **str**| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**CuratedSetResults**](CuratedSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **degron_modifications**
> DegronModificationResults degron_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, degron_system=degron_system, tagged_proteins=tagged_proteins, id=id, summary=summary, biosamples_modified=biosamples_modified, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the DegronModification collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate DegronModification items. Supports filtering on fields within DegronModification items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.degron_modification_results import DegronModificationResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    activated = True # bool | Filter by activated (optional)
    activating_agent_term_id = 'activating_agent_term_id_example' # str | Filter by activating_agent_term_id (optional)
    activating_agent_term_name = 'activating_agent_term_name_example' # str | Filter by activating_agent_term_name (optional)
    modality = 'modality_example' # str | Filter by modality (optional)
    degron_system = 'degron_system_example' # str | Filter by degron_system (optional)
    tagged_proteins = ['tagged_proteins_example'] # List[str] | Filter by tagged_proteins (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    biosamples_modified = ['biosamples_modified_example'] # List[str] | Filter by biosamples_modified (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the DegronModification collection.
        api_response = api_instance.degron_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, degron_system=degron_system, tagged_proteins=tagged_proteins, id=id, summary=summary, biosamples_modified=biosamples_modified, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->degron_modifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->degron_modifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **activated** | **bool**| Filter by activated | [optional] 
 **activating_agent_term_id** | **str**| Filter by activating_agent_term_id | [optional] 
 **activating_agent_term_name** | **str**| Filter by activating_agent_term_name | [optional] 
 **modality** | **str**| Filter by modality | [optional] 
 **degron_system** | **str**| Filter by degron_system | [optional] 
 **tagged_proteins** | [**List[str]**](List[str].md)| Filter by tagged_proteins | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **biosamples_modified** | [**List[str]**](List[str].md)| Filter by biosamples_modified | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**DegronModificationResults**](DegronModificationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **documents**
> DocumentResults documents(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, document_type=document_type, characterization_method=characterization_method, urls=urls, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Document collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Document items. Supports filtering on fields within Document items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.document_results import DocumentResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    attachment = {'key': igvf_client.Attachment()} # Attachment | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    document_type = 'document_type_example' # str | Filter by document_type (optional)
    characterization_method = 'characterization_method_example' # str | Filter by characterization_method (optional)
    urls = ['urls_example'] # List[str] | Filter by urls (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Document collection.
        api_response = api_instance.documents(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, document_type=document_type, characterization_method=characterization_method, urls=urls, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **attachment** | [**Attachment**](Attachment.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **document_type** | **str**| Filter by document_type | [optional] 
 **characterization_method** | **str**| Filter by characterization_method | [optional] 
 **urls** | [**List[str]**](List[str].md)| Filter by urls | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**DocumentResults**](DocumentResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download**
> bytearray download(file_id)

Download file.

Returns underlying file associated with file metadata

### Example

* Basic Authentication (basicAuth):

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
    file_id = 'file_id_example' # str | The unique identifier for the file to download, i.e. @id (`/tabular-files/IGVFFI8092FZKL/`), accession (`IGVFFI8092FZKL`), or UUID (`fdbdc159-e5b9-40a8-b788-3f72c9886b03`).

    try:
        # Download file.
        api_response = api_instance.download(file_id)
        print("The response of IgvfApi->download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The unique identifier for the file to download, i.e. @id (&#x60;/tabular-files/IGVFFI8092FZKL/&#x60;), accession (&#x60;IGVFFI8092FZKL&#x60;), or UUID (&#x60;fdbdc159-e5b9-40a8-b788-3f72c9886b03&#x60;). | 

### Return type

**bytearray**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Item not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **genes**
> GeneResults genes(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, transcriptome_annotation=transcriptome_annotation, taxa=taxa, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, geneid=geneid, symbol=symbol, name=name, synonyms=synonyms, dbxrefs=dbxrefs, locations=locations, version_number=version_number, id=id, summary=summary, title=title, geneid_with_version=geneid_with_version, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Gene collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Gene items. Supports filtering on fields within Gene items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.gene_location import GeneLocation
from igvf_client.models.gene_results import GeneResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    geneid = 'geneid_example' # str | Filter by geneid (optional)
    symbol = 'symbol_example' # str | Filter by symbol (optional)
    name = 'name_example' # str | Filter by name (optional)
    synonyms = ['synonyms_example'] # List[str] | Filter by synonyms (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    locations = [igvf_client.GeneLocation()] # List[GeneLocation] | Filter by locations (optional)
    version_number = 'version_number_example' # str | Filter by version_number (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    title = 'title_example' # str | Filter by title (optional)
    geneid_with_version = 'geneid_with_version_example' # str | Filter by geneid_with_version (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Gene collection.
        api_response = api_instance.genes(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, transcriptome_annotation=transcriptome_annotation, taxa=taxa, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, geneid=geneid, symbol=symbol, name=name, synonyms=synonyms, dbxrefs=dbxrefs, locations=locations, version_number=version_number, id=id, summary=summary, title=title, geneid_with_version=geneid_with_version, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->genes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->genes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **geneid** | **str**| Filter by geneid | [optional] 
 **symbol** | **str**| Filter by symbol | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **locations** | [**List[GeneLocation]**](List[GeneLocation].md)| Filter by locations | [optional] 
 **version_number** | **str**| Filter by version_number | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **geneid_with_version** | **str**| Filter by geneid_with_version | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**GeneResults**](GeneResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **genome_browser_annotation_files**
> GenomeBrowserAnnotationFileResults genome_browser_annotation_files(query=query, limit=limit, sort=sort, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the GenomeBrowserAnnotationFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate GenomeBrowserAnnotationFile items. Supports filtering on fields within GenomeBrowserAnnotationFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.genome_browser_annotation_file_results import GenomeBrowserAnnotationFileResults
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
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    file_format_type = 'file_format_type_example' # str | Filter by file_format_type (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the GenomeBrowserAnnotationFile collection.
        api_response = api_instance.genome_browser_annotation_files(query=query, limit=limit, sort=sort, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->genome_browser_annotation_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->genome_browser_annotation_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **file_format_type** | **str**| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**GenomeBrowserAnnotationFileResults**](GenomeBrowserAnnotationFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_by_id**
> Item get_by_id(resource_id)

Get item information

Retrieve detailed information about a specific item using its @id or uuid.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.item import Item
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
    resource_id = '/sequence-files/IGVFFI1165AJSO/' # str | The unique identifier for the resource i.e. @id (`/sequence-files/IGVFFI1165AJSO/`), accession (`IGVFFI1165AJSO`) or UUID (`fffcd64e-af02-4675-8953-7352459ee06a`).

    try:
        # Get item information
        api_response = api_instance.get_by_id(resource_id)
        print("The response of IgvfApi->get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;) or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;). | 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **human_donors**
> HumanDonorResults human_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, virtual=virtual, ethnicities=ethnicities, human_donor_identifiers=human_donor_identifiers, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, phenotypic_features_id=phenotypic_features_id, phenotypic_features_feature_id=phenotypic_features_feature_id, phenotypic_features_feature_term_id=phenotypic_features_feature_term_id, phenotypic_features_feature_term_name=phenotypic_features_feature_term_name, phenotypic_features_observation_date=phenotypic_features_observation_date, phenotypic_features_quantity_units=phenotypic_features_quantity_units, related_donors_donor_id=related_donors_donor_id, related_donors_donor_accession=related_donors_donor_accession, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the HumanDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.human_donor_results import HumanDonorResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    virtual = True # bool | Filter by virtual (optional)
    ethnicities = ['ethnicities_example'] # List[str] | Filter by ethnicities (optional)
    human_donor_identifiers = ['human_donor_identifiers_example'] # List[str] | Filter by human_donor_identifiers (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    phenotypic_features_id = ['phenotypic_features_id_example'] # List[str] | Filter by phenotypic_features.@id (optional)
    phenotypic_features_feature_id = ['phenotypic_features_feature_id_example'] # List[str] | Filter by phenotypic_features.feature.@id (optional)
    phenotypic_features_feature_term_id = ['phenotypic_features_feature_term_id_example'] # List[str] | Filter by phenotypic_features.feature.term_id (optional)
    phenotypic_features_feature_term_name = ['phenotypic_features_feature_term_name_example'] # List[str] | Filter by phenotypic_features.feature.term_name (optional)
    phenotypic_features_observation_date = ['phenotypic_features_observation_date_example'] # List[str] | Filter by phenotypic_features.observation_date (optional)
    phenotypic_features_quantity_units = ['phenotypic_features_quantity_units_example'] # List[str] | Filter by phenotypic_features.quantity_units (optional)
    related_donors_donor_id = ['related_donors_donor_id_example'] # List[str] | Filter by related_donors.donor.@id (optional)
    related_donors_donor_accession = ['related_donors_donor_accession_example'] # List[str] | Filter by related_donors.donor.accession (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the HumanDonor collection.
        api_response = api_instance.human_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, virtual=virtual, ethnicities=ethnicities, human_donor_identifiers=human_donor_identifiers, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, phenotypic_features_id=phenotypic_features_id, phenotypic_features_feature_id=phenotypic_features_feature_id, phenotypic_features_feature_term_id=phenotypic_features_feature_term_id, phenotypic_features_feature_term_name=phenotypic_features_feature_term_name, phenotypic_features_observation_date=phenotypic_features_observation_date, phenotypic_features_quantity_units=phenotypic_features_quantity_units, related_donors_donor_id=related_donors_donor_id, related_donors_donor_accession=related_donors_donor_accession, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->human_donors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->human_donors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **ethnicities** | [**List[str]**](List[str].md)| Filter by ethnicities | [optional] 
 **human_donor_identifiers** | [**List[str]**](List[str].md)| Filter by human_donor_identifiers | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **phenotypic_features_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.@id | [optional] 
 **phenotypic_features_feature_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.@id | [optional] 
 **phenotypic_features_feature_term_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_id | [optional] 
 **phenotypic_features_feature_term_name** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_name | [optional] 
 **phenotypic_features_observation_date** | [**List[str]**](List[str].md)| Filter by phenotypic_features.observation_date | [optional] 
 **phenotypic_features_quantity_units** | [**List[str]**](List[str].md)| Filter by phenotypic_features.quantity_units | [optional] 
 **related_donors_donor_id** | [**List[str]**](List[str].md)| Filter by related_donors.donor.@id | [optional] 
 **related_donors_donor_accession** | [**List[str]**](List[str].md)| Filter by related_donors.donor.accession | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**HumanDonorResults**](HumanDonorResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_files**
> ImageFileResults image_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the ImageFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ImageFile items. Supports filtering on fields within ImageFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.image_file_results import ImageFileResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the ImageFile collection.
        api_response = api_instance.image_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->image_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->image_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ImageFileResults**](ImageFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **images**
> ImageResults images(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, caption=caption, id=id, summary=summary, thumb_nail=thumb_nail, download_url=download_url, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Image collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Image items. Supports filtering on fields within Image items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.image_results import ImageResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    attachment = {'key': igvf_client.Attachment1()} # Attachment1 | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    caption = 'caption_example' # str | Filter by caption (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    thumb_nail = 'thumb_nail_example' # str | Filter by thumb_nail (optional)
    download_url = 'download_url_example' # str | Filter by download_url (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Image collection.
        api_response = api_instance.images(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, caption=caption, id=id, summary=summary, thumb_nail=thumb_nail, download_url=download_url, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **attachment** | [**Attachment1**](Attachment1.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **caption** | **str**| Filter by caption | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **thumb_nail** | **str**| Filter by thumb_nail | [optional] 
 **download_url** | **str**| Filter by download_url | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ImageResults**](ImageResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **in_vitro_systems**
> InVitroSystemResults in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to, award_id=award_id, award_component=award_component, cell_fate_change_treatments_id=cell_fate_change_treatments_id, cell_fate_change_treatments_purpose=cell_fate_change_treatments_purpose, cell_fate_change_treatments_status=cell_fate_change_treatments_status, cell_fate_change_treatments_summary=cell_fate_change_treatments_summary, cell_fate_change_treatments_treatment_type=cell_fate_change_treatments_treatment_type, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, originated_from_id=originated_from_id, originated_from_accession=originated_from_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)

List items in the InVitroSystem collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InVitroSystem items. Supports filtering on fields within InVitroSystem items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.in_vitro_system_results import InVitroSystemResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    time_post_change = 3.4 # float | Filter by time_post_change (optional)
    time_post_change_units = 'time_post_change_units_example' # str | Filter by time_post_change_units (optional)
    cell_fate_change_protocol = 'cell_fate_change_protocol_example' # str | Filter by cell_fate_change_protocol (optional)
    demultiplexed_from = 'demultiplexed_from_example' # str | Filter by demultiplexed_from (optional)
    passage_number = 56 # int | Filter by passage_number (optional)
    targeted_sample_term = 'targeted_sample_term_example' # str | Filter by targeted_sample_term (optional)
    growth_medium = 'growth_medium_example' # str | Filter by growth_medium (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    demultiplexed_to = ['demultiplexed_to_example'] # List[str] | Filter by demultiplexed_to (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    cell_fate_change_treatments_id = ['cell_fate_change_treatments_id_example'] # List[str] | Filter by cell_fate_change_treatments.@id (optional)
    cell_fate_change_treatments_purpose = ['cell_fate_change_treatments_purpose_example'] # List[str] | Filter by cell_fate_change_treatments.purpose (optional)
    cell_fate_change_treatments_status = ['cell_fate_change_treatments_status_example'] # List[str] | Filter by cell_fate_change_treatments.status (optional)
    cell_fate_change_treatments_summary = ['cell_fate_change_treatments_summary_example'] # List[str] | Filter by cell_fate_change_treatments.summary (optional)
    cell_fate_change_treatments_treatment_type = ['cell_fate_change_treatments_treatment_type_example'] # List[str] | Filter by cell_fate_change_treatments.treatment_type (optional)
    disease_terms_id = ['disease_terms_id_example'] # List[str] | Filter by disease_terms.@id (optional)
    disease_terms_term_name = ['disease_terms_term_name_example'] # List[str] | Filter by disease_terms.term_name (optional)
    file_sets_id = ['file_sets_id_example'] # List[str] | Filter by file_sets.@id (optional)
    file_sets_accession = ['file_sets_accession_example'] # List[str] | Filter by file_sets.accession (optional)
    file_sets_aliases = ['file_sets_aliases_example'] # List[str] | Filter by file_sets.aliases (optional)
    file_sets_assay_term_term_name = ['file_sets_assay_term_term_name_example'] # List[str] | Filter by file_sets.assay_term.term_name (optional)
    file_sets_lab_title = ['file_sets_lab_title_example'] # List[str] | Filter by file_sets.lab.title (optional)
    file_sets_status = ['file_sets_status_example'] # List[str] | Filter by file_sets.status (optional)
    file_sets_summary = ['file_sets_summary_example'] # List[str] | Filter by file_sets.summary (optional)
    institutional_certificates_id = ['institutional_certificates_id_example'] # List[str] | Filter by institutional_certificates.@id (optional)
    institutional_certificates_certificate_identifier = ['institutional_certificates_certificate_identifier_example'] # List[str] | Filter by institutional_certificates.certificate_identifier (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    modifications_id = ['modifications_id_example'] # List[str] | Filter by modifications.@id (optional)
    modifications_status = ['modifications_status_example'] # List[str] | Filter by modifications.status (optional)
    modifications_summary = ['modifications_summary_example'] # List[str] | Filter by modifications.summary (optional)
    multiplexed_in_id = ['multiplexed_in_id_example'] # List[str] | Filter by multiplexed_in.@id (optional)
    multiplexed_in_accession = ['multiplexed_in_accession_example'] # List[str] | Filter by multiplexed_in.accession (optional)
    originated_from_id = 'originated_from_id_example' # str | Filter by originated_from.@id (optional)
    originated_from_accession = 'originated_from_accession_example' # str | Filter by originated_from.accession (optional)
    sample_terms_id = ['sample_terms_id_example'] # List[str] | Filter by sample_terms.@id (optional)
    sample_terms_term_name = ['sample_terms_term_name_example'] # List[str] | Filter by sample_terms.term_name (optional)
    sorted_from_id = 'sorted_from_id_example' # str | Filter by sorted_from.@id (optional)
    sorted_from_accession = 'sorted_from_accession_example' # str | Filter by sorted_from.accession (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    treatments_id = ['treatments_id_example'] # List[str] | Filter by treatments.@id (optional)
    treatments_purpose = ['treatments_purpose_example'] # List[str] | Filter by treatments.purpose (optional)
    treatments_status = ['treatments_status_example'] # List[str] | Filter by treatments.status (optional)
    treatments_summary = ['treatments_summary_example'] # List[str] | Filter by treatments.summary (optional)
    treatments_treatment_type = ['treatments_treatment_type_example'] # List[str] | Filter by treatments.treatment_type (optional)

    try:
        # List items in the InVitroSystem collection.
        api_response = api_instance.in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to, award_id=award_id, award_component=award_component, cell_fate_change_treatments_id=cell_fate_change_treatments_id, cell_fate_change_treatments_purpose=cell_fate_change_treatments_purpose, cell_fate_change_treatments_status=cell_fate_change_treatments_status, cell_fate_change_treatments_summary=cell_fate_change_treatments_summary, cell_fate_change_treatments_treatment_type=cell_fate_change_treatments_treatment_type, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, originated_from_id=originated_from_id, originated_from_accession=originated_from_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)
        print("The response of IgvfApi->in_vitro_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->in_vitro_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **time_post_change** | **float**| Filter by time_post_change | [optional] 
 **time_post_change_units** | **str**| Filter by time_post_change_units | [optional] 
 **cell_fate_change_protocol** | **str**| Filter by cell_fate_change_protocol | [optional] 
 **demultiplexed_from** | **str**| Filter by demultiplexed_from | [optional] 
 **passage_number** | **int**| Filter by passage_number | [optional] 
 **targeted_sample_term** | **str**| Filter by targeted_sample_term | [optional] 
 **growth_medium** | **str**| Filter by growth_medium | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **demultiplexed_to** | [**List[str]**](List[str].md)| Filter by demultiplexed_to | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **cell_fate_change_treatments_id** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.@id | [optional] 
 **cell_fate_change_treatments_purpose** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.purpose | [optional] 
 **cell_fate_change_treatments_status** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.status | [optional] 
 **cell_fate_change_treatments_summary** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.summary | [optional] 
 **cell_fate_change_treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments.treatment_type | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **originated_from_id** | **str**| Filter by originated_from.@id | [optional] 
 **originated_from_accession** | **str**| Filter by originated_from.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | **str**| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | **str**| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 

### Return type

[**InVitroSystemResults**](InVitroSystemResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **institutional_certificates**
> InstitutionalCertificateResults institutional_certificates(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, certificate_identifier=certificate_identifier, controlled_access=controlled_access, data_use_limitation=data_use_limitation, data_use_limitation_modifiers=data_use_limitation_modifiers, samples=samples, urls=urls, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the InstitutionalCertificate collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate InstitutionalCertificate items. Supports filtering on fields within InstitutionalCertificate items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.institutional_certificate_results import InstitutionalCertificateResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    certificate_identifier = 'certificate_identifier_example' # str | Filter by certificate_identifier (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    data_use_limitation = 'data_use_limitation_example' # str | Filter by data_use_limitation (optional)
    data_use_limitation_modifiers = ['data_use_limitation_modifiers_example'] # List[str] | Filter by data_use_limitation_modifiers (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    urls = ['urls_example'] # List[str] | Filter by urls (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the InstitutionalCertificate collection.
        api_response = api_instance.institutional_certificates(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, certificate_identifier=certificate_identifier, controlled_access=controlled_access, data_use_limitation=data_use_limitation, data_use_limitation_modifiers=data_use_limitation_modifiers, samples=samples, urls=urls, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->institutional_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->institutional_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **certificate_identifier** | **str**| Filter by certificate_identifier | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **data_use_limitation** | **str**| Filter by data_use_limitation | [optional] 
 **data_use_limitation_modifiers** | [**List[str]**](List[str].md)| Filter by data_use_limitation_modifiers | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **urls** | [**List[str]**](List[str].md)| Filter by urls | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**InstitutionalCertificateResults**](InstitutionalCertificateResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs**
> LabResults labs(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, pi=pi, institute_label=institute_label, id=id, summary=summary, title=title, awards_id=awards_id, awards_component=awards_component, awards_name=awards_name, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Lab collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Lab items. Supports filtering on fields within Lab items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.lab_results import LabResults
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
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    pi = 'pi_example' # str | Filter by pi (optional)
    institute_label = 'institute_label_example' # str | Filter by institute_label (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    title = 'title_example' # str | Filter by title (optional)
    awards_id = ['awards_id_example'] # List[str] | Filter by awards.@id (optional)
    awards_component = ['awards_component_example'] # List[str] | Filter by awards.component (optional)
    awards_name = ['awards_name_example'] # List[str] | Filter by awards.name (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Lab collection.
        api_response = api_instance.labs(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, pi=pi, institute_label=institute_label, id=id, summary=summary, title=title, awards_id=awards_id, awards_component=awards_component, awards_name=awards_name, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->labs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->labs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **pi** | **str**| Filter by pi | [optional] 
 **institute_label** | **str**| Filter by institute_label | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **awards_id** | [**List[str]**](List[str].md)| Filter by awards.@id | [optional] 
 **awards_component** | [**List[str]**](List[str].md)| Filter by awards.component | [optional] 
 **awards_name** | [**List[str]**](List[str].md)| Filter by awards.name | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**LabResults**](LabResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **matrix_files**
> MatrixFileResults matrix_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, dimension1=dimension1, dimension2=dimension2, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the MatrixFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MatrixFile items. Supports filtering on fields within MatrixFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.matrix_file_results import MatrixFileResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    reference_files = ['reference_files_example'] # List[str] | Filter by reference_files (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    dimension1 = 'dimension1_example' # str | Filter by dimension1 (optional)
    dimension2 = 'dimension2_example' # str | Filter by dimension2 (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    content_summary = 'content_summary_example' # str | Filter by content_summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the MatrixFile collection.
        api_response = api_instance.matrix_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, dimension1=dimension1, dimension2=dimension2, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->matrix_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->matrix_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **dimension1** | **str**| Filter by dimension1 | [optional] 
 **dimension2** | **str**| Filter by dimension2 | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **content_summary** | **str**| Filter by content_summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**MatrixFileResults**](MatrixFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **measurement_sets**
> MeasurementSetResults measurement_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, protocols=protocols, preferred_assay_title=preferred_assay_title, multiome_size=multiome_size, sequencing_library_types=sequencing_library_types, external_image_url=external_image_url, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_term_id=assay_term_id, assay_term_term_name=assay_term_term_name, auxiliary_sets_id=auxiliary_sets_id, auxiliary_sets_accession=auxiliary_sets_accession, auxiliary_sets_aliases=auxiliary_sets_aliases, auxiliary_sets_file_set_type=auxiliary_sets_file_set_type, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_file_sets_id=control_file_sets_id, control_file_sets_accession=control_file_sets_accession, control_file_sets_aliases=control_file_sets_aliases, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform_id=files_sequencing_platform_id, files_sequencing_platform_term_name=files_sequencing_platform_term_name, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, library_construction_platform_id=library_construction_platform_id, library_construction_platform_term_name=library_construction_platform_term_name, related_multiome_datasets_id=related_multiome_datasets_id, related_multiome_datasets_accession=related_multiome_datasets_accession, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments_id=samples_cell_fate_change_treatments_id, samples_cell_fate_change_treatments_purpose=samples_cell_fate_change_treatments_purpose, samples_cell_fate_change_treatments_summary=samples_cell_fate_change_treatments_summary, samples_cell_fate_change_treatments_treatment_type=samples_cell_fate_change_treatments_treatment_type, samples_classifications=samples_classifications, samples_construct_library_sets_id=samples_construct_library_sets_id, samples_construct_library_sets_accession=samples_construct_library_sets_accession, samples_construct_library_sets_file_set_type=samples_construct_library_sets_file_set_type, samples_construct_library_sets_small_scale_gene_list_id=samples_construct_library_sets_small_scale_gene_list_id, samples_construct_library_sets_small_scale_gene_list_geneid=samples_construct_library_sets_small_scale_gene_list_geneid, samples_construct_library_sets_small_scale_gene_list_name=samples_construct_library_sets_small_scale_gene_list_name, samples_construct_library_sets_small_scale_gene_list_summary=samples_construct_library_sets_small_scale_gene_list_summary, samples_construct_library_sets_small_scale_gene_list_symbol=samples_construct_library_sets_small_scale_gene_list_symbol, samples_construct_library_sets_summary=samples_construct_library_sets_summary, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications_id=samples_modifications_id, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments_id=samples_treatments_id, samples_treatments_purpose=samples_treatments_purpose, samples_treatments_summary=samples_treatments_summary, samples_treatments_treatment_type=samples_treatments_treatment_type, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, targeted_genes_id=targeted_genes_id, targeted_genes_geneid=targeted_genes_geneid, targeted_genes_name=targeted_genes_name, targeted_genes_symbol=targeted_genes_symbol, targeted_genes_synonyms=targeted_genes_synonyms)

List items in the MeasurementSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MeasurementSet items. Supports filtering on fields within MeasurementSet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.measurement_set_results import MeasurementSetResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    preferred_assay_title = 'preferred_assay_title_example' # str | Filter by preferred_assay_title (optional)
    multiome_size = 56 # int | Filter by multiome_size (optional)
    sequencing_library_types = ['sequencing_library_types_example'] # List[str] | Filter by sequencing_library_types (optional)
    external_image_url = 'external_image_url_example' # str | Filter by external_image_url (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    assay_term_id = 'assay_term_id_example' # str | Filter by assay_term.@id (optional)
    assay_term_term_name = 'assay_term_term_name_example' # str | Filter by assay_term.term_name (optional)
    auxiliary_sets_id = ['auxiliary_sets_id_example'] # List[str] | Filter by auxiliary_sets.@id (optional)
    auxiliary_sets_accession = ['auxiliary_sets_accession_example'] # List[str] | Filter by auxiliary_sets.accession (optional)
    auxiliary_sets_aliases = ['auxiliary_sets_aliases_example'] # List[str] | Filter by auxiliary_sets.aliases (optional)
    auxiliary_sets_file_set_type = ['auxiliary_sets_file_set_type_example'] # List[str] | Filter by auxiliary_sets.file_set_type (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_contact_pi_id = 'award_contact_pi_id_example' # str | Filter by award.contact_pi.@id (optional)
    award_contact_pi_title = 'award_contact_pi_title_example' # str | Filter by award.contact_pi.title (optional)
    award_title = 'award_title_example' # str | Filter by award.title (optional)
    control_file_sets_id = ['control_file_sets_id_example'] # List[str] | Filter by control_file_sets.@id (optional)
    control_file_sets_accession = ['control_file_sets_accession_example'] # List[str] | Filter by control_file_sets.accession (optional)
    control_file_sets_aliases = ['control_file_sets_aliases_example'] # List[str] | Filter by control_file_sets.aliases (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    donors_id = ['donors_id_example'] # List[str] | Filter by donors.@id (optional)
    donors_accession = ['donors_accession_example'] # List[str] | Filter by donors.accession (optional)
    donors_aliases = ['donors_aliases_example'] # List[str] | Filter by donors.aliases (optional)
    donors_sex = ['donors_sex_example'] # List[str] | Filter by donors.sex (optional)
    donors_status = ['donors_status_example'] # List[str] | Filter by donors.status (optional)
    donors_taxa = ['donors_taxa_example'] # List[str] | Filter by donors.taxa (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_creation_timestamp = ['files_creation_timestamp_example'] # List[str] | Filter by files.creation_timestamp (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_file_size = [56] # List[int] | Filter by files.file_size (optional)
    files_href = ['files_href_example'] # List[str] | Filter by files.href (optional)
    files_s3_uri = ['files_s3_uri_example'] # List[str] | Filter by files.s3_uri (optional)
    files_sequencing_platform_id = ['files_sequencing_platform_id_example'] # List[str] | Filter by files.sequencing_platform.@id (optional)
    files_sequencing_platform_term_name = ['files_sequencing_platform_term_name_example'] # List[str] | Filter by files.sequencing_platform.term_name (optional)
    files_submitted_file_name = ['files_submitted_file_name_example'] # List[str] | Filter by files.submitted_file_name (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    library_construction_platform_id = 'library_construction_platform_id_example' # str | Filter by library_construction_platform.@id (optional)
    library_construction_platform_term_name = 'library_construction_platform_term_name_example' # str | Filter by library_construction_platform.term_name (optional)
    related_multiome_datasets_id = ['related_multiome_datasets_id_example'] # List[str] | Filter by related_multiome_datasets.@id (optional)
    related_multiome_datasets_accession = ['related_multiome_datasets_accession_example'] # List[str] | Filter by related_multiome_datasets.accession (optional)
    samples_id = ['samples_id_example'] # List[str] | Filter by samples.@id (optional)
    samples_accession = ['samples_accession_example'] # List[str] | Filter by samples.accession (optional)
    samples_aliases = ['samples_aliases_example'] # List[str] | Filter by samples.aliases (optional)
    samples_cell_fate_change_treatments_id = ['samples_cell_fate_change_treatments_id_example'] # List[str] | Filter by samples.cell_fate_change_treatments.@id (optional)
    samples_cell_fate_change_treatments_purpose = ['samples_cell_fate_change_treatments_purpose_example'] # List[str] | Filter by samples.cell_fate_change_treatments.purpose (optional)
    samples_cell_fate_change_treatments_summary = ['samples_cell_fate_change_treatments_summary_example'] # List[str] | Filter by samples.cell_fate_change_treatments.summary (optional)
    samples_cell_fate_change_treatments_treatment_type = ['samples_cell_fate_change_treatments_treatment_type_example'] # List[str] | Filter by samples.cell_fate_change_treatments.treatment_type (optional)
    samples_classifications = ['samples_classifications_example'] # List[str] | Filter by samples.classifications (optional)
    samples_construct_library_sets_id = ['samples_construct_library_sets_id_example'] # List[str] | Filter by samples.construct_library_sets.@id (optional)
    samples_construct_library_sets_accession = ['samples_construct_library_sets_accession_example'] # List[str] | Filter by samples.construct_library_sets.accession (optional)
    samples_construct_library_sets_file_set_type = ['samples_construct_library_sets_file_set_type_example'] # List[str] | Filter by samples.construct_library_sets.file_set_type (optional)
    samples_construct_library_sets_small_scale_gene_list_id = ['samples_construct_library_sets_small_scale_gene_list_id_example'] # List[str] | Filter by samples.construct_library_sets.small_scale_gene_list.@id (optional)
    samples_construct_library_sets_small_scale_gene_list_geneid = ['samples_construct_library_sets_small_scale_gene_list_geneid_example'] # List[str] | Filter by samples.construct_library_sets.small_scale_gene_list.geneid (optional)
    samples_construct_library_sets_small_scale_gene_list_name = ['samples_construct_library_sets_small_scale_gene_list_name_example'] # List[str] | Filter by samples.construct_library_sets.small_scale_gene_list.name (optional)
    samples_construct_library_sets_small_scale_gene_list_summary = ['samples_construct_library_sets_small_scale_gene_list_summary_example'] # List[str] | Filter by samples.construct_library_sets.small_scale_gene_list.summary (optional)
    samples_construct_library_sets_small_scale_gene_list_symbol = ['samples_construct_library_sets_small_scale_gene_list_symbol_example'] # List[str] | Filter by samples.construct_library_sets.small_scale_gene_list.symbol (optional)
    samples_construct_library_sets_summary = ['samples_construct_library_sets_summary_example'] # List[str] | Filter by samples.construct_library_sets.summary (optional)
    samples_disease_terms_id = ['samples_disease_terms_id_example'] # List[str] | Filter by samples.disease_terms.@id (optional)
    samples_disease_terms_term_name = ['samples_disease_terms_term_name_example'] # List[str] | Filter by samples.disease_terms.term_name (optional)
    samples_modifications_id = ['samples_modifications_id_example'] # List[str] | Filter by samples.modifications.@id (optional)
    samples_sample_terms_id = ['samples_sample_terms_id_example'] # List[str] | Filter by samples.sample_terms.@id (optional)
    samples_sample_terms_aliases = ['samples_sample_terms_aliases_example'] # List[str] | Filter by samples.sample_terms.aliases (optional)
    samples_sample_terms_status = ['samples_sample_terms_status_example'] # List[str] | Filter by samples.sample_terms.status (optional)
    samples_sample_terms_summary = ['samples_sample_terms_summary_example'] # List[str] | Filter by samples.sample_terms.summary (optional)
    samples_sample_terms_term_name = ['samples_sample_terms_term_name_example'] # List[str] | Filter by samples.sample_terms.term_name (optional)
    samples_status = ['samples_status_example'] # List[str] | Filter by samples.status (optional)
    samples_summary = ['samples_summary_example'] # List[str] | Filter by samples.summary (optional)
    samples_targeted_sample_term_id = ['samples_targeted_sample_term_id_example'] # List[str] | Filter by samples.targeted_sample_term.@id (optional)
    samples_targeted_sample_term_term_name = ['samples_targeted_sample_term_term_name_example'] # List[str] | Filter by samples.targeted_sample_term.term_name (optional)
    samples_taxa = ['samples_taxa_example'] # List[str] | Filter by samples.taxa (optional)
    samples_treatments_id = ['samples_treatments_id_example'] # List[str] | Filter by samples.treatments.@id (optional)
    samples_treatments_purpose = ['samples_treatments_purpose_example'] # List[str] | Filter by samples.treatments.purpose (optional)
    samples_treatments_summary = ['samples_treatments_summary_example'] # List[str] | Filter by samples.treatments.summary (optional)
    samples_treatments_treatment_type = ['samples_treatments_treatment_type_example'] # List[str] | Filter by samples.treatments.treatment_type (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    targeted_genes_id = ['targeted_genes_id_example'] # List[str] | Filter by targeted_genes.@id (optional)
    targeted_genes_geneid = ['targeted_genes_geneid_example'] # List[str] | Filter by targeted_genes.geneid (optional)
    targeted_genes_name = ['targeted_genes_name_example'] # List[str] | Filter by targeted_genes.name (optional)
    targeted_genes_symbol = ['targeted_genes_symbol_example'] # List[str] | Filter by targeted_genes.symbol (optional)
    targeted_genes_synonyms = ['targeted_genes_synonyms_example'] # List[str] | Filter by targeted_genes.synonyms (optional)

    try:
        # List items in the MeasurementSet collection.
        api_response = api_instance.measurement_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, protocols=protocols, preferred_assay_title=preferred_assay_title, multiome_size=multiome_size, sequencing_library_types=sequencing_library_types, external_image_url=external_image_url, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_term_id=assay_term_id, assay_term_term_name=assay_term_term_name, auxiliary_sets_id=auxiliary_sets_id, auxiliary_sets_accession=auxiliary_sets_accession, auxiliary_sets_aliases=auxiliary_sets_aliases, auxiliary_sets_file_set_type=auxiliary_sets_file_set_type, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_file_sets_id=control_file_sets_id, control_file_sets_accession=control_file_sets_accession, control_file_sets_aliases=control_file_sets_aliases, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform_id=files_sequencing_platform_id, files_sequencing_platform_term_name=files_sequencing_platform_term_name, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, library_construction_platform_id=library_construction_platform_id, library_construction_platform_term_name=library_construction_platform_term_name, related_multiome_datasets_id=related_multiome_datasets_id, related_multiome_datasets_accession=related_multiome_datasets_accession, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments_id=samples_cell_fate_change_treatments_id, samples_cell_fate_change_treatments_purpose=samples_cell_fate_change_treatments_purpose, samples_cell_fate_change_treatments_summary=samples_cell_fate_change_treatments_summary, samples_cell_fate_change_treatments_treatment_type=samples_cell_fate_change_treatments_treatment_type, samples_classifications=samples_classifications, samples_construct_library_sets_id=samples_construct_library_sets_id, samples_construct_library_sets_accession=samples_construct_library_sets_accession, samples_construct_library_sets_file_set_type=samples_construct_library_sets_file_set_type, samples_construct_library_sets_small_scale_gene_list_id=samples_construct_library_sets_small_scale_gene_list_id, samples_construct_library_sets_small_scale_gene_list_geneid=samples_construct_library_sets_small_scale_gene_list_geneid, samples_construct_library_sets_small_scale_gene_list_name=samples_construct_library_sets_small_scale_gene_list_name, samples_construct_library_sets_small_scale_gene_list_summary=samples_construct_library_sets_small_scale_gene_list_summary, samples_construct_library_sets_small_scale_gene_list_symbol=samples_construct_library_sets_small_scale_gene_list_symbol, samples_construct_library_sets_summary=samples_construct_library_sets_summary, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications_id=samples_modifications_id, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments_id=samples_treatments_id, samples_treatments_purpose=samples_treatments_purpose, samples_treatments_summary=samples_treatments_summary, samples_treatments_treatment_type=samples_treatments_treatment_type, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, targeted_genes_id=targeted_genes_id, targeted_genes_geneid=targeted_genes_geneid, targeted_genes_name=targeted_genes_name, targeted_genes_symbol=targeted_genes_symbol, targeted_genes_synonyms=targeted_genes_synonyms)
        print("The response of IgvfApi->measurement_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->measurement_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **preferred_assay_title** | **str**| Filter by preferred_assay_title | [optional] 
 **multiome_size** | **int**| Filter by multiome_size | [optional] 
 **sequencing_library_types** | [**List[str]**](List[str].md)| Filter by sequencing_library_types | [optional] 
 **external_image_url** | **str**| Filter by external_image_url | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assay_term_id** | **str**| Filter by assay_term.@id | [optional] 
 **assay_term_term_name** | **str**| Filter by assay_term.term_name | [optional] 
 **auxiliary_sets_id** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.@id | [optional] 
 **auxiliary_sets_accession** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.accession | [optional] 
 **auxiliary_sets_aliases** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.aliases | [optional] 
 **auxiliary_sets_file_set_type** | [**List[str]**](List[str].md)| Filter by auxiliary_sets.file_set_type | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_contact_pi_id** | **str**| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | **str**| Filter by award.contact_pi.title | [optional] 
 **award_title** | **str**| Filter by award.title | [optional] 
 **control_file_sets_id** | [**List[str]**](List[str].md)| Filter by control_file_sets.@id | [optional] 
 **control_file_sets_accession** | [**List[str]**](List[str].md)| Filter by control_file_sets.accession | [optional] 
 **control_file_sets_aliases** | [**List[str]**](List[str].md)| Filter by control_file_sets.aliases | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform_id** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform.@id | [optional] 
 **files_sequencing_platform_term_name** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform.term_name | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **library_construction_platform_id** | **str**| Filter by library_construction_platform.@id | [optional] 
 **library_construction_platform_term_name** | **str**| Filter by library_construction_platform.term_name | [optional] 
 **related_multiome_datasets_id** | [**List[str]**](List[str].md)| Filter by related_multiome_datasets.@id | [optional] 
 **related_multiome_datasets_accession** | [**List[str]**](List[str].md)| Filter by related_multiome_datasets.accession | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments_id** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.@id | [optional] 
 **samples_cell_fate_change_treatments_purpose** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.purpose | [optional] 
 **samples_cell_fate_change_treatments_summary** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.summary | [optional] 
 **samples_cell_fate_change_treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments.treatment_type | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets_id** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.@id | [optional] 
 **samples_construct_library_sets_accession** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.accession | [optional] 
 **samples_construct_library_sets_file_set_type** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.file_set_type | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.@id | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_geneid** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.geneid | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_name** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.name | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_summary** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.summary | [optional] 
 **samples_construct_library_sets_small_scale_gene_list_symbol** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.small_scale_gene_list.symbol | [optional] 
 **samples_construct_library_sets_summary** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.summary | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications_id** | [**List[str]**](List[str].md)| Filter by samples.modifications.@id | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments_id** | [**List[str]**](List[str].md)| Filter by samples.treatments.@id | [optional] 
 **samples_treatments_purpose** | [**List[str]**](List[str].md)| Filter by samples.treatments.purpose | [optional] 
 **samples_treatments_summary** | [**List[str]**](List[str].md)| Filter by samples.treatments.summary | [optional] 
 **samples_treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by samples.treatments.treatment_type | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **targeted_genes_id** | [**List[str]**](List[str].md)| Filter by targeted_genes.@id | [optional] 
 **targeted_genes_geneid** | [**List[str]**](List[str].md)| Filter by targeted_genes.geneid | [optional] 
 **targeted_genes_name** | [**List[str]**](List[str].md)| Filter by targeted_genes.name | [optional] 
 **targeted_genes_symbol** | [**List[str]**](List[str].md)| Filter by targeted_genes.symbol | [optional] 
 **targeted_genes_synonyms** | [**List[str]**](List[str].md)| Filter by targeted_genes.synonyms | [optional] 

### Return type

[**MeasurementSetResults**](MeasurementSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_files**
> ModelFileResults model_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the ModelFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelFile items. Supports filtering on fields within ModelFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.model_file_results import ModelFileResults
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
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the ModelFile collection.
        api_response = api_instance.model_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->model_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->model_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ModelFileResults**](ModelFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_sets**
> ModelSetResults model_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, model_name=model_name, model_version=model_version, prediction_objects=prediction_objects, model_zoo_location=model_zoo_location, software_version=software_version, assessed_genes=assessed_genes, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, input_file_sets_id=input_file_sets_id, input_file_sets_accession=input_file_sets_accession, input_file_sets_aliases=input_file_sets_aliases, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the ModelSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ModelSet items. Supports filtering on fields within ModelSet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.model_set_results import ModelSetResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    model_name = 'model_name_example' # str | Filter by model_name (optional)
    model_version = 'model_version_example' # str | Filter by model_version (optional)
    prediction_objects = ['prediction_objects_example'] # List[str] | Filter by prediction_objects (optional)
    model_zoo_location = 'model_zoo_location_example' # str | Filter by model_zoo_location (optional)
    software_version = 'software_version_example' # str | Filter by software_version (optional)
    assessed_genes = ['assessed_genes_example'] # List[str] | Filter by assessed_genes (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_contact_pi_id = 'award_contact_pi_id_example' # str | Filter by award.contact_pi.@id (optional)
    award_contact_pi_title = 'award_contact_pi_title_example' # str | Filter by award.contact_pi.title (optional)
    award_title = 'award_title_example' # str | Filter by award.title (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    donors_id = ['donors_id_example'] # List[str] | Filter by donors.@id (optional)
    donors_accession = ['donors_accession_example'] # List[str] | Filter by donors.accession (optional)
    donors_aliases = ['donors_aliases_example'] # List[str] | Filter by donors.aliases (optional)
    donors_sex = ['donors_sex_example'] # List[str] | Filter by donors.sex (optional)
    donors_status = ['donors_status_example'] # List[str] | Filter by donors.status (optional)
    donors_taxa = ['donors_taxa_example'] # List[str] | Filter by donors.taxa (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_creation_timestamp = ['files_creation_timestamp_example'] # List[str] | Filter by files.creation_timestamp (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_file_size = [56] # List[int] | Filter by files.file_size (optional)
    files_href = ['files_href_example'] # List[str] | Filter by files.href (optional)
    files_s3_uri = ['files_s3_uri_example'] # List[str] | Filter by files.s3_uri (optional)
    files_sequencing_platform = ['files_sequencing_platform_example'] # List[str] | Filter by files.sequencing_platform (optional)
    files_submitted_file_name = ['files_submitted_file_name_example'] # List[str] | Filter by files.submitted_file_name (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    input_file_sets_id = ['input_file_sets_id_example'] # List[str] | Filter by input_file_sets.@id (optional)
    input_file_sets_accession = ['input_file_sets_accession_example'] # List[str] | Filter by input_file_sets.accession (optional)
    input_file_sets_aliases = ['input_file_sets_aliases_example'] # List[str] | Filter by input_file_sets.aliases (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    samples_id = ['samples_id_example'] # List[str] | Filter by samples.@id (optional)
    samples_accession = ['samples_accession_example'] # List[str] | Filter by samples.accession (optional)
    samples_aliases = ['samples_aliases_example'] # List[str] | Filter by samples.aliases (optional)
    samples_cell_fate_change_treatments = ['samples_cell_fate_change_treatments_example'] # List[str] | Filter by samples.cell_fate_change_treatments (optional)
    samples_classifications = ['samples_classifications_example'] # List[str] | Filter by samples.classifications (optional)
    samples_construct_library_sets = ['samples_construct_library_sets_example'] # List[str] | Filter by samples.construct_library_sets (optional)
    samples_disease_terms_id = ['samples_disease_terms_id_example'] # List[str] | Filter by samples.disease_terms.@id (optional)
    samples_disease_terms_term_name = ['samples_disease_terms_term_name_example'] # List[str] | Filter by samples.disease_terms.term_name (optional)
    samples_modifications = ['samples_modifications_example'] # List[str] | Filter by samples.modifications (optional)
    samples_sample_terms_id = ['samples_sample_terms_id_example'] # List[str] | Filter by samples.sample_terms.@id (optional)
    samples_sample_terms_aliases = ['samples_sample_terms_aliases_example'] # List[str] | Filter by samples.sample_terms.aliases (optional)
    samples_sample_terms_status = ['samples_sample_terms_status_example'] # List[str] | Filter by samples.sample_terms.status (optional)
    samples_sample_terms_summary = ['samples_sample_terms_summary_example'] # List[str] | Filter by samples.sample_terms.summary (optional)
    samples_sample_terms_term_name = ['samples_sample_terms_term_name_example'] # List[str] | Filter by samples.sample_terms.term_name (optional)
    samples_status = ['samples_status_example'] # List[str] | Filter by samples.status (optional)
    samples_summary = ['samples_summary_example'] # List[str] | Filter by samples.summary (optional)
    samples_targeted_sample_term_id = ['samples_targeted_sample_term_id_example'] # List[str] | Filter by samples.targeted_sample_term.@id (optional)
    samples_targeted_sample_term_term_name = ['samples_targeted_sample_term_term_name_example'] # List[str] | Filter by samples.targeted_sample_term.term_name (optional)
    samples_taxa = ['samples_taxa_example'] # List[str] | Filter by samples.taxa (optional)
    samples_treatments = ['samples_treatments_example'] # List[str] | Filter by samples.treatments (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the ModelSet collection.
        api_response = api_instance.model_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, model_name=model_name, model_version=model_version, prediction_objects=prediction_objects, model_zoo_location=model_zoo_location, software_version=software_version, assessed_genes=assessed_genes, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, input_file_sets_id=input_file_sets_id, input_file_sets_accession=input_file_sets_accession, input_file_sets_aliases=input_file_sets_aliases, lab_id=lab_id, lab_title=lab_title, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets=samples_construct_library_sets, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->model_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->model_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **model_name** | **str**| Filter by model_name | [optional] 
 **model_version** | **str**| Filter by model_version | [optional] 
 **prediction_objects** | [**List[str]**](List[str].md)| Filter by prediction_objects | [optional] 
 **model_zoo_location** | **str**| Filter by model_zoo_location | [optional] 
 **software_version** | **str**| Filter by software_version | [optional] 
 **assessed_genes** | [**List[str]**](List[str].md)| Filter by assessed_genes | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_contact_pi_id** | **str**| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | **str**| Filter by award.contact_pi.title | [optional] 
 **award_title** | **str**| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **input_file_sets_id** | [**List[str]**](List[str].md)| Filter by input_file_sets.@id | [optional] 
 **input_file_sets_accession** | [**List[str]**](List[str].md)| Filter by input_file_sets.accession | [optional] 
 **input_file_sets_aliases** | [**List[str]**](List[str].md)| Filter by input_file_sets.aliases | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ModelSetResults**](ModelSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiplexed_samples**
> MultiplexedSampleResults multiplexed_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, cellular_sub_pool=cellular_sub_pool, barcode_sample_map=barcode_sample_map, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, donors=donors, biomarkers=biomarkers, classifications=classifications, award_id=award_id, award_component=award_component, construct_library_sets_id=construct_library_sets_id, construct_library_sets_accession=construct_library_sets_accession, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, multiplexed_samples_id=multiplexed_samples_id, multiplexed_samples_accession=multiplexed_samples_accession, multiplexed_samples_construct_library_sets=multiplexed_samples_construct_library_sets, multiplexed_samples_disease_terms_id=multiplexed_samples_disease_terms_id, multiplexed_samples_disease_terms_term_name=multiplexed_samples_disease_terms_term_name, multiplexed_samples_donors_id=multiplexed_samples_donors_id, multiplexed_samples_donors_accession=multiplexed_samples_donors_accession, multiplexed_samples_sample_terms_id=multiplexed_samples_sample_terms_id, multiplexed_samples_sample_terms_term_name=multiplexed_samples_sample_terms_term_name, multiplexed_samples_status=multiplexed_samples_status, multiplexed_samples_summary=multiplexed_samples_summary, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)

List items in the MultiplexedSample collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate MultiplexedSample items. Supports filtering on fields within MultiplexedSample items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.multiplexed_sample_results import MultiplexedSampleResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    barcode_sample_map = 'barcode_sample_map_example' # str | Filter by barcode_sample_map (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    construct_library_sets_id = ['construct_library_sets_id_example'] # List[str] | Filter by construct_library_sets.@id (optional)
    construct_library_sets_accession = ['construct_library_sets_accession_example'] # List[str] | Filter by construct_library_sets.accession (optional)
    disease_terms_id = ['disease_terms_id_example'] # List[str] | Filter by disease_terms.@id (optional)
    disease_terms_term_name = ['disease_terms_term_name_example'] # List[str] | Filter by disease_terms.term_name (optional)
    file_sets_id = ['file_sets_id_example'] # List[str] | Filter by file_sets.@id (optional)
    file_sets_accession = ['file_sets_accession_example'] # List[str] | Filter by file_sets.accession (optional)
    file_sets_aliases = ['file_sets_aliases_example'] # List[str] | Filter by file_sets.aliases (optional)
    file_sets_assay_term_term_name = ['file_sets_assay_term_term_name_example'] # List[str] | Filter by file_sets.assay_term.term_name (optional)
    file_sets_lab_title = ['file_sets_lab_title_example'] # List[str] | Filter by file_sets.lab.title (optional)
    file_sets_status = ['file_sets_status_example'] # List[str] | Filter by file_sets.status (optional)
    file_sets_summary = ['file_sets_summary_example'] # List[str] | Filter by file_sets.summary (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    modifications_id = ['modifications_id_example'] # List[str] | Filter by modifications.@id (optional)
    modifications_status = ['modifications_status_example'] # List[str] | Filter by modifications.status (optional)
    modifications_summary = ['modifications_summary_example'] # List[str] | Filter by modifications.summary (optional)
    multiplexed_in_id = ['multiplexed_in_id_example'] # List[str] | Filter by multiplexed_in.@id (optional)
    multiplexed_in_accession = ['multiplexed_in_accession_example'] # List[str] | Filter by multiplexed_in.accession (optional)
    multiplexed_samples_id = ['multiplexed_samples_id_example'] # List[str] | Filter by multiplexed_samples.@id (optional)
    multiplexed_samples_accession = ['multiplexed_samples_accession_example'] # List[str] | Filter by multiplexed_samples.accession (optional)
    multiplexed_samples_construct_library_sets = ['multiplexed_samples_construct_library_sets_example'] # List[str] | Filter by multiplexed_samples.construct_library_sets (optional)
    multiplexed_samples_disease_terms_id = ['multiplexed_samples_disease_terms_id_example'] # List[str] | Filter by multiplexed_samples.disease_terms.@id (optional)
    multiplexed_samples_disease_terms_term_name = ['multiplexed_samples_disease_terms_term_name_example'] # List[str] | Filter by multiplexed_samples.disease_terms.term_name (optional)
    multiplexed_samples_donors_id = ['multiplexed_samples_donors_id_example'] # List[str] | Filter by multiplexed_samples.donors.@id (optional)
    multiplexed_samples_donors_accession = ['multiplexed_samples_donors_accession_example'] # List[str] | Filter by multiplexed_samples.donors.accession (optional)
    multiplexed_samples_sample_terms_id = ['multiplexed_samples_sample_terms_id_example'] # List[str] | Filter by multiplexed_samples.sample_terms.@id (optional)
    multiplexed_samples_sample_terms_term_name = ['multiplexed_samples_sample_terms_term_name_example'] # List[str] | Filter by multiplexed_samples.sample_terms.term_name (optional)
    multiplexed_samples_status = ['multiplexed_samples_status_example'] # List[str] | Filter by multiplexed_samples.status (optional)
    multiplexed_samples_summary = ['multiplexed_samples_summary_example'] # List[str] | Filter by multiplexed_samples.summary (optional)
    sample_terms_id = ['sample_terms_id_example'] # List[str] | Filter by sample_terms.@id (optional)
    sample_terms_term_name = ['sample_terms_term_name_example'] # List[str] | Filter by sample_terms.term_name (optional)
    sorted_from_id = 'sorted_from_id_example' # str | Filter by sorted_from.@id (optional)
    sorted_from_accession = 'sorted_from_accession_example' # str | Filter by sorted_from.accession (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    treatments_id = ['treatments_id_example'] # List[str] | Filter by treatments.@id (optional)
    treatments_purpose = ['treatments_purpose_example'] # List[str] | Filter by treatments.purpose (optional)
    treatments_status = ['treatments_status_example'] # List[str] | Filter by treatments.status (optional)
    treatments_summary = ['treatments_summary_example'] # List[str] | Filter by treatments.summary (optional)
    treatments_treatment_type = ['treatments_treatment_type_example'] # List[str] | Filter by treatments.treatment_type (optional)

    try:
        # List items in the MultiplexedSample collection.
        api_response = api_instance.multiplexed_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, cellular_sub_pool=cellular_sub_pool, barcode_sample_map=barcode_sample_map, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, donors=donors, biomarkers=biomarkers, classifications=classifications, award_id=award_id, award_component=award_component, construct_library_sets_id=construct_library_sets_id, construct_library_sets_accession=construct_library_sets_accession, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, multiplexed_samples_id=multiplexed_samples_id, multiplexed_samples_accession=multiplexed_samples_accession, multiplexed_samples_construct_library_sets=multiplexed_samples_construct_library_sets, multiplexed_samples_disease_terms_id=multiplexed_samples_disease_terms_id, multiplexed_samples_disease_terms_term_name=multiplexed_samples_disease_terms_term_name, multiplexed_samples_donors_id=multiplexed_samples_donors_id, multiplexed_samples_donors_accession=multiplexed_samples_donors_accession, multiplexed_samples_sample_terms_id=multiplexed_samples_sample_terms_id, multiplexed_samples_sample_terms_term_name=multiplexed_samples_sample_terms_term_name, multiplexed_samples_status=multiplexed_samples_status, multiplexed_samples_summary=multiplexed_samples_summary, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)
        print("The response of IgvfApi->multiplexed_samples:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->multiplexed_samples: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **barcode_sample_map** | **str**| Filter by barcode_sample_map | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **construct_library_sets_id** | [**List[str]**](List[str].md)| Filter by construct_library_sets.@id | [optional] 
 **construct_library_sets_accession** | [**List[str]**](List[str].md)| Filter by construct_library_sets.accession | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **multiplexed_samples_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.@id | [optional] 
 **multiplexed_samples_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.accession | [optional] 
 **multiplexed_samples_construct_library_sets** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.construct_library_sets | [optional] 
 **multiplexed_samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.disease_terms.@id | [optional] 
 **multiplexed_samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.disease_terms.term_name | [optional] 
 **multiplexed_samples_donors_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.donors.@id | [optional] 
 **multiplexed_samples_donors_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.donors.accession | [optional] 
 **multiplexed_samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.sample_terms.@id | [optional] 
 **multiplexed_samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.sample_terms.term_name | [optional] 
 **multiplexed_samples_status** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.status | [optional] 
 **multiplexed_samples_summary** | [**List[str]**](List[str].md)| Filter by multiplexed_samples.summary | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | **str**| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | **str**| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 

### Return type

[**MultiplexedSampleResults**](MultiplexedSampleResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **open_reading_frames**
> OpenReadingFrameResults open_reading_frames(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lab=lab, award=award, orf_id=orf_id, protein_id=protein_id, dbxrefs=dbxrefs, pct_identical_protein=pct_identical_protein, pct_coverage_protein=pct_coverage_protein, pct_coverage_orf=pct_coverage_orf, id=id, summary=summary, gene_id=gene_id, gene_geneid=gene_geneid, gene_symbol=gene_symbol)

List items in the OpenReadingFrame collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate OpenReadingFrame items. Supports filtering on fields within OpenReadingFrame items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.open_reading_frame_results import OpenReadingFrameResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    orf_id = 'orf_id_example' # str | Filter by orf_id (optional)
    protein_id = 'protein_id_example' # str | Filter by protein_id (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    pct_identical_protein = 3.4 # float | Filter by pct_identical_protein (optional)
    pct_coverage_protein = 3.4 # float | Filter by pct_coverage_protein (optional)
    pct_coverage_orf = 3.4 # float | Filter by pct_coverage_orf (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    gene_id = ['gene_id_example'] # List[str] | Filter by gene.@id (optional)
    gene_geneid = ['gene_geneid_example'] # List[str] | Filter by gene.geneid (optional)
    gene_symbol = ['gene_symbol_example'] # List[str] | Filter by gene.symbol (optional)

    try:
        # List items in the OpenReadingFrame collection.
        api_response = api_instance.open_reading_frames(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lab=lab, award=award, orf_id=orf_id, protein_id=protein_id, dbxrefs=dbxrefs, pct_identical_protein=pct_identical_protein, pct_coverage_protein=pct_coverage_protein, pct_coverage_orf=pct_coverage_orf, id=id, summary=summary, gene_id=gene_id, gene_geneid=gene_geneid, gene_symbol=gene_symbol)
        print("The response of IgvfApi->open_reading_frames:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->open_reading_frames: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **orf_id** | **str**| Filter by orf_id | [optional] 
 **protein_id** | **str**| Filter by protein_id | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **pct_identical_protein** | **float**| Filter by pct_identical_protein | [optional] 
 **pct_coverage_protein** | **float**| Filter by pct_coverage_protein | [optional] 
 **pct_coverage_orf** | **float**| Filter by pct_coverage_orf | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **gene_id** | [**List[str]**](List[str].md)| Filter by gene.@id | [optional] 
 **gene_geneid** | [**List[str]**](List[str].md)| Filter by gene.geneid | [optional] 
 **gene_symbol** | [**List[str]**](List[str].md)| Filter by gene.symbol | [optional] 

### Return type

[**OpenReadingFrameResults**](OpenReadingFrameResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pages**
> PageResults pages(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, parent=parent, name=name, title=title, layout=layout, id=id, summary=summary, canonical_uri=canonical_uri, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Page collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Page items. Supports filtering on fields within Page items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.page_results import PageResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    parent = 'parent_example' # str | Filter by parent (optional)
    name = 'name_example' # str | Filter by name (optional)
    title = 'title_example' # str | Filter by title (optional)
    layout = {'key': igvf_client.PageLayout()} # PageLayout | Filter by layout (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    canonical_uri = 'canonical_uri_example' # str | Filter by canonical_uri (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Page collection.
        api_response = api_instance.pages(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, parent=parent, name=name, title=title, layout=layout, id=id, summary=summary, canonical_uri=canonical_uri, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->pages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->pages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **parent** | **str**| Filter by parent | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **layout** | [**PageLayout**](PageLayout.md)| Filter by layout | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **canonical_uri** | **str**| Filter by canonical_uri | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**PageResults**](PageResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phenotype_terms**
> PhenotypeTermResults phenotype_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the PhenotypeTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypeTerm items. Supports filtering on fields within PhenotypeTerm items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.phenotype_term_results import PhenotypeTermResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    term_id = 'term_id_example' # str | Filter by term_id (optional)
    term_name = 'term_name_example' # str | Filter by term_name (optional)
    deprecated_ntr_terms = ['deprecated_ntr_terms_example'] # List[str] | Filter by deprecated_ntr_terms (optional)
    is_a = ['is_a_example'] # List[str] | Filter by is_a (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)
    synonyms = ['synonyms_example'] # List[str] | Filter by synonyms (optional)
    ancestors = ['ancestors_example'] # List[str] | Filter by ancestors (optional)
    ontology = 'ontology_example' # str | Filter by ontology (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the PhenotypeTerm collection.
        api_response = api_instance.phenotype_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->phenotype_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->phenotype_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **term_id** | **str**| Filter by term_id | [optional] 
 **term_name** | **str**| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | **str**| Filter by ontology | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**PhenotypeTermResults**](PhenotypeTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phenotypic_features**
> PhenotypicFeatureResults phenotypic_features(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, quantity=quantity, quantity_units=quantity_units, observation_date=observation_date, id=id, summary=summary, award_id=award_id, award_component=award_component, feature_id=feature_id, feature_term_id=feature_term_id, feature_term_name=feature_term_name, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the PhenotypicFeature collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PhenotypicFeature items. Supports filtering on fields within PhenotypicFeature items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.phenotypic_feature_results import PhenotypicFeatureResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    quantity = 3.4 # float | Filter by quantity (optional)
    quantity_units = 'quantity_units_example' # str | Filter by quantity_units (optional)
    observation_date = '2013-10-20' # date | Filter by observation_date (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    feature_id = 'feature_id_example' # str | Filter by feature.@id (optional)
    feature_term_id = 'feature_term_id_example' # str | Filter by feature.term_id (optional)
    feature_term_name = 'feature_term_name_example' # str | Filter by feature.term_name (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the PhenotypicFeature collection.
        api_response = api_instance.phenotypic_features(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, quantity=quantity, quantity_units=quantity_units, observation_date=observation_date, id=id, summary=summary, award_id=award_id, award_component=award_component, feature_id=feature_id, feature_term_id=feature_term_id, feature_term_name=feature_term_name, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->phenotypic_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->phenotypic_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **quantity** | **float**| Filter by quantity | [optional] 
 **quantity_units** | **str**| Filter by quantity_units | [optional] 
 **observation_date** | **date**| Filter by observation_date | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **feature_id** | **str**| Filter by feature.@id | [optional] 
 **feature_term_id** | **str**| Filter by feature.term_id | [optional] 
 **feature_term_name** | **str**| Filter by feature.term_name | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**PhenotypicFeatureResults**](PhenotypicFeatureResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **platform_terms**
> PlatformTermResults platform_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, company=company, sequencing_kits=sequencing_kits, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the PlatformTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PlatformTerm items. Supports filtering on fields within PlatformTerm items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.platform_term_results import PlatformTermResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    term_id = 'term_id_example' # str | Filter by term_id (optional)
    term_name = 'term_name_example' # str | Filter by term_name (optional)
    deprecated_ntr_terms = ['deprecated_ntr_terms_example'] # List[str] | Filter by deprecated_ntr_terms (optional)
    is_a = ['is_a_example'] # List[str] | Filter by is_a (optional)
    company = 'company_example' # str | Filter by company (optional)
    sequencing_kits = ['sequencing_kits_example'] # List[str] | Filter by sequencing_kits (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)
    synonyms = ['synonyms_example'] # List[str] | Filter by synonyms (optional)
    ancestors = ['ancestors_example'] # List[str] | Filter by ancestors (optional)
    ontology = 'ontology_example' # str | Filter by ontology (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the PlatformTerm collection.
        api_response = api_instance.platform_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, company=company, sequencing_kits=sequencing_kits, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->platform_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->platform_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **term_id** | **str**| Filter by term_id | [optional] 
 **term_name** | **str**| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **company** | **str**| Filter by company | [optional] 
 **sequencing_kits** | [**List[str]**](List[str].md)| Filter by sequencing_kits | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | **str**| Filter by ontology | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**PlatformTermResults**](PlatformTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prediction_sets**
> PredictionSetResults prediction_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, small_scale_loci_list=small_scale_loci_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, scope=scope, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, large_scale_gene_list_id=large_scale_gene_list_id, large_scale_gene_list_accession=large_scale_gene_list_accession, large_scale_gene_list_aliases=large_scale_gene_list_aliases, large_scale_loci_list_id=large_scale_loci_list_id, large_scale_loci_list_accession=large_scale_loci_list_accession, large_scale_loci_list_aliases=large_scale_loci_list_aliases, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets_id=samples_construct_library_sets_id, samples_construct_library_sets_accession=samples_construct_library_sets_accession, samples_construct_library_sets_summary=samples_construct_library_sets_summary, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, small_scale_gene_list_id=small_scale_gene_list_id, small_scale_gene_list_geneid=small_scale_gene_list_geneid, small_scale_gene_list_name=small_scale_gene_list_name, small_scale_gene_list_symbol=small_scale_gene_list_symbol, small_scale_gene_list_synonyms=small_scale_gene_list_synonyms, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the PredictionSet collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PredictionSet items. Supports filtering on fields within PredictionSet items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.locus import Locus
from igvf_client.models.prediction_set_results import PredictionSetResults
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
    input_file_sets = ['input_file_sets_example'] # List[str] | Filter by input_file_sets (optional)
    small_scale_loci_list = [igvf_client.Locus()] # List[Locus] | Filter by small_scale_loci_list (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    scope = 'scope_example' # str | Filter by scope (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    award_contact_pi_id = 'award_contact_pi_id_example' # str | Filter by award.contact_pi.@id (optional)
    award_contact_pi_title = 'award_contact_pi_title_example' # str | Filter by award.contact_pi.title (optional)
    award_title = 'award_title_example' # str | Filter by award.title (optional)
    control_for_id = ['control_for_id_example'] # List[str] | Filter by control_for.@id (optional)
    control_for_accession = ['control_for_accession_example'] # List[str] | Filter by control_for.accession (optional)
    control_for_aliases = ['control_for_aliases_example'] # List[str] | Filter by control_for.aliases (optional)
    donors_id = ['donors_id_example'] # List[str] | Filter by donors.@id (optional)
    donors_accession = ['donors_accession_example'] # List[str] | Filter by donors.accession (optional)
    donors_aliases = ['donors_aliases_example'] # List[str] | Filter by donors.aliases (optional)
    donors_sex = ['donors_sex_example'] # List[str] | Filter by donors.sex (optional)
    donors_status = ['donors_status_example'] # List[str] | Filter by donors.status (optional)
    donors_taxa = ['donors_taxa_example'] # List[str] | Filter by donors.taxa (optional)
    files_id = ['files_id_example'] # List[str] | Filter by files.@id (optional)
    files_accession = ['files_accession_example'] # List[str] | Filter by files.accession (optional)
    files_aliases = ['files_aliases_example'] # List[str] | Filter by files.aliases (optional)
    files_content_type = ['files_content_type_example'] # List[str] | Filter by files.content_type (optional)
    files_creation_timestamp = ['files_creation_timestamp_example'] # List[str] | Filter by files.creation_timestamp (optional)
    files_file_format = ['files_file_format_example'] # List[str] | Filter by files.file_format (optional)
    files_file_size = [56] # List[int] | Filter by files.file_size (optional)
    files_href = ['files_href_example'] # List[str] | Filter by files.href (optional)
    files_s3_uri = ['files_s3_uri_example'] # List[str] | Filter by files.s3_uri (optional)
    files_sequencing_platform = ['files_sequencing_platform_example'] # List[str] | Filter by files.sequencing_platform (optional)
    files_submitted_file_name = ['files_submitted_file_name_example'] # List[str] | Filter by files.submitted_file_name (optional)
    files_upload_status = ['files_upload_status_example'] # List[str] | Filter by files.upload_status (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    large_scale_gene_list_id = 'large_scale_gene_list_id_example' # str | Filter by large_scale_gene_list.@id (optional)
    large_scale_gene_list_accession = 'large_scale_gene_list_accession_example' # str | Filter by large_scale_gene_list.accession (optional)
    large_scale_gene_list_aliases = ['large_scale_gene_list_aliases_example'] # List[str] | Filter by large_scale_gene_list.aliases (optional)
    large_scale_loci_list_id = 'large_scale_loci_list_id_example' # str | Filter by large_scale_loci_list.@id (optional)
    large_scale_loci_list_accession = 'large_scale_loci_list_accession_example' # str | Filter by large_scale_loci_list.accession (optional)
    large_scale_loci_list_aliases = ['large_scale_loci_list_aliases_example'] # List[str] | Filter by large_scale_loci_list.aliases (optional)
    samples_id = ['samples_id_example'] # List[str] | Filter by samples.@id (optional)
    samples_accession = ['samples_accession_example'] # List[str] | Filter by samples.accession (optional)
    samples_aliases = ['samples_aliases_example'] # List[str] | Filter by samples.aliases (optional)
    samples_cell_fate_change_treatments = ['samples_cell_fate_change_treatments_example'] # List[str] | Filter by samples.cell_fate_change_treatments (optional)
    samples_classifications = ['samples_classifications_example'] # List[str] | Filter by samples.classifications (optional)
    samples_construct_library_sets_id = ['samples_construct_library_sets_id_example'] # List[str] | Filter by samples.construct_library_sets.@id (optional)
    samples_construct_library_sets_accession = ['samples_construct_library_sets_accession_example'] # List[str] | Filter by samples.construct_library_sets.accession (optional)
    samples_construct_library_sets_summary = ['samples_construct_library_sets_summary_example'] # List[str] | Filter by samples.construct_library_sets.summary (optional)
    samples_disease_terms_id = ['samples_disease_terms_id_example'] # List[str] | Filter by samples.disease_terms.@id (optional)
    samples_disease_terms_term_name = ['samples_disease_terms_term_name_example'] # List[str] | Filter by samples.disease_terms.term_name (optional)
    samples_modifications = ['samples_modifications_example'] # List[str] | Filter by samples.modifications (optional)
    samples_sample_terms_id = ['samples_sample_terms_id_example'] # List[str] | Filter by samples.sample_terms.@id (optional)
    samples_sample_terms_aliases = ['samples_sample_terms_aliases_example'] # List[str] | Filter by samples.sample_terms.aliases (optional)
    samples_sample_terms_status = ['samples_sample_terms_status_example'] # List[str] | Filter by samples.sample_terms.status (optional)
    samples_sample_terms_summary = ['samples_sample_terms_summary_example'] # List[str] | Filter by samples.sample_terms.summary (optional)
    samples_sample_terms_term_name = ['samples_sample_terms_term_name_example'] # List[str] | Filter by samples.sample_terms.term_name (optional)
    samples_status = ['samples_status_example'] # List[str] | Filter by samples.status (optional)
    samples_summary = ['samples_summary_example'] # List[str] | Filter by samples.summary (optional)
    samples_targeted_sample_term_id = ['samples_targeted_sample_term_id_example'] # List[str] | Filter by samples.targeted_sample_term.@id (optional)
    samples_targeted_sample_term_term_name = ['samples_targeted_sample_term_term_name_example'] # List[str] | Filter by samples.targeted_sample_term.term_name (optional)
    samples_taxa = ['samples_taxa_example'] # List[str] | Filter by samples.taxa (optional)
    samples_treatments = ['samples_treatments_example'] # List[str] | Filter by samples.treatments (optional)
    small_scale_gene_list_id = ['small_scale_gene_list_id_example'] # List[str] | Filter by small_scale_gene_list.@id (optional)
    small_scale_gene_list_geneid = ['small_scale_gene_list_geneid_example'] # List[str] | Filter by small_scale_gene_list.geneid (optional)
    small_scale_gene_list_name = ['small_scale_gene_list_name_example'] # List[str] | Filter by small_scale_gene_list.name (optional)
    small_scale_gene_list_symbol = ['small_scale_gene_list_symbol_example'] # List[str] | Filter by small_scale_gene_list.symbol (optional)
    small_scale_gene_list_synonyms = ['small_scale_gene_list_synonyms_example'] # List[str] | Filter by small_scale_gene_list.synonyms (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the PredictionSet collection.
        api_response = api_instance.prediction_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, small_scale_loci_list=small_scale_loci_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, file_set_type=file_set_type, scope=scope, id=id, summary=summary, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, award_id=award_id, award_component=award_component, award_contact_pi_id=award_contact_pi_id, award_contact_pi_title=award_contact_pi_title, award_title=award_title, control_for_id=control_for_id, control_for_accession=control_for_accession, control_for_aliases=control_for_aliases, donors_id=donors_id, donors_accession=donors_accession, donors_aliases=donors_aliases, donors_sex=donors_sex, donors_status=donors_status, donors_taxa=donors_taxa, files_id=files_id, files_accession=files_accession, files_aliases=files_aliases, files_content_type=files_content_type, files_creation_timestamp=files_creation_timestamp, files_file_format=files_file_format, files_file_size=files_file_size, files_href=files_href, files_s3_uri=files_s3_uri, files_sequencing_platform=files_sequencing_platform, files_submitted_file_name=files_submitted_file_name, files_upload_status=files_upload_status, lab_id=lab_id, lab_title=lab_title, large_scale_gene_list_id=large_scale_gene_list_id, large_scale_gene_list_accession=large_scale_gene_list_accession, large_scale_gene_list_aliases=large_scale_gene_list_aliases, large_scale_loci_list_id=large_scale_loci_list_id, large_scale_loci_list_accession=large_scale_loci_list_accession, large_scale_loci_list_aliases=large_scale_loci_list_aliases, samples_id=samples_id, samples_accession=samples_accession, samples_aliases=samples_aliases, samples_cell_fate_change_treatments=samples_cell_fate_change_treatments, samples_classifications=samples_classifications, samples_construct_library_sets_id=samples_construct_library_sets_id, samples_construct_library_sets_accession=samples_construct_library_sets_accession, samples_construct_library_sets_summary=samples_construct_library_sets_summary, samples_disease_terms_id=samples_disease_terms_id, samples_disease_terms_term_name=samples_disease_terms_term_name, samples_modifications=samples_modifications, samples_sample_terms_id=samples_sample_terms_id, samples_sample_terms_aliases=samples_sample_terms_aliases, samples_sample_terms_status=samples_sample_terms_status, samples_sample_terms_summary=samples_sample_terms_summary, samples_sample_terms_term_name=samples_sample_terms_term_name, samples_status=samples_status, samples_summary=samples_summary, samples_targeted_sample_term_id=samples_targeted_sample_term_id, samples_targeted_sample_term_term_name=samples_targeted_sample_term_term_name, samples_taxa=samples_taxa, samples_treatments=samples_treatments, small_scale_gene_list_id=small_scale_gene_list_id, small_scale_gene_list_geneid=small_scale_gene_list_geneid, small_scale_gene_list_name=small_scale_gene_list_name, small_scale_gene_list_symbol=small_scale_gene_list_symbol, small_scale_gene_list_synonyms=small_scale_gene_list_synonyms, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->prediction_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->prediction_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **input_file_sets** | [**List[str]**](List[str].md)| Filter by input_file_sets | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **scope** | **str**| Filter by scope | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **award_contact_pi_id** | **str**| Filter by award.contact_pi.@id | [optional] 
 **award_contact_pi_title** | **str**| Filter by award.contact_pi.title | [optional] 
 **award_title** | **str**| Filter by award.title | [optional] 
 **control_for_id** | [**List[str]**](List[str].md)| Filter by control_for.@id | [optional] 
 **control_for_accession** | [**List[str]**](List[str].md)| Filter by control_for.accession | [optional] 
 **control_for_aliases** | [**List[str]**](List[str].md)| Filter by control_for.aliases | [optional] 
 **donors_id** | [**List[str]**](List[str].md)| Filter by donors.@id | [optional] 
 **donors_accession** | [**List[str]**](List[str].md)| Filter by donors.accession | [optional] 
 **donors_aliases** | [**List[str]**](List[str].md)| Filter by donors.aliases | [optional] 
 **donors_sex** | [**List[str]**](List[str].md)| Filter by donors.sex | [optional] 
 **donors_status** | [**List[str]**](List[str].md)| Filter by donors.status | [optional] 
 **donors_taxa** | [**List[str]**](List[str].md)| Filter by donors.taxa | [optional] 
 **files_id** | [**List[str]**](List[str].md)| Filter by files.@id | [optional] 
 **files_accession** | [**List[str]**](List[str].md)| Filter by files.accession | [optional] 
 **files_aliases** | [**List[str]**](List[str].md)| Filter by files.aliases | [optional] 
 **files_content_type** | [**List[str]**](List[str].md)| Filter by files.content_type | [optional] 
 **files_creation_timestamp** | [**List[str]**](List[str].md)| Filter by files.creation_timestamp | [optional] 
 **files_file_format** | [**List[str]**](List[str].md)| Filter by files.file_format | [optional] 
 **files_file_size** | [**List[int]**](List[int].md)| Filter by files.file_size | [optional] 
 **files_href** | [**List[str]**](List[str].md)| Filter by files.href | [optional] 
 **files_s3_uri** | [**List[str]**](List[str].md)| Filter by files.s3_uri | [optional] 
 **files_sequencing_platform** | [**List[str]**](List[str].md)| Filter by files.sequencing_platform | [optional] 
 **files_submitted_file_name** | [**List[str]**](List[str].md)| Filter by files.submitted_file_name | [optional] 
 **files_upload_status** | [**List[str]**](List[str].md)| Filter by files.upload_status | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **large_scale_gene_list_id** | **str**| Filter by large_scale_gene_list.@id | [optional] 
 **large_scale_gene_list_accession** | **str**| Filter by large_scale_gene_list.accession | [optional] 
 **large_scale_gene_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_gene_list.aliases | [optional] 
 **large_scale_loci_list_id** | **str**| Filter by large_scale_loci_list.@id | [optional] 
 **large_scale_loci_list_accession** | **str**| Filter by large_scale_loci_list.accession | [optional] 
 **large_scale_loci_list_aliases** | [**List[str]**](List[str].md)| Filter by large_scale_loci_list.aliases | [optional] 
 **samples_id** | [**List[str]**](List[str].md)| Filter by samples.@id | [optional] 
 **samples_accession** | [**List[str]**](List[str].md)| Filter by samples.accession | [optional] 
 **samples_aliases** | [**List[str]**](List[str].md)| Filter by samples.aliases | [optional] 
 **samples_cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by samples.cell_fate_change_treatments | [optional] 
 **samples_classifications** | [**List[str]**](List[str].md)| Filter by samples.classifications | [optional] 
 **samples_construct_library_sets_id** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.@id | [optional] 
 **samples_construct_library_sets_accession** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.accession | [optional] 
 **samples_construct_library_sets_summary** | [**List[str]**](List[str].md)| Filter by samples.construct_library_sets.summary | [optional] 
 **samples_disease_terms_id** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.@id | [optional] 
 **samples_disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.disease_terms.term_name | [optional] 
 **samples_modifications** | [**List[str]**](List[str].md)| Filter by samples.modifications | [optional] 
 **samples_sample_terms_id** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.@id | [optional] 
 **samples_sample_terms_aliases** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.aliases | [optional] 
 **samples_sample_terms_status** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.status | [optional] 
 **samples_sample_terms_summary** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.summary | [optional] 
 **samples_sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by samples.sample_terms.term_name | [optional] 
 **samples_status** | [**List[str]**](List[str].md)| Filter by samples.status | [optional] 
 **samples_summary** | [**List[str]**](List[str].md)| Filter by samples.summary | [optional] 
 **samples_targeted_sample_term_id** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.@id | [optional] 
 **samples_targeted_sample_term_term_name** | [**List[str]**](List[str].md)| Filter by samples.targeted_sample_term.term_name | [optional] 
 **samples_taxa** | [**List[str]**](List[str].md)| Filter by samples.taxa | [optional] 
 **samples_treatments** | [**List[str]**](List[str].md)| Filter by samples.treatments | [optional] 
 **small_scale_gene_list_id** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.@id | [optional] 
 **small_scale_gene_list_geneid** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.geneid | [optional] 
 **small_scale_gene_list_name** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.name | [optional] 
 **small_scale_gene_list_symbol** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.symbol | [optional] 
 **small_scale_gene_list_synonyms** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list.synonyms | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**PredictionSetResults**](PredictionSetResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **primary_cells**
> PrimaryCellResults primary_cells(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, passage_number=passage_number, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)

List items in the PrimaryCell collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate PrimaryCell items. Supports filtering on fields within PrimaryCell items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.primary_cell_results import PrimaryCellResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    passage_number = 56 # int | Filter by passage_number (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    disease_terms_id = ['disease_terms_id_example'] # List[str] | Filter by disease_terms.@id (optional)
    disease_terms_term_name = ['disease_terms_term_name_example'] # List[str] | Filter by disease_terms.term_name (optional)
    file_sets_id = ['file_sets_id_example'] # List[str] | Filter by file_sets.@id (optional)
    file_sets_accession = ['file_sets_accession_example'] # List[str] | Filter by file_sets.accession (optional)
    file_sets_aliases = ['file_sets_aliases_example'] # List[str] | Filter by file_sets.aliases (optional)
    file_sets_assay_term_term_name = ['file_sets_assay_term_term_name_example'] # List[str] | Filter by file_sets.assay_term.term_name (optional)
    file_sets_lab_title = ['file_sets_lab_title_example'] # List[str] | Filter by file_sets.lab.title (optional)
    file_sets_status = ['file_sets_status_example'] # List[str] | Filter by file_sets.status (optional)
    file_sets_summary = ['file_sets_summary_example'] # List[str] | Filter by file_sets.summary (optional)
    institutional_certificates_id = ['institutional_certificates_id_example'] # List[str] | Filter by institutional_certificates.@id (optional)
    institutional_certificates_certificate_identifier = ['institutional_certificates_certificate_identifier_example'] # List[str] | Filter by institutional_certificates.certificate_identifier (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    modifications_id = ['modifications_id_example'] # List[str] | Filter by modifications.@id (optional)
    modifications_status = ['modifications_status_example'] # List[str] | Filter by modifications.status (optional)
    modifications_summary = ['modifications_summary_example'] # List[str] | Filter by modifications.summary (optional)
    multiplexed_in_id = ['multiplexed_in_id_example'] # List[str] | Filter by multiplexed_in.@id (optional)
    multiplexed_in_accession = ['multiplexed_in_accession_example'] # List[str] | Filter by multiplexed_in.accession (optional)
    sample_terms_id = ['sample_terms_id_example'] # List[str] | Filter by sample_terms.@id (optional)
    sample_terms_term_name = ['sample_terms_term_name_example'] # List[str] | Filter by sample_terms.term_name (optional)
    sorted_from_id = 'sorted_from_id_example' # str | Filter by sorted_from.@id (optional)
    sorted_from_accession = 'sorted_from_accession_example' # str | Filter by sorted_from.accession (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    treatments_id = ['treatments_id_example'] # List[str] | Filter by treatments.@id (optional)
    treatments_purpose = ['treatments_purpose_example'] # List[str] | Filter by treatments.purpose (optional)
    treatments_status = ['treatments_status_example'] # List[str] | Filter by treatments.status (optional)
    treatments_summary = ['treatments_summary_example'] # List[str] | Filter by treatments.summary (optional)
    treatments_treatment_type = ['treatments_treatment_type_example'] # List[str] | Filter by treatments.treatment_type (optional)

    try:
        # List items in the PrimaryCell collection.
        api_response = api_instance.primary_cells(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, passage_number=passage_number, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)
        print("The response of IgvfApi->primary_cells:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->primary_cells: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **passage_number** | **int**| Filter by passage_number | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | **str**| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | **str**| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 

### Return type

[**PrimaryCellResults**](PrimaryCellResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publications**
> PublicationResults publications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publication_identifiers=publication_identifiers, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, abstract=abstract, authors=authors, date_published=date_published, date_revised=date_revised, issue=issue, page=page, volume=volume, journal=journal, published_by=published_by, id=id, summary=summary, publication_year=publication_year, samples=samples, donors=donors, file_sets=file_sets, workflows=workflows, software=software, software_versions=software_versions, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Publication collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Publication items. Supports filtering on fields within Publication items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.publication_results import PublicationResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    status = 'status_example' # str | Filter by status (optional)
    attachment = {'key': igvf_client.Attachment()} # Attachment | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    title = 'title_example' # str | Filter by title (optional)
    abstract = 'abstract_example' # str | Filter by abstract (optional)
    authors = 'authors_example' # str | Filter by authors (optional)
    date_published = '2013-10-20' # date | Filter by date_published (optional)
    date_revised = '2013-10-20' # date | Filter by date_revised (optional)
    issue = 'issue_example' # str | Filter by issue (optional)
    page = 'page_example' # str | Filter by page (optional)
    volume = 'volume_example' # str | Filter by volume (optional)
    journal = 'journal_example' # str | Filter by journal (optional)
    published_by = ['published_by_example'] # List[str] | Filter by published_by (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    publication_year = 56 # int | Filter by publication_year (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    workflows = ['workflows_example'] # List[str] | Filter by workflows (optional)
    software = ['software_example'] # List[str] | Filter by software (optional)
    software_versions = ['software_versions_example'] # List[str] | Filter by software_versions (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Publication collection.
        api_response = api_instance.publications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publication_identifiers=publication_identifiers, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, abstract=abstract, authors=authors, date_published=date_published, date_revised=date_revised, issue=issue, page=page, volume=volume, journal=journal, published_by=published_by, id=id, summary=summary, publication_year=publication_year, samples=samples, donors=donors, file_sets=file_sets, workflows=workflows, software=software, software_versions=software_versions, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->publications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->publications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **attachment** | [**Attachment**](Attachment.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **abstract** | **str**| Filter by abstract | [optional] 
 **authors** | **str**| Filter by authors | [optional] 
 **date_published** | **date**| Filter by date_published | [optional] 
 **date_revised** | **date**| Filter by date_revised | [optional] 
 **issue** | **str**| Filter by issue | [optional] 
 **page** | **str**| Filter by page | [optional] 
 **volume** | **str**| Filter by volume | [optional] 
 **journal** | **str**| Filter by journal | [optional] 
 **published_by** | [**List[str]**](List[str].md)| Filter by published_by | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **publication_year** | **int**| Filter by publication_year | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **workflows** | [**List[str]**](List[str].md)| Filter by workflows | [optional] 
 **software** | [**List[str]**](List[str].md)| Filter by software | [optional] 
 **software_versions** | [**List[str]**](List[str].md)| Filter by software_versions | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**PublicationResults**](PublicationResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reference_files**
> ReferenceFileResults reference_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, source_url=source_url, sources=sources, external=external, external_id=external_id, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the ReferenceFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate ReferenceFile items. Supports filtering on fields within ReferenceFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.reference_file_results import ReferenceFileResults
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
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    file_format_type = 'file_format_type_example' # str | Filter by file_format_type (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    source_url = 'source_url_example' # str | Filter by source_url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    external = True # bool | Filter by external (optional)
    external_id = 'external_id_example' # str | Filter by external_id (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the ReferenceFile collection.
        api_response = api_instance.reference_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, source_url=source_url, sources=sources, external=external, external_id=external_id, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->reference_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->reference_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **file_format_type** | **str**| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **source_url** | **str**| Filter by source_url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **external** | **bool**| Filter by external | [optional] 
 **external_id** | **str**| Filter by external_id | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**ReferenceFileResults**](ReferenceFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report**
> str report(type, query=query, field_filters=field_filters, include_fields=include_fields, frame=frame)

Generate a report based on search query. All results are returned.

Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).

### Example

* Basic Authentication (basicAuth):

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
    type = ['type_example'] # List[str] | Type of items to return. Can be repeated for multiple types.
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)
    include_fields = ['include_fields_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)
    frame = 'frame_example' # str | Object with links, or object with some links embedded. (optional)

    try:
        # Generate a report based on search query. All results are returned.
        api_response = api_instance.report(type, query=query, field_filters=field_filters, include_fields=include_fields, frame=frame)
        print("The response of IgvfApi->report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of items to return. Can be repeated for multiple types. | 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 
 **include_fields** | [**List[str]**](List[str].md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 
 **frame** | **str**| Object with links, or object with some links embedded. | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rodent_donors**
> RodentDonorResults rodent_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, virtual=virtual, strain_background=strain_background, strain=strain, genotype=genotype, individual_rodent=individual_rodent, rodent_identifier=rodent_identifier, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, phenotypic_features_id=phenotypic_features_id, phenotypic_features_feature_id=phenotypic_features_feature_id, phenotypic_features_feature_term_id=phenotypic_features_feature_term_id, phenotypic_features_feature_term_name=phenotypic_features_feature_term_name, phenotypic_features_observation_date=phenotypic_features_observation_date, phenotypic_features_quantity_units=phenotypic_features_quantity_units, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the RodentDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate RodentDonor items. Supports filtering on fields within RodentDonor items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.rodent_donor_results import RodentDonorResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    virtual = True # bool | Filter by virtual (optional)
    strain_background = 'strain_background_example' # str | Filter by strain_background (optional)
    strain = 'strain_example' # str | Filter by strain (optional)
    genotype = 'genotype_example' # str | Filter by genotype (optional)
    individual_rodent = True # bool | Filter by individual_rodent (optional)
    rodent_identifier = 'rodent_identifier_example' # str | Filter by rodent_identifier (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    phenotypic_features_id = ['phenotypic_features_id_example'] # List[str] | Filter by phenotypic_features.@id (optional)
    phenotypic_features_feature_id = ['phenotypic_features_feature_id_example'] # List[str] | Filter by phenotypic_features.feature.@id (optional)
    phenotypic_features_feature_term_id = ['phenotypic_features_feature_term_id_example'] # List[str] | Filter by phenotypic_features.feature.term_id (optional)
    phenotypic_features_feature_term_name = ['phenotypic_features_feature_term_name_example'] # List[str] | Filter by phenotypic_features.feature.term_name (optional)
    phenotypic_features_observation_date = ['phenotypic_features_observation_date_example'] # List[str] | Filter by phenotypic_features.observation_date (optional)
    phenotypic_features_quantity_units = ['phenotypic_features_quantity_units_example'] # List[str] | Filter by phenotypic_features.quantity_units (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the RodentDonor collection.
        api_response = api_instance.rodent_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, virtual=virtual, strain_background=strain_background, strain=strain, genotype=genotype, individual_rodent=individual_rodent, rodent_identifier=rodent_identifier, id=id, summary=summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, phenotypic_features_id=phenotypic_features_id, phenotypic_features_feature_id=phenotypic_features_feature_id, phenotypic_features_feature_term_id=phenotypic_features_feature_term_id, phenotypic_features_feature_term_name=phenotypic_features_feature_term_name, phenotypic_features_observation_date=phenotypic_features_observation_date, phenotypic_features_quantity_units=phenotypic_features_quantity_units, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->rodent_donors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->rodent_donors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **strain_background** | **str**| Filter by strain_background | [optional] 
 **strain** | **str**| Filter by strain | [optional] 
 **genotype** | **str**| Filter by genotype | [optional] 
 **individual_rodent** | **bool**| Filter by individual_rodent | [optional] 
 **rodent_identifier** | **str**| Filter by rodent_identifier | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **phenotypic_features_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.@id | [optional] 
 **phenotypic_features_feature_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.@id | [optional] 
 **phenotypic_features_feature_term_id** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_id | [optional] 
 **phenotypic_features_feature_term_name** | [**List[str]**](List[str].md)| Filter by phenotypic_features.feature.term_name | [optional] 
 **phenotypic_features_observation_date** | [**List[str]**](List[str].md)| Filter by phenotypic_features.observation_date | [optional] 
 **phenotypic_features_quantity_units** | [**List[str]**](List[str].md)| Filter by phenotypic_features.quantity_units | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**RodentDonorResults**](RodentDonorResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sample_terms**
> SampleTermResults sample_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, dbxrefs=dbxrefs, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, organ_slims=organ_slims, cell_slims=cell_slims, developmental_slims=developmental_slims, system_slims=system_slims, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the SampleTerm collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SampleTerm items. Supports filtering on fields within SampleTerm items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.sample_term_results import SampleTermResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    term_id = 'term_id_example' # str | Filter by term_id (optional)
    term_name = 'term_name_example' # str | Filter by term_name (optional)
    deprecated_ntr_terms = ['deprecated_ntr_terms_example'] # List[str] | Filter by deprecated_ntr_terms (optional)
    is_a = ['is_a_example'] # List[str] | Filter by is_a (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)
    synonyms = ['synonyms_example'] # List[str] | Filter by synonyms (optional)
    ancestors = ['ancestors_example'] # List[str] | Filter by ancestors (optional)
    ontology = 'ontology_example' # str | Filter by ontology (optional)
    organ_slims = ['organ_slims_example'] # List[str] | Filter by organ_slims (optional)
    cell_slims = ['cell_slims_example'] # List[str] | Filter by cell_slims (optional)
    developmental_slims = ['developmental_slims_example'] # List[str] | Filter by developmental_slims (optional)
    system_slims = ['system_slims_example'] # List[str] | Filter by system_slims (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the SampleTerm collection.
        api_response = api_instance.sample_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, dbxrefs=dbxrefs, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, organ_slims=organ_slims, cell_slims=cell_slims, developmental_slims=developmental_slims, system_slims=system_slims, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->sample_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->sample_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **term_id** | **str**| Filter by term_id | [optional] 
 **term_name** | **str**| Filter by term_name | [optional] 
 **deprecated_ntr_terms** | [**List[str]**](List[str].md)| Filter by deprecated_ntr_terms | [optional] 
 **is_a** | [**List[str]**](List[str].md)| Filter by is_a | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **synonyms** | [**List[str]**](List[str].md)| Filter by synonyms | [optional] 
 **ancestors** | [**List[str]**](List[str].md)| Filter by ancestors | [optional] 
 **ontology** | **str**| Filter by ontology | [optional] 
 **organ_slims** | [**List[str]**](List[str].md)| Filter by organ_slims | [optional] 
 **cell_slims** | [**List[str]**](List[str].md)| Filter by cell_slims | [optional] 
 **developmental_slims** | [**List[str]**](List[str].md)| Filter by developmental_slims | [optional] 
 **system_slims** | [**List[str]**](List[str].md)| Filter by system_slims | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**SampleTermResults**](SampleTermResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schema_for_item_type**
> object schema_for_item_type(item_type)

Retrieve JSON schema for item type

Returns JSON schemas of all the item types defined in IGVF

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.item_type import ItemType
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
    item_type = igvf_client.ItemType() # ItemType | The name of the item type

    try:
        # Retrieve JSON schema for item type
        api_response = api_instance.schema_for_item_type(item_type)
        print("The response of IgvfApi->schema_for_item_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->schema_for_item_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_type** | [**ItemType**](ItemType.md)| The name of the item type | 

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schemas**
> object schemas()

Retrieve JSON schemas for all item types

Returns JSON schemas of all the item types defined in IGVF

### Example

* Basic Authentication (basicAuth):

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

    try:
        # Retrieve JSON schemas for all item types
        api_response = api_instance.schemas()
        print("The response of IgvfApi->schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->schemas: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> SearchResults search(type=type, query=query, field_filters=field_filters, limit=limit, sort=sort, include_fields=include_fields)

Search for items in the IGVF Project

Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.search_results import SearchResults
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
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types. (optional)
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    include_fields = ['include_fields_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)

    try:
        # Search for items in the IGVF Project
        api_response = api_instance.search(type=type, query=query, field_filters=field_filters, limit=limit, sort=sort, include_fields=include_fields)
        print("The response of IgvfApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | [optional] 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **include_fields** | [**List[str]**](List[str].md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | No results found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sequence_files**
> SequenceFileResults sequence_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, flowcell_id=flowcell_id, lane=lane, read_count=read_count, minimum_read_length=minimum_read_length, maximum_read_length=maximum_read_length, mean_read_length=mean_read_length, sequencing_platform=sequencing_platform, sequencing_kit=sequencing_kit, sequencing_run=sequencing_run, illumina_read_type=illumina_read_type, index=index, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, seqspecs=seqspecs, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the SequenceFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SequenceFile items. Supports filtering on fields within SequenceFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.sequence_file_results import SequenceFileResults
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
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    flowcell_id = 'flowcell_id_example' # str | Filter by flowcell_id (optional)
    lane = 56 # int | Filter by lane (optional)
    read_count = 56 # int | Filter by read_count (optional)
    minimum_read_length = 56 # int | Filter by minimum_read_length (optional)
    maximum_read_length = 56 # int | Filter by maximum_read_length (optional)
    mean_read_length = 3.4 # float | Filter by mean_read_length (optional)
    sequencing_platform = 'sequencing_platform_example' # str | Filter by sequencing_platform (optional)
    sequencing_kit = 'sequencing_kit_example' # str | Filter by sequencing_kit (optional)
    sequencing_run = 56 # int | Filter by sequencing_run (optional)
    illumina_read_type = 'illumina_read_type_example' # str | Filter by illumina_read_type (optional)
    index = 'index_example' # str | Filter by index (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    seqspecs = ['seqspecs_example'] # List[str] | Filter by seqspecs (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the SequenceFile collection.
        api_response = api_instance.sequence_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, flowcell_id=flowcell_id, lane=lane, read_count=read_count, minimum_read_length=minimum_read_length, maximum_read_length=maximum_read_length, mean_read_length=mean_read_length, sequencing_platform=sequencing_platform, sequencing_kit=sequencing_kit, sequencing_run=sequencing_run, illumina_read_type=illumina_read_type, index=index, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, seqspecs=seqspecs, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->sequence_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->sequence_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **flowcell_id** | **str**| Filter by flowcell_id | [optional] 
 **lane** | **int**| Filter by lane | [optional] 
 **read_count** | **int**| Filter by read_count | [optional] 
 **minimum_read_length** | **int**| Filter by minimum_read_length | [optional] 
 **maximum_read_length** | **int**| Filter by maximum_read_length | [optional] 
 **mean_read_length** | **float**| Filter by mean_read_length | [optional] 
 **sequencing_platform** | **str**| Filter by sequencing_platform | [optional] 
 **sequencing_kit** | **str**| Filter by sequencing_kit | [optional] 
 **sequencing_run** | **int**| Filter by sequencing_run | [optional] 
 **illumina_read_type** | **str**| Filter by illumina_read_type | [optional] 
 **index** | **str**| Filter by index | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **seqspecs** | [**List[str]**](List[str].md)| Filter by seqspecs | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**SequenceFileResults**](SequenceFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signal_files**
> SignalFileResults signal_files(query=query, limit=limit, sort=sort, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, strand_specificity=strand_specificity, filtered=filtered, normalized=normalized, start_view_position=start_view_position, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the SignalFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SignalFile items. Supports filtering on fields within SignalFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.signal_file_results import SignalFileResults
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
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    reference_files = ['reference_files_example'] # List[str] | Filter by reference_files (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    strand_specificity = 'strand_specificity_example' # str | Filter by strand_specificity (optional)
    filtered = True # bool | Filter by filtered (optional)
    normalized = True # bool | Filter by normalized (optional)
    start_view_position = 'start_view_position_example' # str | Filter by start_view_position (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    content_summary = 'content_summary_example' # str | Filter by content_summary (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the SignalFile collection.
        api_response = api_instance.signal_files(query=query, limit=limit, sort=sort, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, strand_specificity=strand_specificity, filtered=filtered, normalized=normalized, start_view_position=start_view_position, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->signal_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->signal_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **strand_specificity** | **str**| Filter by strand_specificity | [optional] 
 **filtered** | **bool**| Filter by filtered | [optional] 
 **normalized** | **bool**| Filter by normalized | [optional] 
 **start_view_position** | **str**| Filter by start_view_position | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **content_summary** | **str**| Filter by content_summary | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**SignalFileResults**](SignalFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software**
> SoftwareResults software(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, title=title, source_url=source_url, used_by=used_by, id=id, summary=summary, versions=versions, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Software collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Software items. Supports filtering on fields within Software items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.software_results import SoftwareResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    title = 'title_example' # str | Filter by title (optional)
    source_url = 'source_url_example' # str | Filter by source_url (optional)
    used_by = ['used_by_example'] # List[str] | Filter by used_by (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    versions = ['versions_example'] # List[str] | Filter by versions (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Software collection.
        api_response = api_instance.software(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, title=title, source_url=source_url, used_by=used_by, id=id, summary=summary, versions=versions, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->software:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->software: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **source_url** | **str**| Filter by source_url | [optional] 
 **used_by** | [**List[str]**](List[str].md)| Filter by used_by | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **versions** | [**List[str]**](List[str].md)| Filter by versions | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**SoftwareResults**](SoftwareResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **software_versions**
> SoftwareVersionResults software_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, version=version, download_id=download_id, downloaded_url=downloaded_url, id=id, summary=summary, name=name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, software_id=software_id, software_title=software_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the SoftwareVersion collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate SoftwareVersion items. Supports filtering on fields within SoftwareVersion items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.software_version_results import SoftwareVersionResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    version = 'version_example' # str | Filter by version (optional)
    download_id = 'download_id_example' # str | Filter by download_id (optional)
    downloaded_url = 'downloaded_url_example' # str | Filter by downloaded_url (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    software_id = 'software_id_example' # str | Filter by software.@id (optional)
    software_title = 'software_title_example' # str | Filter by software.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the SoftwareVersion collection.
        api_response = api_instance.software_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, version=version, download_id=download_id, downloaded_url=downloaded_url, id=id, summary=summary, name=name, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, software_id=software_id, software_title=software_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->software_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->software_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **version** | **str**| Filter by version | [optional] 
 **download_id** | **str**| Filter by download_id | [optional] 
 **downloaded_url** | **str**| Filter by downloaded_url | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **software_id** | **str**| Filter by software.@id | [optional] 
 **software_title** | **str**| Filter by software.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**SoftwareVersionResults**](SoftwareVersionResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sources**
> SourceResults sources(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, name=name, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Source collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Source items. Supports filtering on fields within Source items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.source_results import SourceResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    title = 'title_example' # str | Filter by title (optional)
    name = 'name_example' # str | Filter by name (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Source collection.
        api_response = api_instance.sources(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, title=title, name=name, id=id, summary=summary, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**SourceResults**](SourceResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tabular_files**
> TabularFileResults tabular_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the TabularFile collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate TabularFile items. Supports filtering on fields within TabularFile items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.tabular_file_results import TabularFileResults
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
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    file_format_type = 'file_format_type_example' # str | Filter by file_format_type (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_version = 'analysis_step_version_example' # str | Filter by analysis_step_version (optional)
    content_md5sum = 'content_md5sum_example' # str | Filter by content_md5sum (optional)
    content_type = 'content_type_example' # str | Filter by content_type (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    derived_from = ['derived_from_example'] # List[str] | Filter by derived_from (optional)
    file_format = 'file_format_example' # str | Filter by file_format (optional)
    file_format_specifications = ['file_format_specifications_example'] # List[str] | Filter by file_format_specifications (optional)
    file_set = 'file_set_example' # str | Filter by file_set (optional)
    file_size = 56 # int | Filter by file_size (optional)
    md5sum = 'md5sum_example' # str | Filter by md5sum (optional)
    submitted_file_name = 'submitted_file_name_example' # str | Filter by submitted_file_name (optional)
    upload_status = 'upload_status_example' # str | Filter by upload_status (optional)
    validation_error_detail = 'validation_error_detail_example' # str | Filter by validation_error_detail (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    integrated_in = ['integrated_in_example'] # List[str] | Filter by integrated_in (optional)
    input_file_for = ['input_file_for_example'] # List[str] | Filter by input_file_for (optional)
    gene_list_for = ['gene_list_for_example'] # List[str] | Filter by gene_list_for (optional)
    loci_list_for = ['loci_list_for_example'] # List[str] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the TabularFile collection.
        api_response = api_instance.tabular_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->tabular_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->tabular_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **file_format_type** | **str**| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_version** | **str**| Filter by analysis_step_version | [optional] 
 **content_md5sum** | **str**| Filter by content_md5sum | [optional] 
 **content_type** | **str**| Filter by content_type | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **derived_from** | [**List[str]**](List[str].md)| Filter by derived_from | [optional] 
 **file_format** | **str**| Filter by file_format | [optional] 
 **file_format_specifications** | [**List[str]**](List[str].md)| Filter by file_format_specifications | [optional] 
 **file_set** | **str**| Filter by file_set | [optional] 
 **file_size** | **int**| Filter by file_size | [optional] 
 **md5sum** | **str**| Filter by md5sum | [optional] 
 **submitted_file_name** | **str**| Filter by submitted_file_name | [optional] 
 **upload_status** | **str**| Filter by upload_status | [optional] 
 **validation_error_detail** | **str**| Filter by validation_error_detail | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **integrated_in** | [**List[str]**](List[str].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[str]**](List[str].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[str]**](List[str].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[str]**](List[str].md)| Filter by loci_list_for | [optional] 
 **href** | **str**| Filter by href | [optional] 
 **s3_uri** | **str**| Filter by s3_uri | [optional] 
 **upload_credentials** | [**object**](object.md)| Filter by upload_credentials | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**TabularFileResults**](TabularFileResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **technical_samples**
> TechnicalSampleResults technical_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, sample_material=sample_material, taxa=taxa, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, classifications=classifications, award_id=award_id, award_component=award_component, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, lab_id=lab_id, lab_title=lab_title, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the TechnicalSample collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate TechnicalSample items. Supports filtering on fields within TechnicalSample items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.technical_sample_results import TechnicalSampleResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    sample_material = 'sample_material_example' # str | Filter by sample_material (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    file_sets_id = ['file_sets_id_example'] # List[str] | Filter by file_sets.@id (optional)
    file_sets_accession = ['file_sets_accession_example'] # List[str] | Filter by file_sets.accession (optional)
    file_sets_aliases = ['file_sets_aliases_example'] # List[str] | Filter by file_sets.aliases (optional)
    file_sets_assay_term_term_name = ['file_sets_assay_term_term_name_example'] # List[str] | Filter by file_sets.assay_term.term_name (optional)
    file_sets_lab_title = ['file_sets_lab_title_example'] # List[str] | Filter by file_sets.lab.title (optional)
    file_sets_status = ['file_sets_status_example'] # List[str] | Filter by file_sets.status (optional)
    file_sets_summary = ['file_sets_summary_example'] # List[str] | Filter by file_sets.summary (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    multiplexed_in_id = ['multiplexed_in_id_example'] # List[str] | Filter by multiplexed_in.@id (optional)
    multiplexed_in_accession = ['multiplexed_in_accession_example'] # List[str] | Filter by multiplexed_in.accession (optional)
    sample_terms_id = ['sample_terms_id_example'] # List[str] | Filter by sample_terms.@id (optional)
    sample_terms_term_name = ['sample_terms_term_name_example'] # List[str] | Filter by sample_terms.term_name (optional)
    sorted_from_id = 'sorted_from_id_example' # str | Filter by sorted_from.@id (optional)
    sorted_from_accession = 'sorted_from_accession_example' # str | Filter by sorted_from.accession (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the TechnicalSample collection.
        api_response = api_instance.technical_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, sample_material=sample_material, taxa=taxa, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, classifications=classifications, award_id=award_id, award_component=award_component, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, lab_id=lab_id, lab_title=lab_title, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->technical_samples:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->technical_samples: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **sample_material** | **str**| Filter by sample_material | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | **str**| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | **str**| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**TechnicalSampleResults**](TechnicalSampleResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tissues**
> TissueResults tissues(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, pmi=pmi, pmi_units=pmi_units, ccf_id=ccf_id, preservation_method=preservation_method, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)

List items in the Tissue collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Tissue items. Supports filtering on fields within Tissue items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.tissue_results import TissueResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    pmi = 56 # int | Filter by pmi (optional)
    pmi_units = 'pmi_units_example' # str | Filter by pmi_units (optional)
    ccf_id = 'ccf_id_example' # str | Filter by ccf_id (optional)
    preservation_method = 'preservation_method_example' # str | Filter by preservation_method (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    disease_terms_id = ['disease_terms_id_example'] # List[str] | Filter by disease_terms.@id (optional)
    disease_terms_term_name = ['disease_terms_term_name_example'] # List[str] | Filter by disease_terms.term_name (optional)
    file_sets_id = ['file_sets_id_example'] # List[str] | Filter by file_sets.@id (optional)
    file_sets_accession = ['file_sets_accession_example'] # List[str] | Filter by file_sets.accession (optional)
    file_sets_aliases = ['file_sets_aliases_example'] # List[str] | Filter by file_sets.aliases (optional)
    file_sets_assay_term_term_name = ['file_sets_assay_term_term_name_example'] # List[str] | Filter by file_sets.assay_term.term_name (optional)
    file_sets_lab_title = ['file_sets_lab_title_example'] # List[str] | Filter by file_sets.lab.title (optional)
    file_sets_status = ['file_sets_status_example'] # List[str] | Filter by file_sets.status (optional)
    file_sets_summary = ['file_sets_summary_example'] # List[str] | Filter by file_sets.summary (optional)
    institutional_certificates_id = ['institutional_certificates_id_example'] # List[str] | Filter by institutional_certificates.@id (optional)
    institutional_certificates_certificate_identifier = ['institutional_certificates_certificate_identifier_example'] # List[str] | Filter by institutional_certificates.certificate_identifier (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    modifications_id = ['modifications_id_example'] # List[str] | Filter by modifications.@id (optional)
    modifications_status = ['modifications_status_example'] # List[str] | Filter by modifications.status (optional)
    modifications_summary = ['modifications_summary_example'] # List[str] | Filter by modifications.summary (optional)
    multiplexed_in_id = ['multiplexed_in_id_example'] # List[str] | Filter by multiplexed_in.@id (optional)
    multiplexed_in_accession = ['multiplexed_in_accession_example'] # List[str] | Filter by multiplexed_in.accession (optional)
    sample_terms_id = ['sample_terms_id_example'] # List[str] | Filter by sample_terms.@id (optional)
    sample_terms_term_name = ['sample_terms_term_name_example'] # List[str] | Filter by sample_terms.term_name (optional)
    sorted_from_id = 'sorted_from_id_example' # str | Filter by sorted_from.@id (optional)
    sorted_from_accession = 'sorted_from_accession_example' # str | Filter by sorted_from.accession (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    treatments_id = ['treatments_id_example'] # List[str] | Filter by treatments.@id (optional)
    treatments_purpose = ['treatments_purpose_example'] # List[str] | Filter by treatments.purpose (optional)
    treatments_status = ['treatments_status_example'] # List[str] | Filter by treatments.status (optional)
    treatments_summary = ['treatments_summary_example'] # List[str] | Filter by treatments.summary (optional)
    treatments_treatment_type = ['treatments_treatment_type_example'] # List[str] | Filter by treatments.treatment_type (optional)

    try:
        # List items in the Tissue collection.
        api_response = api_instance.tissues(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, pmi=pmi, pmi_units=pmi_units, ccf_id=ccf_id, preservation_method=preservation_method, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)
        print("The response of IgvfApi->tissues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->tissues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **pmi** | **int**| Filter by pmi | [optional] 
 **pmi_units** | **str**| Filter by pmi_units | [optional] 
 **ccf_id** | **str**| Filter by ccf_id | [optional] 
 **preservation_method** | **str**| Filter by preservation_method | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | **str**| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | **str**| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 

### Return type

[**TissueResults**](TissueResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **treatments**
> TreatmentResults treatments(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, amount=amount, amount_units=amount_units, duration=duration, duration_units=duration_units, p_h=p_h, purpose=purpose, post_treatment_time=post_treatment_time, post_treatment_time_units=post_treatment_time_units, temperature=temperature, temperature_units=temperature_units, treatment_type=treatment_type, treatment_term_id=treatment_term_id, treatment_term_name=treatment_term_name, depletion=depletion, id=id, summary=summary, biosamples_treated=biosamples_treated, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Treatment collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Treatment items. Supports filtering on fields within Treatment items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.treatment_results import TreatmentResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    amount = 3.4 # float | Filter by amount (optional)
    amount_units = 'amount_units_example' # str | Filter by amount_units (optional)
    duration = 3.4 # float | Filter by duration (optional)
    duration_units = 'duration_units_example' # str | Filter by duration_units (optional)
    p_h = 3.4 # float | Filter by pH (optional)
    purpose = 'purpose_example' # str | Filter by purpose (optional)
    post_treatment_time = 3.4 # float | Filter by post_treatment_time (optional)
    post_treatment_time_units = 'post_treatment_time_units_example' # str | Filter by post_treatment_time_units (optional)
    temperature = 3.4 # float | Filter by temperature (optional)
    temperature_units = 'temperature_units_example' # str | Filter by temperature_units (optional)
    treatment_type = 'treatment_type_example' # str | Filter by treatment_type (optional)
    treatment_term_id = 'treatment_term_id_example' # str | Filter by treatment_term_id (optional)
    treatment_term_name = 'treatment_term_name_example' # str | Filter by treatment_term_name (optional)
    depletion = True # bool | Filter by depletion (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    biosamples_treated = ['biosamples_treated_example'] # List[str] | Filter by biosamples_treated (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Treatment collection.
        api_response = api_instance.treatments(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, amount=amount, amount_units=amount_units, duration=duration, duration_units=duration_units, p_h=p_h, purpose=purpose, post_treatment_time=post_treatment_time, post_treatment_time_units=post_treatment_time_units, temperature=temperature, temperature_units=temperature_units, treatment_type=treatment_type, treatment_term_id=treatment_term_id, treatment_term_name=treatment_term_name, depletion=depletion, id=id, summary=summary, biosamples_treated=biosamples_treated, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->treatments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->treatments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **amount** | **float**| Filter by amount | [optional] 
 **amount_units** | **str**| Filter by amount_units | [optional] 
 **duration** | **float**| Filter by duration | [optional] 
 **duration_units** | **str**| Filter by duration_units | [optional] 
 **p_h** | **float**| Filter by pH | [optional] 
 **purpose** | **str**| Filter by purpose | [optional] 
 **post_treatment_time** | **float**| Filter by post_treatment_time | [optional] 
 **post_treatment_time_units** | **str**| Filter by post_treatment_time_units | [optional] 
 **temperature** | **float**| Filter by temperature | [optional] 
 **temperature_units** | **str**| Filter by temperature_units | [optional] 
 **treatment_type** | **str**| Filter by treatment_type | [optional] 
 **treatment_term_id** | **str**| Filter by treatment_term_id | [optional] 
 **treatment_term_name** | **str**| Filter by treatment_term_name | [optional] 
 **depletion** | **bool**| Filter by depletion | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **biosamples_treated** | [**List[str]**](List[str].md)| Filter by biosamples_treated | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**TreatmentResults**](TreatmentResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users**
> UserResults users(query=query, limit=limit, sort=sort, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, email=email, first_name=first_name, last_name=last_name, lab=lab, submits_for=submits_for, groups=groups, viewing_groups=viewing_groups, job_title=job_title, id=id, summary=summary, title=title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the User collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate User items. Supports filtering on fields within User items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.user_results import UserResults
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
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    email = 'email_example' # str | Filter by email (optional)
    first_name = 'first_name_example' # str | Filter by first_name (optional)
    last_name = 'last_name_example' # str | Filter by last_name (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    submits_for = ['submits_for_example'] # List[str] | Filter by submits_for (optional)
    groups = ['groups_example'] # List[str] | Filter by groups (optional)
    viewing_groups = ['viewing_groups_example'] # List[str] | Filter by viewing_groups (optional)
    job_title = 'job_title_example' # str | Filter by job_title (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    title = 'title_example' # str | Filter by title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the User collection.
        api_response = api_instance.users(query=query, limit=limit, sort=sort, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, email=email, first_name=first_name, last_name=last_name, lab=lab, submits_for=submits_for, groups=groups, viewing_groups=viewing_groups, job_title=job_title, id=id, summary=summary, title=title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **email** | **str**| Filter by email | [optional] 
 **first_name** | **str**| Filter by first_name | [optional] 
 **last_name** | **str**| Filter by last_name | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **submits_for** | [**List[str]**](List[str].md)| Filter by submits_for | [optional] 
 **groups** | [**List[str]**](List[str].md)| Filter by groups | [optional] 
 **viewing_groups** | [**List[str]**](List[str].md)| Filter by viewing_groups | [optional] 
 **job_title** | **str**| Filter by job_title | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**UserResults**](UserResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **whole_organisms**
> WholeOrganismResults whole_organisms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)

List items in the WholeOrganism collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate WholeOrganism items. Supports filtering on fields within WholeOrganism items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.whole_organism_results import WholeOrganismResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = '2013-10-20' # date | Filter by date_obtained (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    disease_terms_id = ['disease_terms_id_example'] # List[str] | Filter by disease_terms.@id (optional)
    disease_terms_term_name = ['disease_terms_term_name_example'] # List[str] | Filter by disease_terms.term_name (optional)
    file_sets_id = ['file_sets_id_example'] # List[str] | Filter by file_sets.@id (optional)
    file_sets_accession = ['file_sets_accession_example'] # List[str] | Filter by file_sets.accession (optional)
    file_sets_aliases = ['file_sets_aliases_example'] # List[str] | Filter by file_sets.aliases (optional)
    file_sets_assay_term_term_name = ['file_sets_assay_term_term_name_example'] # List[str] | Filter by file_sets.assay_term.term_name (optional)
    file_sets_lab_title = ['file_sets_lab_title_example'] # List[str] | Filter by file_sets.lab.title (optional)
    file_sets_status = ['file_sets_status_example'] # List[str] | Filter by file_sets.status (optional)
    file_sets_summary = ['file_sets_summary_example'] # List[str] | Filter by file_sets.summary (optional)
    institutional_certificates_id = ['institutional_certificates_id_example'] # List[str] | Filter by institutional_certificates.@id (optional)
    institutional_certificates_certificate_identifier = ['institutional_certificates_certificate_identifier_example'] # List[str] | Filter by institutional_certificates.certificate_identifier (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    modifications_id = ['modifications_id_example'] # List[str] | Filter by modifications.@id (optional)
    modifications_status = ['modifications_status_example'] # List[str] | Filter by modifications.status (optional)
    modifications_summary = ['modifications_summary_example'] # List[str] | Filter by modifications.summary (optional)
    multiplexed_in_id = ['multiplexed_in_id_example'] # List[str] | Filter by multiplexed_in.@id (optional)
    multiplexed_in_accession = ['multiplexed_in_accession_example'] # List[str] | Filter by multiplexed_in.accession (optional)
    sample_terms_id = ['sample_terms_id_example'] # List[str] | Filter by sample_terms.@id (optional)
    sample_terms_term_name = ['sample_terms_term_name_example'] # List[str] | Filter by sample_terms.term_name (optional)
    sorted_from_id = 'sorted_from_id_example' # str | Filter by sorted_from.@id (optional)
    sorted_from_accession = 'sorted_from_accession_example' # str | Filter by sorted_from.accession (optional)
    sources_id = ['sources_id_example'] # List[str] | Filter by sources.@id (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)
    treatments_id = ['treatments_id_example'] # List[str] | Filter by treatments.@id (optional)
    treatments_purpose = ['treatments_purpose_example'] # List[str] | Filter by treatments.purpose (optional)
    treatments_status = ['treatments_status_example'] # List[str] | Filter by treatments.status (optional)
    treatments_summary = ['treatments_summary_example'] # List[str] | Filter by treatments.summary (optional)
    treatments_treatment_type = ['treatments_treatment_type_example'] # List[str] | Filter by treatments.treatment_type (optional)

    try:
        # List items in the WholeOrganism collection.
        api_response = api_instance.whole_organisms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, lot_id=lot_id, product_id=product_id, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, donors=donors, biomarkers=biomarkers, embryonic=embryonic, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, id=id, summary=summary, sorted_fractions=sorted_fractions, origin_of=origin_of, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications, award_id=award_id, award_component=award_component, disease_terms_id=disease_terms_id, disease_terms_term_name=disease_terms_term_name, file_sets_id=file_sets_id, file_sets_accession=file_sets_accession, file_sets_aliases=file_sets_aliases, file_sets_assay_term_term_name=file_sets_assay_term_term_name, file_sets_lab_title=file_sets_lab_title, file_sets_status=file_sets_status, file_sets_summary=file_sets_summary, institutional_certificates_id=institutional_certificates_id, institutional_certificates_certificate_identifier=institutional_certificates_certificate_identifier, lab_id=lab_id, lab_title=lab_title, modifications_id=modifications_id, modifications_status=modifications_status, modifications_summary=modifications_summary, multiplexed_in_id=multiplexed_in_id, multiplexed_in_accession=multiplexed_in_accession, sample_terms_id=sample_terms_id, sample_terms_term_name=sample_terms_term_name, sorted_from_id=sorted_from_id, sorted_from_accession=sorted_from_accession, sources_id=sources_id, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title, treatments_id=treatments_id, treatments_purpose=treatments_purpose, treatments_status=treatments_status, treatments_summary=treatments_summary, treatments_treatment_type=treatments_treatment_type)
        print("The response of IgvfApi->whole_organisms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->whole_organisms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **date**| Filter by date_obtained | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **disease_terms_id** | [**List[str]**](List[str].md)| Filter by disease_terms.@id | [optional] 
 **disease_terms_term_name** | [**List[str]**](List[str].md)| Filter by disease_terms.term_name | [optional] 
 **file_sets_id** | [**List[str]**](List[str].md)| Filter by file_sets.@id | [optional] 
 **file_sets_accession** | [**List[str]**](List[str].md)| Filter by file_sets.accession | [optional] 
 **file_sets_aliases** | [**List[str]**](List[str].md)| Filter by file_sets.aliases | [optional] 
 **file_sets_assay_term_term_name** | [**List[str]**](List[str].md)| Filter by file_sets.assay_term.term_name | [optional] 
 **file_sets_lab_title** | [**List[str]**](List[str].md)| Filter by file_sets.lab.title | [optional] 
 **file_sets_status** | [**List[str]**](List[str].md)| Filter by file_sets.status | [optional] 
 **file_sets_summary** | [**List[str]**](List[str].md)| Filter by file_sets.summary | [optional] 
 **institutional_certificates_id** | [**List[str]**](List[str].md)| Filter by institutional_certificates.@id | [optional] 
 **institutional_certificates_certificate_identifier** | [**List[str]**](List[str].md)| Filter by institutional_certificates.certificate_identifier | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **modifications_id** | [**List[str]**](List[str].md)| Filter by modifications.@id | [optional] 
 **modifications_status** | [**List[str]**](List[str].md)| Filter by modifications.status | [optional] 
 **modifications_summary** | [**List[str]**](List[str].md)| Filter by modifications.summary | [optional] 
 **multiplexed_in_id** | [**List[str]**](List[str].md)| Filter by multiplexed_in.@id | [optional] 
 **multiplexed_in_accession** | [**List[str]**](List[str].md)| Filter by multiplexed_in.accession | [optional] 
 **sample_terms_id** | [**List[str]**](List[str].md)| Filter by sample_terms.@id | [optional] 
 **sample_terms_term_name** | [**List[str]**](List[str].md)| Filter by sample_terms.term_name | [optional] 
 **sorted_from_id** | **str**| Filter by sorted_from.@id | [optional] 
 **sorted_from_accession** | **str**| Filter by sorted_from.accession | [optional] 
 **sources_id** | [**List[str]**](List[str].md)| Filter by sources.@id | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 
 **treatments_id** | [**List[str]**](List[str].md)| Filter by treatments.@id | [optional] 
 **treatments_purpose** | [**List[str]**](List[str].md)| Filter by treatments.purpose | [optional] 
 **treatments_status** | [**List[str]**](List[str].md)| Filter by treatments.status | [optional] 
 **treatments_summary** | [**List[str]**](List[str].md)| Filter by treatments.summary | [optional] 
 **treatments_treatment_type** | [**List[str]**](List[str].md)| Filter by treatments.treatment_type | [optional] 

### Return type

[**WholeOrganismResults**](WholeOrganismResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows**
> WorkflowResults workflows(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, source_url=source_url, workflow_repositories=workflow_repositories, workflow_version=workflow_version, id=id, summary=summary, analysis_steps=analysis_steps, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, standards_page_id=standards_page_id, standards_page_title=standards_page_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)

List items in the Workflow collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate Workflow items. Supports filtering on fields within Workflow items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.workflow_results import WorkflowResults
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
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    source_url = 'source_url_example' # str | Filter by source_url (optional)
    workflow_repositories = ['workflow_repositories_example'] # List[str] | Filter by workflow_repositories (optional)
    workflow_version = 56 # int | Filter by workflow_version (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    analysis_steps = ['analysis_steps_example'] # List[str] | Filter by analysis_steps (optional)
    award_id = 'award_id_example' # str | Filter by award.@id (optional)
    award_component = 'award_component_example' # str | Filter by award.component (optional)
    lab_id = 'lab_id_example' # str | Filter by lab.@id (optional)
    lab_title = 'lab_title_example' # str | Filter by lab.title (optional)
    standards_page_id = 'standards_page_id_example' # str | Filter by standards_page.@id (optional)
    standards_page_title = 'standards_page_title_example' # str | Filter by standards_page.title (optional)
    submitted_by_id = 'submitted_by_id_example' # str | Filter by submitted_by.@id (optional)
    submitted_by_title = 'submitted_by_title_example' # str | Filter by submitted_by.title (optional)

    try:
        # List items in the Workflow collection.
        api_response = api_instance.workflows(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitter_comment=submitter_comment, description=description, name=name, source_url=source_url, workflow_repositories=workflow_repositories, workflow_version=workflow_version, id=id, summary=summary, analysis_steps=analysis_steps, award_id=award_id, award_component=award_component, lab_id=lab_id, lab_title=lab_title, standards_page_id=standards_page_id, standards_page_title=standards_page_title, submitted_by_id=submitted_by_id, submitted_by_title=submitted_by_title)
        print("The response of IgvfApi->workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **source_url** | **str**| Filter by source_url | [optional] 
 **workflow_repositories** | [**List[str]**](List[str].md)| Filter by workflow_repositories | [optional] 
 **workflow_version** | **int**| Filter by workflow_version | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **analysis_steps** | [**List[str]**](List[str].md)| Filter by analysis_steps | [optional] 
 **award_id** | **str**| Filter by award.@id | [optional] 
 **award_component** | **str**| Filter by award.component | [optional] 
 **lab_id** | **str**| Filter by lab.@id | [optional] 
 **lab_title** | **str**| Filter by lab.title | [optional] 
 **standards_page_id** | **str**| Filter by standards_page.@id | [optional] 
 **standards_page_title** | **str**| Filter by standards_page.title | [optional] 
 **submitted_by_id** | **str**| Filter by submitted_by.@id | [optional] 
 **submitted_by_title** | **str**| Filter by submitted_by.title | [optional] 

### Return type

[**WorkflowResults**](WorkflowResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

