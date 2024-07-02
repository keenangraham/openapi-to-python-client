# AlignmentFile

A file containing alignment data in bam format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlled_access** | **bool** | Boolean value, indicating the file being controlled access, if true. | 
**anvil_url** | **str** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**transcriptome_annotation** | **str** | The annotation and version of the reference resource. | [optional] 
**assembly** | **str** | Genome assembly applicable for the annotation data. | [optional] 
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**reference_files** | **List[str]** | Link to the reference files used to generate this file. | 
**documents** | **List[str]** | Documents that provide additional information (not data file). | [optional] 
**lab** | **str** | Lab associated with the submission. | 
**award** | **str** | Grant associated with the submission. | 
**accession** | **str** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternate_accessions** | **List[str]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **List[str]** | Some samples are part of particular data collections. | [optional] 
**status** | **str** | The status of the metadata object. | [optional] [default to 'in progress']
**revoke_detail** | **str** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schema_version** | **str** | The version of the JSON schema that the server uses to validate the object. | [optional] [default to '10']
**uuid** | **str** | The unique identifier associated with every object. | [optional] 
**notes** | **str** | DACC internal notes. | [optional] 
**aliases** | **List[str]** | Lab specific identifiers to reference an object. | [optional] 
**creation_timestamp** | **datetime** | The date the object was created. | [optional] 
**submitted_by** | **str** | The user who submitted the object. | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**content_md5sum** | **str** | The MD5sum of the uncompressed file. | [optional] 
**content_type** | **str** | The type of content in the file. | 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects. | [optional] 
**derived_from** | **List[str]** | The files participating as inputs into software to produce this output file. | [optional] 
**file_format** | **str** | The file format or extension of the file. | 
**file_format_specifications** | **List[str]** | Document that further explains the file format. | [optional] 
**file_set** | **str** | The file set that this file belongs to. | 
**file_size** | **int** | File size specified in bytes. | [optional] 
**md5sum** | **str** | The md5sum of the file being transferred. | 
**submitted_file_name** | **str** | Original name of the file. | [optional] 
**upload_status** | **str** | The upload/validation status of the file. | [optional] [default to 'pending']
**validation_error_detail** | **str** | Explanation of why the file failed the automated content checks. | [optional] 
**redacted** | **bool** | Indicates whether the alignments data have been sanitized (redacted) to prevent leakage of private and potentially identifying genomic information. | 
**filtered** | **bool** | Indicates whether reads that did not pass a filtering step, such as PCR duplicates, have been removed from the file. | 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**integrated_in** | [**List[IntegratedIn]**](IntegratedIn.md) | Construct library set(s) that this file was used for in insert design. | [optional] 
**gene_list_for** | [**List[GeneListFor]**](GeneListFor.md) | File Set(s) that this file is a gene list for. | [optional] 
**loci_list_for** | [**List[LociListFor]**](LociListFor.md) | File Set(s) that this file is a loci list for. | [optional] 
**href** | **str** | The download path to obtain file. | [optional] 
**s3_uri** | **str** | The S3 URI of public file object. | [optional] 
**upload_credentials** | **object** | The upload credentials for S3 to submit the file content. | [optional] 
**content_summary** | **str** | A summary of the data in the alignment file. | [optional] 

## Example

```python
from openapi_client.models.alignment_file import AlignmentFile

# TODO update the JSON string below
json = "{}"
# create an instance of AlignmentFile from a JSON string
alignment_file_instance = AlignmentFile.from_json(json)
# print the JSON string representation of the object
print(AlignmentFile.to_json())

# convert the object into a dict
alignment_file_dict = alignment_file_instance.to_dict()
# create an instance of AlignmentFile from a dict
alignment_file_from_dict = AlignmentFile.from_dict(alignment_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


