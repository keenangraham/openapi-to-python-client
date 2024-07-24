# igvf_client.UsersApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users**](UsersApi.md#users) | **GET** /users/@@listing | List items in the User collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.UsersApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    status = 'status_example' # str | Filter by status (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
        api_response = api_instance.users(query=query, limit=limit, sort=sort, status=status, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, email=email, first_name=first_name, last_name=last_name, lab=lab, submits_for=submits_for, groups=groups, viewing_groups=viewing_groups, job_title=job_title, id=id, summary=summary, title=title)
        print("The response of UsersApi->users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
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

