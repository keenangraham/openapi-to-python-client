# LINKTO2


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
**submitted_by** | [**LINKTO**](LINKTO.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**title** | **str** | The grant name from the NIH database, if applicable. | 
**name** | **str** | The official grant number from the NIH database, if applicable | 
**start_date** | **date** | The date when the award begins. | [optional] 
**end_date** | **date** | The date when the award concludes. | [optional] 
**pis** | [**List[LINKTO]**](LINKTO.md) | Principal Investigator(s) of the grant. | [optional] 
**contact_pi** | [**LINKTO**](LINKTO.md) |  | [optional] 
**project** | **str** | The collection of biological data related to a single initiative, originating from a consortium. | 
**viewing_group** | **str** | The group that determines which set of data the user has permission to view. | [optional] 
**component** | **str** | The project component the award is associated with. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.linkto2 import LINKTO2

# TODO update the JSON string below
json = "{}"
# create an instance of LINKTO2 from a JSON string
linkto2_instance = LINKTO2.from_json(json)
# print the JSON string representation of the object
print(LINKTO2.to_json())

# convert the object into a dict
linkto2_dict = linkto2_instance.to_dict()
# create an instance of LINKTO2 from a dict
linkto2_from_dict = LINKTO2.from_dict(linkto2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


