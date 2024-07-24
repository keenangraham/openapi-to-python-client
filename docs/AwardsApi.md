# igvf_client.AwardsApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**awards**](AwardsApi.md#awards) | **GET** /awards/@@listing | List items in the Award collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.AwardsApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    status = 'status_example' # str | Filter by status (optional)
    url = 'url_example' # str | Filter by url (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
    submitted_by = 'submitted_by_example' # str | Filter by submitted_by (optional)
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

    try:
        # List items in the Award collection.
        api_response = api_instance.awards(query=query, limit=limit, sort=sort, status=status, url=url, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, title=title, name=name, start_date=start_date, end_date=end_date, pis=pis, contact_pi=contact_pi, project=project, viewing_group=viewing_group, component=component, id=id, summary=summary)
        print("The response of AwardsApi->awards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AwardsApi->awards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **url** | **str**| Filter by url | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
 **submitted_by** | **str**| Filter by submitted_by | [optional] 
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

