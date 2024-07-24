# igvf_client.TreatmentsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**treatments**](TreatmentsApi.md#treatments) | **GET** /treatments/@@listing | List items in the Treatment collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.TreatmentsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
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
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
    biosamples_treated = None # List[object] | Filter by biosamples_treated (optional)

    try:
        # List items in the Treatment collection.
        api_response = api_instance.treatments(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, lab=lab, award=award, sources=sources, lot_id=lot_id, product_id=product_id, documents=documents, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, amount=amount, amount_units=amount_units, duration=duration, duration_units=duration_units, p_h=p_h, purpose=purpose, post_treatment_time=post_treatment_time, post_treatment_time_units=post_treatment_time_units, temperature=temperature, temperature_units=temperature_units, treatment_type=treatment_type, treatment_term_id=treatment_term_id, treatment_term_name=treatment_term_name, depletion=depletion, id=id, summary=summary, biosamples_treated=biosamples_treated)
        print("The response of TreatmentsApi->treatments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TreatmentsApi->treatments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
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
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
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
 **biosamples_treated** | [**List[object]**](List[object].md)| Filter by biosamples_treated | [optional] 

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

