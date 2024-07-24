# PageLayoutComponents1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this blocUnique identifier for this block. | [optional] 
**type** | **str** | Indicates whether this block contains markdown or a component specification. | [optional] 
**body** | **str** | The text content of this block. | [optional] 
**direction** | **str** | The text language direction -- ltr or rtl. | [optional] 

## Example

```python
from igvf_client.models.page_layout_components1 import PageLayoutComponents1

# TODO update the JSON string below
json = "{}"
# create an instance of PageLayoutComponents1 from a JSON string
page_layout_components1_instance = PageLayoutComponents1.from_json(json)
# print the JSON string representation of the object
print(PageLayoutComponents1.to_json())

# convert the object into a dict
page_layout_components1_dict = page_layout_components1_instance.to_dict()
# create an instance of PageLayoutComponents1 from a dict
page_layout_components1_from_dict = PageLayoutComponents1.from_dict(page_layout_components1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


