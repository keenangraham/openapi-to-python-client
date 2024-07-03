# RelatedDonorIdentifier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**taxa** | **str** | The species of the organism. | 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**url** | **str** | An external resource with additional information. | [optional] 
**documents** | [**List[Document1]**](Document1.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**Lab2**](Lab2.md) |  | 
**award** | [**Award2**](Award2.md) |  | 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '13']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**SubmittedBy1**](SubmittedBy1.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF donors. | [optional] 
**sex** | **str** | Sex of the donor. | [optional] [default to 'unspecified']
**phenotypic_features** | [**List[PhenotypicFeature]**](PhenotypicFeature.md) | A list of associated phenotypic features of the donor. | [optional] 
**virtual** | **bool** | Virtual donors are not representing actual human or model organism donors, samples coming from which were used in experiments, but rather capturing metadata about hypothetical donors that the reported analysis results are relevant for. | [optional] [default to False]
**related_donors** | [**List[RelatedDonor]**](RelatedDonor.md) | Familial relations of this donor. | [optional] 
**ethnicities** | **List[str]** | Ethnicity of the donor. | [optional] 
**human_donor_identifiers** | **List[str]** | Identifiers of this human donor. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 

## Example

```python
from openapi_client.models.related_donor_identifier import RelatedDonorIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of RelatedDonorIdentifier from a JSON string
related_donor_identifier_instance = RelatedDonorIdentifier.from_json(json)
# print the JSON string representation of the object
print(RelatedDonorIdentifier.to_json())

# convert the object into a dict
related_donor_identifier_dict = related_donor_identifier_instance.to_dict()
# create an instance of RelatedDonorIdentifier from a dict
related_donor_identifier_from_dict = RelatedDonorIdentifier.from_dict(related_donor_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


