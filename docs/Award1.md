# Award1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the metadata object. | [optional] [default to 'current']
**url** | **str** | An external resource with additional information. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '5']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy**](SubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**title** | **str** | The grant name from the NIH database, if applicable. | 
**name** | **str** | The official grant number from the NIH database, if applicable | 
**start_date** | **date** | The date when the award begins. | [optional] 
**end_date** | **date** | The date when the award concludes. | [optional] 
**pis** | [**List[Investigator]**](Investigator.md) | Principal Investigator(s) of the grant. | [optional] 
**contact_pi** | [**ContactPI**](ContactPI.md) |  | [optional] 
**project** | **str** | The collection of biological data related to a single initiative, originating from a consortium. | 
**viewing_group** | **str** | The group that determines which set of data the user has permission to view. | [optional] 
**component** | **str** | The project component the award is associated with. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.award1 import Award1

# TODO update the JSON string below
json = "{}"
# create an instance of Award1 from a JSON string
award1_instance = Award1.from_json(json)
# print the JSON string representation of the object
print(Award1.to_json())

# convert the object into a dict
award1_dict = award1_instance.to_dict()
# create an instance of Award1 from a dict
award1_from_dict = Award1.from_dict(award1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


