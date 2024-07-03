# AnalysisSetDonorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**taxa** | **str** | The species of the organism. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**url** | **str** | An external resource with additional information. | [optional] 
**documents** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | [optional] 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | [optional] 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '12']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF donors. | [optional] 
**sex** | **str** | Sex of the donor. | [optional] [default to 'unspecified']
**phenotypic_features** | [**List[RodentDonorPhenotypicFeaturesInner]**](RodentDonorPhenotypicFeaturesInner.md) | A list of associated phenotypic features of the donor. | [optional] 
**virtual** | **bool** | Virtual donors are not representing actual human or model organism donors, samples coming from which were used in experiments, but rather capturing metadata about hypothetical donors that the reported analysis results are relevant for. | [optional] [default to False]
**related_donors** | [**List[RelatedDonor]**](RelatedDonor.md) | Familial relations of this donor. | [optional] 
**ethnicities** | **List[str]** | Ethnicity of the donor. | [optional] 
**human_donor_identifiers** | **List[str]** | Identifiers of this human donor. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**sources** | [**List[RodentDonorSourcesInner]**](RodentDonorSourcesInner.md) | The originating lab(s) or vendor(s). | [optional] 
**lot_id** | **str** | The lot identifier provided by the originating lab or vendor. | [optional] 
**product_id** | **str** | The product identifier provided by the originating lab or vendor. | [optional] 
**strain_background** | **str** | The specific parent strain designation of a non-human donor. | [optional] 
**strain** | **str** | The specific strain designation of a non-human donor. | [optional] 
**genotype** | **str** | The genotype of the strain according to accepted nomenclature conventions. | [optional] 
**individual_rodent** | **bool** | This rodent donor represents an individual rodent. | [optional] [default to False]
**rodent_identifier** | **str** | The identifier for this individual rodent donor. | [optional] 

## Example

```python
from openapi_client.models.analysis_set_donors_inner import AnalysisSetDonorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalysisSetDonorsInner from a JSON string
analysis_set_donors_inner_instance = AnalysisSetDonorsInner.from_json(json)
# print the JSON string representation of the object
print(AnalysisSetDonorsInner.to_json())

# convert the object into a dict
analysis_set_donors_inner_dict = analysis_set_donors_inner_instance.to_dict()
# create an instance of AnalysisSetDonorsInner from a dict
analysis_set_donors_inner_from_dict = AnalysisSetDonorsInner.from_dict(analysis_set_donors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


