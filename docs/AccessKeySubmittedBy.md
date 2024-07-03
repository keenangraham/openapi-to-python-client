# AccessKeySubmittedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the metadata object. | [optional] [default to 'current']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '5']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**title** | **str** | The full name of the user. | [optional] 

## Example

```python
from openapi_client.models.access_key_submitted_by import AccessKeySubmittedBy

# TODO update the JSON string below
json = "{}"
# create an instance of AccessKeySubmittedBy from a JSON string
access_key_submitted_by_instance = AccessKeySubmittedBy.from_json(json)
# print the JSON string representation of the object
print(AccessKeySubmittedBy.to_json())

# convert the object into a dict
access_key_submitted_by_dict = access_key_submitted_by_instance.to_dict()
# create an instance of AccessKeySubmittedBy from a dict
access_key_submitted_by_from_dict = AccessKeySubmittedBy.from_dict(access_key_submitted_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


