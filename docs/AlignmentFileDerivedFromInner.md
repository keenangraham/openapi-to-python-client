# AlignmentFileDerivedFromInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlled_access** | **bool** | Boolean value, indicating the file being controlled access, if true. | [optional] 
**anvil_url** | **str** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**transcriptome_annotation** | **str** | The annotation and version of the reference resource. | [optional] 
**assembly** | **str** | Genome assembly applicable for the tabular data. | [optional] 
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**reference_files** | [**List[AlignmentFileReferenceFilesInner]**](AlignmentFileReferenceFilesInner.md) | Link to the reference files used to generate this file. | [optional] 
**documents** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**AnalysisStepLab**](AnalysisStepLab.md) |  | [optional] 
**award** | [**AnalysisStepAward**](AnalysisStepAward.md) |  | [optional] 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '11']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | [**AccessKeySubmittedBy**](AccessKeySubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**content_md5sum** | **str** | The MD5sum of the uncompressed file. | [optional] 
**content_type** | **str** | The type of content in the file. | [optional] 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects. | [optional] 
**derived_from** | [**List[AlignmentFileDerivedFromInner]**](AlignmentFileDerivedFromInner.md) | The files participating as inputs into software to produce this output file. | [optional] 
**file_format** | **str** | The file format or extension of the file. | [optional] 
**file_format_specifications** | [**List[RodentDonorDocumentsInner]**](RodentDonorDocumentsInner.md) | Document that further explains the file format. | [optional] 
**file_set** | [**AlignmentFileFileSet**](AlignmentFileFileSet.md) |  | [optional] 
**file_size** | **int** | File size specified in bytes. | [optional] 
**md5sum** | **str** | The md5sum of the file being transferred. | [optional] 
**submitted_file_name** | **str** | Original name of the file. | [optional] 
**upload_status** | **str** | The upload/validation status of the file. | [optional] [default to 'pending']
**validation_error_detail** | **str** | Explanation of why the file failed the automated content checks. | [optional] 
**redacted** | **bool** | Indicates whether the alignments data have been sanitized (redacted) to prevent leakage of private and potentially identifying genomic information. | [optional] 
**filtered** | **bool** | Indicates if the signal file is filtered. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**integrated_in** | **List[object]** | Construct library set(s) that this file was used for in insert design. | [optional] 
**gene_list_for** | **List[object]** | File Set(s) that this file is a gene list for. | [optional] 
**loci_list_for** | **List[object]** | File Set(s) that this file is a loci list for. | [optional] 
**href** | **str** | The download path to obtain file. | [optional] 
**s3_uri** | **str** | The S3 URI of public file object. | [optional] 
**upload_credentials** | **object** | The upload credentials for S3 to submit the file content. | [optional] 
**content_summary** | **str** | A summary of the data in the signal file. | [optional] 
**seqspec_of** | [**List[ConfigurationFileSeqspecOfInner]**](ConfigurationFileSeqspecOfInner.md) | Sequence files this file is a seqspec of. | [optional] 
**file_format_type** | **str** | The subtype of bed files. | [optional] 
**dimension1** | **str** | First dimension of the matrix. | [optional] 
**dimension2** | **str** | Second dimension of the matrix. | [optional] 
**source_url** | **str** | Link to external resource, such as NCBI or GENCODE, where the reference data was obtained. | [optional] 
**sources** | [**List[RodentDonorSourcesInner]**](RodentDonorSourcesInner.md) | The originating lab(s) or vendor(s). | [optional] 
**external** | **bool** | Indicates whether the file was obtained from an external, non-IGVF source. | [optional] [default to False]
**external_id** | **str** | A unique identifier for the file at its original source. | [optional] 
**flowcell_id** | **str** | The alphanumeric identifier for the flowcell of a sequencing machine. | [optional] 
**lane** | **int** | An integer identifying the lane of a sequencing machine. | [optional] 
**read_count** | **int** | Number of reads in a fastq file. | [optional] 
**minimum_read_length** | **int** | For high-throughput sequencing, the minimum number of contiguous nucleotides determined by sequencing. | [optional] 
**maximum_read_length** | **int** | For high-throughput sequencing, the maximum number of contiguous nucleotides determined by sequencing. | [optional] 
**mean_read_length** | **float** | For high-throughput sequencing, the mean number of contiguous nucleotides determined by sequencing. | [optional] 
**sequencing_platform** | [**SequenceFileSequencingPlatform**](SequenceFileSequencingPlatform.md) |  | [optional] 
**sequencing_kit** | **str** | A reagent kit used with a library to prepare it for sequencing. | [optional] 
**sequencing_run** | **int** | An ordinal number indicating which sequencing run of the associated library that the file belongs to. | [optional] 
**illumina_read_type** | **str** | The read type of the file. Relevant only for files produced using an Illumina sequencing platform. | [optional] 
**index** | **str** | An Illumina index associated with the file. | [optional] 
**seqspecs** | **List[object]** | Link(s) to the associated seqspec YAML configuration file(s). | [optional] 
**strand_specificity** | **str** | The strandedness of the signal file: plus, minus, or unstranded. | [optional] 
**normalized** | **bool** | Indicates if the signal file is normalized. | [optional] 
**start_view_position** | **str** | The 0-based coordinate for the default starting position when viewing the signal in a genome browser. | [optional] 

## Example

```python
from openapi_client.models.alignment_file_derived_from_inner import AlignmentFileDerivedFromInner

# TODO update the JSON string below
json = "{}"
# create an instance of AlignmentFileDerivedFromInner from a JSON string
alignment_file_derived_from_inner_instance = AlignmentFileDerivedFromInner.from_json(json)
# print the JSON string representation of the object
print(AlignmentFileDerivedFromInner.to_json())

# convert the object into a dict
alignment_file_derived_from_inner_dict = alignment_file_derived_from_inner_instance.to_dict()
# create an instance of AlignmentFileDerivedFromInner from a dict
alignment_file_derived_from_inner_from_dict = AlignmentFileDerivedFromInner.from_dict(alignment_file_derived_from_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


