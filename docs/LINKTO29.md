# LINKTO29


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
**url** | **str** | An external resource with additional information. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '7']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**LINKTO**](LINKTO.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets. | [optional] 
**samples** | [**List[LINKTO20]**](LINKTO20.md) | The sample(s) associated with this file set. | [optional] 
**donors** | [**List[LINKTO21]**](LINKTO21.md) | The donors of the samples associated with this auxiliary set. | [optional] 
**file_set_type** | **str** | The category that best describes this auxiliary file set. | 
**library_construction_platform** | [**LINKTO19**](LINKTO19.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** |  | [optional] 
**files** | **List[object]** | The files associated with this file set. | [optional] 
**control_for** | **List[object]** | The file sets for which this file set is a control. | [optional] 
**submitted_files_timestamp** | **datetime** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**input_file_set_for** | **List[object]** | The Analysis Sets that use this File Set as an input. | [optional] 
**measurement_sets** | **List[object]** | The measurement sets that link to this auxiliary set. | [optional] 

## Example

```python
from openapi_client.models.linkto29 import LINKTO29

# TODO update the JSON string below
json = "{}"
# create an instance of LINKTO29 from a JSON string
linkto29_instance = LINKTO29.from_json(json)
# print the JSON string representation of the object
print(LINKTO29.to_json())

# convert the object into a dict
linkto29_dict = linkto29_instance.to_dict()
# create an instance of LINKTO29 from a dict
linkto29_from_dict = LINKTO29.from_dict(linkto29_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

