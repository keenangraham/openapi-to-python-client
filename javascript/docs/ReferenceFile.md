# IgvfProjectApi.ReferenceFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlledAccess** | **Boolean** | Boolean value, indicating the file being controlled access, if true. | [optional] 
**anvilUrl** | **String** | URL linking to the controlled access file that has been deposited at AnVIL workspace. | [optional] 
**assembly** | **String** | Genome assembly applicable for the reference data. | [optional] 
**releaseTimestamp** | **String** | The date the object was released. | [optional] 
**fileFormatType** | **String** | The subtype of bed files. | [optional] 
**transcriptomeAnnotation** | **String** | The annotation and version of the reference resource. | [optional] 
**documents** | **[String]** | Documents that provide additional information (not data file). | [optional] 
**lab** | **String** | Lab associated with the submission. | [optional] 
**award** | **String** | Grant associated with the submission. | [optional] 
**accession** | **String** | A unique identifier to be used to reference the object prefixed with IGVF. | [optional] 
**alternateAccessions** | **[String]** | Accessions previously assigned to objects that have been merged with this object. | [optional] 
**collections** | **[String]** | Some samples are part of particular data collections. | [optional] 
**status** | **String** | The status of the metadata object. | [optional] 
**revokeDetail** | **String** | Explanation of why an object was transitioned to the revoked status. | [optional] 
**schemaVersion** | **String** | The version of the JSON schema that the server uses to validate the object. | [optional] 
**uuid** | **String** | The unique identifier associated with every object. | [optional] 
**notes** | **String** | DACC internal notes. | [optional] 
**aliases** | **[String]** | Lab specific identifiers to reference an object. | [optional] 
**creationTimestamp** | **String** | The date the object was created. | [optional] 
**submittedBy** | **String** | The user who submitted the object. | [optional] 
**submitterComment** | **String** | Additional information specified by the submitter to be displayed as a comment on the portal. | [optional] 
**description** | **String** | A plain text description of the object. | [optional] 
**analysisStepVersion** | **String** | The analysis step version of the file. | [optional] 
**contentMd5sum** | **String** | The MD5sum of the uncompressed file. | [optional] 
**contentType** | **String** | The type of content in the file. | [optional] 
**dbxrefs** | **[String]** | Identifiers from external resources that may have 1-to-1 or 1-to-many relationships with IGVF file objects. | [optional] 
**derivedFrom** | **[String]** | The files participating as inputs into software to produce this output file. | [optional] 
**fileFormat** | **String** | The file format or extension of the file. | [optional] 
**fileFormatSpecifications** | **[String]** | Document that further explains the file format. | [optional] 
**fileSet** | **String** | The file set that this file belongs to. | [optional] 
**fileSize** | **Number** | File size specified in bytes. | [optional] 
**md5sum** | **String** | The md5sum of the file being transferred. | [optional] 
**submittedFileName** | **String** | Original name of the file. | [optional] 
**uploadStatus** | **String** | The upload/validation status of the file. | [optional] 
**validationErrorDetail** | **String** | Explanation of why the file failed the automated content checks. | [optional] 
**sourceUrl** | **String** | Link to external resource, such as NCBI or GENCODE, where the reference data was obtained. | [optional] 
**sources** | **[String]** | The originating lab(s) or vendor(s). | [optional] 
**external** | **Boolean** | Indicates whether the file was obtained from an external, non-IGVF source. | [optional] 
**externalId** | **String** | A unique identifier for the file at its original source. | [optional] 
**id** | **String** |  | [optional] 
**type** | **[String]** |  | [optional] 
**summary** | **String** | A summary of the reference file. | [optional] 
**integratedIn** | **[String]** | Construct library set(s) that this file was used for in insert design. | [optional] 
**inputFileFor** | **[String]** | The files which are derived from this file. | [optional] 
**geneListFor** | **[String]** | File Set(s) that this file is a gene list for. | [optional] 
**lociListFor** | **[String]** | File Set(s) that this file is a loci list for. | [optional] 
**href** | **String** | The download path to obtain file. | [optional] 
**s3Uri** | **String** | The S3 URI of public file object. | [optional] 
**uploadCredentials** | **Object** | The upload credentials for S3 to submit the file content. | [optional] 



## Enum: AssemblyEnum


* `GRCh38` (value: `"GRCh38"`)

* `hg19` (value: `"hg19"`)

* `GRCm39` (value: `"GRCm39"`)

* `mm10` (value: `"mm10"`)





## Enum: FileFormatTypeEnum


* `bed12` (value: `"bed12"`)

* `bed3` (value: `"bed3"`)

* `bed3+` (value: `"bed3+"`)

* `bed5` (value: `"bed5"`)

* `bed6` (value: `"bed6"`)

* `bed6+` (value: `"bed6+"`)

* `bed9` (value: `"bed9"`)

* `bed9+` (value: `"bed9+"`)

* `mpra_starr` (value: `"mpra_starr"`)





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





## Enum: [CollectionsEnum]


* `ClinGen` (value: `"ClinGen"`)

* `ENCODE` (value: `"ENCODE"`)

* `GREGoR` (value: `"GREGoR"`)

* `IGVF_catalog_beta_v0.1` (value: `"IGVF_catalog_beta_v0.1"`)

* `IGVF_catalog_beta_v0.2` (value: `"IGVF_catalog_beta_v0.2"`)

* `IGVF_catalog_beta_v0.3` (value: `"IGVF_catalog_beta_v0.3"`)

* `IGVF_catalog_beta_v0.4` (value: `"IGVF_catalog_beta_v0.4"`)

* `MaveDB` (value: `"MaveDB"`)

* `MPRAbase` (value: `"MPRAbase"`)

* `Vista` (value: `"Vista"`)





## Enum: StatusEnum


* `in progress` (value: `"in progress"`)

* `released` (value: `"released"`)

* `deleted` (value: `"deleted"`)

* `replaced` (value: `"replaced"`)

* `revoked` (value: `"revoked"`)

* `archived` (value: `"archived"`)





## Enum: FileFormatEnum


* `bed` (value: `"bed"`)

* `csv` (value: `"csv"`)

* `dat` (value: `"dat"`)

* `fasta` (value: `"fasta"`)

* `gaf` (value: `"gaf"`)

* `gds` (value: `"gds"`)

* `gtf` (value: `"gtf"`)

* `obo` (value: `"obo"`)

* `owl` (value: `"owl"`)

* `PWM` (value: `"PWM"`)

* `tar` (value: `"tar"`)

* `tsv` (value: `"tsv"`)

* `txt` (value: `"txt"`)

* `vcf` (value: `"vcf"`)

* `xml` (value: `"xml"`)





## Enum: UploadStatusEnum


* `pending` (value: `"pending"`)

* `file not found` (value: `"file not found"`)

* `invalidated` (value: `"invalidated"`)

* `validated` (value: `"validated"`)




