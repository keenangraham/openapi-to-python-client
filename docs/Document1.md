# Document1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**Lab2**](Lab2.md) |  | 
**award** | [**Award2**](Award2.md) |  | 
**attachment** | [**Attachment**](Attachment.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy1**](SubmittedBy1.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | 
**document_type** | **str** | The category that best describes the document. | 
**characterization_method** | **str** | The method used for the characterization. | [optional] 
**urls** | **List[str]** | External resources with additional information to the document. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.document1 import Document1

# TODO update the JSON string below
json = "{}"
# create an instance of Document1 from a JSON string
document1_instance = Document1.from_json(json)
# print the JSON string representation of the object
print(Document1.to_json())

# convert the object into a dict
document1_dict = document1_instance.to_dict()
# create an instance of Document1 from a dict
document1_from_dict = Document1.from_dict(document1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


