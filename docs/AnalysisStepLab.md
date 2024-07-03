# AnalysisStepLab


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the metadata object. | [optional] [default to 'current']
**url** | **str** | An external resource with additional information. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '3']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | A short unique name for the lab, current convention is lower cased and hyphen delimited of PI&#39;s first and last name (e.g. john-doe). | [optional] 
**pi** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**awards** | [**List[AnalysisStepAward]**](AnalysisStepAward.md) | Grants associated with the lab. | [optional] 
**institute_label** | **str** | An abbreviation for the institute the lab is associated with. | [optional] [default to '']
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analysis_step_lab import AnalysisStepLab

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisStepLab from a JSON string
analysis_step_lab_instance = AnalysisStepLab.from_json(json)
# print the JSON string representation of the object
print(AnalysisStepLab.to_json())

# convert the object into a dict
analysis_step_lab_dict = analysis_step_lab_instance.to_dict()
# create an instance of AnalysisStepLab from a dict
analysis_step_lab_from_dict = AnalysisStepLab.from_dict(analysis_step_lab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


