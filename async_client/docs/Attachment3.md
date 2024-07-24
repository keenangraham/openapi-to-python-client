# Attachment3

The attached content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download** | **str** |  | [optional] 
**href** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**md5sum** | **str** |  | [optional] 
**size** | **int** |  | [optional] 
**width** | **int** |  | [optional] 
**height** | **int** |  | [optional] 

## Example

```python
from async_igvf_client.models.attachment3 import Attachment3

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment3 from a JSON string
attachment3_instance = Attachment3.from_json(json)
# print the JSON string representation of the object
print(Attachment3.to_json())

# convert the object into a dict
attachment3_dict = attachment3_instance.to_dict()
# create an instance of Attachment3 from a dict
attachment3_from_dict = Attachment3.from_dict(attachment3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


