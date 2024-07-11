# SearchFacetTermValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**doc_count** | **int** |  | [optional] 

## Example

```python
from igvf_client.models.search_facet_term_value import SearchFacetTermValue

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFacetTermValue from a JSON string
search_facet_term_value_instance = SearchFacetTermValue.from_json(json)
# print the JSON string representation of the object
print(SearchFacetTermValue.to_json())

# convert the object into a dict
search_facet_term_value_dict = search_facet_term_value_instance.to_dict()
# create an instance of SearchFacetTermValue from a dict
search_facet_term_value_from_dict = SearchFacetTermValue.from_dict(search_facet_term_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


