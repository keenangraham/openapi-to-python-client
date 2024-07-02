# ConstructLibrarySet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**small_scale_loci_list** | [**List[Locus]**](Locus.md) | A small scale (&lt;&#x3D;100) list of specific chromosomal region(s). | [optional] 
**large_scale_loci_list** | **str** | A large scale list (&gt;100) of specific chromosomal regions. | [optional] 
**small_scale_gene_list** | **List[str]** | The specific, small scale list of (&lt;&#x3D;100) gene(s) this construct library was designed to target. | [optional] 
**large_scale_gene_list** | **str** | The large scale list of (&gt;100 genes) this construct library was designed to target. | [optional] 
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**publication_identifiers** | **List[str]** | The publication identifiers that provide more information about the object. | [optional] 
**documents** | **List[str]** | Documents that provide additional information (not data file). | [optional] 
**sources** | **List[str]** | The originating lab(s) or vendor(s). | [optional] 
**lot_id** | **str** | The lot identifier provided by the originating lab or vendor. | [optional] 
**product_id** | **str** | The product or catalog identifier provided following deposition to addgene.org. | [optional] 
**lab** | **str** | Lab associated with the submission. | [optional] 
**award** | **str** | Grant associated with the submission. | [optional] 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '8']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | **str** | The user who submitted the object. | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**file_set_type** | **str** | The type or category of this construct library set. | [optional] 
**scope** | **str** | The scope or scale that this construct library is designed to target. If the scope is across gene(s) or loci, these will need to be specified in the genes or loci property. If exon is specified, an exon identifier and the associated gene will need to be listed in exon and genes properties. If tile is specified, a tile identifier, start and stop coordinates, and the associated gene will need to be listed in tile and small_scale_gene_list or large_scale_gene_list properties. | [optional] 
**selection_criteria** | **List[str]** | The criteria used to select the sequence material cloned into the library. | [optional] 
**integrated_content_files** | **List[str]** | The files containing sequence material of interest either used for insert design or directly cloned into vectors in this library. | [optional] 
**associated_phenotypes** | **List[str]** | Ontological terms for diseases or phenotypes associated with the sequence material cloned in this construct library. | [optional] 
**orf_list** | **List[str]** | List of Open Reading Frame this construct library was designed to target. | [optional] 
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
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** |  | [optional] 
**files** | **List[object]** | The files associated with this file set. | [optional] 
**control_for** | **List[object]** | The file sets for which this file set is a control. | [optional] 
**submitted_files_timestamp** | **datetime** | The timestamp the first file object in the file_set or associated auxiliary sets was created. | [optional] 
**input_file_set_for** | **List[object]** | The Analysis Sets that use this File Set as an input. | [optional] 
**applied_to_samples** | **List[object]** | The samples that link to this construct library set. | [optional] 

## Example

```python
from openapi_client.models.construct_library_set import ConstructLibrarySet

# TODO update the JSON string below
json = "{}"
# create an instance of ConstructLibrarySet from a JSON string
construct_library_set_instance = ConstructLibrarySet.from_json(json)
# print the JSON string representation of the object
print(ConstructLibrarySet.to_json())

# convert the object into a dict
construct_library_set_dict = construct_library_set_instance.to_dict()
# create an instance of ConstructLibrarySet from a dict
construct_library_set_from_dict = ConstructLibrarySet.from_dict(construct_library_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


