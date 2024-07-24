# igvf_client.GenesApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**genes**](GenesApi.md#genes) | **GET** /genes/@@listing | List items in the Gene collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.GenesApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    transcriptome_annotation = 'transcriptome_annotation_example' # str | Filter by transcriptome_annotation (optional)
    taxa = 'taxa_example' # str | Filter by taxa (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
        api_response = api_instance.genes(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, transcriptome_annotation=transcriptome_annotation, taxa=taxa, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, geneid=geneid, symbol=symbol, name=name, synonyms=synonyms, dbxrefs=dbxrefs, locations=locations, version_number=version_number, id=id, summary=summary, title=title, geneid_with_version=geneid_with_version)
        print("The response of GenesApi->genes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenesApi->genes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
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

