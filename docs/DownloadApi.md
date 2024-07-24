# igvf_client.DownloadApi

All URIs are relative to *https://api.data.igvf.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download**](DownloadApi.md#download) | **GET** /{file_id}/@@download | Download file.


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
    api_instance = igvf_client.DownloadApi(api_client)
    file_id = 'file_id_example' # str | The unique identifier for the file to download, i.e. @id (`/tabular-files/IGVFFI8092FZKL/`), accession (`IGVFFI8092FZKL`), or UUID (`fdbdc159-e5b9-40a8-b788-3f72c9886b03`).

    try:
        # Download file.
        api_response = api_instance.download(file_id)
        print("The response of DownloadApi->download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadApi->download: %s\n" % e)
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

