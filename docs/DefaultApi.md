# openapi_client.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search_get**](DefaultApi.md#search_get) | **GET** /search | Search for objects in the ENCODE Project


# **search_get**
> SearchGet200Response search_get(type=type, frame=frame, limit=limit, query=query, var_field=var_field)

Search for objects in the ENCODE Project

Search endpoint that accepts various query parameters to filter and format results. Supports complex filtering on multiple types and their fields within JSON objects. 

### Example


```python
import openapi_client
from openapi_client.models.search_get200_response import SearchGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    type = 'type_example' # str | Specifies the type(s) of object to search for. Multiple types can be specified by repeating the parameter. Example: type=Experiment&type=File  (optional)
    frame = 'frame_example' # str | Specifies the format of the returned objects. - If not specified, returns a subset of object properties. - 'embedded' returns all object properties with selected embedded objects expanded. - 'object' returns all properties with embedded objects referred by identifier.  (optional)
    limit = 'limit_example' # str | Limits the number of results. Use 'all' to retrieve all results.  (optional)
    query = 'query_example' # str | General search term that can return multiple object types. (optional)
    var_field = None # Dict[str, object] | Any field from any object type can be used as a filter. Supports complex queries including nested properties, range queries, and wildcard searches. Examples: - quality_metrics.frip=lt:0.65 (less than) - file_size=gte:1000000 (greater than or equal) - treatments=* (wildcard, existence check) - treatments!=* (negation, non-existence check)  (optional)

    try:
        # Search for objects in the ENCODE Project
        api_response = api_instance.search_get(type=type, frame=frame, limit=limit, query=query, var_field=var_field)
        print("The response of DefaultApi->search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Specifies the type(s) of object to search for. Multiple types can be specified by repeating the parameter. Example: type&#x3D;Experiment&amp;type&#x3D;File  | [optional] 
 **frame** | **str**| Specifies the format of the returned objects. - If not specified, returns a subset of object properties. - &#39;embedded&#39; returns all object properties with selected embedded objects expanded. - &#39;object&#39; returns all properties with embedded objects referred by identifier.  | [optional] 
 **limit** | **str**| Limits the number of results. Use &#39;all&#39; to retrieve all results.  | [optional] 
 **query** | **str**| General search term that can return multiple object types. | [optional] 
 **var_field** | [**Dict[str, object]**](object.md)| Any field from any object type can be used as a filter. Supports complex queries including nested properties, range queries, and wildcard searches. Examples: - quality_metrics.frip&#x3D;lt:0.65 (less than) - file_size&#x3D;gte:1000000 (greater than or equal) - treatments&#x3D;* (wildcard, existence check) - treatments!&#x3D;* (negation, non-existence check)  | [optional] 

### Return type

[**SearchGet200Response**](SearchGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

