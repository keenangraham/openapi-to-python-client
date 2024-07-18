# igvf_client.IgvfApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_download**](IgvfApi.md#batch_download) | **GET** /batch-download | List files to download based on search query. All results are returned.
[**download**](IgvfApi.md#download) | **GET** /{file_id}/@@download | Download file.
[**get_by_id**](IgvfApi.md#get_by_id) | **GET** /{resource_id} | Get item information
[**report**](IgvfApi.md#report) | **GET** /multireport.tsv | Generate a report based on search query. All results are returned.
[**schema_for_item_type**](IgvfApi.md#schema_for_item_type) | **GET** /profiles/{item_type} | Retrieve JSON schema for item type
[**schemas**](IgvfApi.md#schemas) | **GET** /profiles | Retrieve JSON schemas for all item types
[**search**](IgvfApi.md#search) | **GET** /search | Search for items in the IGVF Project


# **batch_download**
> str batch_download(type, query=query, field_filters=field_filters)

List files to download based on search query. All results are returned.

Generates TSV of files contained in FileSets in search results.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
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
    api_instance = igvf_client.IgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types.
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)

    try:
        # List files to download based on search query. All results are returned.
        api_response = api_instance.batch_download(type, query=query, field_filters=field_filters)
        print("The response of IgvfApi->batch_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->batch_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download**
> bytearray download(file_id)

Download file.

Returns underlying file associated with file metadata

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
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
    api_instance = igvf_client.IgvfApi(api_client)
    file_id = 'file_id_example' # str | The unique identifier for the file to download, i.e. @id (`/tabular-files/IGVFFI8092FZKL/`), accession (`IGVFFI8092FZKL`), or UUID (`fdbdc159-e5b9-40a8-b788-3f72c9886b03`).

    try:
        # Download file.
        api_response = api_instance.download(file_id)
        print("The response of IgvfApi->download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_id** | **str**| The unique identifier for the file to download, i.e. @id (&#x60;/tabular-files/IGVFFI8092FZKL/&#x60;), accession (&#x60;IGVFFI8092FZKL&#x60;), or UUID (&#x60;fdbdc159-e5b9-40a8-b788-3f72c9886b03&#x60;). | 

### Return type

**bytearray**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Item not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_by_id**
> Item get_by_id(resource_id)

Get item information

Retrieve detailed information about a specific item using its @id or uuid.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.item import Item
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
    api_instance = igvf_client.IgvfApi(api_client)
    resource_id = 'resource_id_example' # str | The unique identifier for the resource i.e. @id (`/sequence-files/IGVFFI1165AJSO/`), accession (`IGVFFI1165AJSO`), or UUID (`fffcd64e-af02-4675-8953-7352459ee06a`).

    try:
        # Get item information
        api_response = api_instance.get_by_id(resource_id)
        print("The response of IgvfApi->get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_id** | **str**| The unique identifier for the resource i.e. @id (&#x60;/sequence-files/IGVFFI1165AJSO/&#x60;), accession (&#x60;IGVFFI1165AJSO&#x60;), or UUID (&#x60;fffcd64e-af02-4675-8953-7352459ee06a&#x60;). | 

### Return type

[**Item**](Item.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**404** | Object not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report**
> str report(type, query=query, field_filters=field_filters, include_fields=include_fields, frame=frame)

Generate a report based on search query. All results are returned.

Like /search endpoint but returns a TSV file instead of JSON. Must specify item type(s).

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
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
    api_instance = igvf_client.IgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types.
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)
    include_fields = ['include_fields_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)
    frame = 'frame_example' # str | Object with links, or object with some links embedded. (optional)

    try:
        # Generate a report based on search query. All results are returned.
        api_response = api_instance.report(type, query=query, field_filters=field_filters, include_fields=include_fields, frame=frame)
        print("The response of IgvfApi->report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 
 **include_fields** | [**List[str]**](List[str].md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 
 **frame** | **str**| Object with links, or object with some links embedded. | [optional] 

### Return type

**str**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/tab-separated-values, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**404** | No results found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schema_for_item_type**
> object schema_for_item_type(item_type)

Retrieve JSON schema for item type

Returns JSON schemas of all the item types defined in IGVF

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.item_type import ItemType
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
    api_instance = igvf_client.IgvfApi(api_client)
    item_type = igvf_client.ItemType() # ItemType | The name of the item type

    try:
        # Retrieve JSON schema for item type
        api_response = api_instance.schema_for_item_type(item_type)
        print("The response of IgvfApi->schema_for_item_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->schema_for_item_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_type** | [**ItemType**](ItemType.md)| The name of the item type | 

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schemas**
> object schemas()

Retrieve JSON schemas for all item types

Returns JSON schemas of all the item types defined in IGVF

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
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
    api_instance = igvf_client.IgvfApi(api_client)

    try:
        # Retrieve JSON schemas for all item types
        api_response = api_instance.schemas()
        print("The response of IgvfApi->schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->schemas: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> SearchResults search(type=type, query=query, field_filters=field_filters, limit=limit, sort=sort, include_fields=include_fields)

Search for items in the IGVF Project

Search endpoint that accepts various query parameters to filter, sort, and paginate results. Supports complex filtering on types and fields within JSON objects.

### Example

* Basic Authentication (basicAuth):

```python
import igvf_client
from igvf_client.models.search_results import SearchResults
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
    api_instance = igvf_client.IgvfApi(api_client)
    type = ['type_example'] # List[str] | Type of objects to return. Can be repeated for multiple types. (optional)
    query = 'query_example' # str | Query string for searching. (optional)
    field_filters = None # object | Any field from any object type can be used as a filter. Use '!' for negation, '*' as a wildcard, and 'lt:', 'lte:', 'gt:', 'gte:' for range queries on numeric fields. (optional)
    limit = igvf_client.SearchLimitParameter() # SearchLimitParameter | Maximum number of results to return. Use 'all' for all results. (optional)
    sort = ['sort_example'] # List[str] | Fields to sort results by. Prefix with '-' for descending order. Can be repeated for multiple sort fields. Does not work with limit=all. (optional)
    include_fields = ['include_fields_example'] # List[str] | Fields to include in the response. Can be repeated for multiple fields. (optional)

    try:
        # Search for items in the IGVF Project
        api_response = api_instance.search(type=type, query=query, field_filters=field_filters, limit=limit, sort=sort, include_fields=include_fields)
        print("The response of IgvfApi->search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IgvfApi->search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | [**List[str]**](List[str].md)| Type of objects to return. Can be repeated for multiple types. | [optional] 
 **query** | **str**| Query string for searching. | [optional] 
 **field_filters** | [**object**](object.md)| Any field from any object type can be used as a filter. Use &#39;!&#39; for negation, &#39;*&#39; as a wildcard, and &#39;lt:&#39;, &#39;lte:&#39;, &#39;gt:&#39;, &#39;gte:&#39; for range queries on numeric fields. | [optional] 
 **limit** | [**SearchLimitParameter**](SearchLimitParameter.md)| Maximum number of results to return. Use &#39;all&#39; for all results. | [optional] 
 **sort** | [**List[str]**](List[str].md)| Fields to sort results by. Prefix with &#39;-&#39; for descending order. Can be repeated for multiple sort fields. Does not work with limit&#x3D;all. | [optional] 
 **include_fields** | [**List[str]**](List[str].md)| Fields to include in the response. Can be repeated for multiple fields. | [optional] 

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

