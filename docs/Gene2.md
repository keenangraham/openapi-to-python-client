# Gene2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**transcriptome_annotation** | **str** | The annotation and version of the reference resource. | 
**taxa** | **str** | The species of the organism. | 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '9']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy1**](SubmittedBy1.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**geneid** | **str** | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | 
**symbol** | **str** | Gene symbol approved by the official nomenclature. | 
**name** | **str** | The full gene name preferably approved by the official nomenclature. | [optional] 
**synonyms** | **List[str]** | Alternative symbols that have been used to refer to the gene. | [optional] 
**dbxrefs** | **List[str]** | Unique identifiers from external resources. | 
**locations** | [**List[GeneLocation]**](GeneLocation.md) | Gene locations specified using 1-based, closed coordinates for different versions of reference genome assemblies. | [optional] 
**version_number** | **str** | Current ENSEMBL GeneID version number of the gene. | 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**title** | **str** |  | [optional] 
**geneid_with_version** | **str** | The ENSEMBL GeneID concatenated with its version number. | [optional] 

## Example

```python
from openapi_client.models.gene2 import Gene2

# TODO update the JSON string below
json = "{}"
# create an instance of Gene2 from a JSON string
gene2_instance = Gene2.from_json(json)
# print the JSON string representation of the object
print(Gene2.to_json())

# convert the object into a dict
gene2_dict = gene2_instance.to_dict()
# create an instance of Gene2 from a dict
gene2_from_dict = Gene2.from_dict(gene2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

