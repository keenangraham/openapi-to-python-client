# AnalysisStepWorkflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | [optional] 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | [optional] 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | The preferred viewable name of the workflow. | [optional] 
**source_url** | **str** | An external resource to the code base of the workflow in github. | [optional] 
**workflow_repositories** | **List[str]** | Resources hosting the workflow. | [optional] 
**standards_page** | [**WorkflowStandardsPage**](WorkflowStandardsPage.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**analysis_steps** | **List[object]** | The analysis steps which are part of this workflow. | [optional] 

## Example

```python
from openapi_client.models.analysis_step_workflow import AnalysisStepWorkflow

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisStepWorkflow from a JSON string
analysis_step_workflow_instance = AnalysisStepWorkflow.from_json(json)
# print the JSON string representation of the object
print(AnalysisStepWorkflow.to_json())

# convert the object into a dict
analysis_step_workflow_dict = analysis_step_workflow_instance.to_dict()
# create an instance of AnalysisStepWorkflow from a dict
analysis_step_workflow_from_dict = AnalysisStepWorkflow.from_dict(analysis_step_workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


