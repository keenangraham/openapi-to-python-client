# Attachment2

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
from async_igvf_client.models.attachment2 import Attachment2

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment2 from a JSON string
attachment2_instance = Attachment2.from_json(json)
# print the JSON string representation of the object
print(Attachment2.to_json())

# convert the object into a dict
attachment2_dict = attachment2_instance.to_dict()
# create an instance of Attachment2 from a dict
attachment2_from_dict = Attachment2.from_dict(attachment2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


