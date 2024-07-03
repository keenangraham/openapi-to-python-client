# LINKTO38


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**LINKTO1**](LINKTO1.md) |  | 
**award** | [**LINKTO2**](LINKTO2.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**LINKTO**](LINKTO.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | The biomarker name. | 
**classification** | **str** | Sample specific biomarker. | [optional] 
**quantification** | **str** | The biomarker association to the biosample, disease or other condition.  This can be the absence of the biomarker or the presence of the biomarker in some low, intermediate or high quantity. | 
**synonyms** | **List[str]** | Alternate names for this biomarker. | [optional] 
**gene** | [**LINKTO5**](LINKTO5.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**name_quantification** | **str** | A concatenation of the name and quantification of the biomarker. | [optional] 

## Example

```python
from openapi_client.models.linkto38 import LINKTO38

# TODO update the JSON string below
json = "{}"
# create an instance of LINKTO38 from a JSON string
linkto38_instance = LINKTO38.from_json(json)
# print the JSON string representation of the object
print(LINKTO38.to_json())

# convert the object into a dict
linkto38_dict = linkto38_instance.to_dict()
# create an instance of LINKTO38 from a dict
linkto38_from_dict = LINKTO38.from_dict(linkto38_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


