# igvf_client.AnalysisStepsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysis_steps**](AnalysisStepsApi.md#analysis_steps) | **GET** /analysis-steps/@@listing | List items in the AnalysisStep collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AnalysisStepsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
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
        api_response = api_instance.analysis_steps(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, lab=lab, award=award, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, analysis_step_types=analysis_step_types, step_label=step_label, title=title, workflow=workflow, parents=parents, input_content_types=input_content_types, output_content_types=output_content_types, id=id, summary=summary, name=name)
        print("The response of AnalysisStepsApi->analysis_steps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisStepsApi->analysis_steps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
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

