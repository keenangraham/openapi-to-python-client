# openapi_client.IgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](IgvfApi.md#search) | **GET** /search | Search for objects in the IGVF Project


# **search**
> SearchResults search(type=type, var_field=var_field, query=query, limit=limit, debug=debug, frame=frame, sort=sort, config=config, advanced_query=advanced_query, field_filters=field_filters)

Search for objects in the IGVF Project

Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.search_results import SearchResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.igvf.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.data.igvf.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    access_key = os.environ["IGVF_ACCESS_KEY"],
    secrete_access_key = os.environ["IGVF_SECRET_ACCESS_KEY"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types. (optional)
    var_field = ['var_field_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)
    query = 'query_example' # str | Query string for searching. (optional)
    limit = 56 # int | Maximum number of results to return. Use 'all' for all results. (optional)
    debug = True # bool | Enables debug mode for the search. (optional)
    frame = 'frame_example' # str | Specifies the format of the returned objects. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. (optional)
    config = 'config_example' # str | Configuration options for the search. (optional)
    advanced_query = 'advanced_query_example' # str | Advanced query string for complex searches. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!=' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)

    try:
        # Search for objects in the IGVF Project
        api_response = api_instance.search(type=type, var_field=var_field, query=query, limit=limit, debug=debug, frame=frame, sort=sort, config=config, advanced_query=advanced_query, field_filters=field_filters)
        print("The response of IgvfApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](str.md)| Type of objects to return. Can be repeated for multiple types. | [optional] 
 **var_field** | [**List[str]**](str.md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 
 **query** | **str**| Query string for searching. | [optional] 
 **limit** | **int**| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **debug** | **bool**| Enables debug mode for the search. | [optional] 
 **frame** | **str**| Specifies the format of the returned objects. | [optional] 
 **sort** | [**List[str]**](str.md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. | [optional] 
 **config** | **str**| Configuration options for the search. | [optional] 
 **advanced_query** | **str**| Advanced query string for complex searches. | [optional] 
 **field_filters** | [**object**](.md)| Any field from any object type can be used as a filter. Use &#39;!&#x3D;&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

[**SearchResults**](SearchResults.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | No results found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

