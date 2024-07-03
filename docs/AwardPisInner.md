# AwardPisInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the metadata object. | [optional] [default to 'current']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '5']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**email** | **str** | The email associated with the user&#39;s account. | 
**first_name** | **str** | The user&#39;s first (given) name. | 
**last_name** | **str** | The user&#39;s last (family) name. | 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | [optional] 
**submits_for** | [**List[UserSubmitsForInner]**](UserSubmitsForInner.md) | Labs user is authorized to submit data for. | [optional] 
**groups** | **List[str]** | Additional access control groups | [optional] 
**viewing_groups** | **List[str]** | The group that determines which set of data the user has permission to view. | [optional] 
**job_title** | **str** | The role of the user in their lab or organization. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**title** | **str** | The full name of the user. | [optional] 

## Example

```python
from openapi_client.models.award_pis_inner import AwardPisInner

# TODO update the JSON string below
json = "{}"
# create an instance of AwardPisInner from a JSON string
award_pis_inner_instance = AwardPisInner.from_json(json)
# print the JSON string representation of the object
print(AwardPisInner.to_json())

# convert the object into a dict
award_pis_inner_dict = award_pis_inner_instance.to_dict()
# create an instance of AwardPisInner from a dict
award_pis_inner_from_dict = AwardPisInner.from_dict(award_pis_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


