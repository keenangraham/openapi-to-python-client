# MeasurementSetRelatedMultiomeDatasetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '17']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets. | [optional] 
**samples** | [**List[AnalysisSetSamplesInner]**](AnalysisSetSamplesInner.md) | The sample(s) associated with this file set. | 
**donors** | [**List[AnalysisSetDonorsInner]**](AnalysisSetDonorsInner.md) | The donors of the samples associated with this measurement set. | [optional] 
**file_set_type** | **str** | The category that best describes this measurement set. | [default to 'experimental data']
**assay_term** | [**MeasurementSetAssayTerm**](MeasurementSetAssayTerm.md) |  | 
**library_construction_platform** | [**SequenceFileSequencingPlatform**](SequenceFileSequencingPlatform.md) |  | [optional] 
**protocols** | **List[str]** | Links to the protocol(s) for conducting the assay on Protocols.io. | [optional] 
**preferred_assay_title** | **str** | The custom lab preferred label for the experiment performed in this measurement set. | [optional] 
**multiome_size** | **int** | The number of datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**control_file_sets** | [**List[AlignmentFileFileSet]**](AlignmentFileFileSet.md) | File sets that can serve as scientific controls for this measurement_set. | [optional] 
**sequencing_library_types** | **List[str]** | Description of the libraries sequenced in this measurement set. | [optional] 
**auxiliary_sets** | [**List[MeasurementSetAuxiliarySetsInner]**](MeasurementSetAuxiliarySetsInner.md) | The auxiliary sets of files produced alongside raw data from this measurement set. | [optional] 
**external_image_url** | **str** | Links to the external site where images produced by this measurement are stored. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** |  | [optional] 
**files** | **List[object]** | The files associated with this file set. | [optional] 
**control_for** | **List[object]** | The file sets for which this file set is a control. | [optional] 
**submitted_files_timestamp** | **datetime** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**input_file_set_for** | **List[object]** | The Analysis Sets that use this File Set as an input. | [optional] 
**related_multiome_datasets** | [**List[MeasurementSetRelatedMultiomeDatasetsInner]**](MeasurementSetRelatedMultiomeDatasetsInner.md) | Related datasets included in the multiome experiment this measurement set is a part of. | [optional] 

## Example

```python
from openapi_client.models.measurement_set_related_multiome_datasets_inner import MeasurementSetRelatedMultiomeDatasetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of MeasurementSetRelatedMultiomeDatasetsInner from a JSON string
measurement_set_related_multiome_datasets_inner_instance = MeasurementSetRelatedMultiomeDatasetsInner.from_json(json)
# print the JSON string representation of the object
print(MeasurementSetRelatedMultiomeDatasetsInner.to_json())

# convert the object into a dict
measurement_set_related_multiome_datasets_inner_dict = measurement_set_related_multiome_datasets_inner_instance.to_dict()
# create an instance of MeasurementSetRelatedMultiomeDatasetsInner from a dict
measurement_set_related_multiome_datasets_inner_from_dict = MeasurementSetRelatedMultiomeDatasetsInner.from_dict(measurement_set_related_multiome_datasets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


