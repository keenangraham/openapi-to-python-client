# igvf_client.ImagesApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**images**](ImagesApi.md#images) | **GET** /images/@@listing | List items in the Image collection.


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
with igvf_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = igvf_client.ImagesApi(api_client)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    release_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by release_timestamp (optional)
    status = 'status_example' # str | Filter by status (optional)
    attachment = {'key': igvf_client.Attachment1()} # Attachment1 | Filter by attachment (optional)
    schema_version = 'schema_version_example' # str | Filter by schema_version (optional)
    uuid = 'uuid_example' # str | Filter by uuid (optional)
    notes = 'notes_example' # str | Filter by notes (optional)
    aliases = ['aliases_example'] # List[str] | Filter by aliases (optional)
    creation_timestamp = '2013-10-20T19:20:30+01:00' # datetime | Filter by creation_timestamp (optional)
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
        api_response = api_instance.images(query=query, limit=limit, sort=sort, release_timestamp=release_timestamp, status=status, attachment=attachment, schema_version=schema_version, uuid=uuid, notes=notes, aliases=aliases, creation_timestamp=creation_timestamp, submitted_by=submitted_by, submitter_comment=submitter_comment, description=description, caption=caption, id=id, summary=summary, thumb_nail=thumb_nail, download_url=download_url)
        print("The response of ImagesApi->images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImagesApi->images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **release_timestamp** | **datetime**| Filter by release_timestamp | [optional] 
 **status** | **str**| Filter by status | [optional] 
 **attachment** | [**Attachment1**](Attachment1.md)| Filter by attachment | [optional] 
 **schema_version** | **str**| Filter by schema_version | [optional] 
 **uuid** | **str**| Filter by uuid | [optional] 
 **notes** | **str**| Filter by notes | [optional] 
 **aliases** | [**List[str]**](List[str].md)| Filter by aliases | [optional] 
 **creation_timestamp** | **datetime**| Filter by creation_timestamp | [optional] 
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

