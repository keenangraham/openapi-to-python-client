# FileFormatSpecificationsDocument


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
from openapi_client.models.file_format_specifications_document import FileFormatSpecificationsDocument

# TODO update the JSON string below
json = "{}"
# create an instance of FileFormatSpecificationsDocument from a JSON string
file_format_specifications_document_instance = FileFormatSpecificationsDocument.from_json(json)
# print the JSON string representation of the object
print(FileFormatSpecificationsDocument.to_json())

# convert the object into a dict
file_format_specifications_document_dict = file_format_specifications_document_instance.to_dict()
# create an instance of FileFormatSpecificationsDocument from a dict
file_format_specifications_document_from_dict = FileFormatSpecificationsDocument.from_dict(file_format_specifications_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


