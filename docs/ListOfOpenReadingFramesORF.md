# ListOfOpenReadingFramesORF


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '2']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy**](SubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**lab** | [**Lab1**](Lab1.md) |  | 
**award** | [**Award1**](Award1.md) |  | 
**orf_id** | **str** | Open reading frame ID. | 
**gene** | [**List[ENSEMBLGeneID]**](ENSEMBLGeneID.md) | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | 
**protein_id** | **str** | ENSEMBL ProteinID of official nomenclature approved protein. The ProteinID does not include the current version number suffix. | [optional] 
**dbxrefs** | **List[str]** | Unique identifiers from the hORFeome database | [optional] 
**pct_identical_protein** | **float** | The percentage of identical matches to Ensembl protein. | [optional] 
**pct_coverage_protein** | **float** | The percentage of ORF covered by Ensembl protein. | [optional] 
**pct_coverage_orf** | **float** | The percentage of Ensembl protein covered by ORF. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.list_of_open_reading_frames_orf import ListOfOpenReadingFramesORF

# TODO update the JSON string below
json = "{}"
# create an instance of ListOfOpenReadingFramesORF from a JSON string
list_of_open_reading_frames_orf_instance = ListOfOpenReadingFramesORF.from_json(json)
# print the JSON string representation of the object
print(ListOfOpenReadingFramesORF.to_json())

# convert the object into a dict
list_of_open_reading_frames_orf_dict = list_of_open_reading_frames_orf_instance.to_dict()
# create an instance of ListOfOpenReadingFramesORF from a dict
list_of_open_reading_frames_orf_from_dict = ListOfOpenReadingFramesORF.from_dict(list_of_open_reading_frames_orf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


