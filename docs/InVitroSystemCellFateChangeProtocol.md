# InVitroSystemCellFateChangeProtocol


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**DocumentLab**](DocumentLab.md) |  | 
**award** | [**DocumentAward**](DocumentAward.md) |  | 
**attachment** | [**Attachment**](Attachment.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**DocumentSubmittedBy**](DocumentSubmittedBy.md) |  | [optional] 
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
from openapi_client.models.in_vitro_system_cell_fate_change_protocol import InVitroSystemCellFateChangeProtocol

# TODO update the JSON string below
json = "{}"
# create an instance of InVitroSystemCellFateChangeProtocol from a JSON string
in_vitro_system_cell_fate_change_protocol_instance = InVitroSystemCellFateChangeProtocol.from_json(json)
# print the JSON string representation of the object
print(InVitroSystemCellFateChangeProtocol.to_json())

# convert the object into a dict
in_vitro_system_cell_fate_change_protocol_dict = in_vitro_system_cell_fate_change_protocol_instance.to_dict()
# create an instance of InVitroSystemCellFateChangeProtocol from a dict
in_vitro_system_cell_fate_change_protocol_from_dict = InVitroSystemCellFateChangeProtocol.from_dict(in_vitro_system_cell_fate_change_protocol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


