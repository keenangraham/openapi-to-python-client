# LargeScaleGeneList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlled_access** | **bool** | Boolean value, indicating the file being controlled access, if true. | 
**anvil_url** | **str** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**assembly** | **str** | Genome assembly applicable for the tabular data. | [optional] 
**release_timestamp** | **datetime** | The date the object was released. | [optional] 
**file_format_type** | **str** | The subtype of bed files. | [optional] 
**transcriptome_annotation** | **str** | The annotation and version of the reference resource. | [optional] 
**documents** | [**List[Document2]**](Document2.md) | Documents that provide additional information (not data file). | [optional] 
**lab** | [**Lab1**](Lab1.md) |  | 
**award** | [**Award1**](Award1.md) |  | 
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
**submitted_by** | [**SubmittedBy**](SubmittedBy.md) |  | [optional] 
**submitter_comment** | **str** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **str** | A plain text description of the object. | [optional] 
**content_md5sum** | **str** | The MD5sum of the uncompressed file. | [optional] 
**content_type** | **str** | The type of content in the file. | 
**dbxrefs** | **List[str]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects. | [optional] 
**derived_from** | [**List[FileDerivedFrom]**](FileDerivedFrom.md) | The files participating as inputs into software to produce this output file. | [optional] 
**file_format** | **str** | The file format or extension of the file. | 
**file_format_specifications** | [**List[FileFormatSpecificationsDocument]**](FileFormatSpecificationsDocument.md) | Document that further explains the file format. | [optional] 
**file_set** | [**FileSet**](FileSet.md) |  | 
**file_size** | **int** | File size specified in bytes. | [optional] 
**md5sum** | **str** | The md5sum of the file being transferred. | 
**submitted_file_name** | **str** | Original name of the file. | [optional] 
**upload_status** | **str** | The upload/validation status of the file. | [optional] [default to 'pending']
**validation_error_detail** | **str** | Explanation of why the file failed the automated content checks. | [optional] 
**source_url** | **str** | Link to external resource, such as NCBI or GENCODE, where the reference data was obtained. | [optional] 
**sources** | [**List[Source1]**](Source1.md) | The originating lab(s) or vendor(s). | [optional] 
**external** | **bool** | Indicates whether the file was obtained from an external, non-IGVF source. | [optional] [default to False]
**external_id** | **str** | A unique identifier for the file at its original source. | [optional] 
**id** | **str** |  | [optional] 
**type** | **List[str]** |  | [optional] 
**summary** | **str** | A summary of the object. | [optional] 
**integrated_in** | **List[object]** | Construct library set(s) that this file was used for in insert design. | [optional] 
**gene_list_for** | **List[object]** | File Set(s) that this file is a gene list for. | [optional] 
**loci_list_for** | **List[object]** | File Set(s) that this file is a loci list for. | [optional] 
**href** | **str** | The download path to obtain file. | [optional] 
**s3_uri** | **str** | The S3 URI of public file object. | [optional] 
**upload_credentials** | **object** | The upload credentials for S3 to submit the file content. | [optional] 

## Example

```python
from openapi_client.models.large_scale_gene_list import LargeScaleGeneList

# TODO update the JSON string below
json = "{}"
# create an instance of LargeScaleGeneList from a JSON string
large_scale_gene_list_instance = LargeScaleGeneList.from_json(json)
# print the JSON string representation of the object
print(LargeScaleGeneList.to_json())

# convert the object into a dict
large_scale_gene_list_dict = large_scale_gene_list_instance.to_dict()
# create an instance of LargeScaleGeneList from a dict
large_scale_gene_list_from_dict = LargeScaleGeneList.from_dict(large_scale_gene_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


