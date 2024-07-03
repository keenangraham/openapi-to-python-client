# AssociatedPhenotypesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '4']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**term_id** | **str** | An ontology term identifier describing a phenotype. | 
**term_name** | **str** | Ontology term describing a biological sample, assay, trait, or disease. | 
**deprecated_ntr_terms** | **List[str]** | A list of deprecated NTR terms previously associated with this ontology term. | [optional] 
**is_a** | [**List[AssayTermIsAInner]**](AssayTermIsAInner.md) | A list of ontology terms which are the nearest ancestor to this ontology term. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the ontology term. | [optional] 
**name** | **str** | A unique identifier for the ontology term, reformatted from the original term ID. | [optional] 
**synonyms** | **List[str]** | Synonyms for the term that have been recorded in an ontology. | [optional] 
**ancestors** | **List[str]** | List of term names of ontological terms that precede the given term in the ontological tree. These ancestor terms are typically more general ontological terms under which the term is classified. | [optional] 
**ontology** | **str** | The ontology in which the term is recorded. | [optional] 

## Example

```python
from openapi_client.models.associated_phenotypes_inner import AssociatedPhenotypesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AssociatedPhenotypesInner from a JSON string
associated_phenotypes_inner_instance = AssociatedPhenotypesInner.from_json(json)
# print the JSON string representation of the object
print(AssociatedPhenotypesInner.to_json())

# convert the object into a dict
associated_phenotypes_inner_dict = associated_phenotypes_inner_instance.to_dict()
# create an instance of AssociatedPhenotypesInner from a dict
associated_phenotypes_inner_from_dict = AssociatedPhenotypesInner.from_dict(associated_phenotypes_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


