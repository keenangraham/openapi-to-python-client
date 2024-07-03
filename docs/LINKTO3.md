# LINKTO3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | [**List[LINKTO13]**](LINKTO13.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**LINKTO1**](LINKTO1.md) |  | 
**award** | [**LINKTO2**](LINKTO2.md) |  | 
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
**submitted_by** | [**LINKTO**](LINKTO.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**name** | **str** | The preferred viewable name of the workflow. | 
**source_url** | **str** | An external resource to the code base of the workflow in github. | 
**workflow_repositories** | **List[str]** | Resources hosting the workflow. | [optional] 
**standards_page** | [**LINKTO47**](LINKTO47.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**analysis_steps** | **List[object]** | The analysis steps which are part of this workflow. | [optional] 

## Example

```python
from openapi_client.models.linkto3 import LINKTO3

# TODO update the JSON string below
json = "{}"
# create an instance of LINKTO3 from a JSON string
linkto3_instance = LINKTO3.from_json(json)
# print the JSON string representation of the object
print(LINKTO3.to_json())

# convert the object into a dict
linkto3_dict = linkto3_instance.to_dict()
# create an instance of LINKTO3 from a dict
linkto3_from_dict = LINKTO3.from_dict(linkto3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


