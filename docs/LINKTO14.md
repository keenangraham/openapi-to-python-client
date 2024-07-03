# LINKTO14


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**LINKTO1**](LINKTO1.md) |  | 
**award** | [**LINKTO2**](LINKTO2.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '3']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**LINKTO**](LINKTO.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**feature** | [**LINKTO34**](LINKTO34.md) |  | 
**quantity** | **float** | A quantity associated with the phenotypic feature, if applicable. | [optional] 
**quantity_units** | **str** | The unit of measurement for a quantity associated with the phenotypic feature. | [optional] 
**observation_date** | **date** | The date the feature was observed or measured. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.linkto14 import LINKTO14

# TODO update the JSON string below
json = "{}"
# create an instance of LINKTO14 from a JSON string
linkto14_instance = LINKTO14.from_json(json)
# print the JSON string representation of the object
print(LINKTO14.to_json())

# convert the object into a dict
linkto14_dict = linkto14_instance.to_dict()
# create an instance of LINKTO14 from a dict
linkto14_from_dict = LINKTO14.from_dict(linkto14_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


