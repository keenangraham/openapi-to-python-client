# Search200ResponseFacetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**terms** | [**List[Search200ResponseFacetsInnerTermsInner]**](Search200ResponseFacetsInnerTermsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.search200_response_facets_inner import Search200ResponseFacetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of Search200ResponseFacetsInner from a JSON string
search200_response_facets_inner_instance = Search200ResponseFacetsInner.from_json(json)
# print the JSON string representation of the object
print(Search200ResponseFacetsInner.to_json())

# convert the object into a dict
search200_response_facets_inner_dict = search200_response_facets_inner_instance.to_dict()
# create an instance of Search200ResponseFacetsInner from a dict
search200_response_facets_inner_from_dict = Search200ResponseFacetsInner.from_dict(search200_response_facets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


