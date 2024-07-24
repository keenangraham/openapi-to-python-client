# igvf_client.ModelFilesApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**model_files**](ModelFilesApi.md#model_files) | **GET** /model-files/@@listing | List items in the ModelFile collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.ModelFilesApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    controlled_access = True # bool | Filter by controlled_access (optional)
    anvil_url = 'anvil_url_example' # str | Filter by anvil_url (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
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
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
    integrated_in = None # List[object] | Filter by integrated_in (optional)
    input_file_for = None # List[object] | Filter by input_file_for (optional)
    gene_list_for = None # List[object] | Filter by gene_list_for (optional)
    loci_list_for = None # List[object] | Filter by loci_list_for (optional)
    href = 'href_example' # str | Filter by href (optional)
    s3_uri = 's3_uri_example' # str | Filter by s3_uri (optional)
    upload_credentials = None # object | Filter by upload_credentials (optional)

    try:
        # List items in the ModelFile collection.
        api_response = api_instance.model_files(query=query, limit=limit, sort=sort, controlled_access=controlled_access, anvil_url=anvil_url, release_timestamp=release_timestamp, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_version=analysis_step_version, content_md5sum=content_md5sum, content_type=content_type, dbxrefs=dbxrefs, derived_from=derived_from, file_format=file_format, file_format_specifications=file_format_specifications, file_set=file_set, file_size=file_size, md5sum=md5sum, submitted_file_name=submitted_file_name, upload_status=upload_status, validation_error_detail=validation_error_detail, id=id, summary=summary, integrated_in=integrated_in, input_file_for=input_file_for, gene_list_for=gene_list_for, loci_list_for=loci_list_for, href=href, s3_uri=s3_uri, upload_credentials=upload_credentials)
        print("The response of ModelFilesApi->model_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelFilesApi->model_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **controlled_access** | **bool**| Filter by controlled_access | [optional] 
 **anvil_url** | **str**| Filter by anvil_url | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
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
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
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
 **integrated_in** | [**List[object]**](List[object].md)| Filter by integrated_in | [optional] 
 **input_file_for** | [**List[object]**](List[object].md)| Filter by input_file_for | [optional] 
 **gene_list_for** | [**List[object]**](List[object].md)| Filter by gene_list_for | [optional] 
 **loci_list_for** | [**List[object]**](List[object].md)| Filter by loci_list_for | [optional] 
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

