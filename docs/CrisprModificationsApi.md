# igvf_client.CrisprModificationsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crispr_modifications**](CrisprModificationsApi.md#crispr_modifications) | **GET** /crispr-modifications/@@listing | List items in the CrisprModification collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.CrisprModificationsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
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
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
    biosamples_modified = None # List[object] | Filter by biosamples_modified (optional)

    try:
        # List items in the CrisprModification collection.
        api_response = api_instance.crispr_modifications(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, activated=activated, activating_agent_term_id=activating_agent_term_id, activating_agent_term_name=activating_agent_term_name, modality=modality, cas=cas, fused_domain=fused_domain, tagged_protein=tagged_protein, cas_species=cas_species, id=id, summary=summary, biosamples_modified=biosamples_modified)
        print("The response of CrisprModificationsApi->crispr_modifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrisprModificationsApi->crispr_modifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
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
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
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
 **biosamples_modified** | [**List[object]**](List[object].md)| Filter by biosamples_modified | [optional] 

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

