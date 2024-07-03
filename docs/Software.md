# Software

A software used for computational  analysis. For example, Bowtie2 alignment software.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '5']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | 
**name** | **str** | Unique name of the software package; a lowercase version of the title. | 
**title** | **str** | The preferred viewable name of the software. | 
**source_url** | **str** | An external resource to the codebase. | 
**used_by** | **List[str]** | The component(s) of the IGVF consortium that utilize this software. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**versions** | [**List[ModelSetSoftwareVersion]**](ModelSetSoftwareVersion.md) | A list of versions that have been released for this software. | [optional] 

## Example

```python
from openapi_client.models.software import Software

# TODO update the JSON string below
json = "{}"
# create an instance of Software from a JSON string
software_instance = Software.from_json(json)
# print the JSON string representation of the object
print(Software.to_json())

# convert the object into a dict
software_dict = software_instance.to_dict()
# create an instance of Software from a dict
software_from_dict = Software.from_dict(software_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


