# SearchGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graph** | [**List[SearchGet200ResponseGraphInner]**](SearchGet200ResponseGraphInner.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**total** | **int** |  | [optional] 
**facets** | [**List[SearchGet200ResponseFacetsInner]**](SearchGet200ResponseFacetsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_get200_response import SearchGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGet200Response from a JSON string
search_get200_response_instance = SearchGet200Response.from_json(json)
# print the JSON string representation of the object
print(SearchGet200Response.to_json())

# convert the object into a dict
search_get200_response_dict = search_get200_response_instance.to_dict()
# create an instance of SearchGet200Response from a dict
search_get200_response_from_dict = SearchGet200Response.from_dict(search_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


