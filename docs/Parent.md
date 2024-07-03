# Parent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**Lab1**](Lab1.md) |  | 
**award** | [**Award1**](Award1.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '5']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy**](SubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**analysis_step_types** | **List[str]** | The classification of the software. | 
**step_label** | **str** | Unique lowercased label of the analysis step that includes the relevant assays, the software used, and the purpose of the step, e.g. rampage-grit-peak-calling-step | 
**title** | **str** | The preferred viewable name of the analysis step, likely the same as the step label. | 
**workflow** | [**Workflow1**](Workflow1.md) |  | 
**parents** | [**List[Parent]**](Parent.md) | The precursor steps. | [optional] 
**input_content_types** | [**List[InputContentType]**](InputContentType.md) | The content types used as input for the analysis step. | 
**output_content_types** | [**List[OutputContentType]**](OutputContentType.md) | The content types produced as output by the analysis step. | 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**name** | **str** | Full name of the analysis step. | [optional] 

## Example

```python
from openapi_client.models.parent import Parent

# TODO update the JSON string below
json = "{}"
# create an instance of Parent from a JSON string
parent_instance = Parent.from_json(json)
# print the JSON string representation of the object
print(Parent.to_json())

# convert the object into a dict
parent_dict = parent_instance.to_dict()
# create an instance of Parent from a dict
parent_from_dict = Parent.from_dict(parent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


