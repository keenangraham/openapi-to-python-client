# DocumentSubmittedBy


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
from openapi_client.models.document_submitted_by import DocumentSubmittedBy

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSubmittedBy from a JSON string
document_submitted_by_instance = DocumentSubmittedBy.from_json(json)
# print the JSON string representation of the object
print(DocumentSubmittedBy.to_json())

# convert the object into a dict
document_submitted_by_dict = document_submitted_by_instance.to_dict()
# create an instance of DocumentSubmittedBy from a dict
document_submitted_by_from_dict = DocumentSubmittedBy.from_dict(document_submitted_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


