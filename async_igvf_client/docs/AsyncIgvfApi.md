# igvf_client.AsyncIgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**access_keys**](AsyncIgvfApi.md#access_keys) | **GET** /access-keys/@@listing | List items in the AccessKey collection.
[**alignment_files**](AsyncIgvfApi.md#alignment_files) | **GET** /alignment-files/@@listing | List items in the AlignmentFile collection.
[**analysis_sets**](AsyncIgvfApi.md#analysis_sets) | **GET** /analysis-sets/@@listing | List items in the AnalysisSet collection.
[**analysis_step_versions**](AsyncIgvfApi.md#analysis_step_versions) | **GET** /analysis-step-versions/@@listing | List items in the AnalysisStepVersion collection.
[**analysis_steps**](AsyncIgvfApi.md#analysis_steps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.
[**assay_terms**](AsyncIgvfApi.md#assay_terms) | **GET** /assay-terms/@@listing | List items in the AssayTerm collection.
[**auxiliary_sets**](AsyncIgvfApi.md#auxiliary_sets) | **GET** /auxiliary-sets/@@listing | List items in the AuxiliarySet collection.
[**awards**](AsyncIgvfApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.
[**batch_download**](AsyncIgvfApi.md#batch_download) | **GET** /batch-download | List files to download based on search query. All results are returned.
[**biomarkers**](AsyncIgvfApi.md#biomarkers) | **GET** /biomarkers/@@listing | List items in the Biomarker collection.
[**configuration_files**](AsyncIgvfApi.md#configuration_files) | **GET** /configuration-files/@@listing | List items in the ConfigurationFile collection.
[**construct_library_sets**](AsyncIgvfApi.md#construct_library_sets) | **GET** /construct-library-sets/@@listing | List items in the ConstructLibrarySet collection.
[**crispr_modifications**](AsyncIgvfApi.md#crispr_modifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.
[**curated_sets**](AsyncIgvfApi.md#curated_sets) | **GET** /curated-sets/@@listing | List items in the CuratedSet collection.
[**degron_modifications**](AsyncIgvfApi.md#degron_modifications) | **GET** /degron-modifications/@@listing | List items in the DegronModification collection.
[**documents**](AsyncIgvfApi.md#documents) | **GET** /documents/@@listing | List items in the Document collection.
[**download**](AsyncIgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
[**genes**](AsyncIgvfApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.
[**genome_browser_annotation_files**](AsyncIgvfApi.md#genome_browser_annotation_files) | **GET** /genome-browser-annotation-files/@@listing | List items in the GenomeBrowserAnnotationFile collection.
[**get_by_id**](AsyncIgvfApi.md#get_by_id) | **GET** /{resource_id} | Get item information
[**human_donors**](AsyncIgvfApi.md#human_donors) | **GET** /human-donors/@@listing | List items in the HumanDonor collection.
[**image_files**](AsyncIgvfApi.md#image_files) | **GET** /image-files/@@listing | List items in the ImageFile collection.
[**images**](AsyncIgvfApi.md#images) | **GET** /images/@@listing | List items in the Image collection.
[**in_vitro_systems**](AsyncIgvfApi.md#in_vitro_systems) | **GET** /in-vitro-systems/@@listing | List items in the InVitroSystem collection.
[**institutional_certificates**](AsyncIgvfApi.md#institutional_certificates) | **GET** /institutional-certificates/@@listing | List items in the InstitutionalCertificate collection.
[**labs**](AsyncIgvfApi.md#labs) | **GET** /labs/@@listing | List items in the Lab collection.
[**matrix_files**](AsyncIgvfApi.md#matrix_files) | **GET** /matrix-files/@@listing | List items in the MatrixFile collection.
[**measurement_sets**](AsyncIgvfApi.md#measurement_sets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.
[**model_files**](AsyncIgvfApi.md#model_files) | **GET** /model-files/@@listing | List items in the ModelFile collection.
[**model_sets**](AsyncIgvfApi.md#model_sets) | **GET** /model-sets/@@listing | List items in the ModelSet collection.
[**multiplexed_samples**](AsyncIgvfApi.md#multiplexed_samples) | **GET** /multiplexed-samples/@@listing | List items in the MultiplexedSample collection.
[**open_reading_frames**](AsyncIgvfApi.md#open_reading_frames) | **GET** /open-reading-frames/@@listing | List items in the OpenReadingFrame collection.
[**pages**](AsyncIgvfApi.md#pages) | **GET** /pages/@@listing | List items in the Page collection.
[**phenotype_terms**](AsyncIgvfApi.md#phenotype_terms) | **GET** /phenotype-terms/@@listing | List items in the PhenotypeTerm collection.
[**phenotypic_features**](AsyncIgvfApi.md#phenotypic_features) | **GET** /phenotypic-features/@@listing | List items in the PhenotypicFeature collection.
[**platform_terms**](AsyncIgvfApi.md#platform_terms) | **GET** /platform-terms/@@listing | List items in the PlatformTerm collection.
[**prediction_sets**](AsyncIgvfApi.md#prediction_sets) | **GET** /prediction-sets/@@listing | List items in the PredictionSet collection.
[**primary_cells**](AsyncIgvfApi.md#primary_cells) | **GET** /primary-cells/@@listing | List items in the PrimaryCell collection.
[**publications**](AsyncIgvfApi.md#publications) | **GET** /publications/@@listing | List items in the Publication collection.
[**reference_files**](AsyncIgvfApi.md#reference_files) | **GET** /reference-files/@@listing | List items in the ReferenceFile collection.
[**report**](AsyncIgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
[**rodent_donors**](AsyncIgvfApi.md#rodent_donors) | **GET** /rodent-donors/@@listing | List items in the RodentDonor collection.
[**sample_terms**](AsyncIgvfApi.md#sample_terms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.
[**schema_for_item_type**](AsyncIgvfApi.md#schema_for_item_type) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
[**schemas**](AsyncIgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
[**search**](AsyncIgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project
[**sequence_files**](AsyncIgvfApi.md#sequence_files) | **GET** /sequence-files/@@listing | List items in the SequenceFile collection.
[**signal_files**](AsyncIgvfApi.md#signal_files) | **GET** /signal-files/@@listing | List items in the SignalFile collection.
[**software**](AsyncIgvfApi.md#software) | **GET** /software/@@listing | List items in the Software collection.
[**software_versions**](AsyncIgvfApi.md#software_versions) | **GET** /software-versions/@@listing | List items in the SoftwareVersion collection.
[**sources**](AsyncIgvfApi.md#sources) | **GET** /sources/@@listing | List items in the Source collection.
[**tabular_files**](AsyncIgvfApi.md#tabular_files) | **GET** /tabular-files/@@listing | List items in the TabularFile collection.
[**technical_samples**](AsyncIgvfApi.md#technical_samples) | **GET** /technical-samples/@@listing | List items in the TechnicalSample collection.
[**tissues**](AsyncIgvfApi.md#tissues) | **GET** /tissues/@@listing | List items in the Tissue collection.
[**treatments**](AsyncIgvfApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.
[**users**](AsyncIgvfApi.md#users) | **GET** /users/@@listing | List items in the User collection.
[**whole_organisms**](AsyncIgvfApi.md#whole_organisms) | **GET** /whole-organisms/@@listing | List items in the WholeOrganism collection.
[**workflows**](AsyncIgvfApi.md#workflows) | **GET** /workflows/@@listing | List items in the Workflow collection.


# **access_keys**
> AccessKeyResults access_keys(query=query, limit=limit, sort=sort, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, status=status, user=user, access_key_id=access_key_id, secret_access_key_hash=secret_access_key_hash, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    status = 'status_example' # str | Filter by status (optional)
    user = 'user_example' # str | Filter by user (optional)
    access_key_id = 'access_key_id_example' # str | Filter by access_key_id (optional)
    secret_access_key_hash = 'secret_access_key_hash_example' # str | Filter by secret_access_key_hash (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the AccessKey collection.
        api_response = await api_instance.access_keys(query=query, limit=limit, sort=sort, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, status=status, user=user, access_key_id=access_key_id, secret_access_key_hash=secret_access_key_hash, id=id, summary=summary)
        print("The response of AsyncIgvfApi->access_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->access_keys: %s\n" % e)
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **user** | **str**| Filter by user | [optional] 
 **access_key_id** | **str**| Filter by access_key_id | [optional] 
 **secret_access_key_hash** | **str**| Filter by secret_access_key_hash | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> AlignmentFileResults alignment_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, redacted=redacted, filtered=filtered, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    reference_files = ['reference_files_example'] # List[str] | Filter by reference_files (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the AlignmentFile collection.
        api_response = await api_instance.alignment_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, redacted=redacted, filtered=filtered, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary)
        print("The response of AsyncIgvfApi->alignment_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->alignment_files: %s\n" % e)
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
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> AnalysisSetResults analysis_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_titles=assay_titles)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    input_file_sets = ['input_file_sets_example'] # List[str] | Filter by input_file_sets (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    assay_titles = ['assay_titles_example'] # List[str] | Filter by assay_titles (optional)

    try:
        # List items in the AnalysisSet collection.
        api_response = await api_instance.analysis_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assay_titles=assay_titles)
        print("The response of AsyncIgvfApi->analysis_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->analysis_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **input_file_sets** | [**List[str]**](List[str].md)| Filter by input_file_sets | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assay_titles** | [**List[str]**](List[str].md)| Filter by assay_titles | [optional] 

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
> AnalysisStepVersionResults analysis_step_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step=analysis_step, software_versions=software_versions, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step = 'analysis_step_example' # str | Filter by analysis_step (optional)
    software_versions = ['software_versions_example'] # List[str] | Filter by software_versions (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the AnalysisStepVersion collection.
        api_response = await api_instance.analysis_step_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step=analysis_step, software_versions=software_versions, id=id, summary=summary)
        print("The response of AsyncIgvfApi->analysis_step_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->analysis_step_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step** | **str**| Filter by analysis_step | [optional] 
 **software_versions** | [**List[str]**](List[str].md)| Filter by software_versions | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> AnalysisStepResults analysis_steps(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_types=analysis_step_types, step_label=step_label, title=title, workflow=workflow, parents=parents, input_content_types=input_content_types, output_content_types=output_content_types, id=id, summary=summary, name=name)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    analysis_step_types = ['analysis_step_types_example'] # List[str] | Filter by analysis_step_types (optional)
    step_label = 'step_label_example' # str | Filter by step_label (optional)
    title = 'title_example' # str | Filter by title (optional)
    workflow = 'workflow_example' # str | Filter by workflow (optional)
    parents = ['parents_example'] # List[str] | Filter by parents (optional)
    input_content_types = ['input_content_types_example'] # List[str] | Filter by input_content_types (optional)
    output_content_types = ['output_content_types_example'] # List[str] | Filter by output_content_types (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)

    try:
        # List items in the AnalysisStep collection.
        api_response = await api_instance.analysis_steps(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_types=analysis_step_types, step_label=step_label, title=title, workflow=workflow, parents=parents, input_content_types=input_content_types, output_content_types=output_content_types, id=id, summary=summary, name=name)
        print("The response of AsyncIgvfApi->analysis_steps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->analysis_steps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **analysis_step_types** | [**List[str]**](List[str].md)| Filter by analysis_step_types | [optional] 
 **step_label** | **str**| Filter by step_label | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **workflow** | **str**| Filter by workflow | [optional] 
 **parents** | [**List[str]**](List[str].md)| Filter by parents | [optional] 
 **input_content_types** | [**List[str]**](List[str].md)| Filter by input_content_types | [optional] 
 **output_content_types** | [**List[str]**](List[str].md)| Filter by output_content_types | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 

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
> AssayTermResults assay_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, preferred_assay_titles=preferred_assay_titles, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, assay_slims=assay_slims, category_slims=category_slims, objective_slims=objective_slims)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the AssayTerm collection.
        api_response = await api_instance.assay_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, preferred_assay_titles=preferred_assay_titles, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, assay_slims=assay_slims, category_slims=category_slims, objective_slims=objective_slims)
        print("The response of AsyncIgvfApi->assay_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->assay_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> AuxiliarySetResults auxiliary_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, library_construction_platform=library_construction_platform, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, measurement_sets=measurement_sets)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
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
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    library_construction_platform = 'library_construction_platform_example' # str | Filter by library_construction_platform (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    measurement_sets = ['measurement_sets_example'] # List[str] | Filter by measurement_sets (optional)

    try:
        # List items in the AuxiliarySet collection.
        api_response = await api_instance.auxiliary_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, library_construction_platform=library_construction_platform, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, measurement_sets=measurement_sets)
        print("The response of AsyncIgvfApi->auxiliary_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->auxiliary_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **library_construction_platform** | **str**| Filter by library_construction_platform | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **measurement_sets** | [**List[str]**](List[str].md)| Filter by measurement_sets | [optional] 

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
> AwardResults awards(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, name=name, start_date=start_date, end_date=end_date, pis=pis, contact_pi=contact_pi, project=project, viewing_group=viewing_group, component=component, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    title = 'title_example' # str | Filter by title (optional)
    name = 'name_example' # str | Filter by name (optional)
    start_date = 'start_date_example' # str | Filter by start_date (optional)
    end_date = 'end_date_example' # str | Filter by end_date (optional)
    pis = ['pis_example'] # List[str] | Filter by pis (optional)
    contact_pi = 'contact_pi_example' # str | Filter by contact_pi (optional)
    project = 'project_example' # str | Filter by project (optional)
    viewing_group = 'viewing_group_example' # str | Filter by viewing_group (optional)
    component = 'component_example' # str | Filter by component (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the Award collection.
        api_response = await api_instance.awards(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, name=name, start_date=start_date, end_date=end_date, pis=pis, contact_pi=contact_pi, project=project, viewing_group=viewing_group, component=component, id=id, summary=summary)
        print("The response of AsyncIgvfApi->awards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->awards: %s\n" % e)
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **start_date** | **str**| Filter by start_date | [optional] 
 **end_date** | **str**| Filter by end_date | [optional] 
 **pis** | [**List[str]**](List[str].md)| Filter by pis | [optional] 
 **contact_pi** | **str**| Filter by contact_pi | [optional] 
 **project** | **str**| Filter by project | [optional] 
 **viewing_group** | **str**| Filter by viewing_group | [optional] 
 **component** | **str**| Filter by component | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types.
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)

    try:
        # List files to download based on search query. All results are returned.
        api_response = await api_instance.batch_download(type, query=query, field_filters=field_filters)
        print("The response of AsyncIgvfApi->batch_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->batch_download: %s\n" % e)
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
> BiomarkerResults biomarkers(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, classification=classification, quantification=quantification, synonyms=synonyms, gene=gene, id=id, summary=summary, name_quantification=name_quantification, biomarker_for=biomarker_for)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the Biomarker collection.
        api_response = await api_instance.biomarkers(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, classification=classification, quantification=quantification, synonyms=synonyms, gene=gene, id=id, summary=summary, name_quantification=name_quantification, biomarker_for=biomarker_for)
        print("The response of AsyncIgvfApi->biomarkers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->biomarkers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> ConfigurationFileResults configuration_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, seqspec_of=seqspec_of, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the ConfigurationFile collection.
        api_response = await api_instance.configuration_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, seqspec_of=seqspec_of, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of AsyncIgvfApi->configuration_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->configuration_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> ConstructLibrarySetResults construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, large_scale_loci_list=large_scale_loci_list, small_scale_gene_list=small_scale_gene_list, large_scale_gene_list=large_scale_gene_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, associated_phenotypes=associated_phenotypes, orf_list=orf_list, exon=exon, tile=tile, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples=applied_to_samples)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    small_scale_loci_list = [igvf_client.Locus()] # List[Locus] | Filter by small_scale_loci_list (optional)
    large_scale_loci_list = 'large_scale_loci_list_example' # str | Filter by large_scale_loci_list (optional)
    small_scale_gene_list = ['small_scale_gene_list_example'] # List[str] | Filter by small_scale_gene_list (optional)
    large_scale_gene_list = 'large_scale_gene_list_example' # str | Filter by large_scale_gene_list (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    scope = 'scope_example' # str | Filter by scope (optional)
    selection_criteria = ['selection_criteria_example'] # List[str] | Filter by selection_criteria (optional)
    integrated_content_files = ['integrated_content_files_example'] # List[str] | Filter by integrated_content_files (optional)
    associated_phenotypes = ['associated_phenotypes_example'] # List[str] | Filter by associated_phenotypes (optional)
    orf_list = ['orf_list_example'] # List[str] | Filter by orf_list (optional)
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
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    applied_to_samples = ['applied_to_samples_example'] # List[str] | Filter by applied_to_samples (optional)

    try:
        # List items in the ConstructLibrarySet collection.
        api_response = await api_instance.construct_library_sets(query=query, limit=limit, sort=sort, small_scale_loci_list=small_scale_loci_list, large_scale_loci_list=large_scale_loci_list, small_scale_gene_list=small_scale_gene_list, large_scale_gene_list=large_scale_gene_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, sources=sources, lot_id=lot_id, product_id=product_id, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, file_set_type=file_set_type, scope=scope, selection_criteria=selection_criteria, integrated_content_files=integrated_content_files, associated_phenotypes=associated_phenotypes, orf_list=orf_list, exon=exon, tile=tile, guide_type=guide_type, tiling_modality=tiling_modality, average_guide_coverage=average_guide_coverage, lower_bound_guide_coverage=lower_bound_guide_coverage, upper_bound_guide_coverage=upper_bound_guide_coverage, average_insert_size=average_insert_size, lower_bound_insert_size=lower_bound_insert_size, upper_bound_insert_size=upper_bound_insert_size, targeton=targeton, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, applied_to_samples=applied_to_samples)
        print("The response of AsyncIgvfApi->construct_library_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->construct_library_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **large_scale_loci_list** | **str**| Filter by large_scale_loci_list | [optional] 
 **small_scale_gene_list** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list | [optional] 
 **large_scale_gene_list** | **str**| Filter by large_scale_gene_list | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **scope** | **str**| Filter by scope | [optional] 
 **selection_criteria** | [**List[str]**](List[str].md)| Filter by selection_criteria | [optional] 
 **integrated_content_files** | [**List[str]**](List[str].md)| Filter by integrated_content_files | [optional] 
 **associated_phenotypes** | [**List[str]**](List[str].md)| Filter by associated_phenotypes | [optional] 
 **orf_list** | [**List[str]**](List[str].md)| Filter by orf_list | [optional] 
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
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **applied_to_samples** | [**List[str]**](List[str].md)| Filter by applied_to_samples | [optional] 

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
> CrisprModificationResults crispr_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, cas=cas, fused_domain=fused_domain, tagged_protein=tagged_protein, cas_species=cas_species, id=id, summary=summary, biosamples_modified=biosamples_modified)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the CrisprModification collection.
        api_response = await api_instance.crispr_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, cas=cas, fused_domain=fused_domain, tagged_protein=tagged_protein, cas_species=cas_species, id=id, summary=summary, biosamples_modified=biosamples_modified)
        print("The response of AsyncIgvfApi->crispr_modifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->crispr_modifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> CuratedSetResults curated_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assemblies=assemblies, transcriptome_annotations=transcriptome_annotations)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
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
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    assemblies = ['assemblies_example'] # List[str] | Filter by assemblies (optional)
    transcriptome_annotations = ['transcriptome_annotations_example'] # List[str] | Filter by transcriptome_annotations (optional)

    try:
        # List items in the CuratedSet collection.
        api_response = await api_instance.curated_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, assemblies=assemblies, transcriptome_annotations=transcriptome_annotations)
        print("The response of AsyncIgvfApi->curated_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->curated_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **assemblies** | [**List[str]**](List[str].md)| Filter by assemblies | [optional] 
 **transcriptome_annotations** | [**List[str]**](List[str].md)| Filter by transcriptome_annotations | [optional] 

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
> DegronModificationResults degron_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, degron_system=degron_system, tagged_proteins=tagged_proteins, id=id, summary=summary, biosamples_modified=biosamples_modified)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the DegronModification collection.
        api_response = await api_instance.degron_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, degron_system=degron_system, tagged_proteins=tagged_proteins, id=id, summary=summary, biosamples_modified=biosamples_modified)
        print("The response of AsyncIgvfApi->degron_modifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->degron_modifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> DocumentResults documents(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, document_type=document_type, characterization_method=characterization_method, urls=urls, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    attachment = {'key': igvf_client.Attachment()} # Attachment | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    document_type = 'document_type_example' # str | Filter by document_type (optional)
    characterization_method = 'characterization_method_example' # str | Filter by characterization_method (optional)
    urls = ['urls_example'] # List[str] | Filter by urls (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the Document collection.
        api_response = await api_instance.documents(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, document_type=document_type, characterization_method=characterization_method, urls=urls, id=id, summary=summary)
        print("The response of AsyncIgvfApi->documents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->documents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **attachment** | [**Attachment**](Attachment.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **document_type** | **str**| Filter by document_type | [optional] 
 **characterization_method** | **str**| Filter by characterization_method | [optional] 
 **urls** | [**List[str]**](List[str].md)| Filter by urls | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    file_id = 'file_id_example' # str | The unique identifier for the file to download, i.e. @id (`/tabular-files/IGVFFI8092FZKL/`), accession (`IGVFFI8092FZKL`), or UUID (`fdbdc159-e5b9-40a8-b788-3f72c9886b03`).

    try:
        # Download file.
        api_response = await api_instance.download(file_id)
        print("The response of AsyncIgvfApi->download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->download: %s\n" % e)
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
> GeneResults genes(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, transcriptome_annotation=transcriptome_annotation, taxa=taxa, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, geneid=geneid, symbol=symbol, name=name, synonyms=synonyms, dbxrefs=dbxrefs, locations=locations, version_number=version_number, id=id, summary=summary, title=title, geneid_with_version=geneid_with_version)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the Gene collection.
        api_response = await api_instance.genes(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, transcriptome_annotation=transcriptome_annotation, taxa=taxa, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, geneid=geneid, symbol=symbol, name=name, synonyms=synonyms, dbxrefs=dbxrefs, locations=locations, version_number=version_number, id=id, summary=summary, title=title, geneid_with_version=geneid_with_version)
        print("The response of AsyncIgvfApi->genes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->genes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> GenomeBrowserAnnotationFileResults genome_browser_annotation_files(query=query, limit=limit, sort=sort, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    file_format_type = 'file_format_type_example' # str | Filter by file_format_type (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the GenomeBrowserAnnotationFile collection.
        api_response = await api_instance.genome_browser_annotation_files(query=query, limit=limit, sort=sort, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of AsyncIgvfApi->genome_browser_annotation_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->genome_browser_annotation_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **file_format_type** | **str**| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    resource_id = '/sequence-files/IGVFFI1165AJSO/' # str | The unique identifier for the resource i.e. @id (`/sequence-files/IGVFFI1165AJSO/`), accession (`IGVFFI1165AJSO`) or UUID (`fffcd64e-af02-4675-8953-7352459ee06a`).

    try:
        # Get item information
        api_response = await api_instance.get_by_id(resource_id)
        print("The response of AsyncIgvfApi->get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->get_by_id: %s\n" % e)
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
> HumanDonorResults human_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, phenotypic_features=phenotypic_features, virtual=virtual, related_donors=related_donors, ethnicities=ethnicities, human_donor_identifiers=human_donor_identifiers, id=id, summary=summary)

List items in the HumanDonor collection.

Collection endpoint that accepts various query parameters to filter, sort, and paginate HumanDonor items. Supports filtering on fields within HumanDonor items.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.human_donor_results import HumanDonorResults
from igvf_client.models.related_donor import RelatedDonor
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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    phenotypic_features = ['phenotypic_features_example'] # List[str] | Filter by phenotypic_features (optional)
    virtual = True # bool | Filter by virtual (optional)
    related_donors = [igvf_client.RelatedDonor()] # List[RelatedDonor] | Filter by related_donors (optional)
    ethnicities = ['ethnicities_example'] # List[str] | Filter by ethnicities (optional)
    human_donor_identifiers = ['human_donor_identifiers_example'] # List[str] | Filter by human_donor_identifiers (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the HumanDonor collection.
        api_response = await api_instance.human_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, phenotypic_features=phenotypic_features, virtual=virtual, related_donors=related_donors, ethnicities=ethnicities, human_donor_identifiers=human_donor_identifiers, id=id, summary=summary)
        print("The response of AsyncIgvfApi->human_donors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->human_donors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **phenotypic_features** | [**List[str]**](List[str].md)| Filter by phenotypic_features | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **related_donors** | [**List[RelatedDonor]**](List[RelatedDonor].md)| Filter by related_donors | [optional] 
 **ethnicities** | [**List[str]**](List[str].md)| Filter by ethnicities | [optional] 
 **human_donor_identifiers** | [**List[str]**](List[str].md)| Filter by human_donor_identifiers | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> ImageFileResults image_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the ImageFile collection.
        api_response = await api_instance.image_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of AsyncIgvfApi->image_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->image_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> ImageResults images(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, caption=caption, id=id, summary=summary, thumb_nail=thumb_nail, download_url=download_url)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    attachment = {'key': igvf_client.Attachment1()} # Attachment1 | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    caption = 'caption_example' # str | Filter by caption (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    thumb_nail = 'thumb_nail_example' # str | Filter by thumb_nail (optional)
    download_url = 'download_url_example' # str | Filter by download_url (optional)

    try:
        # List items in the Image collection.
        api_response = await api_instance.images(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, caption=caption, id=id, summary=summary, thumb_nail=thumb_nail, download_url=download_url)
        print("The response of AsyncIgvfApi->images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **attachment** | [**Attachment1**](Attachment1.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **caption** | **str**| Filter by caption | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **thumb_nail** | **str**| Filter by thumb_nail | [optional] 
 **download_url** | **str**| Filter by download_url | [optional] 

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
> InVitroSystemResults in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_treatments=cell_fate_change_treatments, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    disease_terms = ['disease_terms_example'] # List[str] | Filter by disease_terms (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    treatments = ['treatments_example'] # List[str] | Filter by treatments (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    modifications = ['modifications_example'] # List[str] | Filter by modifications (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = 'date_obtained_example' # str | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
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
    cell_fate_change_treatments = ['cell_fate_change_treatments_example'] # List[str] | Filter by cell_fate_change_treatments (optional)
    cell_fate_change_protocol = 'cell_fate_change_protocol_example' # str | Filter by cell_fate_change_protocol (optional)
    demultiplexed_from = 'demultiplexed_from_example' # str | Filter by demultiplexed_from (optional)
    passage_number = 56 # int | Filter by passage_number (optional)
    targeted_sample_term = 'targeted_sample_term_example' # str | Filter by targeted_sample_term (optional)
    growth_medium = 'growth_medium_example' # str | Filter by growth_medium (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    multiplexed_in = ['multiplexed_in_example'] # List[str] | Filter by multiplexed_in (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    demultiplexed_to = ['demultiplexed_to_example'] # List[str] | Filter by demultiplexed_to (optional)

    try:
        # List items in the InVitroSystem collection.
        api_response = await api_instance.in_vitro_systems(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, classifications=classifications, time_post_change=time_post_change, time_post_change_units=time_post_change_units, cell_fate_change_treatments=cell_fate_change_treatments, cell_fate_change_protocol=cell_fate_change_protocol, demultiplexed_from=demultiplexed_from, passage_number=passage_number, targeted_sample_term=targeted_sample_term, growth_medium=growth_medium, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, demultiplexed_to=demultiplexed_to)
        print("The response of AsyncIgvfApi->in_vitro_systems:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->in_vitro_systems: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **disease_terms** | [**List[str]**](List[str].md)| Filter by disease_terms | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **treatments** | [**List[str]**](List[str].md)| Filter by treatments | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **modifications** | [**List[str]**](List[str].md)| Filter by modifications | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **str**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
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
 **cell_fate_change_treatments** | [**List[str]**](List[str].md)| Filter by cell_fate_change_treatments | [optional] 
 **cell_fate_change_protocol** | **str**| Filter by cell_fate_change_protocol | [optional] 
 **demultiplexed_from** | **str**| Filter by demultiplexed_from | [optional] 
 **passage_number** | **int**| Filter by passage_number | [optional] 
 **targeted_sample_term** | **str**| Filter by targeted_sample_term | [optional] 
 **growth_medium** | **str**| Filter by growth_medium | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[str]**](List[str].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **demultiplexed_to** | [**List[str]**](List[str].md)| Filter by demultiplexed_to | [optional] 

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
> InstitutionalCertificateResults institutional_certificates(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, certificate_identifier=certificate_identifier, controlled_access=controlled_access, data_use_limitation=data_use_limitation, data_use_limitation_modifiers=data_use_limitation_modifiers, samples=samples, urls=urls, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the InstitutionalCertificate collection.
        api_response = await api_instance.institutional_certificates(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, certificate_identifier=certificate_identifier, controlled_access=controlled_access, data_use_limitation=data_use_limitation, data_use_limitation_modifiers=data_use_limitation_modifiers, samples=samples, urls=urls, id=id, summary=summary)
        print("The response of AsyncIgvfApi->institutional_certificates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->institutional_certificates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> LabResults labs(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, pi=pi, awards=awards, institute_label=institute_label, id=id, summary=summary, title=title)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    pi = 'pi_example' # str | Filter by pi (optional)
    awards = ['awards_example'] # List[str] | Filter by awards (optional)
    institute_label = 'institute_label_example' # str | Filter by institute_label (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    title = 'title_example' # str | Filter by title (optional)

    try:
        # List items in the Lab collection.
        api_response = await api_instance.labs(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, pi=pi, awards=awards, institute_label=institute_label, id=id, summary=summary, title=title)
        print("The response of AsyncIgvfApi->labs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->labs: %s\n" % e)
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **pi** | **str**| Filter by pi | [optional] 
 **awards** | [**List[str]**](List[str].md)| Filter by awards | [optional] 
 **institute_label** | **str**| Filter by institute_label | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **title** | **str**| Filter by title | [optional] 

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
> MatrixFileResults matrix_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, dimension1=dimension1, dimension2=dimension2, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    reference_files = ['reference_files_example'] # List[str] | Filter by reference_files (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the MatrixFile collection.
        api_response = await api_instance.matrix_files(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, dimension1=dimension1, dimension2=dimension2, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary)
        print("The response of AsyncIgvfApi->matrix_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->matrix_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> MeasurementSetResults measurement_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, assay_term=assay_term, library_construction_platform=library_construction_platform, protocols=protocols, preferred_assay_title=preferred_assay_title, multiome_size=multiome_size, control_file_sets=control_file_sets, sequencing_library_types=sequencing_library_types, auxiliary_sets=auxiliary_sets, external_image_url=external_image_url, targeted_genes=targeted_genes, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, related_multiome_datasets=related_multiome_datasets)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    assay_term = 'assay_term_example' # str | Filter by assay_term (optional)
    library_construction_platform = 'library_construction_platform_example' # str | Filter by library_construction_platform (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    preferred_assay_title = 'preferred_assay_title_example' # str | Filter by preferred_assay_title (optional)
    multiome_size = 56 # int | Filter by multiome_size (optional)
    control_file_sets = ['control_file_sets_example'] # List[str] | Filter by control_file_sets (optional)
    sequencing_library_types = ['sequencing_library_types_example'] # List[str] | Filter by sequencing_library_types (optional)
    auxiliary_sets = ['auxiliary_sets_example'] # List[str] | Filter by auxiliary_sets (optional)
    external_image_url = 'external_image_url_example' # str | Filter by external_image_url (optional)
    targeted_genes = ['targeted_genes_example'] # List[str] | Filter by targeted_genes (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)
    related_multiome_datasets = ['related_multiome_datasets_example'] # List[str] | Filter by related_multiome_datasets (optional)

    try:
        # List items in the MeasurementSet collection.
        api_response = await api_instance.measurement_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, assay_term=assay_term, library_construction_platform=library_construction_platform, protocols=protocols, preferred_assay_title=preferred_assay_title, multiome_size=multiome_size, control_file_sets=control_file_sets, sequencing_library_types=sequencing_library_types, auxiliary_sets=auxiliary_sets, external_image_url=external_image_url, targeted_genes=targeted_genes, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, related_multiome_datasets=related_multiome_datasets)
        print("The response of AsyncIgvfApi->measurement_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->measurement_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **assay_term** | **str**| Filter by assay_term | [optional] 
 **library_construction_platform** | **str**| Filter by library_construction_platform | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **preferred_assay_title** | **str**| Filter by preferred_assay_title | [optional] 
 **multiome_size** | **int**| Filter by multiome_size | [optional] 
 **control_file_sets** | [**List[str]**](List[str].md)| Filter by control_file_sets | [optional] 
 **sequencing_library_types** | [**List[str]**](List[str].md)| Filter by sequencing_library_types | [optional] 
 **auxiliary_sets** | [**List[str]**](List[str].md)| Filter by auxiliary_sets | [optional] 
 **external_image_url** | **str**| Filter by external_image_url | [optional] 
 **targeted_genes** | [**List[str]**](List[str].md)| Filter by targeted_genes | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 
 **related_multiome_datasets** | [**List[str]**](List[str].md)| Filter by related_multiome_datasets | [optional] 

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
> ModelFileResults model_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the ModelFile collection.
        api_response = await api_instance.model_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of AsyncIgvfApi->model_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->model_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> ModelSetResults model_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, model_name=model_name, model_version=model_version, prediction_objects=prediction_objects, model_zoo_location=model_zoo_location, software_version=software_version, assessed_genes=assessed_genes, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    input_file_sets = ['input_file_sets_example'] # List[str] | Filter by input_file_sets (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
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
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    model_name = 'model_name_example' # str | Filter by model_name (optional)
    model_version = 'model_version_example' # str | Filter by model_version (optional)
    prediction_objects = ['prediction_objects_example'] # List[str] | Filter by prediction_objects (optional)
    model_zoo_location = 'model_zoo_location_example' # str | Filter by model_zoo_location (optional)
    software_version = 'software_version_example' # str | Filter by software_version (optional)
    assessed_genes = ['assessed_genes_example'] # List[str] | Filter by assessed_genes (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)

    try:
        # List items in the ModelSet collection.
        api_response = await api_instance.model_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, model_name=model_name, model_version=model_version, prediction_objects=prediction_objects, model_zoo_location=model_zoo_location, software_version=software_version, assessed_genes=assessed_genes, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for)
        print("The response of AsyncIgvfApi->model_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->model_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **input_file_sets** | [**List[str]**](List[str].md)| Filter by input_file_sets | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **model_name** | **str**| Filter by model_name | [optional] 
 **model_version** | **str**| Filter by model_version | [optional] 
 **prediction_objects** | [**List[str]**](List[str].md)| Filter by prediction_objects | [optional] 
 **model_zoo_location** | **str**| Filter by model_zoo_location | [optional] 
 **software_version** | **str**| Filter by software_version | [optional] 
 **assessed_genes** | [**List[str]**](List[str].md)| Filter by assessed_genes | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 

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
> MultiplexedSampleResults multiplexed_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, multiplexed_samples=multiplexed_samples, cellular_sub_pool=cellular_sub_pool, barcode_sample_map=barcode_sample_map, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sample_terms=sample_terms, disease_terms=disease_terms, treatments=treatments, modifications=modifications, donors=donors, biomarkers=biomarkers, sources=sources, classifications=classifications)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = 'date_obtained_example' # str | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
    sorted_from_detail = 'sorted_from_detail_example' # str | Filter by sorted_from_detail (optional)
    virtual = True # bool | Filter by virtual (optional)
    construct_library_sets = ['construct_library_sets_example'] # List[str] | Filter by construct_library_sets (optional)
    moi = 3.4 # float | Filter by moi (optional)
    nucleic_acid_delivery = 'nucleic_acid_delivery_example' # str | Filter by nucleic_acid_delivery (optional)
    time_post_library_delivery = 3.4 # float | Filter by time_post_library_delivery (optional)
    time_post_library_delivery_units = 'time_post_library_delivery_units_example' # str | Filter by time_post_library_delivery_units (optional)
    protocols = ['protocols_example'] # List[str] | Filter by protocols (optional)
    multiplexed_samples = ['multiplexed_samples_example'] # List[str] | Filter by multiplexed_samples (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    barcode_sample_map = 'barcode_sample_map_example' # str | Filter by barcode_sample_map (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    multiplexed_in = ['multiplexed_in_example'] # List[str] | Filter by multiplexed_in (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    disease_terms = ['disease_terms_example'] # List[str] | Filter by disease_terms (optional)
    treatments = ['treatments_example'] # List[str] | Filter by treatments (optional)
    modifications = ['modifications_example'] # List[str] | Filter by modifications (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)

    try:
        # List items in the MultiplexedSample collection.
        api_response = await api_instance.multiplexed_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, multiplexed_samples=multiplexed_samples, cellular_sub_pool=cellular_sub_pool, barcode_sample_map=barcode_sample_map, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sample_terms=sample_terms, disease_terms=disease_terms, treatments=treatments, modifications=modifications, donors=donors, biomarkers=biomarkers, sources=sources, classifications=classifications)
        print("The response of AsyncIgvfApi->multiplexed_samples:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->multiplexed_samples: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **str**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
 **sorted_from_detail** | **str**| Filter by sorted_from_detail | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **construct_library_sets** | [**List[str]**](List[str].md)| Filter by construct_library_sets | [optional] 
 **moi** | **float**| Filter by moi | [optional] 
 **nucleic_acid_delivery** | **str**| Filter by nucleic_acid_delivery | [optional] 
 **time_post_library_delivery** | **float**| Filter by time_post_library_delivery | [optional] 
 **time_post_library_delivery_units** | **str**| Filter by time_post_library_delivery_units | [optional] 
 **protocols** | [**List[str]**](List[str].md)| Filter by protocols | [optional] 
 **multiplexed_samples** | [**List[str]**](List[str].md)| Filter by multiplexed_samples | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **barcode_sample_map** | **str**| Filter by barcode_sample_map | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[str]**](List[str].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **disease_terms** | [**List[str]**](List[str].md)| Filter by disease_terms | [optional] 
 **treatments** | [**List[str]**](List[str].md)| Filter by treatments | [optional] 
 **modifications** | [**List[str]**](List[str].md)| Filter by modifications | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 

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
> OpenReadingFrameResults open_reading_frames(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lab=lab, award=award, orf_id=orf_id, gene=gene, protein_id=protein_id, dbxrefs=dbxrefs, pct_identical_protein=pct_identical_protein, pct_coverage_protein=pct_coverage_protein, pct_coverage_orf=pct_coverage_orf, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    orf_id = 'orf_id_example' # str | Filter by orf_id (optional)
    gene = ['gene_example'] # List[str] | Filter by gene (optional)
    protein_id = 'protein_id_example' # str | Filter by protein_id (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    pct_identical_protein = 3.4 # float | Filter by pct_identical_protein (optional)
    pct_coverage_protein = 3.4 # float | Filter by pct_coverage_protein (optional)
    pct_coverage_orf = 3.4 # float | Filter by pct_coverage_orf (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the OpenReadingFrame collection.
        api_response = await api_instance.open_reading_frames(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lab=lab, award=award, orf_id=orf_id, gene=gene, protein_id=protein_id, dbxrefs=dbxrefs, pct_identical_protein=pct_identical_protein, pct_coverage_protein=pct_coverage_protein, pct_coverage_orf=pct_coverage_orf, id=id, summary=summary)
        print("The response of AsyncIgvfApi->open_reading_frames:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->open_reading_frames: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **orf_id** | **str**| Filter by orf_id | [optional] 
 **gene** | [**List[str]**](List[str].md)| Filter by gene | [optional] 
 **protein_id** | **str**| Filter by protein_id | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **pct_identical_protein** | **float**| Filter by pct_identical_protein | [optional] 
 **pct_coverage_protein** | **float**| Filter by pct_coverage_protein | [optional] 
 **pct_coverage_orf** | **float**| Filter by pct_coverage_orf | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> PageResults pages(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, parent=parent, name=name, title=title, layout=layout, id=id, summary=summary, canonical_uri=canonical_uri)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    parent = 'parent_example' # str | Filter by parent (optional)
    name = 'name_example' # str | Filter by name (optional)
    title = 'title_example' # str | Filter by title (optional)
    layout = {'key': igvf_client.PageLayout()} # PageLayout | Filter by layout (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    canonical_uri = 'canonical_uri_example' # str | Filter by canonical_uri (optional)

    try:
        # List items in the Page collection.
        api_response = await api_instance.pages(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, parent=parent, name=name, title=title, layout=layout, id=id, summary=summary, canonical_uri=canonical_uri)
        print("The response of AsyncIgvfApi->pages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->pages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **parent** | **str**| Filter by parent | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **layout** | [**PageLayout**](PageLayout.md)| Filter by layout | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **canonical_uri** | **str**| Filter by canonical_uri | [optional] 

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
> PhenotypeTermResults phenotype_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the PhenotypeTerm collection.
        api_response = await api_instance.phenotype_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology)
        print("The response of AsyncIgvfApi->phenotype_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->phenotype_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> PhenotypicFeatureResults phenotypic_features(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, feature=feature, quantity=quantity, quantity_units=quantity_units, observation_date=observation_date, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    feature = 'feature_example' # str | Filter by feature (optional)
    quantity = 3.4 # float | Filter by quantity (optional)
    quantity_units = 'quantity_units_example' # str | Filter by quantity_units (optional)
    observation_date = 'observation_date_example' # str | Filter by observation_date (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the PhenotypicFeature collection.
        api_response = await api_instance.phenotypic_features(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, feature=feature, quantity=quantity, quantity_units=quantity_units, observation_date=observation_date, id=id, summary=summary)
        print("The response of AsyncIgvfApi->phenotypic_features:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->phenotypic_features: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **feature** | **str**| Filter by feature | [optional] 
 **quantity** | **float**| Filter by quantity | [optional] 
 **quantity_units** | **str**| Filter by quantity_units | [optional] 
 **observation_date** | **str**| Filter by observation_date | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> PlatformTermResults platform_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, company=company, sequencing_kits=sequencing_kits, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the PlatformTerm collection.
        api_response = await api_instance.platform_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, company=company, sequencing_kits=sequencing_kits, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology)
        print("The response of AsyncIgvfApi->platform_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->platform_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> PredictionSetResults prediction_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, small_scale_loci_list=small_scale_loci_list, large_scale_loci_list=large_scale_loci_list, small_scale_gene_list=small_scale_gene_list, large_scale_gene_list=large_scale_gene_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, scope=scope, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    input_file_sets = ['input_file_sets_example'] # List[str] | Filter by input_file_sets (optional)
    small_scale_loci_list = [igvf_client.Locus()] # List[Locus] | Filter by small_scale_loci_list (optional)
    large_scale_loci_list = 'large_scale_loci_list_example' # str | Filter by large_scale_loci_list (optional)
    small_scale_gene_list = ['small_scale_gene_list_example'] # List[str] | Filter by small_scale_gene_list (optional)
    large_scale_gene_list = 'large_scale_gene_list_example' # str | Filter by large_scale_gene_list (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
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
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    samples = ['samples_example'] # List[str] | Filter by samples (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    file_set_type = 'file_set_type_example' # str | Filter by file_set_type (optional)
    scope = 'scope_example' # str | Filter by scope (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    files = ['files_example'] # List[str] | Filter by files (optional)
    control_for = ['control_for_example'] # List[str] | Filter by control_for (optional)
    submitted_files_timestamp = 'submitted_files_timestamp_example' # str | Filter by submitted_files_timestamp (optional)
    input_file_set_for = ['input_file_set_for_example'] # List[str] | Filter by input_file_set_for (optional)

    try:
        # List items in the PredictionSet collection.
        api_response = await api_instance.prediction_sets(query=query, limit=limit, sort=sort, input_file_sets=input_file_sets, small_scale_loci_list=small_scale_loci_list, large_scale_loci_list=large_scale_loci_list, small_scale_gene_list=small_scale_gene_list, large_scale_gene_list=large_scale_gene_list, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, scope=scope, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for)
        print("The response of AsyncIgvfApi->prediction_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->prediction_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **input_file_sets** | [**List[str]**](List[str].md)| Filter by input_file_sets | [optional] 
 **small_scale_loci_list** | [**List[Locus]**](List[Locus].md)| Filter by small_scale_loci_list | [optional] 
 **large_scale_loci_list** | **str**| Filter by large_scale_loci_list | [optional] 
 **small_scale_gene_list** | [**List[str]**](List[str].md)| Filter by small_scale_gene_list | [optional] 
 **large_scale_gene_list** | **str**| Filter by large_scale_gene_list | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **samples** | [**List[str]**](List[str].md)| Filter by samples | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **file_set_type** | **str**| Filter by file_set_type | [optional] 
 **scope** | **str**| Filter by scope | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **files** | [**List[str]**](List[str].md)| Filter by files | [optional] 
 **control_for** | [**List[str]**](List[str].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **str**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[str]**](List[str].md)| Filter by input_file_set_for | [optional] 

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
> PrimaryCellResults primary_cells(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, passage_number=passage_number, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    disease_terms = ['disease_terms_example'] # List[str] | Filter by disease_terms (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    treatments = ['treatments_example'] # List[str] | Filter by treatments (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    modifications = ['modifications_example'] # List[str] | Filter by modifications (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = 'date_obtained_example' # str | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
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
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    multiplexed_in = ['multiplexed_in_example'] # List[str] | Filter by multiplexed_in (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)

    try:
        # List items in the PrimaryCell collection.
        api_response = await api_instance.primary_cells(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, passage_number=passage_number, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications)
        print("The response of AsyncIgvfApi->primary_cells:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->primary_cells: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **disease_terms** | [**List[str]**](List[str].md)| Filter by disease_terms | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **treatments** | [**List[str]**](List[str].md)| Filter by treatments | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **modifications** | [**List[str]**](List[str].md)| Filter by modifications | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **str**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
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
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[str]**](List[str].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 

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
> PublicationResults publications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publication_identifiers=publication_identifiers, status=status, lab=lab, award=award, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, abstract=abstract, authors=authors, date_published=date_published, date_revised=date_revised, issue=issue, page=page, volume=volume, journal=journal, published_by=published_by, id=id, summary=summary, publication_year=publication_year, samples=samples, donors=donors, file_sets=file_sets, workflows=workflows, software=software, software_versions=software_versions)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    status = 'status_example' # str | Filter by status (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    attachment = {'key': igvf_client.Attachment()} # Attachment | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    title = 'title_example' # str | Filter by title (optional)
    abstract = 'abstract_example' # str | Filter by abstract (optional)
    authors = 'authors_example' # str | Filter by authors (optional)
    date_published = 'date_published_example' # str | Filter by date_published (optional)
    date_revised = 'date_revised_example' # str | Filter by date_revised (optional)
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

    try:
        # List items in the Publication collection.
        api_response = await api_instance.publications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publication_identifiers=publication_identifiers, status=status, lab=lab, award=award, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, abstract=abstract, authors=authors, date_published=date_published, date_revised=date_revised, issue=issue, page=page, volume=volume, journal=journal, published_by=published_by, id=id, summary=summary, publication_year=publication_year, samples=samples, donors=donors, file_sets=file_sets, workflows=workflows, software=software, software_versions=software_versions)
        print("The response of AsyncIgvfApi->publications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->publications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **attachment** | [**Attachment**](Attachment.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **abstract** | **str**| Filter by abstract | [optional] 
 **authors** | **str**| Filter by authors | [optional] 
 **date_published** | **str**| Filter by date_published | [optional] 
 **date_revised** | **str**| Filter by date_revised | [optional] 
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
> ReferenceFileResults reference_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, source_url=source_url, sources=sources, external=external, external_id=external_id, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    file_format_type = 'file_format_type_example' # str | Filter by file_format_type (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the ReferenceFile collection.
        api_response = await api_instance.reference_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, source_url=source_url, sources=sources, external=external, external_id=external_id, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of AsyncIgvfApi->reference_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->reference_files: %s\n" % e)
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
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **file_format_type** | **str**| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of items to return. Can be repeated for multiple types.
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)
    include_fields = ['include_fields_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)
    frame = 'frame_example' # str | Object with links, or object with some links embedded. (optional)

    try:
        # Generate a report based on search query. All results are returned.
        api_response = await api_instance.report(type, query=query, field_filters=field_filters, include_fields=include_fields, frame=frame)
        print("The response of AsyncIgvfApi->report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->report: %s\n" % e)
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
> RodentDonorResults rodent_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, phenotypic_features=phenotypic_features, virtual=virtual, strain_background=strain_background, strain=strain, genotype=genotype, individual_rodent=individual_rodent, rodent_identifier=rodent_identifier, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    phenotypic_features = ['phenotypic_features_example'] # List[str] | Filter by phenotypic_features (optional)
    virtual = True # bool | Filter by virtual (optional)
    strain_background = 'strain_background_example' # str | Filter by strain_background (optional)
    strain = 'strain_example' # str | Filter by strain (optional)
    genotype = 'genotype_example' # str | Filter by genotype (optional)
    individual_rodent = True # bool | Filter by individual_rodent (optional)
    rodent_identifier = 'rodent_identifier_example' # str | Filter by rodent_identifier (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the RodentDonor collection.
        api_response = await api_instance.rodent_donors(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, sex=sex, phenotypic_features=phenotypic_features, virtual=virtual, strain_background=strain_background, strain=strain, genotype=genotype, individual_rodent=individual_rodent, rodent_identifier=rodent_identifier, id=id, summary=summary)
        print("The response of AsyncIgvfApi->rodent_donors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->rodent_donors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **phenotypic_features** | [**List[str]**](List[str].md)| Filter by phenotypic_features | [optional] 
 **virtual** | **bool**| Filter by virtual | [optional] 
 **strain_background** | **str**| Filter by strain_background | [optional] 
 **strain** | **str**| Filter by strain | [optional] 
 **genotype** | **str**| Filter by genotype | [optional] 
 **individual_rodent** | **bool**| Filter by individual_rodent | [optional] 
 **rodent_identifier** | **str**| Filter by rodent_identifier | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> SampleTermResults sample_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, dbxrefs=dbxrefs, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, organ_slims=organ_slims, cell_slims=cell_slims, developmental_slims=developmental_slims, system_slims=system_slims)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the SampleTerm collection.
        api_response = await api_instance.sample_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, dbxrefs=dbxrefs, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, organ_slims=organ_slims, cell_slims=cell_slims, developmental_slims=developmental_slims, system_slims=system_slims)
        print("The response of AsyncIgvfApi->sample_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->sample_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    item_type = igvf_client.ItemType() # ItemType | The name of the item type

    try:
        # Retrieve JSON schema for item type
        api_response = await api_instance.schema_for_item_type(item_type)
        print("The response of AsyncIgvfApi->schema_for_item_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->schema_for_item_type: %s\n" % e)
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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)

    try:
        # Retrieve JSON schemas for all item types
        api_response = await api_instance.schemas()
        print("The response of AsyncIgvfApi->schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->schemas: %s\n" % e)
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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types. (optional)
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    include_fields = ['include_fields_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)

    try:
        # Search for items in the IGVF Project
        api_response = await api_instance.search(type=type, query=query, field_filters=field_filters, limit=limit, sort=sort, include_fields=include_fields)
        print("The response of AsyncIgvfApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->search: %s\n" % e)
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
> SequenceFileResults sequence_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, flowcell_id=flowcell_id, lane=lane, read_count=read_count, minimum_read_length=minimum_read_length, maximum_read_length=maximum_read_length, mean_read_length=mean_read_length, sequencing_platform=sequencing_platform, sequencing_kit=sequencing_kit, sequencing_run=sequencing_run, illumina_read_type=illumina_read_type, index=index, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, seqspecs=seqspecs)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the SequenceFile collection.
        api_response = await api_instance.sequence_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, flowcell_id=flowcell_id, lane=lane, read_count=read_count, minimum_read_length=minimum_read_length, maximum_read_length=maximum_read_length, mean_read_length=mean_read_length, sequencing_platform=sequencing_platform, sequencing_kit=sequencing_kit, sequencing_run=sequencing_run, illumina_read_type=illumina_read_type, index=index, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, seqspecs=seqspecs)
        print("The response of AsyncIgvfApi->sequence_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->sequence_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> SignalFileResults signal_files(query=query, limit=limit, sort=sort, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, strand_specificity=strand_specificity, filtered=filtered, normalized=normalized, start_view_position=start_view_position, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    reference_files = ['reference_files_example'] # List[str] | Filter by reference_files (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the SignalFile collection.
        api_response = await api_instance.signal_files(query=query, limit=limit, sort=sort, transcriptome_annotation=transcriptome_annotation, assembly=assembly, release_timestamp=release_timestamp, reference_files=reference_files, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, strand_specificity=strand_specificity, filtered=filtered, normalized=normalized, start_view_position=start_view_position, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials, content_summary=content_summary)
        print("The response of AsyncIgvfApi->signal_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->signal_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **assembly** | **str**| Filter by assembly | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **reference_files** | [**List[str]**](List[str].md)| Filter by reference_files | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> SoftwareResults software(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, title=title, source_url=source_url, used_by=used_by, id=id, summary=summary, versions=versions)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    title = 'title_example' # str | Filter by title (optional)
    source_url = 'source_url_example' # str | Filter by source_url (optional)
    used_by = ['used_by_example'] # List[str] | Filter by used_by (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    versions = ['versions_example'] # List[str] | Filter by versions (optional)

    try:
        # List items in the Software collection.
        api_response = await api_instance.software(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, title=title, source_url=source_url, used_by=used_by, id=id, summary=summary, versions=versions)
        print("The response of AsyncIgvfApi->software:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->software: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **source_url** | **str**| Filter by source_url | [optional] 
 **used_by** | [**List[str]**](List[str].md)| Filter by used_by | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **versions** | [**List[str]**](List[str].md)| Filter by versions | [optional] 

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
> SoftwareVersionResults software_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, software=software, version=version, download_id=download_id, downloaded_url=downloaded_url, id=id, summary=summary, name=name)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    software = 'software_example' # str | Filter by software (optional)
    version = 'version_example' # str | Filter by version (optional)
    download_id = 'download_id_example' # str | Filter by download_id (optional)
    downloaded_url = 'downloaded_url_example' # str | Filter by downloaded_url (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    name = 'name_example' # str | Filter by name (optional)

    try:
        # List items in the SoftwareVersion collection.
        api_response = await api_instance.software_versions(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, lab=lab, award=award, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, software=software, version=version, download_id=download_id, downloaded_url=downloaded_url, id=id, summary=summary, name=name)
        print("The response of AsyncIgvfApi->software_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->software_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **software** | **str**| Filter by software | [optional] 
 **version** | **str**| Filter by version | [optional] 
 **download_id** | **str**| Filter by download_id | [optional] 
 **downloaded_url** | **str**| Filter by downloaded_url | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **name** | **str**| Filter by name | [optional] 

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
> SourceResults sources(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, name=name, id=id, summary=summary)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    title = 'title_example' # str | Filter by title (optional)
    name = 'name_example' # str | Filter by name (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)

    try:
        # List items in the Source collection.
        api_response = await api_instance.sources(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, name=name, id=id, summary=summary)
        print("The response of AsyncIgvfApi->sources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->sources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **title** | **str**| Filter by title | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 

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
> TabularFileResults tabular_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    assembly = 'assembly_example' # str | Filter by assembly (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    file_format_type = 'file_format_type_example' # str | Filter by file_format_type (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the TabularFile collection.
        api_response = await api_instance.tabular_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, assembly=assembly, release_timestamp=release_timestamp, file_format_type=file_format_type, transcriptome_annotation=transcriptome_annotation, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of AsyncIgvfApi->tabular_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->tabular_files: %s\n" % e)
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
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **file_format_type** | **str**| Filter by file_format_type | [optional] 
 **transcriptome_annotation** | **str**| Filter by transcriptome_annotation | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> TechnicalSampleResults technical_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, sample_material=sample_material, taxa=taxa, sample_terms=sample_terms, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, classifications=classifications)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = 'date_obtained_example' # str | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
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
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    multiplexed_in = ['multiplexed_in_example'] # List[str] | Filter by multiplexed_in (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)

    try:
        # List items in the TechnicalSample collection.
        api_response = await api_instance.technical_samples(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, sample_material=sample_material, taxa=taxa, sample_terms=sample_terms, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, classifications=classifications)
        print("The response of AsyncIgvfApi->technical_samples:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->technical_samples: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **str**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
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
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[str]**](List[str].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 

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
> TissueResults tissues(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, pmi=pmi, pmi_units=pmi_units, ccf_id=ccf_id, preservation_method=preservation_method, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    disease_terms = ['disease_terms_example'] # List[str] | Filter by disease_terms (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    treatments = ['treatments_example'] # List[str] | Filter by treatments (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    modifications = ['modifications_example'] # List[str] | Filter by modifications (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = 'date_obtained_example' # str | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
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
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    multiplexed_in = ['multiplexed_in_example'] # List[str] | Filter by multiplexed_in (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)

    try:
        # List items in the Tissue collection.
        api_response = await api_instance.tissues(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, taxa=taxa, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, pmi=pmi, pmi_units=pmi_units, ccf_id=ccf_id, preservation_method=preservation_method, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications)
        print("The response of AsyncIgvfApi->tissues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->tissues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **disease_terms** | [**List[str]**](List[str].md)| Filter by disease_terms | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **treatments** | [**List[str]**](List[str].md)| Filter by treatments | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **modifications** | [**List[str]**](List[str].md)| Filter by modifications | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **str**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
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
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[str]**](List[str].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 

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
> TreatmentResults treatments(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, amount=amount, amount_units=amount_units, duration=duration, duration_units=duration_units, p_h=p_h, purpose=purpose, post_treatment_time=post_treatment_time, post_treatment_time_units=post_treatment_time_units, temperature=temperature, temperature_units=temperature_units, treatment_type=treatment_type, treatment_term_id=treatment_term_id, treatment_term_name=treatment_term_name, depletion=depletion, id=id, summary=summary, biosamples_treated=biosamples_treated)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the Treatment collection.
        api_response = await api_instance.treatments(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, amount=amount, amount_units=amount_units, duration=duration, duration_units=duration_units, p_h=p_h, purpose=purpose, post_treatment_time=post_treatment_time, post_treatment_time_units=post_treatment_time_units, temperature=temperature, temperature_units=temperature_units, treatment_type=treatment_type, treatment_term_id=treatment_term_id, treatment_term_name=treatment_term_name, depletion=depletion, id=id, summary=summary, biosamples_treated=biosamples_treated)
        print("The response of AsyncIgvfApi->treatments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->treatments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> UserResults users(query=query, limit=limit, sort=sort, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, email=email, first_name=first_name, last_name=last_name, lab=lab, submits_for=submits_for, groups=groups, viewing_groups=viewing_groups, job_title=job_title, id=id, summary=summary, title=title)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the User collection.
        api_response = await api_instance.users(query=query, limit=limit, sort=sort, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, email=email, first_name=first_name, last_name=last_name, lab=lab, submits_for=submits_for, groups=groups, viewing_groups=viewing_groups, job_title=job_title, id=id, summary=summary, title=title)
        print("The response of AsyncIgvfApi->users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->users: %s\n" % e)
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
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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
> WholeOrganismResults whole_organisms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    url = 'url_example' # str | Filter by url (optional)
    sources = ['sources_example'] # List[str] | Filter by sources (optional)
    lot_id = 'lot_id_example' # str | Filter by lot_id (optional)
    product_id = 'product_id_example' # str | Filter by product_id (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    lower_bound_age = 3.4 # float | Filter by lower_bound_age (optional)
    upper_bound_age = 3.4 # float | Filter by upper_bound_age (optional)
    age_units = 'age_units_example' # str | Filter by age_units (optional)
    sample_terms = ['sample_terms_example'] # List[str] | Filter by sample_terms (optional)
    disease_terms = ['disease_terms_example'] # List[str] | Filter by disease_terms (optional)
    pooled_from = ['pooled_from_example'] # List[str] | Filter by pooled_from (optional)
    part_of = 'part_of_example' # str | Filter by part_of (optional)
    originated_from = 'originated_from_example' # str | Filter by originated_from (optional)
    treatments = ['treatments_example'] # List[str] | Filter by treatments (optional)
    donors = ['donors_example'] # List[str] | Filter by donors (optional)
    biomarkers = ['biomarkers_example'] # List[str] | Filter by biomarkers (optional)
    embryonic = True # bool | Filter by embryonic (optional)
    modifications = ['modifications_example'] # List[str] | Filter by modifications (optional)
    cellular_sub_pool = 'cellular_sub_pool_example' # str | Filter by cellular_sub_pool (optional)
    starting_amount = 3.4 # float | Filter by starting_amount (optional)
    starting_amount_units = 'starting_amount_units_example' # str | Filter by starting_amount_units (optional)
    dbxrefs = ['dbxrefs_example'] # List[str] | Filter by dbxrefs (optional)
    date_obtained = 'date_obtained_example' # str | Filter by date_obtained (optional)
    sorted_from = 'sorted_from_example' # str | Filter by sorted_from (optional)
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
    file_sets = ['file_sets_example'] # List[str] | Filter by file_sets (optional)
    multiplexed_in = ['multiplexed_in_example'] # List[str] | Filter by multiplexed_in (optional)
    sorted_fractions = ['sorted_fractions_example'] # List[str] | Filter by sorted_fractions (optional)
    origin_of = ['origin_of_example'] # List[str] | Filter by origin_of (optional)
    institutional_certificates = ['institutional_certificates_example'] # List[str] | Filter by institutional_certificates (optional)
    sex = 'sex_example' # str | Filter by sex (optional)
    age = 'age_example' # str | Filter by age (optional)
    upper_bound_age_in_hours = 3.4 # float | Filter by upper_bound_age_in_hours (optional)
    lower_bound_age_in_hours = 3.4 # float | Filter by lower_bound_age_in_hours (optional)
    parts = ['parts_example'] # List[str] | Filter by parts (optional)
    pooled_in = ['pooled_in_example'] # List[str] | Filter by pooled_in (optional)
    classifications = ['classifications_example'] # List[str] | Filter by classifications (optional)

    try:
        # List items in the WholeOrganism collection.
        api_response = await api_instance.whole_organisms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, taxa=taxa, publications=publications, publication_identifiers=publication_identifiers, url=url, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, lower_bound_age=lower_bound_age, upper_bound_age=upper_bound_age, age_units=age_units, sample_terms=sample_terms, disease_terms=disease_terms, pooled_from=pooled_from, part_of=part_of, originated_from=originated_from, treatments=treatments, donors=donors, biomarkers=biomarkers, embryonic=embryonic, modifications=modifications, cellular_sub_pool=cellular_sub_pool, starting_amount=starting_amount, starting_amount_units=starting_amount_units, dbxrefs=dbxrefs, date_obtained=date_obtained, sorted_from=sorted_from, sorted_from_detail=sorted_from_detail, virtual=virtual, construct_library_sets=construct_library_sets, moi=moi, nucleic_acid_delivery=nucleic_acid_delivery, time_post_library_delivery=time_post_library_delivery, time_post_library_delivery_units=time_post_library_delivery_units, protocols=protocols, id=id, summary=summary, file_sets=file_sets, multiplexed_in=multiplexed_in, sorted_fractions=sorted_fractions, origin_of=origin_of, institutional_certificates=institutional_certificates, sex=sex, age=age, upper_bound_age_in_hours=upper_bound_age_in_hours, lower_bound_age_in_hours=lower_bound_age_in_hours, parts=parts, pooled_in=pooled_in, classifications=classifications)
        print("The response of AsyncIgvfApi->whole_organisms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->whole_organisms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **taxa** | **str**| Filter by taxa | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **sources** | [**List[str]**](List[str].md)| Filter by sources | [optional] 
 **lot_id** | **str**| Filter by lot_id | [optional] 
 **product_id** | **str**| Filter by product_id | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **lower_bound_age** | **float**| Filter by lower_bound_age | [optional] 
 **upper_bound_age** | **float**| Filter by upper_bound_age | [optional] 
 **age_units** | **str**| Filter by age_units | [optional] 
 **sample_terms** | [**List[str]**](List[str].md)| Filter by sample_terms | [optional] 
 **disease_terms** | [**List[str]**](List[str].md)| Filter by disease_terms | [optional] 
 **pooled_from** | [**List[str]**](List[str].md)| Filter by pooled_from | [optional] 
 **part_of** | **str**| Filter by part_of | [optional] 
 **originated_from** | **str**| Filter by originated_from | [optional] 
 **treatments** | [**List[str]**](List[str].md)| Filter by treatments | [optional] 
 **donors** | [**List[str]**](List[str].md)| Filter by donors | [optional] 
 **biomarkers** | [**List[str]**](List[str].md)| Filter by biomarkers | [optional] 
 **embryonic** | **bool**| Filter by embryonic | [optional] 
 **modifications** | [**List[str]**](List[str].md)| Filter by modifications | [optional] 
 **cellular_sub_pool** | **str**| Filter by cellular_sub_pool | [optional] 
 **starting_amount** | **float**| Filter by starting_amount | [optional] 
 **starting_amount_units** | **str**| Filter by starting_amount_units | [optional] 
 **dbxrefs** | [**List[str]**](List[str].md)| Filter by dbxrefs | [optional] 
 **date_obtained** | **str**| Filter by date_obtained | [optional] 
 **sorted_from** | **str**| Filter by sorted_from | [optional] 
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
 **file_sets** | [**List[str]**](List[str].md)| Filter by file_sets | [optional] 
 **multiplexed_in** | [**List[str]**](List[str].md)| Filter by multiplexed_in | [optional] 
 **sorted_fractions** | [**List[str]**](List[str].md)| Filter by sorted_fractions | [optional] 
 **origin_of** | [**List[str]**](List[str].md)| Filter by origin_of | [optional] 
 **institutional_certificates** | [**List[str]**](List[str].md)| Filter by institutional_certificates | [optional] 
 **sex** | **str**| Filter by sex | [optional] 
 **age** | **str**| Filter by age | [optional] 
 **upper_bound_age_in_hours** | **float**| Filter by upper_bound_age_in_hours | [optional] 
 **lower_bound_age_in_hours** | **float**| Filter by lower_bound_age_in_hours | [optional] 
 **parts** | [**List[str]**](List[str].md)| Filter by parts | [optional] 
 **pooled_in** | [**List[str]**](List[str].md)| Filter by pooled_in | [optional] 
 **classifications** | [**List[str]**](List[str].md)| Filter by classifications | [optional] 

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
> WorkflowResults workflows(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, source_url=source_url, workflow_repositories=workflow_repositories, standards_page=standards_page, workflow_version=workflow_version, id=id, summary=summary, analysis_steps=analysis_steps)

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
async with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AsyncIgvfApi(api_client)
    query = 'variant flowfish jurkat' # str | Query string for searching. (optional)
    limit = igvf_client.Limit() # Limit | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['-file_size'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = 'release_timestamp_example' # str | Filter by release_timestamp (optional)
    publications = ['publications_example'] # List[str] | Filter by publications (optional)
    publication_identifiers = ['publication_identifiers_example'] # List[str] | Filter by publication_identifiers (optional)
    documents = ['documents_example'] # List[str] | Filter by documents (optional)
    lab = 'lab_example' # str | Filter by lab (optional)
    award = 'award_example' # str | Filter by award (optional)
    accession = 'accession_example' # str | Filter by accession (optional)
    alternate_accessions = ['alternate_accessions_example'] # List[str] | Filter by alternate_accessions (optional)
    collections = ['collections_example'] # List[str] | Filter by collections (optional)
    status = 'status_example' # str | Filter by status (optional)
    revoke_detail = 'revoke_detail_example' # str | Filter by revoke_detail (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = 'creation_timestamp_example' # str | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
    submitter_comment = 'submitter_comment_example' # str | Filter by submitter_comment (optional)
    description = 'description_example' # str | Filter by description (optional)
    name = 'name_example' # str | Filter by name (optional)
    source_url = 'source_url_example' # str | Filter by source_url (optional)
    workflow_repositories = ['workflow_repositories_example'] # List[str] | Filter by workflow_repositories (optional)
    standards_page = 'standards_page_example' # str | Filter by standards_page (optional)
    workflow_version = 56 # int | Filter by workflow_version (optional)
    id = 'id_example' # str | Filter by @id (optional)
    summary = 'summary_example' # str | Filter by summary (optional)
    analysis_steps = ['analysis_steps_example'] # List[str] | Filter by analysis_steps (optional)

    try:
        # List items in the Workflow collection.
        api_response = await api_instance.workflows(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, name=name, source_url=source_url, workflow_repositories=workflow_repositories, standards_page=standards_page, workflow_version=workflow_version, id=id, summary=summary, analysis_steps=analysis_steps)
        print("The response of AsyncIgvfApi->workflows:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AsyncIgvfApi->workflows: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**Limit**](Limit.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **str**| Filter by release_timestamp | [optional] 
 **publications** | [**List[str]**](List[str].md)| Filter by publications | [optional] 
 **publication_identifiers** | [**List[str]**](List[str].md)| Filter by publication_identifiers | [optional] 
 **documents** | [**List[str]**](List[str].md)| Filter by documents | [optional] 
 **lab** | **str**| Filter by lab | [optional] 
 **award** | **str**| Filter by award | [optional] 
 **accession** | **str**| Filter by accession | [optional] 
 **alternate_accessions** | [**List[str]**](List[str].md)| Filter by alternate_accessions | [optional] 
 **collections** | [**List[str]**](List[str].md)| Filter by collections | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **revoke_detail** | **str**| Filter by revoke_detail | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **str**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
 **submitter_comment** | **str**| Filter by submitter_comment | [optional] 
 **description** | **str**| Filter by description | [optional] 
 **name** | **str**| Filter by name | [optional] 
 **source_url** | **str**| Filter by source_url | [optional] 
 **workflow_repositories** | [**List[str]**](List[str].md)| Filter by workflow_repositories | [optional] 
 **standards_page** | **str**| Filter by standards_page | [optional] 
 **workflow_version** | **int**| Filter by workflow_version | [optional] 
 **id** | **str**| Filter by @id | [optional] 
 **summary** | **str**| Filter by summary | [optional] 
 **analysis_steps** | [**List[str]**](List[str].md)| Filter by analysis_steps | [optional] 

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

