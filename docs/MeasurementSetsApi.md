# igvf_client.MeasurementSetsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**measurement_sets**](MeasurementSetsApi.md#measurement_sets) | **GET** /measurement-sets/@@listing | List items in the MeasurementSet collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.MeasurementSetsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
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
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
    files = None # List[object] | Filter by files (optional)
    control_for = None # List[object] | Filter by control_for (optional)
    submitted_files_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by submitted_files_timestamp (optional)
    input_file_set_for = None # List[object] | Filter by input_file_set_for (optional)
    related_multiome_datasets = ['related_multiome_datasets_example'] # List[str] | Filter by related_multiome_datasets (optional)

    try:
        # List items in the MeasurementSet collection.
        api_response = api_instance.measurement_sets(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, publications=publications, publication_identifiers=publication_identifiers, documents=documents, lab=lab, award=award, accession=accession, alternate_accessions=alternate_accessions, collections=collections, status=status, revoke_detail=revoke_detail, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, dbxrefs=dbxrefs, samples=samples, donors=donors, file_set_type=file_set_type, assay_term=assay_term, library_construction_platform=library_construction_platform, protocols=protocols, preferred_assay_title=preferred_assay_title, multiome_size=multiome_size, control_file_sets=control_file_sets, sequencing_library_types=sequencing_library_types, auxiliary_sets=auxiliary_sets, external_image_url=external_image_url, targeted_genes=targeted_genes, id=id, summary=summary, files=files, control_for=control_for, submitted_files_timestamp=submitted_files_timestamp, input_file_set_for=input_file_set_for, related_multiome_datasets=related_multiome_datasets)
        print("The response of MeasurementSetsApi->measurement_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MeasurementSetsApi->measurement_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
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
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
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
 **files** | [**List[object]**](List[object].md)| Filter by files | [optional] 
 **control_for** | [**List[object]**](List[object].md)| Filter by control_for | [optional] 
 **submitted_files_timestamp** | **datetime**| Filter by submitted_files_timestamp | [optional] 
 **input_file_set_for** | [**List[object]**](List[object].md)| Filter by input_file_set_for | [optional] 
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

