# SourcesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**url** | **str** | An external resource with additional information. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | A short unique name for the source. | 
**pi** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | 
**awards** | [**List[AnalysisStepAward]**](AnalysisStepAward.md) | Grants associated with the lab. | [optional] 
**institute_label** | **str** | An abbreviation for the institute the lab is associated with. | [default to '']
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**title** | **str** | The complete name of the originating lab or vendor. | 
**release_timestamp** | **datetime** | The date the object was released. | [optional] 

## Example

```python
from openapi_client.models.sources_inner import SourcesInner

# TODO update the JSON string below
json = "{}"
# create an instance of SourcesInner from a JSON string
sources_inner_instance = SourcesInner.from_json(json)
# print the JSON string representation of the object
print(SourcesInner.to_json())

# convert the object into a dict
sources_inner_dict = sources_inner_instance.to_dict()
# create an instance of SourcesInner from a dict
sources_inner_from_dict = SourcesInner.from_dict(sources_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


