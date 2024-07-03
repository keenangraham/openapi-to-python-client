# Biomarker1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**Lab1**](Lab1.md) |  | 
**award** | [**Award1**](Award1.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy**](SubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | The biomarker name. | 
**classification** | **str** | Sample specific biomarker. | [optional] 
**quantification** | **str** | The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity. | 
**synonyms** | **List[str]** | Alternate names for this biomarker. | [optional] 
**gene** | [**Gene1**](Gene1.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**name_quantification** | **str** | A concatenation of the name and quantification of the biomarker. | [optional] 

## Example

```python
from openapi_client.models.biomarker1 import Biomarker1

# TODO update the JSON string below
json = "{}"
# create an instance of Biomarker1 from a JSON string
biomarker1_instance = Biomarker1.from_json(json)
# print the JSON string representation of the object
print(Biomarker1.to_json())

# convert the object into a dict
biomarker1_dict = biomarker1_instance.to_dict()
# create an instance of Biomarker1 from a dict
biomarker1_from_dict = Biomarker1.from_dict(biomarker1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


