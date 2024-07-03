# LINKTO31


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**lab** | [**OneOfLabstring**](OneOfLabstring.md) |  | [optional] 
**award** | [**OneOfAwardstring**](OneOfAwardstring.md) |  | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '5']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**OneOfUserstring**](OneOfUserstring.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**software** | [**OneOfSoftwarestring**](OneOfSoftwarestring.md) |  | [optional] 
**version** | **str** | The version of a particular software. | [optional] 
**download_id** | **str** | The MD5 checksum, SHA-1 commit ID, image hash, or similar permanent identifier of the particular version of software used. | [optional] 
**downloaded_url** | **str** | An external resource to track the version of the software downloaded. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**name** | **str** | A unique identifier for a software version. | [optional] 

## Example

```python
from openapi_client.models.linkto31 import LINKTO31

# TODO update the JSON string below
json = "{}"
# create an instance of LINKTO31 from a JSON string
linkto31_instance = LINKTO31.from_json(json)
# print the JSON string representation of the object
print(LINKTO31.to_json())

# convert the object into a dict
linkto31_dict = linkto31_instance.to_dict()
# create an instance of LINKTO31 from a dict
linkto31_from_dict = LINKTO31.from_dict(linkto31_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


