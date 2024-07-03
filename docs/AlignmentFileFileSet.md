# AlignmentFileFileSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | [**List[DocumentsInner]**](DocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**OneOfLabstring**](OneOfLabstring.md) |  | 
**award** | [**OneOfAwardstring**](OneOfAwardstring.md) |  | 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '7']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**OneOfUserstring**](OneOfUserstring.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file sets. | [optional] 
**samples** | [**List[OneOfInVitroSystemMultiplexedSamplePrimaryCellTechnicalSampleTissueWholeOrganismstring]**](OneOfInVitroSystemMultiplexedSamplePrimaryCellTechnicalSampleTissueWholeOrganismstring.md) | The sample(s) associated with this file set. | 
**donors** | [**List[OneOfHumanDonorRodentDonorstring]**](OneOfHumanDonorRodentDonorstring.md) | The donor(s) associated with this file set. | 
**file_set_type** | **str** | The category that best describes this prediction set. | 
**input_file_sets** | [**List[AlignmentFileFileSet]**](AlignmentFileFileSet.md) | The file set(s) that served as inputs for the derivation of this model set. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**files** | **List[object]** | The files associated with this file set. | [optional] 
**control_for** | **List[object]** | The file sets for which this file set is a control. | [optional] 
**submitted_files_timestamp** | **datetime** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**input_file_set_for** | **List[object]** | The Analysis Sets that use this File Set as an input. | [optional] 
**assay_titles** | **List[str]** | Title(s) of assays that produced data analyzed in the analysis set. | [optional] 
**url** | **str** | An external resource with additional information. | [optional] 
**library_construction_platform** | [**SequenceFileSequencingPlatform**](SequenceFileSequencingPlatform.md) |  | [optional] 
**measurement_sets** | **List[object]** | The measurement sets that link to this auxiliary set. | [optional] 
**small_scale_loci_list** | **List[object]** | A small scale (&lt;&#x3D;100) list of specific chromosomal region(s). | [optional] 
**large_scale_loci_list** | [**OneOfReferenceFileTabularFilestring**](OneOfReferenceFileTabularFilestring.md) |  | [optional] 
**small_scale_gene_list** | [**List[OneOfGenestring]**](OneOfGenestring.md) | The specific, small scale list of (&lt;&#x3D;100) gene(s) this prediction set targets. | [optional] 
**large_scale_gene_list** | [**OneOfReferenceFileTabularFilestring**](OneOfReferenceFileTabularFilestring.md) |  | [optional] 
**sources** | [**List[SourcesInner]**](SourcesInner.md) | The originating lab(s) or vendor(s). | [optional] 
**lot_id** | **str** | The lot identifier provided by the originating lab or vendor. | [optional] 
**product_id** | **str** | The product or catalog identifier provided following deposition to addgene.org. | [optional] 
**scope** | **str** | The scope or scale that this prediction set is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. | [optional] 
**selection_criteria** | **List[str]** | The criteria used to select the sequence material cloned into the library. | [optional] 
**integrated_content_files** | [**List[IntegratedContentFilesInner]**](IntegratedContentFilesInner.md) | The files containing sequence material of interest either used for insert design or directly cloned into vectors in this library. | [optional] 
**associated_phenotypes** | [**List[AssociatedPhenotypesInner]**](AssociatedPhenotypesInner.md) | Ontological terms for diseases or phenotypes associated with the sequence material cloned in this construct library. | [optional] 
**orf_list** | [**List[ListOfOpenReadingFramesORFInner]**](ListOfOpenReadingFramesORFInner.md) | List of Open Reading Frame this construct library was designed to target. | [optional] 
**exon** | **str** | An identifier in plain text for the specific exon in an expression vector library. The associated gene must be listed in the small_scale_gene_list property. | [optional] 
**tile** | [**Tile**](Tile.md) |  | [optional] 
**guide_type** | **str** | The design of guides used in a CRISPR library, paired-guide (pgRNA) or single-guide (sgRNA). | [optional] 
**tiling_modality** | **str** | The tiling modality of guides across elements or loci in a CRISPR library. | [optional] 
**average_guide_coverage** | **float** | The average number of guides targeting each element of interest in the library. | [optional] 
**lower_bound_guide_coverage** | **int** | Lower bound of the number of guides targeting each element of interest in the library. | [optional] 
**upper_bound_guide_coverage** | **int** | Upper bound of the number of guides targeting each element of interest in the library. | [optional] 
**average_insert_size** | **float** | The average size of the inserts cloned into vectors in the library. | [optional] 
**lower_bound_insert_size** | **int** | Lower bound of the size of the inserts cloned in vectors in the library. | [optional] 
**upper_bound_insert_size** | **int** | Upper bound of the size of the inserts cloned in vectors in the library. | [optional] 
**applied_to_samples** | **List[object]** | The samples that link to this construct library set. | [optional] 
**taxa** | **str** | The species of the organism. | [optional] 
**assemblies** | **List[str]** | The genome assemblies to which the referencing files in the file set are utilizing (e.g., GRCh38). | [optional] 
**transcriptome_annotations** | **List[str]** | The annotation versions of the reference resource. | [optional] 
**assay_term** | [**MeasurementSetAssayTerm**](MeasurementSetAssayTerm.md) |  | [optional] 
**protocols** | **List[str]** | Links to the protocol(s) for conducting the assay on Protocols.io. | [optional] 
**preferred_assay_title** | **str** | The custom lab preferred label for the experiment performed in this measurement set. | [optional] 
**multiome_size** | **int** | The number of datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**control_file_sets** | [**List[AlignmentFileFileSet]**](AlignmentFileFileSet.md) | File sets that can serve as scientific controls for this measurement_set. | [optional] 
**sequencing_library_types** | **List[str]** | Description of the libraries sequenced in this measurement set. | [optional] 
**auxiliary_sets** | [**List[MeasurementSetAuxiliarySetsInner]**](MeasurementSetAuxiliarySetsInner.md) | The auxiliary sets of files produced alongside raw data from this measurement set. | [optional] 
**external_image_url** | **str** | Links to the external site where images produced by this measurement are stored. | [optional] 
**related_multiome_datasets** | [**List[MeasurementSetRelatedMultiomeDatasetsInner]**](MeasurementSetRelatedMultiomeDatasetsInner.md) | Related datasets included in the multiome experiment this measurement set is a part of. | [optional] 
**model_name** | **str** | The custom lab name given to this predictive model set. | [optional] 
**model_version** | **str** | The semantic version number for this predictive model set. | [optional] 
**prediction_objects** | **List[str]** | The objects this predictive model set is targeting. | [optional] 
**model_zoo_location** | **str** | The link to the model on the Kipoi repository. | [optional] 
**software_version** | [**ModelSetSoftwareVersion**](ModelSetSoftwareVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.alignment_file_file_set import AlignmentFileFileSet

# TODO update the JSON string below
json = "{}"
# create an instance of AlignmentFileFileSet from a JSON string
alignment_file_file_set_instance = AlignmentFileFileSet.from_json(json)
# print the JSON string representation of the object
print(AlignmentFileFileSet.to_json())

# convert the object into a dict
alignment_file_file_set_dict = alignment_file_file_set_instance.to_dict()
# create an instance of AlignmentFileFileSet from a dict
alignment_file_file_set_from_dict = AlignmentFileFileSet.from_dict(alignment_file_file_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


