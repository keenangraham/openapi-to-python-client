# igvf_client.SampleTermsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sample_terms**](SampleTermsApi.md#sample_terms) | **GET** /sample-terms/@@listing | List items in the SampleTerm collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.SampleTermsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
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
        api_response = api_instance.sample_terms(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, term_id=term_id, term_name=term_name, deprecated_ntr_terms=deprecated_ntr_terms, is_a=is_a, dbxrefs=dbxrefs, id=id, summary=summary, name=name, synonyms=synonyms, ancestors=ancestors, ontology=ontology, organ_slims=organ_slims, cell_slims=cell_slims, developmental_slims=developmental_slims, system_slims=system_slims)
        print("The response of SampleTermsApi->sample_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SampleTermsApi->sample_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
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

