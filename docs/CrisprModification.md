# CrisprModification

A CRISPR modification altering sample genomic material. For example, CRISPRi dCas9-KRAB modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**sources** | [**List[RodentDonorSourcesInner]**](RodentDonorSourcesInner.md) | The originating lab(s) or vendor(s). | [optional] 
**lot_id** | **str** | The lot identifier provided by the originating lab or vendor. | [optional] 
**product_id** | **str** | The product or catalog identifier provided following deposition to addgene.org. | [optional] 
**documents** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '2']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**cas** | **str** | The name of the CRISPR associated protein used in the modification. | 
**fused_domain** | **str** | The name of the molecule fused to a Cas protein. | [optional] 
**modality** | **str** | The purpose or intended effect of a CRISPR modification. | 
**tagged_protein** | [**BiomarkerGene**](BiomarkerGene.md) |  | [optional] 
**cas_species** | **str** | The originating species of the Cas nuclease. | 
**activated** | **bool** | A boolean indicating whether the modification has been activated by a chemical agent. | [optional] 
**activating_agent_term_id** | **str** | The CHEBI identifier for the activating agent of the modification. | [optional] 
**activating_agent_term_name** | **str** | The CHEBI name for the activating agent of the modification. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crispr_modification import CrisprModification

# TODO update the JSON string below
json = "{}"
# create an instance of CrisprModification from a JSON string
crispr_modification_instance = CrisprModification.from_json(json)
# print the JSON string representation of the object
print(CrisprModification.to_json())

# convert the object into a dict
crispr_modification_dict = crispr_modification_instance.to_dict()
# create an instance of CrisprModification from a dict
crispr_modification_from_dict = CrisprModification.from_dict(crispr_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


