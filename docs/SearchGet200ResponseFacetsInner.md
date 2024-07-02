# SearchGet200ResponseFacetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**terms** | [**List[SearchGet200ResponseFacetsInnerTermsInner]**](SearchGet200ResponseFacetsInnerTermsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_get200_response_facets_inner import SearchGet200ResponseFacetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGet200ResponseFacetsInner from a JSON string
search_get200_response_facets_inner_instance = SearchGet200ResponseFacetsInner.from_json(json)
# print the JSON string representation of the object
print(SearchGet200ResponseFacetsInner.to_json())

# convert the object into a dict
search_get200_response_facets_inner_dict = search_get200_response_facets_inner_instance.to_dict()
# create an instance of SearchGet200ResponseFacetsInner from a dict
search_get200_response_facets_inner_from_dict = SearchGet200ResponseFacetsInner.from_dict(search_get200_response_facets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


