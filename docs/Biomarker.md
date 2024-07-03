# Biomarker

A biomarker, such as a cell surface protein, that is measured, detected, or used for sample sorting based upon the biomarker's presence, absence, or quantification. For example, a CD19 positive biomarker that was detected in a sample.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | The biomarker name. | 
**classification** | **str** | Sample specific biomarker. | [optional] 
**quantification** | **str** | The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity. | 
**synonyms** | **List[str]** | Alternate names for this biomarker. | [optional] 
**gene** | [**BiomarkerGene**](BiomarkerGene.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**name_quantification** | **str** | A concatenation of the name and quantification of the biomarker. | [optional] 

## Example

```python
from openapi_client.models.biomarker import Biomarker

# TODO update the JSON string below
json = "{}"
# create an instance of Biomarker from a JSON string
biomarker_instance = Biomarker.from_json(json)
# print the JSON string representation of the object
print(Biomarker.to_json())

# convert the object into a dict
biomarker_dict = biomarker_instance.to_dict()
# create an instance of Biomarker from a dict
biomarker_from_dict = Biomarker.from_dict(biomarker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


