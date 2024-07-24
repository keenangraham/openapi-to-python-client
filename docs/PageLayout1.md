# PageLayout1

Hierarchical description of the page layout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocks** | [**List[PageLayoutComponents1]**](PageLayoutComponents1.md) |  | [optional] 

## Example

```python
from igvf_client.models.page_layout1 import PageLayout1

# TODO update the JSON string below
json = "{}"
# create an instance of PageLayout1 from a JSON string
page_layout1_instance = PageLayout1.from_json(json)
# print the JSON string representation of the object
print(PageLayout1.to_json())

# convert the object into a dict
page_layout1_dict = page_layout1_instance.to_dict()
# create an instance of PageLayout1 from a dict
page_layout1_from_dict = PageLayout1.from_dict(page_layout1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


