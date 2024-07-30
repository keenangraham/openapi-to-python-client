# IgvfProjectApi.Gene

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**transcriptomeAnnotation** | **String** | The annotation and version of the reference resource. | [optional] 
**taxa** | **String** | The species of the organism. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**geneid** | **String** | ENSEMBL GeneID of official nomenclature approved gene. The GeneID does not include the current version number suffix. | [optional] 
**symbol** | **String** | Gene symbol approved by the official nomenclature. | [optional] 
**name** | **String** | The full gene name preferably approved by the official nomenclature. | [optional] 
**synonyms** | **[String]** | Alternative symbols that have been used to refer to the gene. | [optional] 
**dbxrefs** | **[String]** | Unique identifiers from external resources. | [optional] 
**locations** | [**[GeneLocation1]**](GeneLocation1.md) | Gene locations specified using 1-based, closed coordinates for different versions of reference genome assemblies. | [optional] 
**versionNumber** | **String** | Current ENSEMBL GeneID version number of the gene. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the object. | [optional] 
**title** | **String** |  | [optional] 
**geneidWithVersion** | **String** | The ENSEMBL GeneID concatenated with its version number. | [optional] 



## Enum: TranscriptomeAnnotationEnum


* `40` (value: `"GENCODE 40"`)

* `41` (value: `"GENCODE 41"`)

* `42` (value: `"GENCODE 42"`)

* `43` (value: `"GENCODE 43"`)

* `44` (value: `"GENCODE 44"`)

* `45` (value: `"GENCODE 45"`)

* `M30` (value: `"GENCODE M30"`)

* `M31` (value: `"GENCODE M31"`)

* `M32` (value: `"GENCODE M32"`)

* `M33` (value: `"GENCODE M33"`)

* `M34` (value: `"GENCODE M34"`)





## Enum: TaxaEnum


* `Homo sapiens` (value: `"Homo sapiens"`)

* `Mus musculus` (value: `"Mus musculus"`)





## Enum: StatusEnum


* `archived` (value: `"archived"`)

* `deleted` (value: `"deleted"`)

* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)




